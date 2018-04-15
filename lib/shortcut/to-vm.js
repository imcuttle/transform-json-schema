'use strict';

/**
 * @file to-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
var to = require('../');
var swagger = require('../transformer/swagger');

module.exports = function (json) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      filter = _ref.filter,
      raw = _ref.raw,
      prettyOptions = _ref.prettyOptions;

  var cb = arguments[2];

  to().use(swagger, { filter: filter }).format(json, 'vm', { raw: raw, pretty: true, prettyOptions: prettyOptions }, cb);
};