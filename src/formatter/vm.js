/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import * as u from '../util'
import * as cc from 'change-case'

const wrapLike = require('./framework/wrap-like').default

function fillDefault(p = {}) {
  p = {...p}
  if (p.hasOwnProperty('default')) {
    return p
  }

  if (!p.type) {
    delete p.default
    return p
  }

  switch (p.type) {
    case 'number':
    case 'string':
    case 'integer':
      p.default = '""'
      return p
    case 'date':
    case 'boolean':
      delete p.default
      return p
    case 'object':
      p.default = '{}'
      return p
    case 'array':
      p.default = '[]'
      return p
    default:
      p.default = `${cc.pascalCase(p.type)}.create()`
      return p
  }
}

export default wrapLike({
  options: {
    default: true
  },
  wrapString(str) {
    return `import { Root, observable } from 'react-mobx-vm'\n` + str
  },
  generateClassString({description, title}, propertiesStr) {
    title = cc.pascalCase(title)
    return `
    /**
     * ${description || ''}
     * @typedef {${title}}
     */
    export class ${title} extends Root {
      ${propertiesStr()}
    }
    `
  },
  propertyString(p) {
    if (this.options.default) {
      p = fillDefault(p)
    }
    return (
      '/**\n' +
      ` * ${p.description || ''}\n` +
      ` * @example ${u.toString(p.example || '')}\n` +
      ` * @type {${p.type}}\n` +
      ' */\n' +
      ` @observable ${p.name} ${p.hasOwnProperty('default') ? '= ' + p.default : ''}`
    )
  }
})
