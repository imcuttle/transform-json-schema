// @flow
import type { Formatter } from './types/Formatter'
import { SchemaPath } from './types/Schema'
import type { Schema } from './types/Schema'
import type { Transformer } from './types/Transformer'
import prettier from './prettier'
const pReduce = require('p-reduce')

const presetFormat = {
  vm: require('./formatter/vm').default,
  walli: require('./formatter/walli').default,
  ts: require('./formatter/ts').default,
  'swagger-axios': require('./formatter/swagger-axios/index').default,
}

class TransformUmbrella {
  transformers: [Transformer, any][] = []
  use(t: Transformer, options: any): TransformUmbrella {
    this.transformers.push([t, options])
    return this
  }
  format(
    schema: Schema,
    formatter: Formatter | string,
    options: {
      pretty?: boolean,
      prettyOptions?: {}
    } = {},
    callback?: (err: null | Error, output: any) => any
  ): any | Promise<any>
  {
    const schemaPath = new SchemaPath(schema)
    if (typeof options === 'function') {
      callback = options
      options = { pretty: true }
    } else {
      options = {pretty: true, prettyOptions: {}, ...options}
    }

    pReduce(
      this.transformers,
      (schemaPath, [t, opt]) => {
        return Promise.resolve(t(schemaPath, opt)).then(() => schemaPath)
      },
      schemaPath
    )
      .then(schemaPath => {
        if (typeof formatter === 'string') {
          let tmp = formatter
          formatter = presetFormat[formatter]
          if (!formatter) {
            throw new Error('Formatter: ' + tmp + ' is not exists.')
          }
        }

        return formatter(schemaPath, options)
      })
      .then(output => {
        if (options.pretty && typeof output === 'string') {
          output = prettier(output, options.prettyOptions)
        }
        // console.log(schemaPath.schema)
        callback && callback(null, output)
      })
      .catch(err => {
        callback && callback(err)
      })
  }
}

module.exports = function jsonSchemaTransform() {
  return new TransformUmbrella()
}
