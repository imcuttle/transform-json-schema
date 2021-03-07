#!/usr/bin/env node
/**
 * @file json-schema-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

const concat = require('concat-stream')
const to = require('../shortcut/to-swagger-axios')
const argv = require('minimist')(process.argv.slice(2))

const flags = {
  help: argv.help || argv.h,
  filter: new RegExp(argv.filter || '.*', 'i'),
  loose: 'loose' in argv ? !!argv.loose : true ,
  axiosRequest: argv.axiosRequest || argv['axios-request'] || 'axios',
  prefix: argv.prefix,
  depth: parseInt('depth' in argv ? argv.depth : 1),
}


if (flags.help) {
  console.log(
    `
  -h, --help
  --axios-request   eg. --axios-request=axios
  --prefix
  --filter          eg. --filter=^UserVO
  --depth <n>       eg. --depth=1
  --no-loose        Disables loose mode
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
        if (typeof output === 'object') {
          console.log(JSON.stringify(output));
        }
        else {
          process.stdout.write(output);
        }
      })
    })
  )
}
