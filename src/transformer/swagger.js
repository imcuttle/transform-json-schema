/**
 * @file swagger
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import { SchemaPath } from '../types/Schema'

module.exports = function(node: SchemaPath, { filter = /.*/ } = {}) {
  if (node.schema.swagger) {
    node.schema.definitions = Object.keys(node.schema.definitions)
      .filter(name => {
        filter.lastIndex = 0
        return filter.test(name)
      })
      .map(name => {
        const n = node.get(['definitions', name])
        if (n.get('title').isEmpty()) {
          n.set('title', name)
        }
        return n.schema
      })
  }
}
