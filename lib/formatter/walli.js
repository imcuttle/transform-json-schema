'use strict';

exports.__esModule = true;
/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
var u = require('../util');
var camel = require('lodash.camelcase');
var capitalize = require('lodash.capitalize');
var wrapLike = require('./framework/wrap-like').default;

exports.default = wrapLike({
  propertyDelimiter: '\n',
  classBodyDelimiter: '\n\n',
  wrapString: function wrapString(str) {
    return 'import * as t from \'walli\'\n' + str;
  },
  generateClassString: function generateClassString(_ref, propertiesStr) {
    var description = _ref.description,
        title = _ref.title;

    // const capTitle = capitalize(title)
    return '\n    /**\n     * ' + (description || '') + '\n     * @typedef {' + title + 'Class}\n     */\n    export class ' + title + 'Class extends t.Verifiable {\n      _check(req) {\n        return t.leq({' + propertiesStr() + '}).check(req)\n      }\n    }\n    export const ' + camel(title) + ' = t.util.createFinalVerifiableClass(' + title + 'Class)\n    ';
  },
  propertyString: function propertyString(p, childrenPropertiesStr) {
    var lowType = p.type.toLowerCase();
    var camelType = camel(p.type);

    // final
    if (['array', 'string', 'object', 'boolean', 'number'].includes(lowType)) {
      return p.name + ': t.' + lowType + ',';
    }

    // custom
    return p.name + ': ' + camelType + ',';
  }
});