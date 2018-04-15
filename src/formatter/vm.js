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
const capitalize = require('lodash.capitalize')
const camelCase = require('lodash.camelcase')
const uniqueId = require('lodash.uniqueid')

function propertiesStr(properties, node, { typeTrans, propertyTrans }) {
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
      ` * @type {${typeTrans(u.type(u.keyword(p.type || 'any')))}}\n` +
      ' */\n' +
      ` @observable ${propertyTrans(u.keyword(name))} ${
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

function toClassDefinition(
  node: SchemaPath,
  { raw = false, typeTrans, propertyTrans, cache, depth = 1, inner = false } = {}
) {
  const schema = raw ? node.fillSchema : node.schema
  const { description, type, properties, title } = schema

  if (inner && type === 'object') {
    let definitions = (node.rootParent.schema.definitions =
      node.rootParent.schema.definitions || {})
    let title = node.schema.title
    if (!definitions[title]) {
      definitions[title] = { ...node.schema }
      node.clear()
      node.set('$ref', '#/definitions/' + title)
    }
  }

  let propertiesClass = ''
  if (depth > 0) {
    propertiesClass = Object.keys(properties || {})
      .map(id => {
        let pNode = node.get(['properties', id])
        if (pNode.isEmpty()) {
          return ''
        }
        if (!pNode.schema.title) {
          pNode.schema.title = id
        }

        return toClassDefinition(pNode, {
          raw,
          cache,
          depth: depth - 1,
          inner: true,
          typeTrans,
          propertyTrans
        })
      })
      .join('\n\n')
  }

  if (type === 'object') {
    let id = typeTrans(u.uKeyword(title))
    if (cache.has(id)) {
      return propertiesClass
    }
    cache.add(id)
    return `${propertiesClass}
    /**
     * ${description || ''}
     * @typedef {${id}}
     */
    export class ${id} extends Root {
      ${propertiesStr(properties, node, { typeTrans, propertyTrans })}
    }
    `
  }

  if (type === 'array') {
    // TODO
  }

  return propertiesClass + ''
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
  {
    raw = false,
    depth = 1,
    typeCapitalize = false,
    propertyCamelcase = false
  } = {}
) {
  const cache = new Set([])
  const typeTrans = typeCapitalize ? t => capitalize(t) : t => t
  const propertyTrans = propertyCamelcase ? t => camelCase(t) : t => t

  if (node.schema.swagger) {
    const nodes = Object.keys(node.schema.definitions).map(name => {
      const n = node.get(['definitions', name])
      if (!n.get('title')) {
        n.set('title', name)
      }
      return n
    })
    return wrap(
      nodes
        .map(x =>
          toClassDefinition(x, { raw, depth, cache, propertyTrans, typeTrans })
        )
        .join('\n\n')
    )
  }

  return wrap(
    toClassDefinition(node, { raw, depth, cache, propertyTrans, typeTrans })
  )
}

export default vmFormatter
