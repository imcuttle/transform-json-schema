import { SchemaPath } from "../../types/Schema";
import toTs, { fillType } from "../ts";
import groupBy from "lodash.groupby";
import * as cc from "change-case";
import commonSubString from "common-substrings";
import escapeRegExp from "escape-string-regexp";

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

function toCodeEntity(keyName, node, parent, opts) {
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
        ),
        { ...opts, depth: 2 }
      ).trim(),
    };
  } else if (node.$ref) {
    const refPath = parent.ref(node.$ref);
    return {
      name: cc.pascalCase(refPath.schema.title),
      code: "",
    };
  } else if (node.type === "array") {
    if (!node.items || !node.items.$ref) {
      return {
        name: fillType(node),
        code: "",
      };
    } else {
      const refPath = parent.ref(node.items.$ref);
      if (refPath && !refPath.isEmpty()) {
        return {
          name: `${cc.pascalCase(refPath.schema.title)}[]`,
          code: "",
        };
      } else {
        return {
          name: "any[]",
          code: "",
        };
      }
    }
  } else {
    return {
      name: fillType(node),
      code: "",
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
  return uniqKeyName;
}

export default function axiosTransform(node: SchemaPath, opts?: any) {
  const uniqKeyName = createGetUniqName();
  const uniqCodeMap = new Map();
  function innerToCodeEntity(keyName, innerNode, { optimize = true } = {}) {
    if (innerNode && innerNode.type === "object") {
      keyName = uniqKeyName(keyName);
    }
    const result = toCodeEntity(keyName, innerNode, node, opts);
    if (
      optimize &&
      innerNode &&
      innerNode.type === "object" &&
      result.code &&
      result.code.trim &&
      result.code.trim()
    ) {
      const codeKey = result.code.trim().replace(result.name, "");
      const prev = uniqCodeMap.get(codeKey);
      if (prev && !prev.hits) {
        prev.result.name = uniqKeyName("CommonParams");
        prev.result.code = toCodeEntity(
          prev.result.name,
          innerNode,
          node,
          opts
        ).code;
      }
      if (prev) {
        prev.hits++;
        return {
          name: prev.result.name,
          code: "",
        };
      }
      uniqCodeMap.set(codeKey, { result, hits: 0 });
    }
    return result;
  }

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
  const commonSubStrings = commonSubString(paths, {
    minOccurrence: paths.length,
    minLength: 2,
  });

  paths.forEach((path) => {
    let uniqPath = path
    commonSubStrings.forEach(subStr => {
      uniqPath = uniqPath.replace(new RegExp(escapeRegExp(subStr.name), 'g'), '')
    })
    const pathEnt = (rootEnt[uniqPath] = {});
    const pathNode = node.schema.paths[path];

    const methods = Object.keys(pathNode);
    methods.forEach((method) => {
      const apiNode = pathNode[method];
      const methodEnt = (pathEnt[method] = { path });

      const prefix = `${uniqPath.replace(/\//, "_")}_${method}`;

      if (apiNode.parameters) {
        const paramGroups = groupBy(apiNode.parameters, "in");
        const paramType = (methodEnt.paramType = {});
        Object.keys(paramGroups).forEach((inType) => {
          if (!paramGroups[inType].length) {
            return;
          }

          const keyName = cc.pascalCase(`${prefix} ${inType} Params`);

          if (inType === "body" && paramGroups[inType].length === 1) {
            paramType[inType] = {
              ...innerToCodeEntity(keyName, {
                ...paramGroups[inType][0],
                ...paramGroups[inType][0].schema,
              }),
              required: true,
            };
          } else {
            paramType[inType] = innerToCodeEntity(
              keyName,
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
              { optimize: inType !== "path" }
            );
          }
        });

        const responseType = (methodEnt.responseType = {});

        if (apiNode.responses["200"]) {
          const keyName = cc.pascalCase(`${prefix} Res`);
          const okNode = {
            ...apiNode.responses["200"],
            ...apiNode.responses["200"].schema,
          };
          responseType["200"] = innerToCodeEntity(keyName, okNode, {
            optimize: false,
          });
        }
      }
    });
  });

  return {
    commonSubStrings: commonSubStrings.map(x => x.name),
    data: rootEnt,
  };
}
