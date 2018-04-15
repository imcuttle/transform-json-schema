'use strict';

var _Schema = require('../types/Schema');

module.exports = function (node) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$filter = _ref.filter,
      filter = _ref$filter === undefined ? /.*/ : _ref$filter;

  if (node.schema.swagger) {
    node.schema.definitions = Object.keys(node.schema.definitions).filter(function (name) {
      filter.lastIndex = 0;
      return filter.test(name);
    }).map(function (name) {
      var n = node.get(['definitions', name]);
      if (n.get('title').isEmpty()) {
        n.set('title', name);
      }
      return n.schema;
    });
  }
}; /**
    * @file swagger
    * @author Cuttle Cong
    * @date 2018/4/15
    * @description
    */