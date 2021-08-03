import { SchemaPath } from "../../types/Schema";
import toTs, { fillType } from "../ts";
import groupBy from "lodash.groupby";
import * as cc from "change-case";
import commonPathPrefix from "common-path-prefix";

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

function toCodeEntity(keyName, node, parent) {
  if (node.type === "object") {
    return {
      name: keyName,
      code: toTs(
        new SchemaPath(
          {
            ...node,
            title: keyName,
          },
          parent
        )
      ).trim(),
    };
  } else if (node.$ref) {
    const refPath = parent.ref(node.$ref);
    return {
      name: keyName,
      code: `export type ${keyName} = ${cc.pascalCase(refPath.schema.title)}`,
    };
  } else if (node.type === "array") {
    if (!node.items || !node.items.$ref) {
      return {
        name: keyName,
        code: `export type ${keyName} = ${fillType(node)}`,
      };
    } else {
      const refPath = parent.ref(node.items.$ref);
      if (refPath && !refPath.isEmpty()) {
        return {
          name: keyName,
          code: `export type ${keyName} = ${cc.pascalCase(
            refPath.schema.title
          )}[]`,
        };
      } else {
        return {
          name: keyName,
          code: `export type ${keyName} = any[]`,
        };
      }
    }
  } else {
    return {
      name: keyName,
      code: `export type ${keyName} = ${fillType(node)}`,
    };
  }
}

export function createGetUniqName() {
  const map = new Map();
  const uniqKeyName = (keyName) => {
    if (!map.get(keyName)) {
      map.set(keyName, 1);
      return keyName;
    }
    const out = `${keyName}${map.get(keyName)}`;
    map.set(keyName, map.get(keyName) + 1);
    return out;
  };
  return uniqKeyName
}

export default function axiosTransform(node: SchemaPath, opts?: any) {
  const uniqKeyName = createGetUniqName()

  if (!node.schema.paths || !Object.keys(node.schema.paths).length) {
    return null;
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
  const rootEnt = {};
  const paths = Object.keys(node.schema.paths);
  const commonPrefix = commonPathPrefix(paths);
  paths.map((path) => {
    const uniqPath = path.slice(commonPrefix.length);
    const pathEnt = (rootEnt[uniqPath] = {});
    const pathNode = node.schema.paths[path];

    const methods = Object.keys(pathNode);
    methods.forEach((method) => {
      const apiNode = pathNode[method];
      const methodEnt = (pathEnt[method] = {});

      const prefix = `${uniqPath.replace(/\//, "_")}_${method}`;

      if (apiNode.parameters) {
        const paramGroups = groupBy(apiNode.parameters, "in");
        const paramType = (methodEnt.paramType = {});
        Object.keys(paramGroups).forEach((inType) => {
          const keyName = uniqKeyName(
            cc.pascalCase(`${prefix}_${inType}_Params`)
          );
          if (!paramGroups[inType].length) {
            return;
          }

          if (inType === "body" && paramGroups[inType].length === 1) {
            paramType[inType] = {
              ...toCodeEntity(
                keyName,
                {
                  ...paramGroups[inType][0],
                  ...paramGroups[inType][0].schema,
                },
                node
              ),
              required: true,
            };
          } else {
            paramType[inType] = {
              name: keyName,
              code: toTs(
                new SchemaPath(
                  {
                    type: "object",
                    properties: paramGroups[inType].reduce((obj, def) => {
                      obj[def.name] = {
                        ...def,
                        ...def.schema,
                      };
                      return obj;
                    }, {}),
                    title: keyName,
                  },
                  node
                ),
                { ...opts, depth: 2 }
              ).trim(),
            };
          }
        });

        const responseType = (methodEnt.responseType = {});

        if (apiNode.responses["200"]) {
          const keyName = uniqKeyName(cc.pascalCase(`${prefix}_Res`));
          const okNode = {
            ...apiNode.responses["200"],
            ...apiNode.responses["200"].schema,
          };
          responseType["200"] = toCodeEntity(keyName, okNode, node);
        }
      }
    });
  });

  return {
    commonPrefix,
    data: rootEnt,
  };
}
