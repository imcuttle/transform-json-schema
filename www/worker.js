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
    const { data, type } = message
    let json = data
    if (type !== 'schema') {
      json = toJSONSchema('JSONSchema', data)
    }

    console.log('worker received:', json)
    if (json) {
      toVM(
        json,
        {
          pretty: true,
          depth: 0
        },
        (err, output) => {
          if (err) reject(err)
          resolve(output)
        }
      )
    }
  })
})
