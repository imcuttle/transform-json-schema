/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import type { Formatter } from '../types/Formatter'
import { SchemaPath } from '../types/Schema'
// const jsesc = require('jsesc')
import * as u from '../util'

function propertiesStr(properties, node) {
  function proper(name, p) {
    if (p.$ref) {
      let ref = node.ref(p.$ref)
      if (!ref.isEmpty()) {
        p.type = ref.schema.title
      }
    }

    return (
      '/**\n' +
      ` * ${p.description || ''}\n` +
      ` * @example ${u.toString(p.example || '')}\n` +
      ` * @type {${u.type(u.keyword(p.type || 'any'))}}\n` +
      ' */\n' +
      ` @observable ${u.keyword(name)} ${
        p.hasOwnProperty('default') ? '= ' + p.default : ''
      }`
    )
  }
  if (!properties) {
    return ''
  }

  return Object.keys(properties)
    .map(name => {
      return proper(name, properties[name])
    })
    .join('\n\n')
}

function toClassDefinition(node: SchemaPath, { raw = false } = {}) {
  const schema = raw ? node.fillSchema : node.schema
  const { description, type, properties, title } = schema
  if (type === 'object') {
    return `
    /**
     * ${description || ''}
     * @typedef {${u.keyword(title || type || '')}}
     */
    export class ${u.keyword(title)} extends Root {
      ${propertiesStr(properties, node)}
    }
    `
  }

  if (type === 'array') {
    // TODO
  }

  return ''
}

function wrap(str) {
  return (
    `
  import { Root, observable } from 'react-mobx-vm'\n
  ` + str
  )
}

const vmFormatter: Formatter = function vmFormatter(
  node: SchemaPath,
  { raw = false } = {}
) {
  if (node.schema.swagger) {
    const nodes = Object.keys(node.schema.definitions)
      .map(name => {
        const n = node.get(['definitions', name])
        if (!n.get('title')) {
          n.set('title', name)
        }
        return n
      })
    return wrap(nodes.map(x => toClassDefinition(x, { raw })).join('\n\n'))
  }

  return wrap(toClassDefinition(node))
}

export default vmFormatter
