/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import * as u from '../util'
import * as cc from 'change-case'

const wrapLike = require('./framework/wrap-like').default

export function fillType(p = {}) {
  p = {...p}
  if (!p.type) {
    return 'any'
  }

  switch (p.type) {
    case 'number':
    case 'string':
    case 'boolean':
    case 'any':
      return p.type
    case 'integer':
      return 'number'
    case 'date':
      return 'Date'
    case 'object':
      return 'Object'
    case 'array':
      if (p.items.type) {
        return `${fillType(p.items)}[]`
      }
      return '[]'
    default:
      return cc.pascalCase(p.type)
  }
}

export default wrapLike({
  propertyDelimiter: '\n',
  options: {
    loose: true
  },
  generateClassString({description, title, type}, propertiesStr) {
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
    const example = u.toString(p.example || '')
    let head =
      example || p.description
        ? ['/**', p.description && ` * ${p.description || ''}`, example && ` * @example ${example}`, ' */\n']
            .filter(Boolean)
            .join('\n')
        : ''

    let isOptional
    if (this.options.loose) {
      isOptional = true
    } else {
      isOptional = !!p.allowEmptyValue
    }
    return head + ` ${p.name}${isOptional ? '?' : ''}: ${fillType(p)};`
  }
})
