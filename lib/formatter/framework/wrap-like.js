'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = create;

var _Schema = require('../../types/Schema');

var _util = require('../../util');

var u = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var capitalize = require('lodash.capitalize'); /**
                                                * @file wrap-like
                                                * @author Cuttle Cong
                                                * @date 2018/4/16
                                                * @description
                                                */

var camelCase = require('lodash.camelcase');

function propertiesStr(properties, node, _ref) {
  var _this = this;

  var typeTrans = _ref.typeTrans,
      propertyTrans = _ref.propertyTrans;

  var proper = function proper(name, p, currentNode) {
    if (p.$ref) {
      var ref = node.ref(p.$ref);
      if (!ref.isEmpty()) {
        p.type = ref.schema.title;
      }
    }

    var type = typeTrans(u.type(u.keyword(p.type || 'any')));
    var property = propertyTrans(u.keyword(name));

    return _this.propertyString((0, _extends3.default)({}, p, { type: type, name: property }), propertiesStr.bind(_this, p.properties, currentNode, { typeTrans: typeTrans, propertyTrans: propertyTrans }));
  };
  if (!properties) {
    return '';
  }

  return Object.keys(properties).map(function (name) {
    return proper(name, properties[name], node.get(['properties', name]));
  }).join(this.propertyDelimiter || '\n\n');
}

function toClassDefinition(node) {
  var _this2 = this;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      typeTrans = _ref2.typeTrans,
      propertyTrans = _ref2.propertyTrans,
      cache = _ref2.cache,
      _ref2$depth = _ref2.depth,
      depth = _ref2$depth === undefined ? 1 : _ref2$depth,
      _ref2$inner = _ref2.inner,
      inner = _ref2$inner === undefined ? false : _ref2$inner;

  var schema = node.schema;
  var type = schema.type,
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

      return toClassDefinition.call(_this2, pNode, {
        // raw,
        cache: cache,
        depth: depth - 1,
        inner: true,
        typeTrans: typeTrans,
        propertyTrans: propertyTrans
      });
    }).join(this.classBodyDelimiter || '\n\n');
  }

  if (type === 'object') {
    var id = typeTrans(u.uKeyword(title));
    if (cache.has(id)) {
      return propertiesClass;
    }
    cache.add(id);

    return propertiesClass + '\n    ' + this.generateClassString((0, _extends3.default)({}, schema, { title: id }), propertiesStr.bind(this, properties, node, { typeTrans: typeTrans, propertyTrans: propertyTrans }));
  }

  if (type === 'array') {
    // TODO
  }

  return propertiesClass + '';
}

function wrapLikeFormatter(node) {
  var _this3 = this;

  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
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
    return this.wrapString(nodes.map(function (x) {
      return toClassDefinition.call(_this3, x, {
        // raw,
        depth: depth,
        cache: cache,
        propertyTrans: propertyTrans,
        typeTrans: typeTrans
      });
    }).join(this.classBodyDelimiter || '\n\n'));
  }

  return this.wrapString(toClassDefinition.call(this, node, {
    // raw,
    depth: depth,
    cache: cache,
    propertyTrans: propertyTrans,
    typeTrans: typeTrans
  }));
}

function create(data) {
  return wrapLikeFormatter.bind(data);
}