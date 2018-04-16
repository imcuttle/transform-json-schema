/**
 * @file toVM
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import { action, observable, Root, bindView } from 'react-mobx-vm'
import View from './View'

@bindView(View)
export class ToVM extends Root {
  @observable input = JSON.stringify({
    name: 'imcuttle',
    age: 23,
    gender: 'M',
    parent: {
      name: 'ppp',
      age: 50,
      gender: 'M'
    }
  }, null, 2)

  @observable output = ''
}

export default ToVM.create()
