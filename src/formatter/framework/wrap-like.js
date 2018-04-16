/**
 * @file wrap-like
 * @author Cuttle Cong
 * @date 2018/4/16
 * @description
 */
import type { Formatter } from '../../types/Formatter'
import { SchemaPath } from '../../types/Schema'
import * as u from '../../util'
const capitalize = require('lodash.capitalize')
const camelCase = require('lodash.camelcase')

function propertiesStr(properties, node, { typeTrans, propertyTrans }) {
  const proper = (name, p, currentNode) => {
    if (p.$ref) {
      let ref = node.ref(p.$ref)
      if (!ref.isEmpty()) {
        p.type = ref.schema.title
      }
    }

    let type = typeTrans(u.type(u.keyword(p.type || 'any')))
    let property = propertyTrans(u.keyword(name))

    return this.propertyString(
      { ...p, type, name: property },
      propertiesStr.bind(this, p.properties, currentNode, { typeTrans, propertyTrans })
    )
  }
  if (!properties) {
    return ''
  }

  return Object.keys(properties)
    .map(name => {
      return proper(name, properties[name], node.get(['properties', name]))
    })
    .join(this.propertyDelimiter || '\n\n')
}

function toClassDefinition(
  node: SchemaPath,
  {
    // raw = false,
    typeTrans,
    propertyTrans,
    cache,
    depth = 1,
    inner = false
  } = {}
) {
  const schema = node.schema
  const { type, properties, title } = schema

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

        return toClassDefinition.call(this, pNode, {
          // raw,
          cache,
          depth: depth - 1,
          inner: true,
          typeTrans,
          propertyTrans
        })
      })
      .join(this.classBodyDelimiter || '\n\n')
  }

  if (type === 'object') {
    let id = typeTrans(u.uKeyword(title))
    if (cache.has(id)) {
      return propertiesClass
    }
    cache.add(id)

    return `${propertiesClass}
    ${this.generateClassString(
      { ...schema, title: id },
      propertiesStr.bind(this, properties, node, { typeTrans, propertyTrans })
    )}`
  }

  if (type === 'array') {
    // TODO
  }

  return propertiesClass + ''
}

function wrapLikeFormatter(
  node: SchemaPath,
  {
    // raw = false,
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
    return this.wrapString(
      nodes
        .map(x =>
          toClassDefinition.call(this, x, {
            // raw,
            depth,
            cache,
            propertyTrans,
            typeTrans
          })
        )
        .join(this.classBodyDelimiter || '\n\n')
    )
  }

  return this.wrapString(
    toClassDefinition.call(this, node, {
      // raw,
      depth,
      cache,
      propertyTrans,
      typeTrans
    })
  )
}

export default function create(data) {
  return wrapLikeFormatter.bind(data)
}
