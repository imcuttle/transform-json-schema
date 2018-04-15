'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Schema = require('../types/Schema');

var _util = require('../util');

var u = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function propertiesStr(properties, node) {
  function proper(name, p) {
    if (p.$ref) {
      var ref = node.ref(p.$ref);
      if (!ref.isEmpty()) {
        p.type = ref.schema.title;
      }
    }

    return '/**\n' + (' * ' + (p.description || '') + '\n') + (' * @example ' + u.toString(p.example || '') + '\n') + (' * @type {' + u.type(u.keyword(p.type || 'any')) + '}\n') + ' */\n' + (' @observable ' + u.keyword(name) + ' ' + (p.hasOwnProperty('default') ? '= ' + p.default : ''));
  }
  if (!properties) {
    return '';
  }

  return Object.keys(properties).map(function (name) {
    return proper(name, properties[name]);
  }).join('\n\n');
}
// const jsesc = require('jsesc')
/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */


function toClassDefinition(node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$raw = _ref.raw,
      raw = _ref$raw === undefined ? false : _ref$raw;

  var schema = raw ? node.fillSchema : node.schema;
  var description = schema.description,
      type = schema.type,
      properties = schema.properties,
      title = schema.title;

  if (type === 'object') {
    return '\n    /**\n     * ' + (description || '') + '\n     * @typedef {' + u.keyword(title || type || '') + '}\n     */\n    export class ' + u.keyword(title) + ' extends Root {\n      ' + propertiesStr(properties, node) + '\n    }\n    ';
  }

  if (type === 'array') {
    // TODO
  }

  return '';
}

function wrap(str) {
  return '\n  import { Root, observable } from \'react-mobx-vm\'\n\n  ' + str;
}

var vmFormatter = function vmFormatter(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$raw = _ref2.raw,
      raw = _ref2$raw === undefined ? false : _ref2$raw;

  if (node.schema.swagger) {
    var nodes = Object.keys(node.schema.definitions).map(function (name) {
      var n = node.get(['definitions', name]);
      if (!n.get('title')) {
        n.set('title', name);
      }
      return n;
    });
    return wrap(nodes.map(function (x) {
      return toClassDefinition(x, { raw: raw });
    }).join('\n\n'));
  }

  return wrap(toClassDefinition(node));
};

exports.default = vmFormatter;