/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import debounce from 'lodash.debounce'
import * as React from 'react'
import CodeMirror from '../../components/CodeMirror'
import boss from '../../boss'
import './style.less'

export default class View extends React.Component {
  constructor(props) {
    super(props)
    this.transform = debounce(this._transform, 2000, { trailing: true })
  }

  async componentDidMount() {
    await this._transform()
  }

  _transform = async (input = this.local.input) => {
    let json
    try {
      json = JSON.parse(input || '{}')
    } catch (err) {
      this.local.setValue('inError', err)
      return
    }
    try {
      const res = await boss.postMessage(
        { type: this.local.type, data: json, options: this.local.options }
      )
      this.local.setValue('output', res)
    } catch (err) {
      this.local.setValue('outError', err)
      return
    }
  }

  onChange = (editor, data, value) => {
    this.local.setValue('input', value)
    this.transform()
  }

  render() {
    return (
      <div className={'work-space'}>
        <div className={'editor'}>
          <CodeMirror
            value={this.local.input}
            onChange={this.onChange}
            placeholder={'please input json here'}
          />
          {this.local.inError && <pre className="error-box">{this.local.inError.toString()}</pre>}
        </div>
        <div className={'result'}>
          <CodeMirror
            value={this.local.output}
            options={{
              readOnly: true
            }}
          />
          {this.local.outError && <pre className="error-box">{this.local.outError.toString()}</pre>}
        </div>
      </div>
    )
  }
}
