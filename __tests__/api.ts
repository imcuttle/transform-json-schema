/* eslint-disable */
// @ts-nocheck
import {
  BackdoorsAnalysisExcelJobPostQueryParams,
  BackdoorsAnalysisExcelJobPostRes200,
  ExercisesParaphraseIdCreateOrUpdateOrDeletePostQueryParams,
  ExercisesParaphraseIdCreateOrUpdateOrDeletePostBodyParams,
  ExercisesParaphraseIdCreateOrUpdateOrDeletePostRes200,
  ExplainsWordIdCreateOrUpdateOrDeletePostQueryParams,
  ExplainsWordIdCreateOrUpdateOrDeletePostBodyParams,
  ExplainsWordIdCreateOrUpdateOrDeletePostRes200,
  KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostQueryParams,
  KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostBodyParams,
  KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostRes200,
  ParaphrasesBatchQueryGetQueryParams,
  ParaphrasesBatchQueryGetRes200,
  ParaphrasesBatchSavePostQueryParams,
  ParaphrasesBatchSavePostBodyParams,
  ParaphrasesBatchSavePostRes200,
  ParaphrasesIdDeleteDeleteQueryParams,
  ParaphrasesIdDeleteDeleteRes200,
  ParaphrasesIdUpdatePutQueryParams,
  ParaphrasesIdUpdatePutBodyParams,
  ParaphrasesIdUpdatePutRes200,
  PracticalQuestionsWordIdCreateOrUpdateOrDeletePostQueryParams,
  PracticalQuestionsWordIdCreateOrUpdateOrDeletePostBodyParams,
  PracticalQuestionsWordIdCreateOrUpdateOrDeletePostRes200,
  TmpCreatePhraseByCsvPostQueryParams,
  TmpCreatePhraseByCsvPostRes200,
  TmpCreateWordsByCsvPostQueryParams,
  TmpCreateWordsByCsvPostRes200,
  TmpWriteNoMp3AudioIdJobGetQueryParams,
  TmpWriteNoMp3AudioIdJobGetRes200,
  VocabularyRootsGetByRootContentGetQueryParams,
  VocabularyRootsGetByRootContentGetRes200,
  VocabularyRootsSuggestGetQueryParams,
  VocabularyRootsSuggestGetRes200,
  VocabularysGetQueryParams,
  VocabularysGetRes200,
  VocabularysPostQueryParams,
  VocabularysPostBodyParams,
  VocabularysPostRes200,
  VocabularysByRootGetQueryParams,
  VocabularysByRootGetRes200,
  VocabularysDetailIdGetQueryParams,
  VocabularysDetailIdGetRes200,
  VocabularysPhoneticDataGetQueryParams,
  VocabularysPhoneticDataGetRes200,
  VocabularysRelatedPhrasesBatchSavePostQueryParams,
  VocabularysRelatedPhrasesBatchSavePostBodyParams,
  VocabularysRelatedPhrasesBatchSavePostRes200,
  VocabularysSearchGetQueryParams,
  VocabularysSearchGetRes200,
  VocabularysSuggestGetQueryParams,
  VocabularysSuggestGetRes200,
  VocabularysIdPutQueryParams,
  VocabularysIdPutBodyParams,
  VocabularysIdPutRes200,
  VocabularysIdCancelPublishPutQueryParams,
  VocabularysIdCancelPublishPutRes200,
  VocabularysIdCreateOrUpdateOrDeletePostQueryParams,
  VocabularysIdCreateOrUpdateOrDeletePostBodyParams,
  VocabularysIdCreateOrUpdateOrDeletePostRes200,
  VocabularysIdPublishPutQueryParams,
  VocabularysIdPublishPutRes200,
} from "./type";
import {
  responseDataAxios,
  pathRegexpAxios,
  stringDataAxios,
} from "decorate-axios";
import merge from "lodash.merge";
import { AxiosRequestConfig } from "axios";
import axios from "axios";

// Api code start
responseDataAxios()(axios);
pathRegexpAxios()(axios);
stringDataAxios()(axios);

const COMMON_PREFIX = "/tutor-cyber-corpus/:client/";
const COMMON_CONFIG = { responseData: true };

export function postBackdoorsAnalysisExcelJob(
  params?: BackdoorsAnalysisExcelJobPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<BackdoorsAnalysisExcelJobPostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "backdoors/analysis-excel-job",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postExercisesParaphraseIdCreateOrUpdateOrDelete(
  paraphraseId: any,
  params?: ExercisesParaphraseIdCreateOrUpdateOrDeletePostQueryParams,
  data?: ExercisesParaphraseIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ExercisesParaphraseIdCreateOrUpdateOrDeletePostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "exercises/:paraphraseId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          paraphraseId,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postExplainsWordIdCreateOrUpdateOrDelete(
  wordId: any,
  params?: ExplainsWordIdCreateOrUpdateOrDeletePostQueryParams,
  data?: ExplainsWordIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ExplainsWordIdCreateOrUpdateOrDeletePostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "explains/:wordId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          wordId,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postKnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDelete(
  knowledgeId: any,
  params?: KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostQueryParams,
  data?: KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<KnowledgeVocabularyKnowledgeIdCreateOrUpdateOrDeletePostRes200>(
    merge(
      {
        url:
          COMMON_PREFIX +
          "knowledge-vocabulary/:knowledgeId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          knowledgeId,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getParaphrasesBatchQuery(
  params?: ParaphrasesBatchQueryGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesBatchQueryGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/batch-query",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postParaphrasesBatchSave(
  params?: ParaphrasesBatchSavePostQueryParams,
  data?: ParaphrasesBatchSavePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesBatchSavePostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/batch-save",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function deleteParaphrasesIdDelete(
  id: any,
  params?: ParaphrasesIdDeleteDeleteQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesIdDeleteDeleteRes200>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/:id/delete",
        method: "delete",
        pathData: {
          id,
        },
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function putParaphrasesIdUpdate(
  id: any,
  params?: ParaphrasesIdUpdatePutQueryParams,
  data?: ParaphrasesIdUpdatePutBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<ParaphrasesIdUpdatePutRes200>(
    merge(
      {
        url: COMMON_PREFIX + "paraphrases/:id/update",
        method: "put",
        pathData: {
          id,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postPracticalQuestionsWordIdCreateOrUpdateOrDelete(
  wordId: any,
  params?: PracticalQuestionsWordIdCreateOrUpdateOrDeletePostQueryParams,
  data?: PracticalQuestionsWordIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<PracticalQuestionsWordIdCreateOrUpdateOrDeletePostRes200>(
    merge(
      {
        url:
          COMMON_PREFIX + "practicalQuestions/:wordId/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          wordId,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postTmpCreatePhraseByCsv(
  params?: TmpCreatePhraseByCsvPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpCreatePhraseByCsvPostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/createPhraseByCsv",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postTmpCreateWordsByCsv(
  params?: TmpCreateWordsByCsvPostQueryParams,
  data?: FormData,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpCreateWordsByCsvPostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/createWordsByCsv",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getTmpWriteNoMp3AudioIdJob(
  params?: TmpWriteNoMp3AudioIdJobGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<TmpWriteNoMp3AudioIdJobGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "tmp/writeNoMp3AudioIdJob",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularyRootsGetByRootContent(
  params?: VocabularyRootsGetByRootContentGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularyRootsGetByRootContentGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularyRoots/getByRootContent",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularyRootsSuggest(
  params?: VocabularyRootsSuggestGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularyRootsSuggestGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularyRoots/suggest",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularys(
  params?: VocabularysGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postVocabularys(
  params?: VocabularysPostQueryParams,
  data?: VocabularysPostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysPostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularysByRoot(
  params?: VocabularysByRootGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysByRootGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/byRoot",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularysDetailId(
  id: any,
  params?: VocabularysDetailIdGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysDetailIdGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/detail/:id",
        method: "get",
        pathData: {
          id,
        },
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularysPhoneticData(
  params?: VocabularysPhoneticDataGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysPhoneticDataGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/phonetic-data",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postVocabularysRelatedPhrasesBatchSave(
  params?: VocabularysRelatedPhrasesBatchSavePostQueryParams,
  data?: VocabularysRelatedPhrasesBatchSavePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysRelatedPhrasesBatchSavePostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/related-phrases/batch-save",
        method: "post",
        pathData: {},
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularysSearch(
  params?: VocabularysSearchGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysSearchGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/search",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function getVocabularysSuggest(
  params?: VocabularysSuggestGetQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysSuggestGetRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/suggest",
        method: "get",
        pathData: {},
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function putVocabularysId(
  id: any,
  params?: VocabularysIdPutQueryParams,
  data?: VocabularysIdPutBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdPutRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id",
        method: "put",
        pathData: {
          id,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function putVocabularysIdCancelPublish(
  id: any,
  params?: VocabularysIdCancelPublishPutQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdCancelPublishPutRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/cancelPublish",
        method: "put",
        pathData: {
          id,
        },
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function postVocabularysIdCreateOrUpdateOrDelete(
  id: any,
  params?: VocabularysIdCreateOrUpdateOrDeletePostQueryParams,
  data?: VocabularysIdCreateOrUpdateOrDeletePostBodyParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdCreateOrUpdateOrDeletePostRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/createOrUpdateOrDelete",
        method: "post",
        pathData: {
          id,
        },
        params,
        data,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}

export function putVocabularysIdPublish(
  id: any,
  params?: VocabularysIdPublishPutQueryParams,
  axiosRequestConfig?: AxiosRequestConfig
) {
  return axios<VocabularysIdPublishPutRes200>(
    merge(
      {
        url: COMMON_PREFIX + "vocabularys/:id/publish",
        method: "put",
        pathData: {
          id,
        },
        params,
      },
      COMMON_CONFIG,
      axiosRequestConfig
    )
  );
}
