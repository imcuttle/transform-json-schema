/* eslint-disable */
import React, { useCallback, useRef } from "react";
import useUncontrolled from "@rcp/use.uncontrolled";
import JSZIP from "jszip";
import { saveAs } from "file-saver";
import { CopyFilled, LoadingOutlined } from "@ant-design/icons";

import css from "./style.module.scss";

import {
  Controlled as CodeMirror,
  UnControlled as UnControlledCodeMirror,
} from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
// // 代码模式
import "codemirror/mode/javascript/javascript";

// 添加折叠
import "codemirror/addon/fold/brace-fold.js";
import "codemirror/addon/fold/comment-fold.js";
import "codemirror/addon/fold/foldcode.js";
import "codemirror/addon/fold/foldgutter.js";
import "codemirror/addon/fold/foldgutter.css";

import "codemirror/addon/search/search";
import "codemirror/addon/search/searchcursor";
import "codemirror/addon/search/matchesonscrollbar";
import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/search/match-highlighter";
import "codemirror/addon/search/matchesonscrollbar.css";
import "codemirror/addon/dialog/dialog";
import "codemirror/addon/dialog/dialog.css";

// 括号匹配
import "codemirror/addon/edit/matchbrackets.js";

// 自动补全
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint.js";
import "codemirror/addon/hint/anyword-hint.js";

import "codemirror/addon/lint/json-lint.js";
import "codemirror/addon/lint/lint.css";
import "codemirror/addon/lint/lint.js";

import copyText from "copy-text-to-clipboard";
import jsonlint from "jsonlint-mod";
import PromiseWorker from "promise-worker";
import TransformWorker from "worker-loader!../../utils/transform-worker";

import { Button, message, notification, Tabs, Tooltip } from "antd";

const worker = new TransformWorker();
const promiseWorker = new PromiseWorker(worker);

// eslint-disable-next-line dot-notation
window["jsonlint"] = jsonlint; // 不能删除，json-lint有依赖

const FloatBtns = ({ text }) => {
  const [copyStatus, setCopyStatus] = React.useState("");

  const timerRef = useRef(null);
  const copy = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null
    }
    try {
      copyText(text);
      setCopyStatus("ok");
    } catch (e) {
      setCopyStatus("fail");
    } finally {
      timerRef.current = setTimeout(() => {
        setCopyStatus();
      }, 2000);
    }
  }, [text]);

  return (
    <div className={css.floatBtns}>
      <Tooltip
        onVisibleChange={v => {
          if (!v) {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
              timerRef.current = null
            }
            setCopyStatus();
          }
        }}
        title={
          !copyStatus ? "复制" : copyStatus === "ok" ? "复制成功" : "复制失败"
        }
      >
        <Button icon={<CopyFilled />} size={"small"} ghost onClick={copy} />
      </Tooltip>
    </div>
  );
};

function HomePage({
  type = "to-ts",
  config,
  defaultJsonText,
  jsonText,
  onJsonTextChange,
}) {
  const [jsonTextState, setJsonText] = useUncontrolled({
    value: jsonText,
    onChange: onJsonTextChange,
    defaultValue: defaultJsonText || "{}",
  });
  const [result, setResult] = React.useState("");
  const [transforming, setTransforming] = React.useState(false);

  const isFirstRef = useRef(true);
  React.useEffect(() => {
    if (isFirstRef.current) {
      isFirstRef.current = false;
      return;
    }
    try {
      const json = JSON.parse(jsonTextState);
      if (json) {
        setTransforming(true);
        promiseWorker
          .postMessage([type, json, config])
          .then(function (response) {
            setResult(response);
          })
          .catch((err) => {
            if (err) {
              console.error(err);
              message.error(String(err));
            }
          })
          .finally(() => setTransforming(false));
      }
    } catch (_) {
      console.error(_);
    }
  }, [type, config, jsonTextState]);

  return (
    <div className={css.container}>
      <CodeMirror
        className={css.jsonEditor}
        value={jsonTextState}
        onBeforeChange={(editor, data, value) => {
          setJsonText(value);
        }}
        options={{
          mode: "application/json",
          theme: "material",
          lineNumbers: true,
          smartIndent: true,
          tabSize: 2,
          lint: true,
          foldGutter: true,
          gutters: [
            "CodeMirror-linenumbers",
            "CodeMirror-foldgutter",
            "CodeMirror-lint-markers",
          ],
        }}
      />

      {transforming && (
        <div className={css.transfroming}>
          <LoadingOutlined style={{ fontSize: 20, color: "#1890ff" }} />
        </div>
      )}

      {typeof result === "string" && (
        <div className={css.wrapperResult}>
          <CodeMirror
            className={css.resultEditor}
            value={result}
            onBeforeChange={(editor, data, value) => {
              setResult(value);
            }}
            options={{
              mode: "text/typescript",
              theme: "material",
              lineNumbers: true,
              smartIndent: true,
              lineWrapping: true,
              tabSize: 2,
              foldGutter: true,
              gutters: [
                "CodeMirror-linenumbers",
                "CodeMirror-foldgutter",
                "CodeMirror-lint-markers",
              ],
            }}
          />
          <FloatBtns text={result} />
        </div>
      )}

      {typeof result === "object" && result && (
        <div className={css.wrapperResult}>
          <Tabs
            size={"small"}
            tabBarGutter={0}
            tabPosition={"left"}
            defaultActiveKey={Object.keys(result)[0]}
            tabBarExtraContent={
              <Tooltip title={"下载 ZIP"}>
                <Button
                  size={"small"}
                  type={"primary"}
                  onClick={() => {
                    const zip = new JSZIP();
                    Object.keys(result).forEach((name) => {
                      zip.file(name, result[name]);
                    });

                    zip
                      .generateAsync({ type: "blob" })
                      .then(function (content) {
                        saveAs(content, "transform-json-schema-result.zip");
                      });
                  }}
                >
                  下载
                </Button>
              </Tooltip>
            }
          >
            {Object.keys(result).map((fileName) => (
              <Tabs.TabPane tab={fileName} key={fileName}>
                <CodeMirror
                  className={css.subEditor}
                  value={result[fileName]}
                  onBeforeChange={(editor, data, value) => {
                    setResult({ ...result, [fileName]: value });
                  }}
                  options={{
                    mode: "text/typescript",
                    theme: "material",
                    lineNumbers: true,
                    smartIndent: true,
                    lineWrapping: true,
                    tabSize: 2,
                    foldGutter: true,
                    gutters: [
                      "CodeMirror-linenumbers",
                      "CodeMirror-foldgutter",
                      "CodeMirror-lint-markers",
                    ],
                  }}
                />
                <FloatBtns text={result[fileName]} />
              </Tabs.TabPane>
            ))}
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default HomePage;
