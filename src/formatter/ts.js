/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import * as u from '../util'
import * as cc from 'change-case'

const wrapLike = require('./framework/wrap-like').default

function fillType(p = {}) {
  p = {...p}
  if (!p.type) {
    return 'any'
  }

  switch (p.type) {
    case 'number':
    case 'string':
    case 'boolean':
      return p.type
    case 'integer':
      return 'number'
    case 'date':
      return 'Date'
    case 'object':
      return '{}'
    case 'array':
      return '[]'
    default:
      return cc.pascalCase(p.type)
  }
}

export default wrapLike({
  propertyDelimiter: '\n',
  options: {
    default: true
  },
  generateClassString({description, title}, propertiesStr) {
    const head = description
      ? `/**
     * ${description || ''}
     */`
      : ''

    return `${head}
    export interface ${cc.pascalCase(title)} {
      ${propertiesStr()}
    }
    `
  },
  wrapString(str) {
    return str
  },
  propertyString(p) {
    // console.log('p', p)
    let head = p.description ? '/**\n' + ` * ${p.description || ''}\n` + ' */\n' : ''

    return head + ` ${p.name}: ${fillType(p)};`
  }
})
