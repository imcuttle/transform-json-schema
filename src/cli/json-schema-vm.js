#!/usr/bin/env node
/**
 * @file json-schema-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

const concat = require('concat-stream')
const to = require('../shortcut/to-vm')
const argv = require('minimist')(process.argv.slice(2))

const flags = {
  help: argv.help || argv.h,
  filter: new RegExp(argv.filter || '.*'),
  raw: argv.raw !== 'false',
  depth: parseInt('depth' in argv ? argv.depth : 1),
  typeCapitalize: argv['type-capitalize'] !== 'false',
  propertyCamelcase: argv['property-camelcase'] !== 'false'
}

if (flags.help) {
  console.log(
    `
  -h, --help
  --filter
  --raw
  --depth
  --type-capitalize
  --property-camelcase
`
  )
} else {
  process.stdin.pipe(
    concat(function(buffer) {
      let str = buffer.toString()
      let json = JSON.parse(str)

      to(json, flags, function(err, output) {
        if (err) {
          throw err
        }
        process.stdout.write(output)
      })
    })
  )
}
