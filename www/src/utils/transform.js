import { basename, extname } from 'path'
import { promisify } from 'util'
const modulesRequire = require.context('../../../src/shortcut', false, /\.js$/)

const keys = modulesRequire.keys()

const modules = keys.reduce((modules, name) => {
  modules[basename(name, extname(name))] = modulesRequire(name)
  return modules
}, {})

export default function transform(type, src, config) {
  if (modules[type]) {
    return promisify(modules[type])(src, config)
  }
  return null
}
