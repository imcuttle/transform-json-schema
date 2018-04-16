'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _prettier = require('./prettier.bundle');

var _prettier2 = _interopRequireDefault(_prettier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (text, opt) {
  return _prettier2.default.format(text, (0, _extends3.default)({
    parser: 'babylon'
  }, opt));
}; /**
    * @file prettier
    * @author Cuttle Cong
    * @date 2018/4/15
    * @description
    */