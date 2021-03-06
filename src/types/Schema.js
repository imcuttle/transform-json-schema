/**
 * @file Schema
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
import get from 'lodash.get'
import set from 'lodash.set'

export type PositiveInteger = number

export type PositiveIntegerDefault0 = PositiveInteger

export type SimpleTypes = 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string'

export type StringArray = string[]

export type SchemaArray = Schema[]

export type Schema = {
  id?: string,
  $ref?: string,
  $schema?: string,
  title?: string,
  description?: string,
  default?: any,
  multipleOf?: number,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: PositiveInteger,
  minLength?: PositiveIntegerDefault0,
  pattern?: string,
  additionalItems?: boolean | Schema,
  items?: Schema | SchemaArray,
  maxItems?: PositiveInteger,
  minItems?: PositiveIntegerDefault0,
  uniqueItems?: boolean,
  maxProperties?: PositiveInteger,
  minProperties?: PositiveIntegerDefault0,
  required?: StringArray,
  additionalProperties?: boolean | Schema,
  definitions?: {
    [key: any]: Schema
  },
  properties?: {
    [key: any]: Schema
  },
  patternProperties?: {
    [key: any]: Schema
  },
  dependencies?: {
    [key: any]: Schema | StringArray
  },
  enum?: Array<any>,
  type?: SimpleTypes | Array<SimpleTypes>,
  allOf?: SchemaArray,
  anyOf?: SchemaArray,
  oneOf?: SchemaArray,
  not?: Schema
}

function getPaths(string: string) {
  if (string.startsWith('#')) {
    return string
      .replace(/^#+/, '')
      .split('/')
      .filter(Boolean)
  }

  return string
}

function getSchema(schema, paths) {
  for (const path of paths) {
    if (!schema) return null
    if (schema.hasOwnProperty(path)) {
      schema = schema[path]
    } else if (Array.isArray(schema)) {
      schema = schema.find(item => item.title === path)
    } else {
      return null
    }
  }
  return schema
}

export class SchemaPath {
  constructor(schema: Schema, parent: SchemaPath = null) {
    this.schema = schema
    this.parent = parent
  }

  schema: Schema
  parent: SchemaPath
  clear() {
    Object.keys(this.schema).forEach(name => {
      delete this.schema[name]
    })
  }
  get rootParent() {
    let p = this
    while (p.parent) {
      p = p.parent
    }
    return p
  }
  get(paths: string | string[]) {
    return new SchemaPath(getSchema(this.schema, paths), this)
  }
  has(paths: string | string[]) {
    return !!getSchema(this.schema, paths)
  }
  set(paths, val) {
    set(this.schema, paths, val)
    return this
  }
  isEmpty() {
    return !this.schema
  }
  get fillSchema() {
    let origin = this.schema
    if (origin && origin.$ref) {
      const refVal = this.ref()
      const {$ref, ...rest} = origin
      return Object.assign({}, rest, refVal.fillSchema)
    }
    return origin
  }
  ref(ref = this.schema.$ref) {
    const paths = getPaths(ref)
    let host = this
    let refVal
    do {
      refVal = host.get(paths)
      host = host.parent
    } while (host && refVal.isEmpty())

    return refVal
  }
}
