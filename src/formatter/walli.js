/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
const u = require('../util')
const camel = require('lodash.camelcase')
const capitalize = require('lodash.capitalize')
const wrapLike = require('./framework/wrap-like').default

export default wrapLike({
  propertyDelimiter: '\n',
  classBodyDelimiter: '\n\n',
  wrapString(str) {
    return `import * as t from 'walli'\n` + str
  },
  generateClassString({ description, title }, propertiesStr) {
    // const capTitle = capitalize(title)
    return `
    /**
     * ${description || ''}
     * @typedef {${title}Class}
     */
    export class ${title}Class extends t.Verifiable {
      _check(req) {
        return t.leq({${propertiesStr()}}).check(req)
      }
    }
    export const ${camel(title)} = t.util.createFinalVerifiableClass(${title}Class)
    `
  },
  propertyString(p, childrenPropertiesStr) {
    let lowType = p.type.toLowerCase()
    let camelType = camel(p.type)

    // final
    if (['array', 'string', 'object', 'boolean', 'number'].includes(lowType)) {
      return `${p.name}: t.${lowType},`
    }

    // custom
    return `${p.name}: ${camelType},`
  }
})
