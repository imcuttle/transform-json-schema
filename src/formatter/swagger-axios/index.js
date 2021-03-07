import { SchemaPath } from '../../types/Schema'
import tsTypeTransform from '../ts'
import axiosTransform from './axios-transform'
import camelCase from 'lodash.camelcase'
import uniq from 'lodash.uniq'

const getImportStatement = (source, key = camelCase(source)) => {
  return {
    code: `import ${key} from ${JSON.stringify(source)};`,
    key
  }
}

const getTokens = (string) => {
  const chunks = string.match(/{(.+?)}/g)
  return (chunks || []).map((x) => x.slice(1, -1))
}

const tUrl = (url) => url.replace(/{(.+?)}/g, `:$1`)

const addImport = (codes, ...args) => {
  const { code, key } = getImportStatement(...args)
  codes.unshift(code)
  return key
}

export default function swaggerAxios(
  node: SchemaPath,
  {
    axiosRequest = 'axios',
    commonConfig = { responseData: true },
    splitModule = false,
    typeRequest = './type',
    prefix,
    suffix,
    ...options
  }: { axiosRequest?: string } = {}
): { tsType: string, api: string, index: string } {
  const tsTypeCodes = [tsTypeTransform(node, options) + '\n']
  let apiCode = ''
  const axiosResult = axiosTransform(node, options)

  if (axiosResult) {
    const codes = []
    const addImportInner = (...args) => (splitModule ? addImport(codes, ...args) : addImport(tsTypeCodes, ...args))
    const maybeImportMap = {}
    const addTypeImportOrInject = (code, key) => {
      const source = typeRequest;
      if (splitModule) {
        tsTypeCodes.push(code)
        let keys = (maybeImportMap[source] = maybeImportMap[source] || [])
        keys.push(key)
        maybeImportMap[source] = uniq(keys)
      } else {
        tsTypeCodes.push(code)
      }
    }
    const addTypeImportOrInjectEnd = () => {
      Object.keys(maybeImportMap).forEach((source) => {
        const keys = maybeImportMap[source]
        addImport(codes, source, `{ ${keys.join(', ')} }`)
      })
    }

    codes.push('\n// Api code start')

    const axiosKey = addImportInner(axiosRequest, 'axios')
    addImportInner('axios', '{ AxiosRequestConfig }')
    addImportInner('lodash.merge', 'merge')
    addImportInner('decorate-axios', '{ responseDataAxios, pathRegexpAxios, stringDataAxios }')

    codes.push(
      `responseDataAxios()(${axiosKey});`,
      `pathRegexpAxios()(${axiosKey});`,
      `stringDataAxios()(${axiosKey});\n`
    )
    const { commonPrefix, data } = axiosResult
    codes.push(`const COMMON_PREFIX = ${JSON.stringify(tUrl(commonPrefix) || '')};`)
    codes.push(`const COMMON_CONFIG = ${JSON.stringify(commonConfig)};\n`)

    Object.keys(data).forEach((pathChunk) => {
      Object.keys(data[pathChunk]).forEach((method) => {
        const { responseType, paramType } = data[pathChunk][method]
        const pathTokens = getTokens(pathChunk)
        const reqCommonPrefix = method + ' ' + pathChunk
        const argsChunks = []
        pathTokens.forEach((token) => {
          argsChunks.push(`${token}: any`)
        })

        let hasData = false
        if (paramType) {
          if (paramType.query) {
            addTypeImportOrInject(paramType.query.code, paramType.query.name)
            argsChunks.push(`params?: ${paramType.query.name}`)
          }

          hasData = paramType.body || paramType.formData
          if (paramType.body) {
            addTypeImportOrInject(paramType.body.code, paramType.body.name)
            argsChunks.push(`data?: ${paramType.body.name}`)
          } else if (paramType.formData) {
            argsChunks.push(`data?: FormData`)
          }
        }

        let responseTypeKey = 'any'
        if (responseType && responseType['200']) {
          responseTypeKey = responseType['200'].name
          if (responseType['200'].code) {
            addTypeImportOrInject(responseType['200'].code, responseTypeKey)
          }
        }

        argsChunks.push(`axiosRequestConfig?: AxiosRequestConfig`)
        codes.push(`
      export function ${camelCase(reqCommonPrefix)}(${argsChunks.join(', ')}) {
        return ${axiosKey}<${responseTypeKey}>(merge({
          url: COMMON_PREFIX + ${JSON.stringify(tUrl(pathChunk))},
          method: ${JSON.stringify(method)},
          pathData: {
            ${pathTokens.map((token) => `${token},`).join('\n')}
          },
          ${paramType && paramType.query ? 'params,' : ''}${hasData ? 'data,' : ''}
        }, COMMON_CONFIG, axiosRequestConfig))
      }
      `)
      })
    })
    addTypeImportOrInjectEnd()

    apiCode = codes.join('\n')
  }

  if (!splitModule) {
    return `${prefix || ''}${tsTypeCodes.concat(apiCode).join('\n')}${suffix || ''}`
  }

  return {
    'type.ts': `${prefix || ''}${tsTypeCodes.join('\n')}${suffix || ''}`,
    'api.ts': `${prefix || ''}${apiCode}${suffix || ''}`,
  }
}
