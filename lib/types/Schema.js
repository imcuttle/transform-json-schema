'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SchemaPath = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file Schema
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Cuttle Cong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @date 2018/4/14
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.set');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getPaths(string) {
  if (string.startsWith('#')) {
    return string.replace(/^#+/, '').split('/').filter(Boolean);
  }

  return string;
}

var SchemaPath = function () {
  function SchemaPath(schema) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, SchemaPath);

    this.schema = schema;
    this.parent = parent;
  }

  _createClass(SchemaPath, [{
    key: 'get',
    value: function get(paths) {
      return new SchemaPath((0, _lodash2.default)(this.schema, paths), this);
    }
  }, {
    key: 'set',
    value: function set(paths, val) {
      (0, _lodash4.default)(this.schema, paths, val);
      return this;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return !this.schema;
    }
  }, {
    key: 'ref',
    value: function ref() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.schema.$ref;

      var paths = getPaths(_ref);
      var host = this;
      var refVal = void 0;
      do {
        refVal = host.get(paths);
        host = host.parent;
      } while (host && refVal.isEmpty());

      return refVal;
    }
  }, {
    key: 'fillSchema',
    get: function get() {
      var origin = this.schema;
      if (origin && origin.$ref) {
        var refVal = this.ref();

        var _$ref = origin.$ref,
            rest = _objectWithoutProperties(origin, ['$ref']);

        return Object.assign({}, rest, refVal.fillSchema);
      }
      return origin;
    }
  }]);

  return SchemaPath;
}();

exports.SchemaPath = SchemaPath;