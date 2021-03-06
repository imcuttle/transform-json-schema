import React from 'react';
import useUncontrolled from '@rcp/use.uncontrolled';
import css from './style.module.scss'

import {Controlled as CodeMirror, UnControlled as UnControlledCodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
// // 代码模式
import 'codemirror/mode/javascript/javascript';

// 添加折叠
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/foldgutter.css';

// 括号匹配
import 'codemirror/addon/edit/matchbrackets.js';

// 自动补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';

import 'codemirror/addon/lint/json-lint.js';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/lint.js';

import jsonlint from 'jsonlint-mod';
import modules from "../../utils/modules";
import {notification} from "antd";

// eslint-disable-next-line dot-notation
window['jsonlint'] = jsonlint; // 不能删除，json-lint有依赖



function HomePage({type = 'to-ts', config, defaultJsonText, jsonText, onJsonTextChange}: any) {
  const [jsonTextState, setJsonText] = useUncontrolled({
    value: jsonText,
    onChange: onJsonTextChange,
    defaultValue: defaultJsonText || '{}',
  })
  const [resultText, setResult] = React.useState('')

  React.useEffect(() => {
    const json = JSON.parse(jsonTextState)
    if (json && modules[type]) {
      modules[type](json, config || {}, (err, data) => {
        if (err) {
          console.error(err)
          notification.error({message: String(err)})
        } else {
          setResult(data)
        }
      })
    }
  }, [type, config, jsonTextState])

  return (
    <div className={css.container}>
      <CodeMirror
        className={css.jsonEditor}
        value={jsonTextState}
        onBeforeChange={(editor, data, value) => {
          setJsonText(value);
        }}
        options={{
          mode: 'application/json',
          theme: 'material',
          lineNumbers: true,
          smartIndent: true,
          tabSize: 2,
          lint: true,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
        }}
      />

      <CodeMirror
        className={css.resultEditor}
        value={resultText}
        onBeforeChange={(editor, data, value) => {
          setResult(value);
        }}
        options={{
          mode: 'text/typescript',
          theme: 'material',
          lineNumbers: true,
          smartIndent: true,
          tabSize: 2,
          foldGutter: true,
          gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
        }}
      />
    </div>
  );
}

export default HomePage;
