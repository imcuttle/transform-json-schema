/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import * as React from 'react'
import { h, injectExt } from 'react-mobx-vm'

@injectExt(app => {
  app.setTitle('Schema to View-Modal')
})
export default class View extends React.Component {

  render() {
    return (
      <div>
        {h(this.local.workSpace)}
      </div>
    )
  }
}
