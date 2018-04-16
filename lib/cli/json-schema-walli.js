#!/usr/bin/env node
'use strict';

/**
 * @file json-schema-vm
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */

var concat = require('concat-stream');
var to = require('../shortcut/to-walli');
var argv = require('minimist')(process.argv.slice(2));

var flags = {
  help: argv.help || argv.h,
  filter: new RegExp(argv.filter || '.*'),
  depth: parseInt('depth' in argv ? argv.depth : 1),
  typeCapitalize: argv['type-capitalize'] !== 'false',
  propertyCamelcase: argv['property-camelcase'] !== 'false'
};

if (flags.help) {
  console.log('\n  -h, --help\n  --filter\n  --depth\n  --type-capitalize\n  --property-camelcase\n');
} else {
  process.stdin.pipe(concat(function (buffer) {
    var str = buffer.toString();
    var json = JSON.parse(str);

    to(json, flags, function (err, output) {
      if (err) {
        throw err;
      }
      process.stdout.write(output);
    });
  }));
}