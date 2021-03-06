import { SchemaPath } from '../../types/Schema'
import tsTypeTransform from '../ts'
import axiosTransform from './axios-transform'
import camelCase from 'lodash.camelcase'

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

export default function swaggerAxios(
  node: SchemaPath,
  {
    axiosRequest = 'axios',
    commonConfig = { responseData: true },
    prefix,
    suffix,
    ...options
  }: { axiosRequest?: string } = {}
): { tsType: string, api: string, index: string } {
  const codes = [tsTypeTransform(node, options)]
  const axiosResult = axiosTransform(node, options)
  if (axiosResult) {
    const addImport = (...args) => {
      const { code, key } = getImportStatement(...args)
      codes.unshift(code)
      return key
    }
    const axiosKey = addImport(axiosRequest, 'axios')
    addImport('axios', '{ AxiosRequestConfig }')
    addImport('lodash.merge', 'merge')
    addImport('decorate-axios', '{ responseDataAxios, pathRegexpAxios, stringDataAxios }')

    codes.push(
      `responseDataAxios()(${axiosKey});`,
      `pathRegexpAxios()(${axiosKey});`,
      `stringDataAxios()(${axiosKey});`
    )
    const { commonPrefix, data } = axiosResult
    codes.push(`const COMMON_PREFIX = ${JSON.stringify(tUrl(commonPrefix) || '')};`)
    codes.push(`const COMMON_CONFIG = ${JSON.stringify(commonConfig)};`)

    const tokens = getTokens(commonPrefix)
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
            codes.push(paramType.query.code)
            argsChunks.push(`params?: ${paramType.query.name}`)
          }

          hasData = paramType.body || paramType.formData
          if (paramType.body) {
            codes.push(paramType.body.code)
            argsChunks.push(`data?: ${paramType.body.name}`)
          } else if (paramType.formData) {
            argsChunks.push(`data?: FormData`)
          }
        }

        let responseTypeKey = 'any'
        if (responseType && responseType['200']) {
          responseTypeKey = responseType['200'].name
          if (responseType['200'].code) {
            codes.push(responseType['200'].code)
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
  }

  return `${prefix || ''}${codes.join('\n')}${suffix || ''}`
}
