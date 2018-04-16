/**
 * @file routes
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import app from './pages/app'

export default {
  path: '/',
  component: app,
  indexRoute: {
    getComponent: app.toVM
  }
}
