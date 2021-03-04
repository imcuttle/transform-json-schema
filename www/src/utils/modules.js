import { dirname, basename, extname } from 'path'
const modulesRequire = require.context('../../../src/shortcut', false, /\.js$/)

const keys = modulesRequire.keys()

const modules = keys.reduce((modules, name) => {
  modules[basename(name, extname(name))] = modulesRequire(name)
  return modules
}, {})

export default modules
