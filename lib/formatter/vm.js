'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Schema = require('../types/Schema');

var _util = require('../util');

var u = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = require('lodash.capitalize');
// const jsesc = require('jsesc')
/**
 * @file vm
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */

var camelCase = require('lodash.camelcase');
var uniqueId = require('lodash.uniqueid');

function propertiesStr(properties, node, _ref) {
  var typeTrans = _ref.typeTrans,
      propertyTrans = _ref.propertyTrans;

  function proper(name, p) {
    if (p.$ref) {
      var ref = node.ref(p.$ref);
      if (!ref.isEmpty()) {
        p.type = ref.schema.title;
      }
    }

    return '/**\n' + (' * ' + (p.description || '') + '\n') + (' * @example ' + u.toString(p.example || '') + '\n') + (' * @type {' + typeTrans(u.type(u.keyword(p.type || 'any'))) + '}\n') + ' */\n' + (' @observable ' + propertyTrans(u.keyword(name)) + ' ' + (p.hasOwnProperty('default') ? '= ' + p.default : ''));
  }
  if (!properties) {
    return '';
  }

  return Object.keys(properties).map(function (name) {
    return proper(name, properties[name]);
  }).join('\n\n');
}

function toClassDefinition(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$raw = _ref2.raw,
      raw = _ref2$raw === undefined ? false : _ref2$raw,
      typeTrans = _ref2.typeTrans,
      propertyTrans = _ref2.propertyTrans,
      cache = _ref2.cache,
      _ref2$depth = _ref2.depth,
      depth = _ref2$depth === undefined ? 1 : _ref2$depth,
      _ref2$inner = _ref2.inner,
      inner = _ref2$inner === undefined ? false : _ref2$inner;

  var schema = raw ? node.fillSchema : node.schema;
  var description = schema.description,
      type = schema.type,
      properties = schema.properties,
      title = schema.title;


  if (inner && type === 'object') {
    var definitions = node.rootParent.schema.definitions = node.rootParent.schema.definitions || {};
    var _title = node.schema.title;
    if (!definitions[_title]) {
      definitions[_title] = (0, _extends3.default)({}, node.schema);
      node.clear();
      node.set('$ref', '#/definitions/' + _title);
    }
  }

  var propertiesClass = '';
  if (depth > 0) {
    propertiesClass = Object.keys(properties || {}).map(function (id) {
      var pNode = node.get(['properties', id]);
      if (pNode.isEmpty()) {
        return '';
      }
      if (!pNode.schema.title) {
        pNode.schema.title = id;
      }

      return toClassDefinition(pNode, {
        raw: raw,
        cache: cache,
        depth: depth - 1,
        inner: true,
        typeTrans: typeTrans,
        propertyTrans: propertyTrans
      });
    }).join('\n\n');
  }

  if (type === 'object') {
    var id = typeTrans(u.uKeyword(title));
    if (cache.has(id)) {
      return propertiesClass;
    }
    cache.add(id);
    return propertiesClass + '\n    /**\n     * ' + (description || '') + '\n     * @typedef {' + id + '}\n     */\n    export class ' + id + ' extends Root {\n      ' + propertiesStr(properties, node, { typeTrans: typeTrans, propertyTrans: propertyTrans }) + '\n    }\n    ';
  }

  if (type === 'array') {
    // TODO
  }

  return propertiesClass + '';
}

function wrap(str) {
  return '\n  import { Root, observable } from \'react-mobx-vm\'\n\n  ' + str;
}

var vmFormatter = function vmFormatter(node) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$raw = _ref3.raw,
      raw = _ref3$raw === undefined ? false : _ref3$raw,
      _ref3$depth = _ref3.depth,
      depth = _ref3$depth === undefined ? 1 : _ref3$depth,
      _ref3$typeCapitalize = _ref3.typeCapitalize,
      typeCapitalize = _ref3$typeCapitalize === undefined ? false : _ref3$typeCapitalize,
      _ref3$propertyCamelca = _ref3.propertyCamelcase,
      propertyCamelcase = _ref3$propertyCamelca === undefined ? false : _ref3$propertyCamelca;

  var cache = new Set([]);
  var typeTrans = typeCapitalize ? function (t) {
    return capitalize(t);
  } : function (t) {
    return t;
  };
  var propertyTrans = propertyCamelcase ? function (t) {
    return camelCase(t);
  } : function (t) {
    return t;
  };

  if (node.schema.swagger) {
    var nodes = Object.keys(node.schema.definitions).map(function (name) {
      var n = node.get(['definitions', name]);
      if (!n.get('title')) {
        n.set('title', name);
      }
      return n;
    });
    return wrap(nodes.map(function (x) {
      return toClassDefinition(x, { raw: raw, depth: depth, cache: cache, propertyTrans: propertyTrans, typeTrans: typeTrans });
    }).join('\n\n'));
  }

  return wrap(toClassDefinition(node, { raw: raw, depth: depth, cache: cache, propertyTrans: propertyTrans, typeTrans: typeTrans }));
};

exports.default = vmFormatter;