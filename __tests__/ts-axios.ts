/* eslint-disable */
/* @ts-nocheck */
import {
  responseDataAxios,
  pathRegexpAxios,
  stringDataAxios
} from "decorate-axios";
import merge from "lodash.merge";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

export interface SaveRelatedPhraseResult {
  /**
   * 0表示保存成功，1表示保存失败
   */
  code?: number;
  /**
   * 已存在的词组ids
   */
  duplicatePhraseIds?: number[];
  /**
   * 已存在的单词ids
   */
  duplicateWordIds?: number[];
  /**
   * 表示保存失败的原因
   */
  msg?: string;
}

export interface PhoneticVo {
  /**
   * 音标音频ossId
   */
  audioOssId?: string;
  /**
   * 音标内容
   */
  content?: string;
  /**
   * 类型 1: 英式音标 2: 美式音标
   */
  type?: number;
}

export interface Character {}

export interface IllustrativeSentenceVo {
  /**
   * 英文例句
   */
  enSentence?: string;
  /**
   * 例句音频OssId
   */
  ossId?: string;
  /**
   * 例句翻译
   */
  zhSentence?: string;
}

export interface PublishedFailedIds {}

export interface CreateVocabularyByCsvResult {
  ids?: number[];
  phase?: string;
  publishedFailedIds?: PublishedFailedIds;
  type?: string;
}

export interface PhraseVo {
  /**
   * 词组释义
   */
  paraphrases?: string[];
  /**
   * 词组id
   */
  phraseId?: number;
  /**
   * 词组拼写
   */
  spelling?: string;
}

export interface UsageContentVo {
  /**
   * 释义例句
   */
  illustrativeSentenceVOs?: IllustrativeSentenceVo[];
  /**
   * 释义用法
   */
  usage?: string;
}

export interface SpellingStructVo {
  id?: number;
  /**
   * 拼写
   */
  spelling?: string;
}

export interface ConjugateWordVo {
  /**
   * 同根词id
   */
  id?: number;
  /**
   * 同根词释义聚类展示
   */
  speechParaphraseVOs?: SpeechParaphraseVo[];
  /**
   * 拼写
   */
  spelling?: string;
}

export interface RootContentVo {
  content?: string;
}

export interface RelatedPhraseVo {
  /**
   * 阶段
   */
  phase?: string;
  /**
   * 新创建的词组
   */
  phraseList?: PhraseVo[];
  /**
   * 单词id
   */
  wordId?: number;
}

export interface KnowledgeId2Vocabularies {}

export interface ParaphraseIds2VOsMap {}

export interface VocabularyVo {
  /**
   * 词汇配图
   */
  attachmentImages?: string[];
  /**
   * 讲解模块
   */
  explainVOs?: ExplainVo[];
  id?: number;
  knowledgeId2Vocabularies?: KnowledgeId2Vocabularies;
  paraphraseIds2VOsMap?: ParaphraseIds2VOsMap;
  /**
   * 阶段
   */
  phase?: string;
  /**
   * 音标
   */
  phoneticVOs?: PhoneticVo[];
  /**
   * 相关词组ids
   */
  phraseIds?: number[];
  /**
   * 真题例句模块
   */
  practicalQuestionVOs?: PracticalQuestionVo[];
  /**
   * 词根id
   */
  rootId?: number;
  /**
   * 拼写
   */
  spelling?: string;
  /**
   * 发布状态 0:未发布 1:发布
   */
  status?: number;
  /**
   * 词汇类型 1 单词 2 词组
   */
  type?: number;
  /**
   * 词性变化
   */
  wordActivityVOs?: WordActivityVo[];
}

export interface ValidateResultVo {
  errorMsgSet?: string[];
  validateCode?: number;
}

export interface VocabularyDetailVo {
  /**
   * 同根词
   */
  conjugateWordDetailVO?: ConjugateWordDetailVo;
  /**
   * 词汇主键id
   */
  id?: number;
  /**
   * 释义
   */
  paraphraseVOs?: ParaphraseVo[];
  /**
   * 词汇内容
   */
  vocabularyVO?: VocabularyVo;
}

export interface VocabularyRootVo {
  /**
   * 词根内容
   */
  content?: string;
  /**
   * 词根id
   */
  id?: number;
}

export interface SpellingPhaseVo {
  id?: number;
  /**
   * 阶段
   */
  phase?: string;
  /**
   * 拼写
   */
  spelling?: string;
  /**
   * 发布状态 0:未发布 1:发布
   */
  status?: number;
  /**
   * 类型，1表示单词，2表示词组
   */
  type?: number;
}

export interface ExplainVo {
  /**
   * 讲解内容
   */
  content?: string;
  /**
   * 讲解名称
   */
  name?: string;
  /**
   * 讲解类型
   */
  type?: number;
}

export interface ParaphraseVo {
  /**
   * 英文释义
   */
  enParaphrase?: string;
  /**
   * 相关习题模块 ids
   */
  exercise?: number[];
  id?: number;
  /**
   * 释义顺序
   */
  ordinal?: number;
  /**
   * 词性类型
   */
  speechTypes?: number[];
  /**
   * 拼写
   */
  spelling?: string;
  /**
   * 词汇类型 1 单词 2 词组
   */
  type?: number;
  /**
   * 释义用法
   */
  usageContentVOs?: UsageContentVo[];
  /**
   * 单词id
   */
  wordId?: number;
  /**
   * 中文释义
   */
  zhParaphrase?: string;
}

export interface WordActivityVo {
  /**
   * 内容
   */
  content?: string[];
  /**
   * 类型
   */
  type?: number;
}

export interface ConjugateWordDetailVo {
  /**
   * 同根词
   */
  conjugateWordVOs?: ConjugateWordVo[];
  /**
   * 词根
   */
  vocabularyRootVO?: VocabularyRootVo;
}

export interface SpeechParaphraseVo {
  /**
   * 释义id
   */
  id?: number;
  /**
   * 词性类型
   */
  speechTypes?: number[];
  /**
   * 中文释义
   */
  zhParaphrase?: string;
}

export interface PracticalQuestionVo {
  /**
   * 例句音频oddId(只有截取部分内容展示成例句才有)
   */
  audioOssId?: string;
  /**
   * 原题id
   */
  questionId?: number;
  /**
   * 截取例句(只有截取部分内容展示成例句才有)
   */
  sentence?: string;
  /**
   * 截取例句翻译(只有截取部分内容展示成例句才有)
   */
  translation?: string;
  /**
   * 展示方式 0: 展示原题题干 1: 截取部分内容展示成例句
   */
  type?: number;
}

responseDataAxios()(axios);
pathRegexpAxios()(axios);
stringDataAxios()(axios);
const COMMON_PREFIX = "/tutor-cyber-corpus/:client/";
const COMMON_CONFIG = { responseData: true };
export interface BackdoorsAnalysisExcelJobPostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type BackdoorsAnalysisExcelJobPostResponseOk = any;

export function postBackdoorsAnalysisExcelJob(
  params?: BackdoorsAnalysisExcelJobPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<BackdoorsAnalysisExcelJobPostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "backdoors/analysis-excel-job",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ExercisesParaphraseIdCreateOrUpdateOrDeletePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface ExercisesParaphraseIdCreateOrUpdateOrDeletePostBodyParams {
  /**
   * exercises
   */
  exercises?: number[];
}
export type ExercisesParaphraseIdCreateOrUpdateOrDeletePostResponseOk = boolean;

export function postExercisesParaphraseIdCreateOrUpdateOrDelete(
  paraphraseId: any,
  params?: ExercisesParaphraseIdCreateOrUpdateOrDeletePostQueryParams,
  data?: ExercisesParaphraseIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ExercisesParaphraseIdCreateOrUpdateOrDeletePostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "exercises/:paraphraseId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          paraphraseId
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ExplainsWordIdCreateOrUpdateOrDeletePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface ExplainsWordIdCreateOrUpdateOrDeletePostBodyParams {
  /**
   * vos
   */
  vos?: ExplainVo[];
}
export type ExplainsWordIdCreateOrUpdateOrDeletePostResponseOk = boolean;

export function postExplainsWordIdCreateOrUpdateOrDelete(
  wordId: any,
  params?: ExplainsWordIdCreateOrUpdateOrDeletePostQueryParams,
  data?: ExplainsWordIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ExplainsWordIdCreateOrUpdateOrDeletePostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "explains/:wordId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          wordId
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostBodyParams {
  /**
   * vocabularyIds
   */
  vocabularyIds?: number[];
}
export type KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostResponseOk = boolean;

export function postKnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDelete(
  knowledgeId: any,
  params?: KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostQueryParams,
  data?: KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<
    KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostResponseOk
  >(
    merge(
      {
        url:
          COMMON_PREFIX +
          "knowledge-vocabulary/:knowledgeId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          knowledgeId
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ParaphrasesBatchQueryGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * wordIds
   */
  wordIds?: number[];
}
/**
 * OK
 */
export interface ParaphrasesBatchQueryGetResponseOk {}

export function getParaphrasesBatchQuery(
  params?: ParaphrasesBatchQueryGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesBatchQueryGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/batch-query",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ParaphrasesBatchSavePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface ParaphrasesBatchSavePostBodyParams {
  /**
   * paraphraseVOList
   */
  paraphraseVOList?: ParaphraseVo[];
}
export type ParaphrasesBatchSavePostResponseOk = number[];

export function postParaphrasesBatchSave(
  params?: ParaphrasesBatchSavePostQueryParams,
  data?: ParaphrasesBatchSavePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesBatchSavePostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/batch-save",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ParaphrasesIdDeleteDeleteQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type ParaphrasesIdDeleteDeleteResponseOk = boolean;

export function deleteParaphrasesIdDelete(
  id: any,
  params?: ParaphrasesIdDeleteDeleteQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesIdDeleteDeleteResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/:id/delete",
        method: "delete",
        pathData: {
          id
        },
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface ParaphrasesIdUpdatePutQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface ParaphrasesIdUpdatePutBodyParams {
  /**
   * paraphraseVO
   */
  paraphraseVO?: ParaphraseVo;
}
export type ParaphrasesIdUpdatePutResponseOk = boolean;

export function putParaphrasesIdUpdate(
  id: any,
  params?: ParaphrasesIdUpdatePutQueryParams,
  data?: ParaphrasesIdUpdatePutBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesIdUpdatePutResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/:id/update",
        method: "put",
        pathData: {
          id
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface PracticalQuestionsWordIdCreateOrUpdateOrDeletePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface PracticalQuestionsWordIdCreateOrUpdateOrDeletePostBodyParams {
  /**
   * vos
   */
  vos?: PracticalQuestionVo[];
}
export type PracticalQuestionsWordIdCreateOrUpdateOrDeletePostResponseOk = boolean;

export function postPracticalQuestionsWordIdCreateOrUpdateOrDelete(
  wordId: any,
  params?: PracticalQuestionsWordIdCreateOrUpdateOrDeletePostQueryParams,
  data?: PracticalQuestionsWordIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<PracticalQuestionsWordIdCreateOrUpdateOrDeletePostResponseOk>(
    merge(
      {
        url:
          COMMON_PREFIX + "practicalQuestions/:wordId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          wordId
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface TmpCreatePhraseByCsvPostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type TmpCreatePhraseByCsvPostResponseOk = CreateVocabularyByCsvResult;

export function postTmpCreatePhraseByCsv(
  params?: TmpCreatePhraseByCsvPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpCreatePhraseByCsvPostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/createPhraseByCsv",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface TmpCreateWordsByCsvPostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type TmpCreateWordsByCsvPostResponseOk = CreateVocabularyByCsvResult;

export function postTmpCreateWordsByCsv(
  params?: TmpCreateWordsByCsvPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpCreateWordsByCsvPostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/createWordsByCsv",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface TmpWriteNoMp3AudioIdJobGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type TmpWriteNoMp3AudioIdJobGetResponseOk = any;

export function getTmpWriteNoMp3AudioIdJob(
  params?: TmpWriteNoMp3AudioIdJobGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpWriteNoMp3AudioIdJobGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/writeNoMp3AudioIdJob",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularyRootsGetByRootContentGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * rootContent
   */
  rootContent?: string;
}
export type VocabularyRootsGetByRootContentGetResponseOk = VocabularyRootVo;

export function getVocabularyRootsGetByRootContent(
  params?: VocabularyRootsGetByRootContentGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularyRootsGetByRootContentGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularyRoots/getByRootContent",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularyRootsSuggestGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * 词根拼写
   */
  rootContent?: string;
}
export type VocabularyRootsSuggestGetResponseOk = VocabularyRootVo[];

export function getVocabularyRootsSuggest(
  params?: VocabularyRootsSuggestGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularyRootsSuggestGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularyRoots/suggest",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * 阶段 gaozhong/chuzhong
   */
  phase?: string;
  /**
   * 词汇类型 1 单词 2 词组
   */
  type?: number;
  /**
   * 发布状态 0:未发布 1:发布
   */
  status?: number;
}
/**
 * OK
 */
export interface VocabularysGetResponseOk {}

export function getVocabularys(
  params?: VocabularysGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysPostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface VocabularysPostBodyParams {
  /**
   * vocabularyVo
   */
  vocabularyVo?: VocabularyVo;
}
export type VocabularysPostResponseOk = number;

export function postVocabularys(
  params?: VocabularysPostQueryParams,
  data?: VocabularysPostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysPostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysByRootGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * rootContent
   */
  rootContent?: string;
}
export type VocabularysByRootGetResponseOk = SpellingStructVo[];

export function getVocabularysByRoot(
  params?: VocabularysByRootGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysByRootGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/byRoot",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysDetailIdGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type VocabularysDetailIdGetResponseOk = VocabularyDetailVo;

export function getVocabularysDetailId(
  id: any,
  params?: VocabularysDetailIdGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysDetailIdGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/detail/:id",
        method: "get",
        pathData: {
          id
        },
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysPhoneticDataGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * spelling
   */
  spelling?: string;
}
export type VocabularysPhoneticDataGetResponseOk = PhoneticVo[];

export function getVocabularysPhoneticData(
  params?: VocabularysPhoneticDataGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysPhoneticDataGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/phonetic-data",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysRelatedPhrasesBatchSavePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface VocabularysRelatedPhrasesBatchSavePostBodyParams {
  /**
   * vo
   */
  vo?: RelatedPhraseVo;
}
export type VocabularysRelatedPhrasesBatchSavePostResponseOk = SaveRelatedPhraseResult;

export function postVocabularysRelatedPhrasesBatchSave(
  params?: VocabularysRelatedPhrasesBatchSavePostQueryParams,
  data?: VocabularysRelatedPhrasesBatchSavePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysRelatedPhrasesBatchSavePostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/related-phrases/batch-save",
        method: "post",
        pathData: {},
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysSearchGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * 阶段 gaozhong/chuzhong
   */
  phase?: string;
  /**
   * 词汇类型 1 单词 2 词组
   */
  type?: number;
  /**
   * 拼写
   */
  spelling?: string;
}
export type VocabularysSearchGetResponseOk = VocabularyVo[];

export function getVocabularysSearch(
  params?: VocabularysSearchGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysSearchGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/search",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysSuggestGetQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
  /**
   * 拼写
   */
  spelling?: string;
  /**
   * 阶段 gaozhong/chuzhong
   */
  phase?: string;
  /**
   * 词汇类型 1 单词 2 词组
   */
  type?: number;
  /**
   * 发布状态：0，未发布；1，已发布；不传或者传 -1，不限制状态
   */
  status?: number;
  /**
   * suggestLimit
   */
  suggestLimit?: number;
}
export type VocabularysSuggestGetResponseOk = SpellingPhaseVo[];

export function getVocabularysSuggest(
  params?: VocabularysSuggestGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysSuggestGetResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/suggest",
        method: "get",
        pathData: {},
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysIdPutQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface VocabularysIdPutBodyParams {
  /**
   * vocabularyVo
   */
  vocabularyVo?: VocabularyVo;
}
export type VocabularysIdPutResponseOk = boolean;

export function putVocabularysId(
  id: any,
  params?: VocabularysIdPutQueryParams,
  data?: VocabularysIdPutBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdPutResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id",
        method: "put",
        pathData: {
          id
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysIdCancelPublishPutQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type VocabularysIdCancelPublishPutResponseOk = boolean;

export function putVocabularysIdCancelPublish(
  id: any,
  params?: VocabularysIdCancelPublishPutQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdCancelPublishPutResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/cancelPublish",
        method: "put",
        pathData: {
          id
        },
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysIdCreateOrUpdateOrDeletePostQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export interface VocabularysIdCreateOrUpdateOrDeletePostBodyParams {
  /**
   * rootContentVO
   */
  rootContentVO?: RootContentVo;
}
export type VocabularysIdCreateOrUpdateOrDeletePostResponseOk = any;

export function postVocabularysIdCreateOrUpdateOrDelete(
  id: any,
  params?: VocabularysIdCreateOrUpdateOrDeletePostQueryParams,
  data?: VocabularysIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdCreateOrUpdateOrDeletePostResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          id
        },
        params,
        data
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export interface VocabularysIdPublishPutQueryParams {
  /**
   * 用户ID
   */
  _debug_user_?: number;
  /**
   * productId
   */
  _productId?: number;
  /**
   * hostProductId
   */
  _hostProductId?: number;
  /**
   * UDID
   */
  UDID?: string;
  /**
   * version
   */
  version?: string;
  /**
   * LDAP
   */
  _debug_ldap_?: string;
}
export type VocabularysIdPublishPutResponseOk = ValidateResultVo[];

export function putVocabularysIdPublish(
  id: any,
  params?: VocabularysIdPublishPutQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdPublishPutResponseOk>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/publish",
        method: "put",
        pathData: {
          id
        },
        params
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}
