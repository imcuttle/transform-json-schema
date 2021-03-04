import React from 'react'
import css from './App.module.css';
import axios from 'axios'
import {Layout, Input, Select, TextArea, ConfigProvider, Form, Space, Button, Tooltip, Popover, Spin} from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import modules from './utils/modules'
import HomePage from "./pages/home";
import {SettingOutlined} from '@ant-design/icons';


const {Header, Content, Footer} = Layout;

function App() {
  const [loading, setLoading] = React.useState(false)
  const [jsonText, setJsonText] = React.useState('{}')
  const onSearch = React.useCallback(async val => {
    setLoading(true)
    const res = await axios.get(val.trim(), {responseType: 'json', withCredentials: true})
    if (res.status === 200) {
      setJsonText(JSON.stringify(res.data, null, 2))
    }
    setLoading(false)
  }, [])

  return (
    <ConfigProvider locale={zh_CN} theme={'light'}>
      <Layout className={css.App} theme={'light'}>
        <Header className={css.header}>
        <span className={css.logo}>
          Transform json schema
        </span>

          <Form.Item label={'转换类型'} wrapperCol={{style: {width: 120}}}>
            <Select className={css.select}>
              {Object.keys(modules).map(name => (
                <Select.Option key={name} value={name}>{name}</Select.Option>
              ))}
            </Select>
          </Form.Item>

          <div className={css.btns}>
            <Input.Search defaultValue={'http://tutor-test.zhenguanyu.com/tutor-cyber-corpus/swagger/v2/api-docs'}
                          placeholder={'从 URL 导入'} onSearch={onSearch} className={css.search}/>

            {/*<Tooltip title={'设置'}>*/}
            {/*  <Popover placement="bottomRight" title={'设置请求信息'} content={(*/}
            {/*    <TextArea row={10} />*/}
            {/*  )} trigger="click">*/}
            {/*    <div className={css.clickable} style={{color: '#fff'}}>*/}
            {/*      <SettingOutlined/>*/}
            {/*    </div>*/}
            {/*  </Popover>*/}
            {/*</Tooltip>*/}
          </div>
        </Header>
        <Content style={{padding: '0 50px'}} className={css.body}>
          <Spin spinning={loading} wrapperClassName={css.loading} delay={400}>
            <HomePage jsonText={jsonText} onJsonTextChange={setJsonText}/>
          </Spin>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
