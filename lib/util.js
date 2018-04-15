'use strict';

/**
 * @file util
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
var isPlainObj = require('is-plain-obj');

exports.keyword = function (word) {
  return (word || '').replace(/[^\d\w]/g, '_');
};

var uniqueid = require('lodash.uniqueid');
exports.uKeyword = function (word) {
  return exports.keyword(word) || uniqueid('_');
};

exports.type = function () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var lower = type.toLowerCase();
  return {
    integer: 'number',
    number: 'number',
    string: 'string',
    object: 'object',
    array: 'array',
    boolean: 'boolean',
    function: 'function'
  }[lower] || type;
};

/**
 * To pretty string from anything.
 * @param rule
 * @param {any} empty - the string placeholder when equals undefined
 * @return {any}
 */
exports.toString = function (rule) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$empty = _ref.empty,
      empty = _ref$empty === undefined ? 'undefined' : _ref$empty;

  if (typeof rule === 'undefined') {
    return empty;
  }

  if (Array.isArray(rule)) {
    return '[' + rule.map(function (x) {
      return toString(x);
    }).join(', ') + ']';
  }
  if (isPlainObj(rule)) {
    return JSON.stringify(rule);
  }

  if (typeof rule === 'string') {
    return rule;
  }

  if (rule === null) {
    return 'null';
  }

  return rule.toString() || '';
};