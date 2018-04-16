'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file to-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
var to = require('../');
var swagger = require('../transformer/swagger');

module.exports = function (json, flags, cb) {
  to().use(swagger, { filter: flags.filter }).format(json, 'walli', (0, _extends3.default)({}, flags, { pretty: true }), cb);
};