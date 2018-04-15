/**
 * @flow
 * @file Formatter
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */

import { SchemaPath } from './Schema'

export type Formatter = (schemaPath: SchemaPath, options?: any) => Promise<any> | any
