'use strict';

exports.__esModule = true;

var _util = require('../util');

var u = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var wrapLike = require('./framework/wrap-like').default; /**
                                                          * @file vm
                                                          * @author Cuttle Cong
                                                          * @date 2018/4/14
                                                          * @description
                                                          */
exports.default = wrapLike({
  wrapString: function wrapString(str) {
    return 'import { Root, observable } from \'react-mobx-vm\'\n' + str;
  },
  generateClassString: function generateClassString(_ref, propertiesStr) {
    var description = _ref.description,
        title = _ref.title;

    return '\n    /**\n     * ' + (description || '') + '\n     * @typedef {' + title + '}\n     */\n    export class ' + title + ' extends Root {\n      ' + propertiesStr() + '\n    }\n    ';
  },
  propertyString: function propertyString(p) {
    return '/**\n' + (' * ' + (p.description || '') + '\n') + (' * @example ' + u.toString(p.example || '') + '\n') + (' * @type {' + p.type + '}\n') + ' */\n' + (' @observable ' + p.name + ' ' + (p.hasOwnProperty('default') ? '= ' + p.default : ''));
  }
});