/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import * as u from '../util'

const wrapLike = require('./framework/wrap-like').default

export default wrapLike({
  wrapString(str) {
    return `import { Root, observable } from 'react-mobx-vm'\n` + str
  },
  generateClassString({ description, title }, propertiesStr) {
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
    return (
      '/**\n' +
      ` * ${p.description || ''}\n` +
      ` * @example ${u.toString(p.example || '')}\n` +
      ` * @type {${p.type}}\n` +
      ' */\n' +
      ` @observable ${p.name} ${
        p.hasOwnProperty('default') ? '= ' + p.default : ''
      }`
    )
  }
})
