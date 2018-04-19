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
    this.transform = debounce(this.transform, 2000, { trailing: true })
  }

  async componentDidMount() {
    let json = JSON.parse(this.local.input)
    const res = await boss.postMessage(
      { type: 'json', data: json }
    )
    console.log('res', res)
    this.local.setValue('output', res)
  }

  // concurrent??
  transform = async (input = this.local.input) => {
    let json = JSON.parse(input)
    const res = await boss.postMessage(
      { type: 'json', data: json }
    )
    this.local.setValue('output', res)
  }

  onChange = (editor, data, value) => {
    this.local.setValue('input', value)
    this.transform()
  }

  render() {
    console.log('this.local.output', this.local.output)
    return (
      <div className={'work-space'}>
        <div className={'editor'}>
          <CodeMirror
            value={this.local.input}
            onChange={this.onChange}
            placeholder={'please input json here'}
          />
        </div>
        <div className={'result'}>
          <CodeMirror
            value={this.local.output}
            options={{
              readOnly: true
            }}
          />
        </div>
      </div>
    )
  }
}
