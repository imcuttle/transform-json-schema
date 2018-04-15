'use strict';

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _Schema = require('./types/Schema');

var _prettier = require('./prettier');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pReduce = require('p-reduce');


var presetFormat = {
  vm: require('./formatter/vm').default
};

var TransformUmbrella = function () {
  function TransformUmbrella() {
    (0, _classCallCheck3.default)(this, TransformUmbrella);
    this.transformers = [];
  }

  (0, _createClass3.default)(TransformUmbrella, [{
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
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
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
        // console.log(schemaPath.schema)
        callback && callback(null, output);
      }).catch(function (err) {
        callback && callback(err);
      });
    }
  }]);
  return TransformUmbrella;
}();

module.exports = function jsonSchemaTransform() {
  return new TransformUmbrella();
};