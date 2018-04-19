/**
 * @file to-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
const toJSONSchema = require('@moyuyc/to-json-schema')
const registerPromiseWorker = require('promise-worker/register')
const toVM = require('../src/shortcut/to-vm')

registerPromiseWorker(function(message) {
  return new Promise((resolve, reject) => {
    const { data, type, options = {} } = message
    switch (type) {
      case 'json-to-schema': {
        json = toJSONSchema('JSONSchema', data)
        resolve(JSON.stringify(json, null, 2))
        break
      }
      case 'schema-to-vm': {
        toVM(
          data,
          {
            pretty: true,
            depth: 0,
            ...options
          },
          (err, output) => {
            if (err) reject(err)
            resolve(output)
          }
        )
        break
      }
      default:
        resolve(JSON.stringify(data, null, 2))
    }
  })
})
