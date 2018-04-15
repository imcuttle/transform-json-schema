/**
 * @file to-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const to = require('../')
const swagger = require('../transformer/swagger')

module.exports = function (json, { filter, raw, prettyOptions } = {}, cb) {
  to()
    .use(swagger, { filter: filter })
    .format(json, 'vm', { raw: raw, pretty: true, prettyOptions }, cb)
}
