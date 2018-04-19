/**
 * @file index
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import './assets/style/main.less'
import * as React from 'react'
import app from './pages/app'
import ReactDOM from 'react-dom'
import RouterV3 from 'react-mobx-vm/packages/RouterV3'
import { hashHistory } from 'react-router'
import { Provider } from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

global.app = app

ReactDOM.render(
  <MuiThemeProvider>
    <Provider app={app}>
      <RouterV3 history={hashHistory} routes={require('./routes').default} />
    </Provider>
  </MuiThemeProvider>,
  window.root
)
