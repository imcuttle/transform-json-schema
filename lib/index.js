'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Schema = require('./types/Schema');

var _prettier = require('./prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pReduce = require('p-reduce');

var presetFormat = {
  vm: require('./formatter/vm').default
};

var TransformUmbrella = function () {
  function TransformUmbrella() {
    _classCallCheck(this, TransformUmbrella);

    this.transformers = [];
  }

  _createClass(TransformUmbrella, [{
    key: 'use',
    value: function use(t, options) {
      this.transformers.push([t, options]);
      return this;
    }
  }, {
    key: 'format',
    value: function format(schema, formatter) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : { pretty: true, prettyOptions: {} };
      var callback = arguments[3];

      var schemaPath = new _Schema.SchemaPath(schema);
      if (typeof options === 'function') {
        callback = options;
        options = { pretty: true };
      }

      pReduce(this.transformers, function (schemaPath, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            t = _ref2[0],
            opt = _ref2[1];

        return Promise.resolve(t(schemaPath, opt)).then(function () {
          return schemaPath;
        });
      }, schemaPath).then(function (schemaPath) {
        if (typeof formatter === 'string') {
          var tmp = formatter;
          formatter = presetFormat[formatter];
          if (!formatter) {
            throw new Error('Formatter: ' + tmp + ' is not exists.');
          }
        }

        return formatter(schemaPath, options);
      }).then(function (output) {
        if (options.pretty && typeof output === 'string') {
          output = (0, _prettier2.default)(output, options.prettyOptions);
        }

        callback && callback(null, output);
      }, function (err) {
        callback && callback(err);
      });
    }
  }]);

  return TransformUmbrella;
}();

module.exports = function jsonSchemaTransform() {
  return new TransformUmbrella();
};