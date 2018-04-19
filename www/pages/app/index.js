/**
 * @file App
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import { action, observable, Root, bindView } from 'react-mobx-vm'
import View from './View'

@bindView(View)
export class App extends Root {
  @observable title = 'Schema Transform'

  setTitle(title) {
    this.title = title
  }

  @observable drawerOpen = true

  toVM = () =>
    new Promise(resolve => {
      require.ensure(
        [],
        () => {
          resolve(require('../toVM').default)
        },
        'toVM'
      )
    })
}

export default App.create()
