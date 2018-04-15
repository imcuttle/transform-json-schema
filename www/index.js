/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import app from './pages/app'
import ReactDOM from 'react-dom'
import RouterV3 from 'react-mobx-vm/packages/RouterV3'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider app={app}>
    <RouterV3 routes={require('./routes')}/>
  </Provider>,
  window.root,
)
