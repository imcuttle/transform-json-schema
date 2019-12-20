/**
 * @file test
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import to from '../src/index'
import { SchemaPath } from '../src/types/Schema'
import { writeFileSync } from 'fs'

const schema = require('./fixture')
describe('a', function() {
  it('should to vm', function(done) {
    to().format(schema, 'vm', function(err, output) {
      console.log(err)
      console.log(output)
      writeFileSync(__dirname + '/vm.js', output)
      done()
    })
  })

  it('should to walli', function(done) {
    to().format(schema, 'walli', function(err, output) {
      console.log(err)
      // console.log(output)
      writeFileSync(__dirname + '/walli.js', output)
      // expect(output).to
      done()
    })
  })

  it('should to ts', function(done) {
    to().format(schema, 'ts', function(err, output) {
      console.log(err)
      // console.log(output)
      writeFileSync(__dirname + '/ts.ts', output)
      // expect(output).to
      done()
    })
  })

  it('should schemaPath', function() {
    const path = new SchemaPath(schema)
    const AgreementVO = path.get('definitions.AgreementVO')

    console.log(AgreementVO.get('properties.creationDate').fillSchema)
  })
})
