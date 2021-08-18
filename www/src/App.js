import React from "react";
import css from "./App.module.scss";
import axios from "axios";
import {
  Layout,
  Input,
  Select,
  ConfigProvider,
  Form,
  Space,
  Button,
  Tooltip,
  Popover,
  Spin,
  notification,
  message,
} from "antd";
import zh_CN from "antd/lib/locale/zh_CN";
import { SettingOutlined } from "@ant-design/icons";
import isHotKey from "is-hotkey";
import HomePage from "./pages/home";
import modules from "./utils/modules";
import AceEditor from "react-ace";

const useLocalStorageState = (key, initialValue) => {
  const storeValue = React.useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem(`localStorage_${key}`));
    } catch (_) {}
    return null;
  }, []);
  const [v, setVal] = React.useState(storeValue || initialValue);
  const initRef = React.useRef(false);

  React.useLayoutEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }
    localStorage.setItem(`localStorage_${key}`, JSON.stringify(v));
  }, [v]);

  return [v, setVal];
};

const { TextArea } = Input;
const { Header, Content, Footer } = Layout;

const CONFIG = JSON.stringify(
  {
    axiosRequest: "axios",
    commonConfig: { responseData: true },
    exactCommonSubStrings: true,
    splitModule: true,
    prefix: `/* eslint-disable */\n// @ts-nocheck\n`,
    suffix: "",
  },
  null,
  2
);

function App() {
  const [loading, setLoading] = React.useState(false);
  const [jsonText, setJsonText] = React.useState("{}");
  const [transform, setTransform] = useLocalStorageState("transform-type", {
    type: "to-swagger-axios",
    config: CONFIG,
  });
  const [type, setType] = useLocalStorageState("import-type", "url");
  const [urlText, setUrlText] = useLocalStorageState("import-value-url", "");
  const [jsText, setJsText] = useLocalStorageState("import-value-js", "");

  React.useEffect(() => {
    // const handle = (evt) => {
    //   if (evt.target.tagName !== "TEXTAREA" && isHotKey("mod+f", evt)) {
    //     evt.preventDefault();
    //     message.info("建议在编辑器中进行搜索，选中编辑器，然后键入搜索快捷键");
    //   }
    // };
    // document.addEventListener("keydown", handle);
    // return () => {
    //   document.removeEventListener("keydown", handle);
    // };
  });

  const onSearch = React.useCallback(
    async (val) => {
      setLoading(true);
      try {
        if (type === "js") {
          val = jsText;
          if (!val) {
            return;
          }
          const res = await eval(val);
          if (res.status === 200) {
            setJsonText(JSON.stringify(await res.json(), null, 2));
          }
        } else {
          val = urlText;
          if (!val) {
            return;
          }
          const res = await axios.get(val.trim(), {
            responseType: "json",
            withCredentials: true,
          });
          if (res.status === 200) {
            setJsonText(JSON.stringify(res.data, null, 2));
          }
        }
      } catch (e) {
        message.error(
          e.config
            ? `${e.config.method?.toUpperCase()} ${e.config.url} (${
                e.response?.status || "-"
              })`
            : String(e)
        );
      } finally {
        setLoading(false);
      }
    },
    [type, urlText, jsonText]
  );

  React.useEffect(() => {
    onSearch();
  }, []);

  const config = React.useMemo(() => {
    try {
      return JSON.parse(transform.config);
    } catch (_) {}
    return null;
  }, [transform.config]);

  return (
    <ConfigProvider locale={zh_CN} theme={"light"}>
      <Layout className={css.App} theme={"light"}>
        <Header className={css.header}>
          <span className={css.logo}>Transform json schema</span>

          <Form.Item label={"转换类型"} wrapperCol={{ style: { width: 150 } }}>
            <Select
              value={transform.type}
              className={css.select}
              onChange={(value) => {
                setTransform((v) => ({ ...v, type: value }));
              }}
            >
              {Object.keys(modules).map((name) => (
                <Select.Option key={name} value={name}>
                  {name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Popover
            content={
              <AceEditor
                className={css.paramsEditor}
                value={transform.config}
                onChange={(value) => {
                  setTransform((v) => ({ ...v, config: value }));
                }}
                mode={"json"}
                theme={"github"}
              />
            }
          >
            <Tooltip title={"设置转换配置"} placement={"right"}>
              <Button style={{ marginLeft: 10 }} icon={<SettingOutlined />} />
            </Tooltip>
          </Popover>

          <div className={css.btns}>
            <Select value={type} onChange={(v) => setType(v)}>
              <Select.Option value={"url"}>从 URL 导入</Select.Option>
              <Select.Option value={"js"}>从 JS 脚本 导入</Select.Option>
            </Select>
            {type === "url" && (
              <Input.Search
                value={urlText}
                onChange={(e) => setUrlText(e.target.value)}
                enterButton="导入"
                placeholder={"从 URL 导入"}
                onSearch={onSearch}
                className={css.search}
              />
            )}
            {type === "js" && (
              <div className={css.jsTextareaWrapper}>
                <Popover
                  destroyTooltipOnHide
                  content={
                    <TextArea
                      autoFocus
                      style={{ width: 400 }}
                      rows={10}
                      value={jsText}
                      onChange={(e) => setJsText(e.target.value)}
                      placeholder={
                        "输入 JS 请求脚本，具体可以使用 Chrome Network 中的 Copy as fetch"
                      }
                    />
                  }
                  trigger={"click"}
                >
                  <Input.Search
                    readOnly
                    onSearch={onSearch}
                    className={css.jsTextarea}
                    value={jsText}
                    enterButton="导入"
                    placeholder={
                      "输入 JS 请求脚本，具体可以使用 Chrome Network 中的 Copy as fetch"
                    }
                  />
                </Popover>
              </div>
            )}

            {/*<Tooltip title={'设置'}>*/}
            {/*  <Popover placement="bottomRight" title={'设置自定义请求'} content={(*/}
            {/*    <TextArea style={{width: 400}} rows={10}*/}
            {/*              placeholder={'输入 JS 请求脚本，具体可以使用 Chrome Network 中的 Copy as fetch'}/>*/}
            {/*  )} trigger="click">*/}
            {/*    <div className={css.clickable} style={{color: '#fff'}}>*/}
            {/*      <SettingOutlined/>*/}
            {/*    </div>*/}
            {/*  </Popover>*/}
            {/*</Tooltip>*/}
          </div>
        </Header>
        <Content style={{ padding: "0 50px" }} className={css.body}>
          <Spin spinning={loading} wrapperClassName={css.loading} delay={400}>
            <HomePage
              type={transform.type}
              config={config}
              jsonText={jsonText}
              onJsonTextChange={setJsonText}
            />
          </Spin>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
