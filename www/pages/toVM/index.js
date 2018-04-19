/**
 * @file toVM
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import { action, observable, Root, bindView } from 'react-mobx-vm'
import View from './View'
import WorkSpace from '../../vm/WorkSpace'

@bindView(View)
export class ToVM extends Root {
  workSpace = WorkSpace.create()
}

export default ToVM.create()
