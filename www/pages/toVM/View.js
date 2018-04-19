/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import * as React from 'react'
import { h } from 'react-mobx-vm'

export default class View extends React.Component {

  render() {
    return (
      <div>
        {h(this.local.workSpace)}
      </div>
    )
  }
}
