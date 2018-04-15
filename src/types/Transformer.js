/**
 * @flow
 * @file Transformer
 * @author Cuttle Cong
 * @date 2018/4/14
 * @description
 */

import { SchemaPath } from './Schema'

export type Transformer = (options: any) => SchemaPath | Promise<SchemaPath>
