/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import * as React from 'react'
import debounce from 'lodash.debounce'
import boss from '../../boss'

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

  onChange = ({ target: { value } }) => {
    this.local.setValue('input', value)
    this.transform()
  }

  render() {
    return (
      <div>
        <h1>toVM</h1>
        <textarea
          value={this.local.input}
          onChange={this.onChange}
          placeholder={'please input json here'}
        />
        <pre>
          <code>{this.local.output}</code>
        </pre>
      </div>
    )
  }
}
