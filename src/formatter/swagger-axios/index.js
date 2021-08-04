import { SchemaPath } from "../../types/Schema";
import tsTypeTransform from "../ts";
import axiosTransform, { createGetUniqName } from "./axios-transform";
import camelCase from "lodash.camelcase";
import uniq from "lodash.uniq";
import { AxiosPromise } from "axios";

const getImportStatement = (source, key = camelCase(source)) => {
  return {
    code: `import ${key} from ${JSON.stringify(source)};`,
    key,
  };
};

const getTokens = (string) => {
  const chunks = string.match(/{(.+?)}/g);
  return (chunks || []).map((x) => x.slice(1, -1));
};

const tUrl = (url) => url.replace(/{(.+?)}/g, `:$1`);

const addImport = (codes, ...args) => {
  const { code, key } = getImportStatement(...args);
  codes.unshift(code);
  return key;
};

export default function swaggerAxios(
  node: SchemaPath,
  {
    axiosRequest = "axios",
    commonConfig = { responseData: true },
    splitModule = false,
    typeRequest = "./type",
    prefix,
    suffix,
    ...options
  }: { axiosRequest?: string } = {}
): { tsType: string, api: string, index: string } {
  const uniqKeyName = createGetUniqName();
  const tsTypeCodes = [tsTypeTransform(node, options) + "\n"];
  let apiCode = "";
  const axiosResult = axiosTransform(node, options);

  if (axiosResult) {
    const codes = [];
    const addImportInner = (...args) =>
      splitModule ? addImport(codes, ...args) : addImport(tsTypeCodes, ...args);
    const maybeImportMap = {};
    const addTypeImportOrInject = (code, key) => {
      const source = typeRequest;
      if (splitModule) {
        tsTypeCodes.push(code);
        const result = key.match(/^([A-Z$_][$_a-zA-Z0-9]*)(\[])?$/) || key.match(/^Array<\s*([A-Z$_][$_a-zA-Z0-9]*)\s*>$/)
        if (!!result && !['Date', 'Object'].includes(result[1])) {
          let keys = (maybeImportMap[source] = maybeImportMap[source] || []);
          keys.push(result[1]);
          maybeImportMap[source] = uniq(keys);
        }
      } else {
        tsTypeCodes.push(code);
      }
    };
    const addTypeImportOrInjectEnd = () => {
      Object.keys(maybeImportMap).forEach((source) => {
        const keys = maybeImportMap[source];
        addImport(codes, source, `{ ${keys.join(", ")} }`);
      });
    };

    codes.push("\n// Api code start");

    const axiosKey = addImportInner(axiosRequest, "axios");
    addImportInner("axios", "{ AxiosPromise, AxiosRequestConfig }");
    addImportInner("lodash.merge", "merge");
    addImportInner(
      "decorate-axios",
      "{ responseDataAxios, pathRegexpAxios, stringDataAxios }"
    );

    codes.push(
      `responseDataAxios()(${axiosKey});`,
      `pathRegexpAxios()(${axiosKey});`,
      `stringDataAxios()(${axiosKey});\n`
    );
    const { commonPrefix, data } = axiosResult;
    codes.push(
      `const COMMON_PREFIX = ${JSON.stringify(tUrl(commonPrefix) || "")};`
    );
    codes.push(
      `const COMMON_CONFIG: AxiosRequestConfig & ${
        commonConfig && commonConfig.hasOwnProperty("responseData")
          ? JSON.stringify({ responseData: commonConfig.responseData })
          : `{}`
      } = ${JSON.stringify(commonConfig)};\n`,
      `type RESPONSEDATA_RES<B, T> = B extends true ? Promise<T> : AxiosPromise<T>`
    );

    Object.keys(data).forEach((pathChunk) => {
      Object.keys(data[pathChunk]).forEach((method) => {
        const { responseType, paramType } = data[pathChunk][method];
        const pathTokens = getTokens(pathChunk);
        const reqCommonPrefix = method + " " + pathChunk;
        const argsChunks = [];
        pathTokens.forEach((token) => {
          argsChunks.push(`${token}: any`);
        });

        let hasData = false;
        if (paramType) {
          if (paramType.query && method.toLowerCase() === "get") {
            addTypeImportOrInject(paramType.query.code, paramType.query.name);
            argsChunks.push(
              `params${paramType.query.required ? "" : "?"}: ${
                paramType.query.name
              }`
            );
          }

          hasData = paramType.body || paramType.formData;
          if (paramType.body) {
            addTypeImportOrInject(paramType.body.code, paramType.body.name);
            argsChunks.push(
              `data${paramType.body.required ? "" : "?"}: ${
                paramType.body.name
              }`
            );
          } else if (paramType.formData) {
            argsChunks.push(
              `data${paramType.formData.required ? "" : "?"}: FormData`
            );
          }

          if (paramType.query && method.toLowerCase() !== "get") {
            addTypeImportOrInject(paramType.query.code, paramType.query.name);
            argsChunks.push(
              `params${paramType.query.required ? "" : "?"}: ${
                paramType.query.name
              }`
            );
          }
        }

        let responseTypeKey = "any";
        if (responseType && responseType["200"]) {
          responseTypeKey = responseType["200"].name;
          // if (responseType["200"].code) {
            addTypeImportOrInject(responseType["200"].code, responseTypeKey);
          // }
        }

        argsChunks.push(
          `axiosRequestConfig?: AxiosRequestConfig & { responseData?: B }`
        );
        codes.push(`
      export function ${uniqKeyName(
        camelCase(reqCommonPrefix)
      )}<B extends boolean = (typeof COMMON_CONFIG)['responseData']>(${argsChunks.join(
          ", "
        )}) {
        return ${axiosKey}(merge({
          url: COMMON_PREFIX + ${JSON.stringify(tUrl(pathChunk))},
          method: ${JSON.stringify(method.toUpperCase())},
          pathData: {
            ${pathTokens.map((token) => `${token},`).join("\n")}
          },
          ${paramType && paramType.query ? "params," : ""}${
          hasData ? "data," : ""
        }
        }, COMMON_CONFIG, axiosRequestConfig)) as RESPONSEDATA_RES<B, ${responseTypeKey}>
      }
      `);
      });
    });
    addTypeImportOrInjectEnd();

    apiCode = codes.join("\n");
  }

  if (!splitModule) {
    return `${prefix || ""}${tsTypeCodes.concat(apiCode).join("\n")}${
      suffix || ""
    }`;
  }

  return {
    "type.ts": `${prefix || ""}${tsTypeCodes.join("\n")}${suffix || ""}`,
    "api.ts": `${prefix || ""}${apiCode}${suffix || ""}`,
  };
}
