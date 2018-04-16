'use strict';

exports.__esModule = true;
exports.SchemaPath = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.set');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file Schema
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */
function getPaths(string) {
  if (string.startsWith('#')) {
    return string.replace(/^#+/, '').split('/').filter(Boolean);
  }

  return string;
}

var SchemaPath = function () {
  function SchemaPath(schema) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    (0, _classCallCheck3.default)(this, SchemaPath);

    this.schema = schema;
    this.parent = parent;
  }

  SchemaPath.prototype.clear = function clear() {
    var _this = this;

    Object.keys(this.schema).forEach(function (name) {
      delete _this.schema[name];
    });
  };

  SchemaPath.prototype.get = function get(paths) {
    return new SchemaPath((0, _lodash2.default)(this.schema, paths), this);
  };

  SchemaPath.prototype.set = function set(paths, val) {
    (0, _lodash4.default)(this.schema, paths, val);
    return this;
  };

  SchemaPath.prototype.isEmpty = function isEmpty() {
    return !this.schema;
  };

  SchemaPath.prototype.ref = function ref() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.schema.$ref;

    var paths = getPaths(_ref);
    var host = this;
    var refVal = void 0;
    do {
      refVal = host.get(paths);
      host = host.parent;
    } while (host && refVal.isEmpty());

    return refVal;
  };

  (0, _createClass3.default)(SchemaPath, [{
    key: 'rootParent',
    get: function get() {
      var p = this;
      while (p.parent) {
        p = p.parent;
      }
      return p;
    }
  }, {
    key: 'fillSchema',
    get: function get() {
      var origin = this.schema;
      if (origin && origin.$ref) {
        var refVal = this.ref();
        var _$ref = origin.$ref,
            rest = (0, _objectWithoutProperties3.default)(origin, ['$ref']);

        return Object.assign({}, rest, refVal.fillSchema);
      }
      return origin;
    }
  }]);
  return SchemaPath;
}();

exports.SchemaPath = SchemaPath;