/**
 * @file util
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const isPlainObj = require('is-plain-obj')

exports.keyword = function (word) {
  return (word || '').replace(/[^\d\w]/g, '_')
}

exports.type = function (type = '') {
  let lower = type.toLowerCase()
  return {
    'integer': 'number'
  }[lower] || type
}

/**
 * To pretty string from anything.
 * @param rule
 * @param {any} empty - the string placeholder when equals undefined
 * @return {any}
 */
exports.toString = function(rule, { empty = 'undefined' } = {}) {
  if (typeof rule === 'undefined') {
    return empty
  }

  if (Array.isArray(rule)) {
    return `[${rule.map(x => toString(x)).join(', ')}]`
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

