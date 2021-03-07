import * as t from "walli";

/**
 *
 * @typedef {AcceptGrantDTOClass}
 */
export class AcceptGrantDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ grantsId: t.number }).check(req);
  }
}
export const acceptGrantDto = t.util.createFinalVerifiable(AcceptGrantDTOClass);

/**
 *
 * @typedef {AgreementQueryDTOClass}
 */
export class AgreementQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ language: t.string, pageNum: t.number, pageSize: t.number })
      .check(req);
  }
}
export const agreementQueryDto = t.util.createFinalVerifiable(
  AgreementQueryDTOClass
);

/**
 *
 * @typedef {AgreementSuggestVOClass}
 */
export class AgreementSuggestVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ agreeId: t.number, agreeName: t.string, agreeNum: t.string })
      .check(req);
  }
}
export const agreementSuggestVo = t.util.createFinalVerifiable(
  AgreementSuggestVOClass
);

/**
 *
 * @typedef {AgreementUpdateDTOClass}
 */
export class AgreementUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeContentUs: t.string,
        agreeContentZh: t.string,
        agreeId: t.number,
        agreeName: t.string,
        signCodeEn: t.string,
        signCodeZh: t.string,
      })
      .check(req);
  }
}
export const agreementUpdateDto = t.util.createFinalVerifiable(
  AgreementUpdateDTOClass
);

/**
 *
 * @typedef {AgreementVOClass}
 */
export class AgreementVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        agreeName: t.string,
        agreeNum: t.string,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        edit: edit,
        esopType: t.string,
        isSignPage: t.string,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        map: map,
        operations: t.array,
        planId: t.number,
        planStatus: t.string,
      })
      .check(req);
  }
}
export const agreementVo = t.util.createFinalVerifiable(AgreementVOClass);

/**
 * 属性是否可以编辑
 * @typedef {editClass}
 */
export class editClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const edit = t.util.createFinalVerifiable(editClass);

/**
 * 国际化
 * @typedef {mapClass}
 */
export class mapClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const map = t.util.createFinalVerifiable(mapClass);

/**
 *
 * @typedef {AgreementViewVOClass}
 */
export class AgreementViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeContentUs: t.string,
        agreeContentZh: t.string,
        agreeId: t.number,
        agreeName: t.string,
        agreeNum: t.string,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        edit: t.object,
        esopType: t.string,
        hasSignCodeUs: t.string,
        hasSignCodeZh: t.string,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        map: t.object,
        operations: t.array,
        signPageNameUs: t.string,
        signPageNameZh: t.string,
      })
      .check(req);
  }
}
export const agreementViewVo = t.util.createFinalVerifiable(
  AgreementViewVOClass
);

/**
 *
 * @typedef {AnalyzeMovePanelVOClass}
 */
export class AnalyzeMovePanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        deductionStatus: t.array,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        grantMoveEndDate: t.string,
        grantMoveStartDate: t.string,
        grantStatus: t.array,
        operation: t.array,
        operationRole: t.array,
        paymentStatus: t.array,
        personMoveEndDate: t.string,
        personMoveStartDate: t.string,
      })
      .check(req);
  }
}
export const analyzeMovePanelVo = t.util.createFinalVerifiable(
  AnalyzeMovePanelVOClass
);

/**
 *
 * @typedef {AnalyzePanelVOClass}
 */
export class AnalyzePanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        employeeType: t.array,
        grantCode: t.string,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        grantRole: t.array,
        grantStatus: t.array,
        operation: t.array,
      })
      .check(req);
  }
}
export const analyzePanelVo = t.util.createFinalVerifiable(AnalyzePanelVOClass);

/**
 *
 * @typedef {AnalyzeQuitPanelVOClass}
 */
export class AnalyzeQuitPanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        operation: t.array,
        operationRole: t.array,
        paymentStatus: t.array,
        quitDateEnd: t.string,
        quitDateStart: t.string,
      })
      .check(req);
  }
}
export const analyzeQuitPanelVo = t.util.createFinalVerifiable(
  AnalyzeQuitPanelVOClass
);

/**
 *
 * @typedef {AscrRuleDTOClass}
 */
export class AscrRuleDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ grantAmount: t.number, grantDate: t.string }).check(req);
  }
}
export const ascrRuleDto = t.util.createFinalVerifiable(AscrRuleDTOClass);

/**
 *
 * @typedef {AscriptionInfoVOClass}
 */
export class AscriptionInfoVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascrDate: t.string,
        ascrFlag: t.string,
        ascrNumber: t.number,
        ascriptionId: t.number,
        comments: t.string,
        map: t.object,
      })
      .check(req);
  }
}
export const ascriptionInfoVo = t.util.createFinalVerifiable(
  AscriptionInfoVOClass
);

/**
 *
 * @typedef {AscriptionSimpleVOClass}
 */
export class AscriptionSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ ascrDate: t.string, ascrNumber: t.number, editFlag: t.boolean })
      .check(req);
  }
}
export const ascriptionSimpleVo = t.util.createFinalVerifiable(
  AscriptionSimpleVOClass
);

/**
 *
 * @typedef {AscriptionVOClass}
 */
export class AscriptionVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ grantsId: t.number, planName: t.string, rsAscrList: t.array })
      .check(req);
  }
}
export const ascriptionVo = t.util.createFinalVerifiable(AscriptionVOClass);

/**
 *
 * @typedef {BussLineCreateDTOClass}
 */
export class BussLineCreateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineName: t.string,
        comments: t.string,
        leadingBp: t.array,
        operationCode: t.string,
      })
      .check(req);
  }
}
export const bussLineCreateDto = t.util.createFinalVerifiable(
  BussLineCreateDTOClass
);

/**
 *
 * @typedef {BussLineOrgCreateDTOClass}
 */
export class BussLineOrgCreateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        comments: t.string,
        orgId: t.number,
        orgName: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const bussLineOrgCreateDto = t.util.createFinalVerifiable(
  BussLineOrgCreateDTOClass
);

/**
 *
 * @typedef {BussLineOrgQueryDTOClass}
 */
export class BussLineOrgQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        flag: t.number,
        orgName: t.string,
        pageNum: t.number,
        pageSize: t.number,
      })
      .check(req);
  }
}
export const bussLineOrgQueryDto = t.util.createFinalVerifiable(
  BussLineOrgQueryDTOClass
);

/**
 *
 * @typedef {BussLineOrgUpdateDTOClass}
 */
export class BussLineOrgUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussOrgId: t.number,
        comments: t.string,
        endDate: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const bussLineOrgUpdateDto = t.util.createFinalVerifiable(
  BussLineOrgUpdateDTOClass
);

/**
 *
 * @typedef {BussLineQueryTempDTOClass}
 */
export class BussLineQueryTempDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ bussLineName: t.string, pageNum: t.number, pageSize: t.number })
      .check(req);
  }
}
export const bussLineQueryTempDto = t.util.createFinalVerifiable(
  BussLineQueryTempDTOClass
);

/**
 *
 * @typedef {BussLineSuggestVOClass}
 */
export class BussLineSuggestVOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ bussLineId: t.number, bussLineName: t.string }).check(req);
  }
}
export const bussLineSuggestVo = t.util.createFinalVerifiable(
  BussLineSuggestVOClass
);

/**
 *
 * @typedef {BussLineUpdateDTOClass}
 */
export class BussLineUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        bussLineName: t.string,
        comments: t.string,
        leadingBp: t.array,
        operationCode: t.string,
      })
      .check(req);
  }
}
export const bussLineUpdateDto = t.util.createFinalVerifiable(
  BussLineUpdateDTOClass
);

/**
 *
 * @typedef {BussLineVOClass}
 */
export class BussLineVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        bussLineName: t.string,
        comments: t.string,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        departmentNum: t.number,
        edit: t.object,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        leadingBp: t.array,
        leadingBpIdStr: t.string,
        map: t.object,
        operations: t.array,
        status: t.string,
      })
      .check(req);
  }
}
export const bussLineVo = t.util.createFinalVerifiable(BussLineVOClass);

/**
 *
 * @typedef {BussOrgLogListVOClass}
 */
export class BussOrgLogListVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const bussOrgLogListVo = t.util.createFinalVerifiable(
  BussOrgLogListVOClass
);

/**
 *
 * @typedef {BussOrgLogVOClass}
 */
export class BussOrgLogVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        dataFlag: t.string,
        endDate: t.string,
        logId: t.number,
        orgName: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const bussOrgLogVo = t.util.createFinalVerifiable(BussOrgLogVOClass);

/**
 *
 * @typedef {CABUpdateMoveVoClass}
 */
export class CABUpdateMoveVoClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        moveDate: t.string,
        planName: t.string,
        refundNumber: t.number,
        retainAscriEd: t.number,
      })
      .check(req);
  }
}
export const cabUpdateMoveVo = t.util.createFinalVerifiable(
  CABUpdateMoveVoClass
);

/**
 *
 * @typedef {CGrantForRSVOClass}
 */
export class CGrantForRSVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        alreadyFound: t.number,
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        canceled: t.number,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        currentStockPrice: t.number,
        currentStockStartDate: t.string,
        edit: t.object,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        limitDate: t.string,
        map: t.object,
        operations: t.array,
        planName: t.string,
        price: t.number,
      })
      .check(req);
  }
}
export const cGrantForRsvo = t.util.createFinalVerifiable(CGrantForRSVOClass);

/**
 *
 * @typedef {CGrantForSOVOClass}
 */
export class CGrantForSOVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        canceled: t.number,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        currentStockPrice: t.number,
        currentStockStartDate: t.string,
        edit: t.object,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        map: t.object,
        operations: t.array,
        planName: t.string,
        price: t.number,
      })
      .check(req);
  }
}
export const cGrantForSovo = t.util.createFinalVerifiable(CGrantForSOVOClass);

/**
 *
 * @typedef {CancelSimpleVOClass}
 */
export class CancelSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        cancelDate: timestamp,
        cancelNumber: t.number,
        comments: t.string,
        map: t.object,
      })
      .check(req);
  }
}
export const cancelSimpleVo = t.util.createFinalVerifiable(CancelSimpleVOClass);

/**
 *
 * @typedef {CancelVOClass}
 */
export class CancelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriEd: t.array,
        ascriIng: t.array,
        grantsId: t.number,
        planName: t.string,
      })
      .check(req);
  }
}
export const cancelVo = t.util.createFinalVerifiable(CancelVOClass);

/**
 *
 * @typedef {CodeAndValueVOClass}
 */
export class CodeAndValueVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ code: t.string, selectFlag: t.string, value: t.string })
      .check(req);
  }
}
export const codeAndValueVo = t.util.createFinalVerifiable(CodeAndValueVOClass);

/**
 *
 * @typedef {DateCheckDTOClass}
 */
export class DateCheckDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantType: t.string,
        grantsDate: t.string,
        personId: t.number,
        planId: t.number,
      })
      .check(req);
  }
}
export const dateCheckDto = t.util.createFinalVerifiable(DateCheckDTOClass);

/**
 *
 * @typedef {DepartmentSimpleVOClass}
 */
export class DepartmentSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ orgId: t.number, orgName: t.string }).check(req);
  }
}
export const departmentSimpleVo = t.util.createFinalVerifiable(
  DepartmentSimpleVOClass
);

/**
 *
 * @typedef {DepartmentSuggestVOClass}
 */
export class DepartmentSuggestVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ orgId: t.number, orgName: t.string, planId: t.number })
      .check(req);
  }
}
export const departmentSuggestVo = t.util.createFinalVerifiable(
  DepartmentSuggestVOClass
);

/**
 *
 * @typedef {DepartmentVOClass}
 */
export class DepartmentVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        bussLineName: t.string,
        bussOrgId: t.number,
        comments: t.string,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        deleteDate: timestamp,
        edit: t.object,
        endDate: t.string,
        flag: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        map: t.object,
        operations: t.array,
        orgId: t.number,
        orgName: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const departmentVo = t.util.createFinalVerifiable(DepartmentVOClass);

/**
 *
 * @typedef {EmployeeGrantsDataVOClass}
 */
export class EmployeeGrantsDataVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        departmentName: t.string,
        email: t.string,
        employeeNumber: t.string,
        fullName: t.string,
        periodOfServiceId: t.number,
        personId: t.number,
        positionName: t.string,
        serviceStartDate: t.string,
        suggestId: t.number,
        suggestValue: t.string,
      })
      .check(req);
  }
}
export const employeeGrantsDataVo = t.util.createFinalVerifiable(
  EmployeeGrantsDataVOClass
);

/**
 *
 * @typedef {EmployeeGrantsVOClass}
 */
export class EmployeeGrantsVOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ list: t.array, type: t.string }).check(req);
  }
}
export const employeeGrantsVo = t.util.createFinalVerifiable(
  EmployeeGrantsVOClass
);

/**
 *
 * @typedef {EmployeeVOClass}
 */
export class EmployeeVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        departmentName: t.string,
        email: t.string,
        employeeNumber: t.string,
        fullName: t.string,
        periodOfServiceId: t.number,
        personId: t.number,
        positionName: t.string,
        serviceStartDate: t.string,
      })
      .check(req);
  }
}
export const employeeVo = t.util.createFinalVerifiable(EmployeeVOClass);

/**
 *
 * @typedef {EsopMenuVOClass}
 */
export class EsopMenuVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        appId: t.number,
        childList: t.array,
        funcCode: t.string,
        funcDesc: t.string,
        funcName: t.string,
        resUrl: t.string,
        respId: t.number,
        secGroupId: t.number,
      })
      .check(req);
  }
}
export const esopMenuVo = t.util.createFinalVerifiable(EsopMenuVOClass);

/**
 *
 * @typedef {FreezingPeriodQueryDTOClass}
 */
export class FreezingPeriodQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ pageNum: t.number, pageSize: t.number, planId: t.number })
      .check(req);
  }
}
export const freezingPeriodQueryDto = t.util.createFinalVerifiable(
  FreezingPeriodQueryDTOClass
);

/**
 *
 * @typedef {FreezingPeriodQueryVOClass}
 */
export class FreezingPeriodQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        edit: t.object,
        endDate: t.string,
        freezingId: t.number,
        operations: t.array,
        planId: t.number,
        startDate: t.string,
      })
      .check(req);
  }
}
export const freezingPeriodQueryVo = t.util.createFinalVerifiable(
  FreezingPeriodQueryVOClass
);

/**
 *
 * @typedef {FreezingPeriodSaveDTOClass}
 */
export class FreezingPeriodSaveDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        endDate: t.string,
        freezingId: t.number,
        planId: t.number,
        startDate: t.string,
      })
      .check(req);
  }
}
export const freezingPeriodSaveDto = t.util.createFinalVerifiable(
  FreezingPeriodSaveDTOClass
);

/**
 *
 * @typedef {GrantAddDTOClass}
 */
export class GrantAddDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionList: t.array,
        comments: t.string,
        confirm: t.boolean,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsId: t.number,
        limitDate: t.string,
        personId: t.number,
        planId: t.number,
        price: t.number,
        saveType: t.string,
        soClass: t.string,
      })
      .check(req);
  }
}
export const grantAddDto = t.util.createFinalVerifiable(GrantAddDTOClass);

/**
 *
 * @typedef {GrantLogListDTOClass}
 */
export class GrantLogListDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantEndDate: t.string,
        grantStartDate: t.string,
        grantTypeList: t.array,
        orgIdList: t.array,
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        rsStatusList: t.array,
        soStatusList: t.array,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const grantLogListDto = t.util.createFinalVerifiable(
  GrantLogListDTOClass
);

/**
 *
 * @typedef {GrantPostDTOClass}
 */
export class GrantPostDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ code: t.string, codes: t.array, confirm: t.boolean })
      .check(req);
  }
}
export const grantPostDto = t.util.createFinalVerifiable(GrantPostDTOClass);

/**
 *
 * @typedef {GrantUpdateDTOClass}
 */
export class GrantUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionList: t.array,
        comments: t.string,
        confirm: t.boolean,
        grantAmount: t.number,
        grantDate: t.string,
        grantsId: t.number,
        limitDate: t.string,
        personId: t.number,
        planId: t.number,
        price: t.number,
        saveType: t.string,
        soClass: t.string,
      })
      .check(req);
  }
}
export const grantUpdateDto = t.util.createFinalVerifiable(GrantUpdateDTOClass);

/**
 *
 * @typedef {GrantsListDTOClass}
 */
export class GrantsListDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        createRoleList: t.array,
        employeeType: t.array,
        grantEndDate: t.string,
        grantStartDate: t.string,
        grantType: t.string,
        orgIdList: t.array,
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        soClassList: t.array,
        statusList: t.array,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const grantsListDto = t.util.createFinalVerifiable(GrantsListDTOClass);

/**
 *
 * @typedef {GrantsListVOClass}
 */
export class GrantsListVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionRule: t.string,
        comments: t.string,
        createRole: t.string,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDate: t.string,
        grantDateStr: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        largeLevel: t.string,
        largeSequence: t.string,
        limitDate: t.string,
        map: t.object,
        operation: t.array,
        orgName: t.string,
        personId: t.number,
        personName: t.string,
        price: t.number,
        serviceStartDate: t.string,
        smallSequence: t.string,
        soClass: t.string,
        status: t.string,
        subLevel: t.string,
      })
      .check(req);
  }
}
export const grantsListVo = t.util.createFinalVerifiable(GrantsListVOClass);

/**
 *
 * @typedef {GrantsLogListVOClass}
 */
export class GrantsLogListVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        ascriptionRule: t.string,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        edit: t.object,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDateStr: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        leaveDate: t.string,
        leaveDateStr: t.string,
        limitDate: t.string,
        map: t.object,
        moveDate: t.string,
        moveDateStr: t.string,
        operations: t.array,
        orgName: t.string,
        personId: t.number,
        personName: t.string,
        planId: t.number,
        planName: t.string,
        price: t.number,
        retainAscriEd: t.number,
        soClass: t.string,
        status: t.string,
        stockPrice: t.number,
      })
      .check(req);
  }
}
export const grantsLogListVo = t.util.createFinalVerifiable(
  GrantsLogListVOClass
);

/**
 *
 * @typedef {GrantsQueryInitVOClass}
 */
export class GrantsQueryInitVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        createRoleList: t.array,
        employeeType: t.array,
        options: t.array,
        orgIdList: t.array,
        planEndDate: t.string,
        planStartDate: t.string,
        soClassList: t.array,
        statusList: t.array,
      })
      .check(req);
  }
}
export const grantsQueryInitVo = t.util.createFinalVerifiable(
  GrantsQueryInitVOClass
);

/**
 *
 * @typedef {GrantsVOClass}
 */
export class GrantsVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionList: t.array,
        comments: t.string,
        editFlag: t.string,
        employeeVO: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        limitDate: t.string,
        map: t.object,
        planId: t.number,
        price: t.number,
        soClass: t.string,
      })
      .check(req);
  }
}
export const grantsVo = t.util.createFinalVerifiable(GrantsVOClass);

/**
 *
 * @typedef {GrantsViewLogClass}
 */
export class GrantsViewLogClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ grantType: t.string, grantsCode: t.string, logList: t.array })
      .check(req);
  }
}
export const grantsViewLog = t.util.createFinalVerifiable(GrantsViewLogClass);

/**
 *
 * @typedef {JsonResult_AgreementViewVO_Class}
 */
export class JsonResult_AgreementViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: agreementViewVo,
        errors: errors,
        message: t.string,
        status: t.string,
        warnings: warnings,
      })
      .check(req);
  }
}
export const jsonResultAgreementViewVo = t.util.createFinalVerifiable(
  JsonResult_AgreementViewVO_Class
);

/**
 *
 * @typedef {errorsClass}
 */
export class errorsClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const errors = t.util.createFinalVerifiable(errorsClass);

/**
 *
 * @typedef {warningsClass}
 */
export class warningsClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const warnings = t.util.createFinalVerifiable(warningsClass);

/**
 *
 * @typedef {JsonResult_AscriptionVO_Class}
 */
export class JsonResult_AscriptionVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: ascriptionVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultAscriptionVo = t.util.createFinalVerifiable(
  JsonResult_AscriptionVO_Class
);

/**
 *
 * @typedef {JsonResult_BussLineVO_Class}
 */
export class JsonResult_BussLineVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: bussLineVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultBussLineVo = t.util.createFinalVerifiable(
  JsonResult_BussLineVO_Class
);

/**
 *
 * @typedef {JsonResult_CABUpdateMoveVo_Class}
 */
export class JsonResult_CABUpdateMoveVo_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: cabUpdateMoveVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultCabUpdateMoveVo = t.util.createFinalVerifiable(
  JsonResult_CABUpdateMoveVo_Class
);

/**
 *
 * @typedef {JsonResult_CancelVO_Class}
 */
export class JsonResult_CancelVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: cancelVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultCancelVo = t.util.createFinalVerifiable(
  JsonResult_CancelVO_Class
);

/**
 *
 * @typedef {JsonResult_DepartmentVO_Class}
 */
export class JsonResult_DepartmentVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: departmentVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultDepartmentVo = t.util.createFinalVerifiable(
  JsonResult_DepartmentVO_Class
);

/**
 *
 * @typedef {JsonResult_GrantsVO_Class}
 */
export class JsonResult_GrantsVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: grantsVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultGrantsVo = t.util.createFinalVerifiable(
  JsonResult_GrantsVO_Class
);

/**
 *
 * @typedef {JsonResult_GrantsViewLog_Class}
 */
export class JsonResult_GrantsViewLog_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: grantsViewLog,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultGrantsViewLog = t.util.createFinalVerifiable(
  JsonResult_GrantsViewLog_Class
);

/**
 *
 * @typedef {JsonResult_List_AgreementSuggestVO__Class}
 */
export class JsonResult_List_AgreementSuggestVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListAgreementSuggestVo = t.util.createFinalVerifiable(
  JsonResult_List_AgreementSuggestVO__Class
);

/**
 *
 * @typedef {JsonResult_List_BussLineSuggestVO__Class}
 */
export class JsonResult_List_BussLineSuggestVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListBussLineSuggestVo = t.util.createFinalVerifiable(
  JsonResult_List_BussLineSuggestVO__Class
);

/**
 *
 * @typedef {JsonResult_List_BussOrgLogListVO__Class}
 */
export class JsonResult_List_BussOrgLogListVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListBussOrgLogListVo = t.util.createFinalVerifiable(
  JsonResult_List_BussOrgLogListVO__Class
);

/**
 *
 * @typedef {JsonResult_List_CGrantForRSVO__Class}
 */
export class JsonResult_List_CGrantForRSVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListCGrantForRsvo = t.util.createFinalVerifiable(
  JsonResult_List_CGrantForRSVO__Class
);

/**
 *
 * @typedef {JsonResult_List_CGrantForSOVO__Class}
 */
export class JsonResult_List_CGrantForSOVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListCGrantForSovo = t.util.createFinalVerifiable(
  JsonResult_List_CGrantForSOVO__Class
);

/**
 *
 * @typedef {JsonResult_List_DepartmentSimpleVO__Class}
 */
export class JsonResult_List_DepartmentSimpleVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListDepartmentSimpleVo = t.util.createFinalVerifiable(
  JsonResult_List_DepartmentSimpleVO__Class
);

/**
 *
 * @typedef {JsonResult_List_DepartmentSuggestVO__Class}
 */
export class JsonResult_List_DepartmentSuggestVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListDepartmentSuggestVo = t.util.createFinalVerifiable(
  JsonResult_List_DepartmentSuggestVO__Class
);

/**
 *
 * @typedef {JsonResult_List_EmployeeGrantsVO__Class}
 */
export class JsonResult_List_EmployeeGrantsVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListEmployeeGrantsVo = t.util.createFinalVerifiable(
  JsonResult_List_EmployeeGrantsVO__Class
);

/**
 *
 * @typedef {JsonResult_List_EmployeeVO__Class}
 */
export class JsonResult_List_EmployeeVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListEmployeeVo = t.util.createFinalVerifiable(
  JsonResult_List_EmployeeVO__Class
);

/**
 *
 * @typedef {JsonResult_List_EsopMenuVO__Class}
 */
export class JsonResult_List_EsopMenuVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListEsopMenuVo = t.util.createFinalVerifiable(
  JsonResult_List_EsopMenuVO__Class
);

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogFreezingPeriodViewVO___Class}
 */
export class JsonResult_List_LogCommonVO_LogFreezingPeriodViewVO___Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListLogCommonVoLogFreezingPeriodViewVo = t.util.createFinalVerifiable(
  JsonResult_List_LogCommonVO_LogFreezingPeriodViewVO___Class
);

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogPlanViewVO___Class}
 */
export class JsonResult_List_LogCommonVO_LogPlanViewVO___Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListLogCommonVoLogPlanViewVo = t.util.createFinalVerifiable(
  JsonResult_List_LogCommonVO_LogPlanViewVO___Class
);

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogRightPriceViewVO___Class}
 */
export class JsonResult_List_LogCommonVO_LogRightPriceViewVO___Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListLogCommonVoLogRightPriceViewVo = t.util.createFinalVerifiable(
  JsonResult_List_LogCommonVO_LogRightPriceViewVO___Class
);

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogStockPriceViewVO___Class}
 */
export class JsonResult_List_LogCommonVO_LogStockPriceViewVO___Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListLogCommonVoLogStockPriceViewVo = t.util.createFinalVerifiable(
  JsonResult_List_LogCommonVO_LogStockPriceViewVO___Class
);

/**
 *
 * @typedef {JsonResult_List_OrgVO__Class}
 */
export class JsonResult_List_OrgVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListOrgVo = t.util.createFinalVerifiable(
  JsonResult_List_OrgVO__Class
);

/**
 *
 * @typedef {JsonResult_List_PlanSimpleVO__Class}
 */
export class JsonResult_List_PlanSimpleVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListPlanSimpleVo = t.util.createFinalVerifiable(
  JsonResult_List_PlanSimpleVO__Class
);

/**
 *
 * @typedef {JsonResult_List_SOAscriptionSimpleVO__Class}
 */
export class JsonResult_List_SOAscriptionSimpleVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListSoAscriptionSimpleVo = t.util.createFinalVerifiable(
  JsonResult_List_SOAscriptionSimpleVO__Class
);

/**
 *
 * @typedef {JsonResult_List_TBCGrantVO__Class}
 */
export class JsonResult_List_TBCGrantVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListTbcGrantVo = t.util.createFinalVerifiable(
  JsonResult_List_TBCGrantVO__Class
);

/**
 *
 * @typedef {JsonResult_List_string__Class}
 */
export class JsonResult_List_string__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.array,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultListString = t.util.createFinalVerifiable(
  JsonResult_List_string__Class
);

/**
 *
 * @typedef {JsonResult_LogPlanPanelVO_Class}
 */
export class JsonResult_LogPlanPanelVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: logPlanPanelVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultLogPlanPanelVo = t.util.createFinalVerifiable(
  JsonResult_LogPlanPanelVO_Class
);

/**
 *
 * @typedef {JsonResult_LogPlanPlanViewVO_Class}
 */
export class JsonResult_LogPlanPlanViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: logPlanPlanViewVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultLogPlanPlanViewVo = t.util.createFinalVerifiable(
  JsonResult_LogPlanPlanViewVO_Class
);

/**
 *
 * @typedef {JsonResult_LogQueryInitVO_Class}
 */
export class JsonResult_LogQueryInitVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: logQueryInitVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultLogQueryInitVo = t.util.createFinalVerifiable(
  JsonResult_LogQueryInitVO_Class
);

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzeMovePanelVO__Class}
 */
export class JsonResult_Map_string_AnalyzeMovePanelVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: data,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringAnalyzeMovePanelVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_AnalyzeMovePanelVO__Class
);

/**
 *
 * @typedef {dataClass}
 */
export class dataClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const data = t.util.createFinalVerifiable(dataClass);

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzePanelVO__Class}
 */
export class JsonResult_Map_string_AnalyzePanelVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.object,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringAnalyzePanelVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_AnalyzePanelVO__Class
);

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzeQuitPanelVO__Class}
 */
export class JsonResult_Map_string_AnalyzeQuitPanelVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.object,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringAnalyzeQuitPanelVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_AnalyzeQuitPanelVO__Class
);

/**
 *
 * @typedef {JsonResult_Map_string_GrantsQueryInitVO__Class}
 */
export class JsonResult_Map_string_GrantsQueryInitVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.object,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringGrantsQueryInitVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_GrantsQueryInitVO__Class
);

/**
 *
 * @typedef {JsonResult_Map_string_MovePanelVO__Class}
 */
export class JsonResult_Map_string_MovePanelVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.object,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringMovePanelVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_MovePanelVO__Class
);

/**
 *
 * @typedef {JsonResult_Map_string_QuitPanelVO__Class}
 */
export class JsonResult_Map_string_QuitPanelVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.object,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMapStringQuitPanelVo = t.util.createFinalVerifiable(
  JsonResult_Map_string_QuitPanelVO__Class
);

/**
 *
 * @typedef {JsonResult_MoveCBQueryParams_Class}
 */
export class JsonResult_MoveCBQueryParams_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: moveCbQueryParams,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultMoveCbQueryParams = t.util.createFinalVerifiable(
  JsonResult_MoveCBQueryParams_Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_AgreementVO__Class}
 */
export class JsonResult_PageInfo_AgreementVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoAgreementVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoAgreementVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_AgreementVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_BussLineVO__Class}
 */
export class JsonResult_PageInfo_BussLineVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoBussLineVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoBussLineVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_BussLineVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_DepartmentVO__Class}
 */
export class JsonResult_PageInfo_DepartmentVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoDepartmentVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoDepartmentVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_DepartmentVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_FreezingPeriodQueryVO__Class}
 */
export class JsonResult_PageInfo_FreezingPeriodQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoFreezingPeriodQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoFreezingPeriodQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_FreezingPeriodQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_GrantsListVO__Class}
 */
export class JsonResult_PageInfo_GrantsListVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoGrantsListVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoGrantsListVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_GrantsListVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_GrantsLogListVO__Class}
 */
export class JsonResult_PageInfo_GrantsLogListVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoGrantsLogListVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoGrantsLogListVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_GrantsLogListVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_LogPlanQueryVO__Class}
 */
export class JsonResult_PageInfo_LogPlanQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoLogPlanQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoLogPlanQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_LogPlanQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_MoveCBQueryVO__Class}
 */
export class JsonResult_PageInfo_MoveCBQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoMoveCbQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoMoveCbQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_MoveCBQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_MoveRsAnlyVO__Class}
 */
export class JsonResult_PageInfo_MoveRsAnlyVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoMoveRsAnlyVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoMoveRsAnlyVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_MoveRsAnlyVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_MoveRsQueryVO__Class}
 */
export class JsonResult_PageInfo_MoveRsQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoMoveRsQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoMoveRsQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_MoveRsQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_MoveSoAnlyVO__Class}
 */
export class JsonResult_PageInfo_MoveSoAnlyVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoMoveSoAnlyVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoMoveSoAnlyVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_MoveSoAnlyVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_MoveSoQueryVO__Class}
 */
export class JsonResult_PageInfo_MoveSoQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoMoveSoQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoMoveSoQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_MoveSoQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_PlanQueryVO__Class}
 */
export class JsonResult_PageInfo_PlanQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoPlanQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoPlanQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_PlanQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_QuitRsAnlyVO__Class}
 */
export class JsonResult_PageInfo_QuitRsAnlyVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoQuitRsAnlyVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoQuitRsAnlyVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_QuitRsAnlyVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_QuitRsQueryVO__Class}
 */
export class JsonResult_PageInfo_QuitRsQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoQuitRsQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoQuitRsQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_QuitRsQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_QuitSoAnlyVO__Class}
 */
export class JsonResult_PageInfo_QuitSoAnlyVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoQuitSoAnlyVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoQuitSoAnlyVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_QuitSoAnlyVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_QuitSoQueryVO__Class}
 */
export class JsonResult_PageInfo_QuitSoQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoQuitSoQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoQuitSoQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_QuitSoQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_RightPriceQueryVO__Class}
 */
export class JsonResult_PageInfo_RightPriceQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoRightPriceQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoRightPriceQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_RightPriceQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_StockOwnVO__Class}
 */
export class JsonResult_PageInfo_StockOwnVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoStockOwnVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoStockOwnVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_StockOwnVO__Class
);

/**
 *
 * @typedef {JsonResult_PageInfo_StockPriceQueryVO__Class}
 */
export class JsonResult_PageInfo_StockPriceQueryVO__Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: pageInfoStockPriceQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPageInfoStockPriceQueryVo = t.util.createFinalVerifiable(
  JsonResult_PageInfo_StockPriceQueryVO__Class
);

/**
 *
 * @typedef {JsonResult_PlanPanelVO_Class}
 */
export class JsonResult_PlanPanelVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: planPanelVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPlanPanelVo = t.util.createFinalVerifiable(
  JsonResult_PlanPanelVO_Class
);

/**
 *
 * @typedef {JsonResult_PlanViewVO_Class}
 */
export class JsonResult_PlanViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: planViewVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultPlanViewVo = t.util.createFinalVerifiable(
  JsonResult_PlanViewVO_Class
);

/**
 *
 * @typedef {JsonResult_QuitDeduDetailVO_Class}
 */
export class JsonResult_QuitDeduDetailVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: quitDeduDetailVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultQuitDeduDetailVo = t.util.createFinalVerifiable(
  JsonResult_QuitDeduDetailVO_Class
);

/**
 *
 * @typedef {JsonResult_RSAscriptionVO_Class}
 */
export class JsonResult_RSAscriptionVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: rsAscriptionVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultRsAscriptionVo = t.util.createFinalVerifiable(
  JsonResult_RSAscriptionVO_Class
);

/**
 *
 * @typedef {JsonResult_RightPriceQueryVO_Class}
 */
export class JsonResult_RightPriceQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: rightPriceQueryVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultRightPriceQueryVo = t.util.createFinalVerifiable(
  JsonResult_RightPriceQueryVO_Class
);

/**
 *
 * @typedef {JsonResult_StockUseSimpleInfoVO_Class}
 */
export class JsonResult_StockUseSimpleInfoVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: stockUseSimpleInfoVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultStockUseSimpleInfoVo = t.util.createFinalVerifiable(
  JsonResult_StockUseSimpleInfoVO_Class
);

/**
 *
 * @typedef {JsonResult_TBCGrantBeforeVO_Class}
 */
export class JsonResult_TBCGrantBeforeVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: tbcGrantBeforeVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultTbcGrantBeforeVo = t.util.createFinalVerifiable(
  JsonResult_TBCGrantBeforeVO_Class
);

/**
 *
 * @typedef {JsonResult_UserVo_Class}
 */
export class JsonResult_UserVo_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: userVo,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultUserVo = t.util.createFinalVerifiable(
  JsonResult_UserVo_Class
);

/**
 *
 * @typedef {JsonResult_Void_Class}
 */
export class JsonResult_Void_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultVoid = t.util.createFinalVerifiable(
  JsonResult_Void_Class
);

/**
 *
 * @typedef {JsonResult_boolean_Class}
 */
export class JsonResult_boolean_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.boolean,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultBoolean = t.util.createFinalVerifiable(
  JsonResult_boolean_Class
);

/**
 *
 * @typedef {JsonResult_int_Class}
 */
export class JsonResult_int_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.number,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultInt = t.util.createFinalVerifiable(JsonResult_int_Class);

/**
 *
 * @typedef {JsonResult_long_Class}
 */
export class JsonResult_long_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.number,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultLong = t.util.createFinalVerifiable(
  JsonResult_long_Class
);

/**
 *
 * @typedef {JsonResult_string_Class}
 */
export class JsonResult_string_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        data: t.string,
        errors: t.object,
        message: t.string,
        status: t.string,
        warnings: t.object,
      })
      .check(req);
  }
}
export const jsonResultString = t.util.createFinalVerifiable(
  JsonResult_string_Class
);

/**
 *
 * @typedef {LogCommonVOClass}
 */
export class LogCommonVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const logCommonVo = t.util.createFinalVerifiable(LogCommonVOClass);

/**
 *
 * @typedef {LogCommonVO_LogFreezingPeriodViewVO_Class}
 */
export class LogCommonVO_LogFreezingPeriodViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const logCommonVoLogFreezingPeriodViewVo = t.util.createFinalVerifiable(
  LogCommonVO_LogFreezingPeriodViewVO_Class
);

/**
 *
 * @typedef {LogCommonVO_LogPlanViewVO_Class}
 */
export class LogCommonVO_LogPlanViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const logCommonVoLogPlanViewVo = t.util.createFinalVerifiable(
  LogCommonVO_LogPlanViewVO_Class
);

/**
 *
 * @typedef {LogCommonVO_LogRightPriceViewVO_Class}
 */
export class LogCommonVO_LogRightPriceViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const logCommonVoLogRightPriceViewVo = t.util.createFinalVerifiable(
  LogCommonVO_LogRightPriceViewVO_Class
);

/**
 *
 * @typedef {LogCommonVO_LogStockPriceViewVO_Class}
 */
export class LogCommonVO_LogStockPriceViewVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        logs: t.array,
        operation: employeeVo,
        operationCode: t.string,
        operationDate: t.string,
        operationMsg: t.string,
      })
      .check(req);
  }
}
export const logCommonVoLogStockPriceViewVo = t.util.createFinalVerifiable(
  LogCommonVO_LogStockPriceViewVO_Class
);

/**
 *
 * @typedef {LogFreezingPeriodViewVOClass}
 */
export class LogFreezingPeriodViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        endDate: t.string,
        logId: t.number,
        oldOrNew: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const logFreezingPeriodViewVo = t.util.createFinalVerifiable(
  LogFreezingPeriodViewVOClass
);

/**
 *
 * @typedef {LogPlanPanelVOClass}
 */
export class LogPlanPanelVOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ status: t.array }).check(req);
  }
}
export const logPlanPanelVo = t.util.createFinalVerifiable(LogPlanPanelVOClass);

/**
 *
 * @typedef {LogPlanPlanViewVOClass}
 */
export class LogPlanPlanViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        bussLineId: t.number,
        bussManager: t.array,
        comments: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        map: t.object,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const logPlanPlanViewVo = t.util.createFinalVerifiable(
  LogPlanPlanViewVOClass
);

/**
 *
 * @typedef {LogPlanQueryDTOClass}
 */
export class LogPlanQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        pageNum: t.number,
        pageSize: t.number,
        planName: t.string,
        planStartDateLeft: t.string,
        planStartDateRight: t.string,
        status: t.array,
      })
      .check(req);
  }
}
export const logPlanQueryDto = t.util.createFinalVerifiable(
  LogPlanQueryDTOClass
);

/**
 *
 * @typedef {LogPlanQueryVOClass}
 */
export class LogPlanQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineName: t.string,
        bussManager: t.array,
        freezing: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        map: t.object,
        operations: t.array,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const logPlanQueryVo = t.util.createFinalVerifiable(LogPlanQueryVOClass);

/**
 *
 * @typedef {LogPlanViewVOClass}
 */
export class LogPlanViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeName: t.string,
        bussLineName: t.string,
        bussManager: t.array,
        comments: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        logId: t.number,
        oldOrNew: t.string,
        planCode: t.string,
        planEndDate: t.string,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
      })
      .check(req);
  }
}
export const logPlanViewVo = t.util.createFinalVerifiable(LogPlanViewVOClass);

/**
 *
 * @typedef {LogQueryInitVOClass}
 */
export class LogQueryInitVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantEndDate: t.string,
        grantStartDate: t.string,
        grantTypeList: t.array,
        orgIdList: t.array,
        planList: t.array,
        rsStatusList: t.array,
        soStatusList: t.array,
      })
      .check(req);
  }
}
export const logQueryInitVo = t.util.createFinalVerifiable(LogQueryInitVOClass);

/**
 *
 * @typedef {LogRightPriceViewVOClass}
 */
export class LogRightPriceViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        logId: t.number,
        oldOrNew: t.string,
        price: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const logRightPriceViewVo = t.util.createFinalVerifiable(
  LogRightPriceViewVOClass
);

/**
 *
 * @typedef {LogStockPriceViewVOClass}
 */
export class LogStockPriceViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        logId: t.number,
        oldOrNew: t.string,
        price: t.string,
        publishDate: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const logStockPriceViewVo = t.util.createFinalVerifiable(
  LogStockPriceViewVOClass
);

/**
 *
 * @typedef {Map_string_AnalyzeMovePanelVO_Class}
 */
export class Map_string_AnalyzeMovePanelVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringAnalyzeMovePanelVo = t.util.createFinalVerifiable(
  Map_string_AnalyzeMovePanelVO_Class
);

/**
 *
 * @typedef {Map_string_AnalyzePanelVO_Class}
 */
export class Map_string_AnalyzePanelVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringAnalyzePanelVo = t.util.createFinalVerifiable(
  Map_string_AnalyzePanelVO_Class
);

/**
 *
 * @typedef {Map_string_AnalyzeQuitPanelVO_Class}
 */
export class Map_string_AnalyzeQuitPanelVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringAnalyzeQuitPanelVo = t.util.createFinalVerifiable(
  Map_string_AnalyzeQuitPanelVO_Class
);

/**
 *
 * @typedef {Map_string_GrantsQueryInitVO_Class}
 */
export class Map_string_GrantsQueryInitVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringGrantsQueryInitVo = t.util.createFinalVerifiable(
  Map_string_GrantsQueryInitVO_Class
);

/**
 *
 * @typedef {Map_string_MovePanelVO_Class}
 */
export class Map_string_MovePanelVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringMovePanelVo = t.util.createFinalVerifiable(
  Map_string_MovePanelVO_Class
);

/**
 *
 * @typedef {Map_string_QuitPanelVO_Class}
 */
export class Map_string_QuitPanelVO_Class extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const mapStringQuitPanelVo = t.util.createFinalVerifiable(
  Map_string_QuitPanelVO_Class
);

/**
 *
 * @typedef {MoveAnalyzeDTOClass}
 */
export class MoveAnalyzeDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        deduStatusSet: t.array,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        grantStatusSet: t.array,
        grantType: t.string,
        pageNum: t.number,
        pageSize: t.number,
        paymentStatus: t.array,
        personId: t.number,
        personMoveEndDate: t.string,
        personMoveStartDate: t.string,
        planId: t.number,
      })
      .check(req);
  }
}
export const moveAnalyzeDto = t.util.createFinalVerifiable(MoveAnalyzeDTOClass);

/**
 *
 * @typedef {MoveCBListDTOClass}
 */
export class MoveCBListDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantDateLeft: t.string,
        grantDateRight: t.string,
        grantType: t.string,
        moveDateLeft: t.string,
        moveDateRight: t.string,
        pageNum: t.number,
        pageSize: t.number,
        paymentStatus: t.array,
        planId: t.string,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const moveCbListDto = t.util.createFinalVerifiable(MoveCBListDTOClass);

/**
 *
 * @typedef {MoveCBPanelVOClass}
 */
export class MoveCBPanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantDateLeft: t.string,
        grantDateRight: t.string,
        moveDateLeft: t.string,
        moveDateRight: t.string,
        operation: t.array,
        paymentStatus: t.array,
      })
      .check(req);
  }
}
export const moveCbPanelVo = t.util.createFinalVerifiable(MoveCBPanelVOClass);

/**
 *
 * @typedef {MoveCBQueryDTOClass}
 */
export class MoveCBQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ moveDeduId: t.number }).check(req);
  }
}
export const moveCbQueryDto = t.util.createFinalVerifiable(MoveCBQueryDTOClass);

/**
 *
 * @typedef {MoveCBQueryParamsClass}
 */
export class MoveCBQueryParamsClass extends t.Verifiable {
  _check(req) {
    return t.leq({ panelMap: panelMap, planList: t.array }).check(req);
  }
}
export const moveCbQueryParams = t.util.createFinalVerifiable(
  MoveCBQueryParamsClass
);

/**
 *
 * @typedef {MoveCBQueryVOClass}
 */
export class MoveCBQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        ascriptionRule: t.string,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        moveDate: t.string,
        moveDeduId: t.number,
        newOrgName: t.string,
        oldOrgName: t.string,
        operation: t.array,
        paymentStatus: t.string,
        planName: t.string,
        price: t.number,
        refundMoney: t.number,
        refundNumber: t.number,
        refundPrice: t.number,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const moveCbQueryVo = t.util.createFinalVerifiable(MoveCBQueryVOClass);

/**
 *
 * @typedef {MoveCBUpdateDTOClass}
 */
export class MoveCBUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        moveDeduId: t.number,
        retainAscriEd: t.number,
      })
      .check(req);
  }
}
export const moveCbUpdateDto = t.util.createFinalVerifiable(
  MoveCBUpdateDTOClass
);

/**
 *
 * @typedef {MovePanelVOClass}
 */
export class MovePanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        creatRole: t.array,
        deduStatus: t.array,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        moveDateLeft: t.string,
        moveDateRight: t.string,
        operation: t.array,
        paymentStatus: t.array,
        status: t.array,
      })
      .check(req);
  }
}
export const movePanelVo = t.util.createFinalVerifiable(MovePanelVOClass);

/**
 *
 * @typedef {MoveRsAnlyVOClass}
 */
export class MoveRsAnlyVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        deduStatus: t.string,
        employeeName: t.string,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDate: t.string,
        grantStatus: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        moveDate: t.string,
        moveDeduId: t.number,
        newOrgName: t.string,
        oldOrgName: t.string,
        paymentStatus: t.string,
        personId: t.number,
        planName: t.string,
        price: t.number,
        refundMoney: t.number,
        refundNumber: t.number,
        refundPrice: t.number,
        retainAscriEd: t.number,
      })
      .check(req);
  }
}
export const moveRsAnlyVo = t.util.createFinalVerifiable(MoveRsAnlyVOClass);

/**
 *
 * @typedef {MoveRsQueryDTOClass}
 */
export class MoveRsQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        creatRole: t.array,
        deduStatus: t.array,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        moveDateLeft: t.string,
        moveDateRight: t.string,
        pageNum: t.number,
        pageSize: t.number,
        paymentStatus: t.array,
        planId: t.number,
        status: t.array,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const moveRsQueryDto = t.util.createFinalVerifiable(MoveRsQueryDTOClass);

/**
 *
 * @typedef {MoveRsQueryVOClass}
 */
export class MoveRsQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        moveDate: t.string,
        moveDeduId: t.number,
        newOrgName: t.string,
        oldOrgName: t.string,
        operations: t.array,
        paymentStatus: t.string,
        planName: t.string,
        price: t.string,
        refundMoney: t.string,
        refundNumber: t.number,
        refundPrice: t.string,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const moveRsQueryVo = t.util.createFinalVerifiable(MoveRsQueryVOClass);

/**
 *
 * @typedef {MoveSoAnlyVOClass}
 */
export class MoveSoAnlyVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        deduStatus: t.string,
        employeeName: t.string,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDate: t.string,
        grantStatus: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        moveDate: t.string,
        newOrgName: t.string,
        oldOrgName: t.string,
        personId: t.number,
        planName: t.string,
        price: t.number,
        retainAscriEd: t.number,
      })
      .check(req);
  }
}
export const moveSoAnlyVo = t.util.createFinalVerifiable(MoveSoAnlyVOClass);

/**
 *
 * @typedef {MoveSoQueryDTOClass}
 */
export class MoveSoQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        creatRole: t.array,
        deduStatus: t.array,
        grantDateLeft: t.string,
        grantDateRight: t.string,
        moveDateLeft: t.string,
        moveDateRight: t.string,
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        status: t.array,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const moveSoQueryDto = t.util.createFinalVerifiable(MoveSoQueryDTOClass);

/**
 *
 * @typedef {MoveSoQueryVOClass}
 */
export class MoveSoQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        moveDate: t.string,
        moveDeduId: t.number,
        newOrgName: t.string,
        oldOrgName: t.string,
        operations: t.array,
        planName: t.string,
        price: t.string,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const moveSoQueryVo = t.util.createFinalVerifiable(MoveSoQueryVOClass);

/**
 *
 * @typedef {OrgVOClass}
 */
export class OrgVOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ orgId: t.number, orgName: t.string }).check(req);
  }
}
export const orgVo = t.util.createFinalVerifiable(OrgVOClass);

/**
 *
 * @typedef {PageInfo_AgreementVO_Class}
 */
export class PageInfo_AgreementVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoAgreementVo = t.util.createFinalVerifiable(
  PageInfo_AgreementVO_Class
);

/**
 *
 * @typedef {PageInfo_BussLineVO_Class}
 */
export class PageInfo_BussLineVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoBussLineVo = t.util.createFinalVerifiable(
  PageInfo_BussLineVO_Class
);

/**
 *
 * @typedef {PageInfo_DepartmentVO_Class}
 */
export class PageInfo_DepartmentVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoDepartmentVo = t.util.createFinalVerifiable(
  PageInfo_DepartmentVO_Class
);

/**
 *
 * @typedef {PageInfo_FreezingPeriodQueryVO_Class}
 */
export class PageInfo_FreezingPeriodQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoFreezingPeriodQueryVo = t.util.createFinalVerifiable(
  PageInfo_FreezingPeriodQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_GrantsListVO_Class}
 */
export class PageInfo_GrantsListVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoGrantsListVo = t.util.createFinalVerifiable(
  PageInfo_GrantsListVO_Class
);

/**
 *
 * @typedef {PageInfo_GrantsLogListVO_Class}
 */
export class PageInfo_GrantsLogListVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoGrantsLogListVo = t.util.createFinalVerifiable(
  PageInfo_GrantsLogListVO_Class
);

/**
 *
 * @typedef {PageInfo_LogPlanQueryVO_Class}
 */
export class PageInfo_LogPlanQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoLogPlanQueryVo = t.util.createFinalVerifiable(
  PageInfo_LogPlanQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_MoveCBQueryVO_Class}
 */
export class PageInfo_MoveCBQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoMoveCbQueryVo = t.util.createFinalVerifiable(
  PageInfo_MoveCBQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_MoveRsAnlyVO_Class}
 */
export class PageInfo_MoveRsAnlyVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoMoveRsAnlyVo = t.util.createFinalVerifiable(
  PageInfo_MoveRsAnlyVO_Class
);

/**
 *
 * @typedef {PageInfo_MoveRsQueryVO_Class}
 */
export class PageInfo_MoveRsQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoMoveRsQueryVo = t.util.createFinalVerifiable(
  PageInfo_MoveRsQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_MoveSoAnlyVO_Class}
 */
export class PageInfo_MoveSoAnlyVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoMoveSoAnlyVo = t.util.createFinalVerifiable(
  PageInfo_MoveSoAnlyVO_Class
);

/**
 *
 * @typedef {PageInfo_MoveSoQueryVO_Class}
 */
export class PageInfo_MoveSoQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoMoveSoQueryVo = t.util.createFinalVerifiable(
  PageInfo_MoveSoQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_PlanQueryVO_Class}
 */
export class PageInfo_PlanQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoPlanQueryVo = t.util.createFinalVerifiable(
  PageInfo_PlanQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_QuitRsAnlyVO_Class}
 */
export class PageInfo_QuitRsAnlyVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoQuitRsAnlyVo = t.util.createFinalVerifiable(
  PageInfo_QuitRsAnlyVO_Class
);

/**
 *
 * @typedef {PageInfo_QuitRsQueryVO_Class}
 */
export class PageInfo_QuitRsQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoQuitRsQueryVo = t.util.createFinalVerifiable(
  PageInfo_QuitRsQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_QuitSoAnlyVO_Class}
 */
export class PageInfo_QuitSoAnlyVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoQuitSoAnlyVo = t.util.createFinalVerifiable(
  PageInfo_QuitSoAnlyVO_Class
);

/**
 *
 * @typedef {PageInfo_QuitSoQueryVO_Class}
 */
export class PageInfo_QuitSoQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoQuitSoQueryVo = t.util.createFinalVerifiable(
  PageInfo_QuitSoQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_RightPriceQueryVO_Class}
 */
export class PageInfo_RightPriceQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoRightPriceQueryVo = t.util.createFinalVerifiable(
  PageInfo_RightPriceQueryVO_Class
);

/**
 *
 * @typedef {PageInfo_StockOwnVO_Class}
 */
export class PageInfo_StockOwnVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoStockOwnVo = t.util.createFinalVerifiable(
  PageInfo_StockOwnVO_Class
);

/**
 *
 * @typedef {PageInfo_StockPriceQueryVO_Class}
 */
export class PageInfo_StockPriceQueryVO_Class extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        endRow: t.number,
        firstPage: t.number,
        hasNextPage: t.boolean,
        hasPreviousPage: t.boolean,
        isFirstPage: t.boolean,
        isLastPage: t.boolean,
        lastPage: t.number,
        list: t.array,
        navigateFirstPage: t.number,
        navigateLastPage: t.number,
        navigatePages: t.number,
        navigatepageNums: t.array,
        nextPage: t.number,
        pageNum: t.number,
        pageSize: t.number,
        pages: t.number,
        prePage: t.number,
        size: t.number,
        startRow: t.number,
        total: t.number,
      })
      .check(req);
  }
}
export const pageInfoStockPriceQueryVo = t.util.createFinalVerifiable(
  PageInfo_StockPriceQueryVO_Class
);

/**
 *
 * @typedef {PlanNameCodeCheckDTOClass}
 */
export class PlanNameCodeCheckDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ planId: t.number, value: t.string }).check(req);
  }
}
export const planNameCodeCheckDto = t.util.createFinalVerifiable(
  PlanNameCodeCheckDTOClass
);

/**
 *
 * @typedef {PlanPanelVOClass}
 */
export class PlanPanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        operations: t.array,
        planStartDateLeft: t.string,
        planStartDateRight: t.string,
        status: t.array,
      })
      .check(req);
  }
}
export const planPanelVo = t.util.createFinalVerifiable(PlanPanelVOClass);

/**
 *
 * @typedef {PlanQueryDTOClass}
 */
export class PlanQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineId: t.number,
        pageNum: t.number,
        pageSize: t.number,
        planName: t.string,
        planStartDateLeft: t.string,
        planStartDateRight: t.string,
        status: t.array,
      })
      .check(req);
  }
}
export const planQueryDto = t.util.createFinalVerifiable(PlanQueryDTOClass);

/**
 *
 * @typedef {PlanQueryVOClass}
 */
export class PlanQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        bussLineName: t.string,
        bussManager: t.array,
        freezing: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        map: t.object,
        operations: t.array,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const planQueryVo = t.util.createFinalVerifiable(PlanQueryVOClass);

/**
 *
 * @typedef {PlanReleaseDTOClass}
 */
export class PlanReleaseDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        bussLineId: t.number,
        bussManager: t.array,
        comments: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
      })
      .check(req);
  }
}
export const planReleaseDto = t.util.createFinalVerifiable(PlanReleaseDTOClass);

/**
 *
 * @typedef {PlanSaveDTOClass}
 */
export class PlanSaveDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        bussLineId: t.number,
        bussManager: t.array,
        comments: t.string,
        hrbp: t.array,
        leadingBp: t.array,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
      })
      .check(req);
  }
}
export const planSaveDto = t.util.createFinalVerifiable(PlanSaveDTOClass);

/**
 *
 * @typedef {PlanSimpleVOClass}
 */
export class PlanSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ planCode: t.string, planId: t.number, planName: t.string })
      .check(req);
  }
}
export const planSimpleVo = t.util.createFinalVerifiable(PlanSimpleVOClass);

/**
 *
 * @typedef {PlanViewVOClass}
 */
export class PlanViewVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        bussLineId: t.number,
        bussManager: t.array,
        comments: t.string,
        edit: t.object,
        hrbp: t.array,
        leadingBp: t.array,
        map: t.object,
        planCode: t.string,
        planEndDate: t.string,
        planId: t.number,
        planName: t.string,
        planStartDate: t.string,
        rsTotal: t.number,
        soTotal: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const planViewVo = t.util.createFinalVerifiable(PlanViewVOClass);

/**
 *
 * @typedef {PriceQueryDTOClass}
 */
export class PriceQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ dateStr: t.string, grantType: t.string, planId: t.number })
      .check(req);
  }
}
export const priceQueryDto = t.util.createFinalVerifiable(PriceQueryDTOClass);

/**
 *
 * @typedef {QuitAnalyzeDTOClass}
 */
export class QuitAnalyzeDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantType: t.string,
        pageNum: t.number,
        pageSize: t.number,
        paymentStatus: t.array,
        personId: t.number,
        planId: t.number,
        quitDateEnd: t.string,
        quitDateStart: t.string,
      })
      .check(req);
  }
}
export const quitAnalyzeDto = t.util.createFinalVerifiable(QuitAnalyzeDTOClass);

/**
 *
 * @typedef {QuitDeduDetailVOClass}
 */
export class QuitDeduDetailVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        editFlag: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        paymentStatus: t.string,
        planName: t.string,
        price: t.string,
        quitDate: t.string,
        quitDeduId: t.number,
        refundMoney: t.string,
        refundNumber: t.number,
        refundPrice: t.string,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const quitDeduDetailVo = t.util.createFinalVerifiable(
  QuitDeduDetailVOClass
);

/**
 *
 * @typedef {QuitModifyDTOClass}
 */
export class QuitModifyDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        quitDeduId: t.number,
        refundNumber: t.number,
        retainAscriEd: t.number,
      })
      .check(req);
  }
}
export const quitModifyDto = t.util.createFinalVerifiable(QuitModifyDTOClass);

/**
 *
 * @typedef {QuitPanelVOClass}
 */
export class QuitPanelVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantDateLeft: t.string,
        grantDateRight: t.string,
        operation: t.array,
        paymentStatus: t.array,
        quitDateLeft: t.string,
        quitDateRight: t.string,
      })
      .check(req);
  }
}
export const quitPanelVo = t.util.createFinalVerifiable(QuitPanelVOClass);

/**
 *
 * @typedef {QuitRsAnlyVOClass}
 */
export class QuitRsAnlyVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        actualTerminationDate: t.string,
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        orgId: t.number,
        orgName: t.string,
        paymentStatus: t.string,
        personId: t.number,
        personName: t.string,
        planName: t.string,
        refundMoney: t.number,
        refundNumber: t.number,
        refundPrice: t.number,
        retainAscriEd: t.number,
        serviceStartDate: t.string,
      })
      .check(req);
  }
}
export const quitRsAnlyVo = t.util.createFinalVerifiable(QuitRsAnlyVOClass);

/**
 *
 * @typedef {QuitRsQueryDTOClass}
 */
export class QuitRsQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantDateLeft: t.string,
        grantDateRight: t.string,
        pageNum: t.number,
        pageSize: t.number,
        paymentStatus: t.array,
        planId: t.number,
        quitDateLeft: t.string,
        quitDateRight: t.string,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const quitRsQueryDto = t.util.createFinalVerifiable(QuitRsQueryDTOClass);

/**
 *
 * @typedef {QuitRsQueryVOClass}
 */
export class QuitRsQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        operations: t.array,
        paymentStatus: t.string,
        planName: t.string,
        price: t.string,
        quitDate: t.string,
        quitDeduId: t.number,
        refundMoney: t.string,
        refundNumber: t.number,
        refundPrice: t.string,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const quitRsQueryVo = t.util.createFinalVerifiable(QuitRsQueryVOClass);

/**
 *
 * @typedef {QuitSoAnlyVOClass}
 */
export class QuitSoAnlyVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        actualTerminationDate: t.string,
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        orgId: t.number,
        orgName: t.string,
        personId: t.number,
        personName: t.string,
        planName: t.string,
        refundMoney: t.number,
        refundNumber: t.number,
        refundPrice: t.number,
        retainAscriEd: t.number,
        serviceStartDate: t.string,
      })
      .check(req);
  }
}
export const quitSoAnlyVo = t.util.createFinalVerifiable(QuitSoAnlyVOClass);

/**
 *
 * @typedef {QuitSoQueryDTOClass}
 */
export class QuitSoQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        grantDateLeft: t.string,
        grantDateRight: t.string,
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        quitDateLeft: t.string,
        quitDateRight: t.string,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const quitSoQueryDto = t.util.createFinalVerifiable(QuitSoQueryDTOClass);

/**
 *
 * @typedef {QuitSoQueryVOClass}
 */
export class QuitSoQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        comments: t.string,
        deduStatus: t.string,
        employee: employeeVo,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        map: t.object,
        operations: t.array,
        planName: t.string,
        price: t.string,
        quitDate: t.string,
        quitDeduId: t.number,
        retainAscriEd: t.number,
        status: t.string,
      })
      .check(req);
  }
}
export const quitSoQueryVo = t.util.createFinalVerifiable(QuitSoQueryVOClass);

/**
 *
 * @typedef {RSAscrUpdateDTOClass}
 */
export class RSAscrUpdateDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ ascrList: t.array, grantsId: t.number }).check(req);
  }
}
export const rsAscrUpdateDto = t.util.createFinalVerifiable(
  RSAscrUpdateDTOClass
);

/**
 *
 * @typedef {RSAscriptionDTOClass}
 */
export class RSAscriptionDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascrDate: t.string,
        ascrId: t.number,
        ascrNumber: t.number,
        comments: t.string,
      })
      .check(req);
  }
}
export const rsAscriptionDto = t.util.createFinalVerifiable(
  RSAscriptionDTOClass
);

/**
 *
 * @typedef {RSAscriptionSimpleVOClass}
 */
export class RSAscriptionSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascrDate: t.string,
        ascrId: t.number,
        ascrNumber: t.number,
        comments: t.string,
        editFlag: t.boolean,
        grantsId: t.number,
      })
      .check(req);
  }
}
export const rsAscriptionSimpleVo = t.util.createFinalVerifiable(
  RSAscriptionSimpleVOClass
);

/**
 *
 * @typedef {RSAscriptionVOClass}
 */
export class RSAscriptionVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        employeeVO: employeeVo,
        grantAmount: t.number,
        grantsCode: t.string,
        grantsId: t.number,
        nonAscrAmount: t.number,
        planName: t.string,
        rsAscrList: t.array,
      })
      .check(req);
  }
}
export const rsAscriptionVo = t.util.createFinalVerifiable(RSAscriptionVOClass);

/**
 *
 * @typedef {RSFullAscrDTOClass}
 */
export class RSFullAscrDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ ascrDate: t.string, codes: t.array }).check(req);
  }
}
export const rsFullAscrDto = t.util.createFinalVerifiable(RSFullAscrDTOClass);

/**
 *
 * @typedef {RightPriceQueryDTOClass}
 */
export class RightPriceQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        type: t.string,
      })
      .check(req);
  }
}
export const rightPriceQueryDto = t.util.createFinalVerifiable(
  RightPriceQueryDTOClass
);

/**
 *
 * @typedef {RightPriceQueryVOClass}
 */
export class RightPriceQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        edit: t.object,
        operations: t.array,
        planId: t.number,
        price: t.string,
        rightPriceId: t.number,
        startDate: t.string,
      })
      .check(req);
  }
}
export const rightPriceQueryVo = t.util.createFinalVerifiable(
  RightPriceQueryVOClass
);

/**
 *
 * @typedef {RightPriceSaveDTOClass}
 */
export class RightPriceSaveDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        planId: t.number,
        price: t.string,
        rightPriceId: t.number,
        startDate: t.string,
        type: t.string,
      })
      .check(req);
  }
}
export const rightPriceSaveDto = t.util.createFinalVerifiable(
  RightPriceSaveDTOClass
);

/**
 *
 * @typedef {SOAscriptionSimpleVOClass}
 */
export class SOAscriptionSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascrDate: t.string,
        ascrId: t.number,
        ascrNumber: t.number,
        editFlag: t.boolean,
        grantsId: t.number,
      })
      .check(req);
  }
}
export const soAscriptionSimpleVo = t.util.createFinalVerifiable(
  SOAscriptionSimpleVOClass
);

/**
 *
 * @typedef {StockOwnQueryDTOClass}
 */
export class StockOwnQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        employeeType: t.array,
        grantEndDate: t.string,
        grantStartDate: t.string,
        grantType: t.string,
        orgIdList: t.array,
        pageNum: t.number,
        pageSize: t.number,
        planId: t.number,
        soClassList: t.array,
        statusList: t.array,
        suggestId: t.number,
        suggestType: t.string,
      })
      .check(req);
  }
}
export const stockOwnQueryDto = t.util.createFinalVerifiable(
  StockOwnQueryDTOClass
);

/**
 *
 * @typedef {StockOwnVOClass}
 */
export class StockOwnVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        ascriptionEd: t.number,
        ascriptionIng: t.number,
        ascriptionRule: t.string,
        cancelAscriEd: t.number,
        cancelAscriIng: t.number,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        edit: t.object,
        employeeNumber: t.string,
        grantAmount: t.number,
        grantDateStr: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        leaveDate: t.string,
        leaveDateStr: t.string,
        limitDate: t.string,
        map: t.object,
        moveDate: t.string,
        moveDateStr: t.string,
        operations: t.array,
        orgName: t.string,
        personId: t.number,
        personName: t.string,
        planId: t.number,
        planName: t.string,
        price: t.number,
        retainAscriEd: t.number,
        soClass: t.string,
        status: t.string,
        stockPrice: t.number,
      })
      .check(req);
  }
}
export const stockOwnVo = t.util.createFinalVerifiable(StockOwnVOClass);

/**
 *
 * @typedef {StockPriceQueryDTOClass}
 */
export class StockPriceQueryDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({ pageNum: t.number, pageSize: t.number, planId: t.number })
      .check(req);
  }
}
export const stockPriceQueryDto = t.util.createFinalVerifiable(
  StockPriceQueryDTOClass
);

/**
 *
 * @typedef {StockPriceQueryVOClass}
 */
export class StockPriceQueryVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        edit: t.object,
        operations: t.array,
        planId: t.number,
        price: t.string,
        priceId: t.number,
        publishDate: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const stockPriceQueryVo = t.util.createFinalVerifiable(
  StockPriceQueryVOClass
);

/**
 *
 * @typedef {StockSaveDTOClass}
 */
export class StockSaveDTOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        comments: t.string,
        planId: t.number,
        price: t.string,
        priceId: t.number,
        publishDate: t.string,
        startDate: t.string,
      })
      .check(req);
  }
}
export const stockSaveDto = t.util.createFinalVerifiable(StockSaveDTOClass);

/**
 *
 * @typedef {StockSimpleVOClass}
 */
export class StockSimpleVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        abolished: t.number,
        total: t.number,
        type: t.string,
        unused: t.number,
        used: t.number,
      })
      .check(req);
  }
}
export const stockSimpleVo = t.util.createFinalVerifiable(StockSimpleVOClass);

/**
 *
 * @typedef {StockUseInfoDTOClass}
 */
export class StockUseInfoDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ planId: t.number }).check(req);
  }
}
export const stockUseInfoDto = t.util.createFinalVerifiable(
  StockUseInfoDTOClass
);

/**
 *
 * @typedef {StockUseSimpleInfoVOClass}
 */
export class StockUseSimpleInfoVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        freeze: t.boolean,
        planId: t.number,
        rs: stockSimpleVo,
        so: stockSimpleVo,
      })
      .check(req);
  }
}
export const stockUseSimpleInfoVo = t.util.createFinalVerifiable(
  StockUseSimpleInfoVOClass
);

/**
 *
 * @typedef {SuggestDTOClass}
 */
export class SuggestDTOClass extends t.Verifiable {
  _check(req) {
    return t.leq({ keyword: t.string, limit: t.number }).check(req);
  }
}
export const suggestDto = t.util.createFinalVerifiable(SuggestDTOClass);

/**
 *
 * @typedef {TBCGrantBeforeVOClass}
 */
export class TBCGrantBeforeVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        contents: t.string,
        grantsId: t.number,
        planId: t.number,
        planName: t.string,
      })
      .check(req);
  }
}
export const tbcGrantBeforeVo = t.util.createFinalVerifiable(
  TBCGrantBeforeVOClass
);

/**
 *
 * @typedef {TBCGrantVOClass}
 */
export class TBCGrantVOClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        agreeId: t.number,
        createdBy: t.number,
        createdByName: t.string,
        creationDate: timestamp,
        edit: t.object,
        grantAmount: t.number,
        grantDate: t.string,
        grantType: t.string,
        grantsCode: t.string,
        grantsId: t.number,
        lastUpdateDate: timestamp,
        lastUpdatedBy: t.number,
        lastUpdatedByName: t.string,
        limitDate: t.string,
        map: t.object,
        operations: t.array,
        planId: t.number,
        planName: t.string,
        price: t.number,
      })
      .check(req);
  }
}
export const tbcGrantVo = t.util.createFinalVerifiable(TBCGrantVOClass);

/**
 *
 * @typedef {TimestampClass}
 */
export class TimestampClass extends t.Verifiable {
  _check(req) {
    return t
      .leq({
        date: t.number,
        day: t.number,
        hours: t.number,
        minutes: t.number,
        month: t.number,
        nanos: t.number,
        seconds: t.number,
        time: t.number,
        timezoneOffset: t.number,
        year: t.number,
      })
      .check(req);
  }
}
export const timestamp = t.util.createFinalVerifiable(TimestampClass);

/**
 *
 * @typedef {UserVoClass}
 */
export class UserVoClass extends t.Verifiable {
  _check(req) {
    return t.leq({ personId: t.number, personName: t.string }).check(req);
  }
}
export const userVo = t.util.createFinalVerifiable(UserVoClass);

/**
 *
 * @typedef {panelMapClass}
 */
export class panelMapClass extends t.Verifiable {
  _check(req) {
    return t.leq({}).check(req);
  }
}
export const panelMap = t.util.createFinalVerifiable(panelMapClass);
