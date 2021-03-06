/**
 * @file to-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const to = require('../')
const swagger = require('../transformer/swagger')

module.exports = function(json, flags, cb) {
  to()
    .use(swagger, { filter: flags.filter })
    .format(
      json,
      'swagger-axios',
      { ...flags, pretty: true },
      cb
    )
}
