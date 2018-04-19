/**
 * @file toVM
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

import { action, observable, Root, bindView } from 'react-mobx-vm'
import View from './View'

@bindView(View)
export default class WorkSpace extends Root {
  @observable input = ''

  @observable inMimeType = 'json'

  @observable options = {}
  @observable inError = null
  @observable outError = null

  @observable outMimeType = 'javascript'
  @observable output = ''
}
