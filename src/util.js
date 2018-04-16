/**
 * @file util
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const isPlainObj = require('is-plain-obj')

exports.keyword = function(word) {
  return (word || '').replace(/[^\d\w]/g, '_')
}

const uniqueid = require('lodash.uniqueid')
exports.uKeyword = function(word) {
  return exports.keyword(word) || uniqueid('_')
}

exports.type = function(type = '') {
  let lower = type.toLowerCase()
  return (
    {
      integer: 'number',
      number: 'number',
      string: 'string',
      object: 'object',
      array: 'array',
      boolean: 'boolean',
      function: 'function'
    }[lower] || type
  )
}

/**
 * To pretty string from anything.
 * @param rule
 * @param {any} empty - the string placeholder when equals undefined
 * @return {any}
 */
function toString(rule, { empty = 'undefined' } = {}) {
  if (typeof rule === 'undefined') {
    return empty
  }

  if (Array.isArray(rule)) {
    return `[${rule.map(x => JSON.stringify(x)).join(', ')}]`
  }
  if (isPlainObj(rule)) {
    return JSON.stringify(rule)
  }

  if (typeof rule === 'string') {
    return rule
  }

  if (rule === null) {
    return 'null'
  }

  return rule.toString() || ''
}

exports.toString = toString
