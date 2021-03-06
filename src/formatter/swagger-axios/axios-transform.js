import {SchemaPath} from "../../types/Schema";
import toTs, {fillType} from "../ts";
import groupBy from "lodash.groupby";
import * as cc from "change-case";
import commonPathPrefix from 'common-path-prefix'


/**
 import twAxios from '@/shared/utils/tw-axios';
 import { AxiosRequestConfig } from 'axios';
 import { ResponseBody } from '@/shared/services/types/common';
 import { CurrentUserVo, TeacherDetailVo } from '@/shared/services/types/atm-user';

 export function getUsersCurrent(config?: AxiosRequestConfig) {
  return twAxios.get('/users/current', {
    endpointSource: 'atm-user:api',
    responseData: true,
    ...config,
  }) as Promise<ResponseBody<CurrentUserVo>>;
}

 export function getTeachersCurrent(config?: AxiosRequestConfig) {
  return twAxios.get('/teachers/current', {
    endpointSource: 'atm-user:api',
    responseData: true,
    ...config,
  }) as Promise<ResponseBody<TeacherDetailVo>>;
}
 */

export default function axiosTransform(node: SchemaPath, opts?: any) {
  if (!node.schema.paths || !Object.keys(node.schema.paths).length) {
    return null
  }

  /*
  {
    commonPrefix: '',
    data: {
      '/prefix/api': {
         'get': {
           params: {}
         }
      }
    }
  }
   */
  const rootEnt = {}
  const paths = Object.keys(node.schema.paths)
  const commonPrefix = commonPathPrefix(paths)
  paths.map(path => {
    const uniqPath = path.slice(commonPrefix.length)
    const pathEnt = rootEnt[uniqPath] = {}
    const pathNode = node.schema.paths[path]

    const methods = Object.keys(pathNode)
    methods.forEach(method => {
      const apiNode = pathNode[method]
      const methodEnt = pathEnt[method] = {}

      const prefix = `${uniqPath.replace(/\//, '_')}_${method}`

      if (apiNode.parameters) {
        const paramGroups = groupBy(apiNode.parameters, 'in')
        const paramType = methodEnt.paramType = {}
        Object.keys(paramGroups).forEach((inType) => {
          const keyName = cc.pascalCase(`${prefix}_${inType}_Params`)
          paramType[inType] = {
            name: keyName,
            code: toTs(new SchemaPath({
              type: 'object',
              properties: paramGroups[inType].reduce((obj, def) => {
                obj[def.name] = {
                  ...def,
                  ...def.schema
                }
                return obj
              }, {}),
              title: keyName,
            }, node), {...opts, depth: 2}).trim()
          }
        })


        const responseType = methodEnt.responseType = {}

        if (apiNode.responses['200']) {
          const keyName = cc.pascalCase(`${prefix}_Res200`)
          const okNode = {...apiNode.responses['200'], ...apiNode.responses['200'].schema}

          if (okNode.type === 'object') {
            responseType['200'] = {
              name: keyName,
              code: toTs(new SchemaPath({
                title: keyName,
                ...okNode,
              }, node)).trim()
            }
          } else if (okNode.$ref) {
            const refPath = node.ref(okNode.$ref)
            responseType['200'] = {
              name: keyName,
              code: `export type ${keyName} = ${cc.pascalCase(refPath.schema.title)}`
            }
          } else if (okNode.type === 'array') {
            if (!okNode.items || !okNode.items.$ref) {
              responseType['200'] = {
                name: keyName,
                code: `export type ${keyName} = ${fillType(okNode)}`
              }
            } else {
              const refPath = node.ref(okNode.items.$ref)
              if (refPath && !refPath.isEmpty()) {
                responseType['200'] = {
                  name: keyName,
                  code: `export type ${keyName} = ${cc.pascalCase(refPath.schema.title)}[]`
                }
              } else {
                responseType['200'] = {
                  name: keyName,
                  code: `export type ${keyName} = any[]`
                }
              }
            }
          } else {
            responseType['200'] = {
              name: keyName,
              code: `export type ${keyName} = ${fillType(okNode)}`
            }
          }
        }
      }
    })
  })

  return {
    commonPrefix,
    data: rootEnt
  }
}
