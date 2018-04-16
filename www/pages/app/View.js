/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import * as React from 'react'

export default class View extends React.Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        {this.props.children}
      </div>
    )
  }
}
