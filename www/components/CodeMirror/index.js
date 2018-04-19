/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/4/17
 * @description
 */
import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import {
  Controlled as ControlledCodeMirror,
  UnControlled as UnControlledCodeMirror
} from 'react-codemirror2'

require('codemirror/mode/javascript/javascript')
require('codemirror/mode/jsx/jsx')

export default class ReactCodeMirror extends React.Component {
  static defaultProps = {
    mode: 'javascript',
    value: 'dudu',
    onChange: null,
    options: null
  }

  renderEditable() {
    const { mode, options, onChange, value, rest } = this.props

    return (
      <UnControlledCodeMirror
        editorDidMount={editor => {
          this.instance = editor
        }}
        detach={true}
        value={value}
        options={{
          tabSize: 2,
          mode,
          theme: 'material',
          lineNumbers: true,
          ...options
        }}
        onChange={onChange}
        {...rest}
      />
    )
  }

  renderReadOnly() {
    const { mode, options, onChange, value, rest } = this.props

    return (
      <ControlledCodeMirror
        editorDidMount={editor => {
          this.instance = editor
        }}
        value={value}
        options={{
          tabSize: 2,
          mode,
          theme: 'material',
          lineNumbers: true,
          ...options
        }}
        onChange={onChange}
        {...rest}
      />
    )
  }

  render() {
    if (this.props.options && this.props.options.readOnly) {
      return this.renderReadOnly()
    }
    return this.renderEditable()
  }
}
