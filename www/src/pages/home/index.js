/* eslint-disable */
import React, { useCallback, useRef } from "react";
import useUncontrolled from "@rcp/use.uncontrolled";
import JSZIP from "jszip";
import { saveAs } from "file-saver";
import { CopyFilled, LoadingOutlined } from "@ant-design/icons";

import css from "./style.module.scss";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/keybinding-vscode";
import "ace-builds/src-noconflict/ext-static_highlight";

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
      timerRef.current = null;
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
        onVisibleChange={(v) => {
          if (!v) {
            if (timerRef.current) {
              clearTimeout(timerRef.current);
              timerRef.current = null;
            }
            setCopyStatus();
          }
        }}
        title={
          !copyStatus ? "复制" : copyStatus === "ok" ? "复制成功" : "复制失败"
        }
      >
        <Button icon={<CopyFilled />} size={"small"} type={'link'} onClick={copy} />
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

  // const isFirstRef = useRef(true);
  React.useEffect(() => {
    // if (isFirstRef.current) {
    //   isFirstRef.current = false;
    //   return;
    // }
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
      <AceEditor
        className={css.jsonEditor}
        mode="json"
        value={jsonTextState}
        theme="github"
        onChange={(v) => setJsonText(v)}
        editorProps={{ $blockScrolling: true }}
      />

      {transforming && (
        <div className={css.transfroming}>
          <LoadingOutlined style={{ fontSize: 20, color: "#1890ff" }} />
        </div>
      )}

      {typeof result === "string" && (
        <div className={css.wrapperResult}>
          <AceEditor
            className={css.resultEditor}
            mode="typescript"
            value={result}
            theme="github"
            onChange={(v) => setResult(v)}
            editorProps={{ $blockScrolling: true }}
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
                <AceEditor
                  className={css.subEditor}
                  mode="typescript"
                  value={result[fileName]}
                  theme="github"
                  onChange={(value) =>
                    setResult({ ...result, [fileName]: value })
                  }
                  editorProps={{ $blockScrolling: true }}
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
