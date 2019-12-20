import { Root, observable } from "react-mobx-vm";

/**
 *
 * @typedef {AcceptGrantDto}
 */
export class AcceptGrantDto extends Root {
  /**
   * 授予ID
   * @example 11111
   * @type {number}
   */
  @observable grantsId = "";
}

/**
 *
 * @typedef {AgreementQueryDto}
 */
export class AgreementQueryDto extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable language = "";

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";
}

/**
 *
 * @typedef {AgreementSuggestVo}
 */
export class AgreementSuggestVo extends Root {
  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 协议名字
   * @example 协议名字
   * @type {string}
   */
  @observable agreeName = "";

  /**
   * 协议code
   * @example 0001
   * @type {string}
   */
  @observable agreeNum = "";
}

/**
 *
 * @typedef {AgreementUpdateDto}
 */
export class AgreementUpdateDto extends Root {
  /**
   * 英文协议内容
   * @example Hello XiaoHu
   * @type {string}
   */
  @observable agreeContentUs = "";

  /**
   * 中文协议内容
   * @example 您好
   * @type {string}
   */
  @observable agreeContentZh = "";

  /**
   * 协议ID
   * @example
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable signCodeEn = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable signCodeZh = "";
}

/**
 *
 * @typedef {Edit}
 */
export class Edit extends Root {}

/**
 *
 * @typedef {Map}
 */
export class Map extends Root {}

/**
 *
 * @typedef {AgreementVo}
 */
export class AgreementVo extends Root {
  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName = "";

  /**
   * 协议编号
   * @example 0001
   * @type {string}
   */
  @observable agreeNum = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   *
   * @example
   * @type {edit}
   */
  @observable edit = Edit.create();

  /**
   * 授予类型
   * @example SO
   * @type {string}
   */
  @observable esopType = "";

  /**
   * 是否已经上传签字页
   * @example Y
   * @type {string}
   */
  @observable isSignPage = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   *
   * @example
   * @type {map}
   */
  @observable map = Map.create();

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划状态
   * @example SAVED
   * @type {string}
   */
  @observable planStatus = "";
}

/**
 *
 * @typedef {AgreementViewVo}
 */
export class AgreementViewVo extends Root {
  /**
   * 中文协议内容
   * @example 你好
   * @type {string}
   */
  @observable agreeContentUs = "";

  /**
   * 英文协议内容
   * @example Hi All
   * @type {string}
   */
  @observable agreeContentZh = "";

  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName = "";

  /**
   * 协议编号
   * @example 0001
   * @type {string}
   */
  @observable agreeNum = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 授予类型
   * @example SO
   * @type {string}
   */
  @observable esopType = "";

  /**
   * 是否已上传英文协议签字页
   * @example N
   * @type {string}
   */
  @observable hasSignCodeUs = "";

  /**
   * 是否已上传中文协议签字页
   * @example Y
   * @type {string}
   */
  @observable hasSignCodeZh = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 英文协议签字页名字
   * @example 度秘协议签字页
   * @type {string}
   */
  @observable signPageNameUs = "";

  /**
   * 中文协议签字页名字
   * @example 度秘协议签字页
   * @type {string}
   */
  @observable signPageNameZh = "";
}

/**
 *
 * @typedef {AnalyzeMovePanelVo}
 */
export class AnalyzeMovePanelVo extends Root {
  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deductionStatus = [];

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable grantMoveEndDate = "";

  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable grantMoveStartDate = "";

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable grantStatus = [];

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 操作角色
   * @example
   * @type {array}
   */
  @observable operationRole = [];

  /**
   * 退款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable personMoveEndDate = "";

  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable personMoveStartDate = "";
}

/**
 *
 * @typedef {AnalyzePanelVo}
 */
export class AnalyzePanelVo extends Root {
  /**
   * 员工类型
   * @example
   * @type {array}
   */
  @observable employeeType = [];

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantCode = "";

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 授予负责角色/授予创建角色
   * @example
   * @type {array}
   */
  @observable grantRole = [];

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable grantStatus = [];

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];
}

/**
 *
 * @typedef {AnalyzeQuitPanelVo}
 */
export class AnalyzeQuitPanelVo extends Root {
  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 操作角色
   * @example
   * @type {array}
   */
  @observable operationRole = [];

  /**
   * 退款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateEnd = "";

  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateStart = "";
}

/**
 *
 * @typedef {AscrRuleDto}
 */
export class AscrRuleDto extends Root {
  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable grantDate = "";
}

/**
 *
 * @typedef {AscriptionInfoVo}
 */
export class AscriptionInfoVo extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 是否已归属
   * @example Y
   * @type {string}
   */
  @observable ascrFlag = "";

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber = "";

  /**
   * 归属ID
   * @example 1000
   * @type {number}
   */
  @observable ascriptionId = "";

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};
}

/**
 *
 * @typedef {AscriptionSimpleVo}
 */
export class AscriptionSimpleVo extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber = "";

  /**
   * 归属规则修改标志
   * @example true
   * @type {boolean}
   */
  @observable editFlag;
}

/**
 *
 * @typedef {AscriptionVo}
 */
export class AscriptionVo extends Root {
  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 归属明细
   * @example []
   * @type {array}
   */
  @observable rsAscrList = [];
}

/**
 *
 * @typedef {BussLineCreateDto}
 */
export class BussLineCreateDto extends Root {
  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 备注
   * @example XXX
   * @type {string}
   */
  @observable comments = "";

  /**
   * Leading BP/HRBP
   * @example [12, 23]
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布)),默认为”保存“操作
   * @example PUBLISH
   * @type {string}
   */
  @observable operationCode = "";
}

/**
 *
 * @typedef {BussLineOrgCreateDto}
 */
export class BussLineOrgCreateDto extends Root {
  /**
   * 业务线ID
   * @example 12
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 备注
   * @example BPIT
   * @type {string}
   */
  @observable comments = "";

  /**
   * 部門ID
   * @example 12
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部門名字
   * @example BPIT
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 生效日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {BussLineOrgQueryDto}
 */
export class BussLineOrgQueryDto extends Root {
  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 标志位（大于0有效部门，小于0无效部门，等于0所有部门）
   * @example
   * @type {number}
   */
  @observable flag = "";

  /**
   * 部门名称
   * @example
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";
}

/**
 *
 * @typedef {BussLineOrgUpdateDto}
 */
export class BussLineOrgUpdateDto extends Root {
  /**
   * 部門ID
   * @example 12
   * @type {number}
   */
  @observable bussOrgId = "";

  /**
   * 備註
   * @example notes
   * @type {string}
   */
  @observable comments = "";

  /**
   * 部門失效日期
   * @example 2018-01-21
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 部門生效日期
   * @example 2018-01-21
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {BussLineQueryTempDto}
 */
export class BussLineQueryTempDto extends Root {
  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";
}

/**
 *
 * @typedef {BussLineSuggestVo}
 */
export class BussLineSuggestVo extends Root {
  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";
}

/**
 *
 * @typedef {BussLineUpdateDto}
 */
export class BussLineUpdateDto extends Root {
  /**
   * 业务线ID
   * @example 12
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 备注
   * @example
   * @type {string}
   */
  @observable comments = "";

  /**
   * Leading BP/HRBP
   * @example [12, 23]
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布))
   * @example
   * @type {string}
   */
  @observable operationCode = "";
}

/**
 *
 * @typedef {BussLineVo}
 */
export class BussLineVo extends Root {
  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 备注
   * @example XXX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 有效部门数量
   * @example 2
   * @type {number}
   */
  @observable departmentNum = "";

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * leadingBpIdStr
   * @example [{"personId":"12","email":"12@baidu.com"}, {"personId":"12","email":"12@baidu.com"}]
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * leadingBpIdStr(该字段FE忽略)
   * @example
   * @type {string}
   */
  @observable leadingBpIdStr = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 状态
   * @example 已发布
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {BussOrgLogListVo}
 */
export class BussOrgLogListVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {BussOrgLogVo}
 */
export class BussOrgLogVo extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 原值／新值
   * @example 只有操作类型为修改的才有
   * @type {string}
   */
  @observable dataFlag = "";

  /**
   *  失效日期
   * @example 新建状态下不显示失效日期
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 日志id
   * @example 1111
   * @type {number}
   */
  @observable logId = "";

  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 生效日期
   * @example 删除状态下不显示生效日期
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {CabUpdateMoveVo}
 */
export class CabUpdateMoveVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 员工信息
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-03-31
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";
}

/**
 *
 * @typedef {CGrantForRsvo}
 */
export class CGrantForRsvo extends Root {
  /**
   * 已出资金额
   * @example 12.1
   * @type {number}
   */
  @observable alreadyFound = "";

  /**
   * 已归属
   * @example 1000
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 100
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 已取消
   * @example 100
   * @type {number}
   */
  @observable canceled = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 当前股价
   * @example 270.6
   * @type {number}
   */
  @observable currentStockPrice = "";

  /**
   * 当前股价生效日期
   * @example 2018-07-01
   * @type {string}
   */
  @observable currentStockStartDate = "";

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 出资期限
   * @example 2018-07-01
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 出资本金/股
   * @example 11.21
   * @type {number}
   */
  @observable price = "";
}

/**
 *
 * @typedef {CGrantForSovo}
 */
export class CGrantForSovo extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 已归属
   * @example 1000
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 100
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 已取消
   * @example 100
   * @type {number}
   */
  @observable canceled = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 当前股价
   * @example 270.6
   * @type {number}
   */
  @observable currentStockPrice = "";

  /**
   * 当前股价生效日期
   * @example 2018-07-01
   * @type {string}
   */
  @observable currentStockStartDate = "";

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";
}

/**
 *
 * @typedef {CancelSimpleVo}
 */
export class CancelSimpleVo extends Root {
  /**
   * 取消时间
   * @example 2018-01-01 01:02:2
   * @type {Timestamp}
   */
  @observable cancelDate = Timestamp.create();

  /**
   * 取消数量
   * @example 1000
   * @type {number}
   */
  @observable cancelNumber = "";

  /**
   * 取消原因
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};
}

/**
 *
 * @typedef {CancelVo}
 */
export class CancelVo extends Root {
  /**
   * 已经归属
   * @example []
   * @type {array}
   */
  @observable ascriEd = [];

  /**
   * 未归属
   * @example []
   * @type {array}
   */
  @observable ascriIng = [];

  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";
}

/**
 *
 * @typedef {CodeAndValueVo}
 */
export class CodeAndValueVo extends Root {
  /**
   * code
   * @example update
   * @type {string}
   */
  @observable code = "";

  /**
   * 是否被选中
   * @example N
   * @type {string}
   */
  @observable selectFlag = "";

  /**
   * value
   * @example 更新
   * @type {string}
   */
  @observable value = "";
}

/**
 *
 * @typedef {DateCheckDto}
 */
export class DateCheckDto extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable grantType = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable grantsDate = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable personId = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {DepartmentSimpleVo}
 */
export class DepartmentSimpleVo extends Root {
  /**
   * 部门ID
   * @example 1212
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部門名字
   * @example 度秘
   * @type {string}
   */
  @observable orgName = "";
}

/**
 *
 * @typedef {DepartmentSuggestVo}
 */
export class DepartmentSuggestVo extends Root {
  /**
   * 部门Id
   * @example
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部门名字
   * @example
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 计划Id
   * @example
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {DepartmentVo}
 */
export class DepartmentVo extends Root {
  /**
   * 业务线ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussOrgId = "";

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 删除日期
   * @example 2018-01-01 01:23:32
   * @type {Timestamp}
   */
  @observable deleteDate = Timestamp.create();

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 删除生效日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 后台使用，前端忽略
   * @example
   * @type {number}
   */
  @observable flag = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 部门ID
   * @example 1212
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部門名字
   * @example 度秘
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 新增生效日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {EmployeeGrantsDataVo}
 */
export class EmployeeGrantsDataVo extends Root {
  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable departmentName = "";

  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   * @type {string}
   */
  @observable email = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable fullName = "";

  /**
   * 服务器ID
   * @example 111
   * @type {number}
   */
  @observable periodOfServiceId = "";

  /**
   * 员工id
   * @example 1111
   * @type {number}
   */
  @observable personId = "";

  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   * @type {string}
   */
  @observable positionName = "";

  /**
   * 入职日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable serviceStartDate = "";

  /**
   * id
   * @example 1111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * suggest
   * @example 张大彪
   * @type {string}
   */
  @observable suggestValue = "";
}

/**
 *
 * @typedef {EmployeeGrantsVo}
 */
export class EmployeeGrantsVo extends Root {
  /**
   * id
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   * 类型，需要回传
   * @example employee
   * @type {string}
   */
  @observable type = "";
}

/**
 *
 * @typedef {EmployeeVo}
 */
export class EmployeeVo extends Root {
  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable departmentName = "";

  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   * @type {string}
   */
  @observable email = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable fullName = "";

  /**
   * 服务器ID
   * @example 111
   * @type {number}
   */
  @observable periodOfServiceId = "";

  /**
   * 员工id
   * @example 1111
   * @type {number}
   */
  @observable personId = "";

  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   * @type {string}
   */
  @observable positionName = "";

  /**
   * 入职日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable serviceStartDate = "";
}

/**
 *
 * @typedef {EsopMenuVo}
 */
export class EsopMenuVo extends Root {
  /**
   * 应用ID
   * @example 800
   * @type {number}
   */
  @observable appId = "";

  /**
   * 子菜单
   * @example
   * @type {array}
   */
  @observable childList = [];

  /**
   * 功能CODE
   * @example CUX_ESOP_AGREEMENT
   * @type {string}
   */
  @observable funcCode = "";

  /**
   * 功能描述
   * @example CUX_ESOP_协议设置
   * @type {string}
   */
  @observable funcDesc = "";

  /**
   * 功能名称
   * @example CUX_ESOP_协议设置
   * @type {string}
   */
  @observable funcName = "";

  /**
   * 功能地址
   * @example pages/setting.html#/agreement
   * @type {string}
   */
  @observable resUrl = "";

  /**
   * 职责ID
   * @example 74454
   * @type {number}
   */
  @observable respId = "";

  /**
   * 业务组ID
   * @example
   * @type {number}
   */
  @observable secGroupId = "";
}

/**
 *
 * @typedef {FreezingPeriodQueryDto}
 */
export class FreezingPeriodQueryDto extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {FreezingPeriodQueryVo}
 */
export class FreezingPeriodQueryVo extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments = "";

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit = {};

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 冻结设置ID
   * @example 11111
   * @type {number}
   */
  @observable freezingId = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {FreezingPeriodSaveDto}
 */
export class FreezingPeriodSaveDto extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments = "";

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 冻结设置ID
   * @example 11111
   * @type {number}
   */
  @observable freezingId = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {GrantAddDto}
 */
export class GrantAddDto extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList = [];

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 是否已经确认
   * @example true
   * @type {boolean}
   */
  @observable confirm;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 员工Id
   * @example 10000
   * @type {number}
   */
  @observable personId = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";

  /**
   * 提交类型，保存并发布/保存
   * @example post
   * @type {string}
   */
  @observable saveType = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";
}

/**
 *
 * @typedef {GrantLogListDto}
 */
export class GrantLogListDto extends Root {
  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   * @type {string}
   */
  @observable grantEndDate = "";

  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   * @type {string}
   */
  @observable grantStartDate = "";

  /**
   * 授予类型
   * @example SO/RS
   * @type {array}
   */
  @observable grantTypeList = [];

  /**
   * 部门ID
   * @example
   * @type {array}
   */
  @observable orgIdList = [];

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable rsStatusList = [];

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable soStatusList = [];

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {GrantPostDto}
 */
export class GrantPostDto extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable code = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable codes = [];

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable confirm;
}

/**
 *
 * @typedef {GrantUpdateDto}
 */
export class GrantUpdateDto extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList = [];

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 是否已经确认
   * @example true
   * @type {boolean}
   */
  @observable confirm;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 员工Id
   * @example 10000
   * @type {number}
   */
  @observable personId = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";

  /**
   * 提交类型，保存并发布/保存
   * @example post
   * @type {string}
   */
  @observable saveType = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";
}

/**
 *
 * @typedef {GrantsListDto}
 */
export class GrantsListDto extends Root {
  /**
   * 负责角色
   * @example []
   * @type {array}
   */
  @observable createRoleList = [];

  /**
   * 员工类型
   * @example []
   * @type {array}
   */
  @observable employeeType = [];

  /**
   * 授予日期结束时间
   * @example 2018-02-01
   * @type {string}
   */
  @observable grantEndDate = "";

  /**
   * 授予日期开始时间
   * @example 2018-02-01
   * @type {string}
   */
  @observable grantStartDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 计划下对应业务线下的部门列表
   * @example []
   * @type {array}
   */
  @observable orgIdList = [];

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 授予角色
   * @example []
   * @type {array}
   */
  @observable soClassList = [];

  /**
   * 授予状态
   * @example []
   * @type {array}
   */
  @observable statusList = [];

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {GrantsListVo}
 */
export class GrantsListVo extends Root {
  /**
   * 归属规则
   * @example 特殊规则
   * @type {string}
   */
  @observable ascriptionRule = "";

  /**
   * 备注
   * @example 保存中
   * @type {string}
   */
  @observable comments = "";

  /**
   * 负责角色
   * @example HRBP
   * @type {string}
   */
  @observable createRole = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期时间戳，后端使用
   * @example
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予日期-前端使用
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDateStr = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 大层级
   * @example Band3
   * @type {string}
   */
  @observable largeLevel = "";

  /**
   * 大序列
   * @example 研发
   * @type {string}
   */
  @observable largeSequence = "";

  /**
   * 出资期限
   * @example 2018-03-03
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 可操作类型
   * @example 编辑
   * @type {array}
   */
  @observable operation = [];

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 员工Id
   * @example 23423423
   * @type {number}
   */
  @observable personId = "";

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate = "";

  /**
   * 小序列
   * @example 开发
   * @type {string}
   */
  @observable smallSequence = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";

  /**
   * 授予状态
   * @example 保存中
   * @type {string}
   */
  @observable status = "";

  /**
   * 小层级
   * @example T1
   * @type {string}
   */
  @observable subLevel = "";
}

/**
 *
 * @typedef {GrantsLogListVo}
 */
export class GrantsLogListVo extends Root {
  /**
   * 已归属
   * @example
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 归属规则
   * @example
   * @type {string}
   */
  @observable ascriptionRule = "";

  /**
   * 取消已归属
   * @example
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 员工编号
   * @example
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example
   * @type {string}
   */
  @observable grantDateStr = "";

  /**
   * 授予类型
   * @example
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 离职时间
   * @example
   * @type {string}
   */
  @observable leaveDate = "";

  /**
   * 离职日期
   * @example
   * @type {string}
   */
  @observable leaveDateStr = "";

  /**
   * 出资期限
   * @example
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 人事变更调出日期
   * @example
   * @type {string}
   */
  @observable moveDateStr = "";

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 部门名
   * @example
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId = "";

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable personName = "";

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名字
   * @example
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价(SO)/认购价(RS)
   * @example
   * @type {number}
   */
  @observable price = "";

  /**
   * 保留已归属
   * @example
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";

  /**
   * 授予状态
   * @example
   * @type {string}
   */
  @observable status = "";

  /**
   * 当前股价
   * @example
   * @type {number}
   */
  @observable stockPrice = "";
}

/**
 *
 * @typedef {GrantsQueryInitVo}
 */
export class GrantsQueryInitVo extends Root {
  /**
   * 负责角色
   * @example
   * @type {array}
   */
  @observable createRoleList = [];

  /**
   * 员工类型
   * @example
   * @type {array}
   */
  @observable employeeType = [];

  /**
   * 批量操作按钮
   * @example
   * @type {array}
   */
  @observable options = [];

  /**
   * 计划下对应业务线下的部门列表
   * @example
   * @type {array}
   */
  @observable orgIdList = [];

  /**
   * 计划结束日期
   * @example
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划开始日期
   * @example
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * 授予角色
   * @example
   * @type {array}
   */
  @observable soClassList = [];

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable statusList = [];
}

/**
 *
 * @typedef {GrantsVo}
 */
export class GrantsVo extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList = [];

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 修改查询时，能够修改的范围标志,rs只有生效前和已生效两种状态
   * @example RS_ADD
   * @type {string}
   */
  @observable editFlag = "";

  /**
   * 员工信息
   * @example {}
   * @type {EmployeeVO}
   */
  @observable employeeVO = EmployeeVo.create();

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";
}

/**
 *
 * @typedef {GrantsViewLog}
 */
export class GrantsViewLog extends Root {
  /**
   * 授予类型
   * @example
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 日志list
   * @example
   * @type {array}
   */
  @observable logList = [];
}

/**
 *
 * @typedef {Errors}
 */
export class Errors extends Root {}

/**
 *
 * @typedef {Warnings}
 */
export class Warnings extends Root {}

/**
 *
 * @typedef {JsonResultAgreementViewVo}
 */
export class JsonResultAgreementViewVo extends Root {
  /**
   *
   * @example
   * @type {AgreementViewVO}
   */
  @observable data = AgreementViewVo.create();

  /**
   *
   * @example
   * @type {errors}
   */
  @observable errors = Errors.create();

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {warnings}
   */
  @observable warnings = Warnings.create();
}

/**
 *
 * @typedef {JsonResultAscriptionVo}
 */
export class JsonResultAscriptionVo extends Root {
  /**
   *
   * @example
   * @type {AscriptionVO}
   */
  @observable data = AscriptionVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultBussLineVo}
 */
export class JsonResultBussLineVo extends Root {
  /**
   *
   * @example
   * @type {BussLineVO}
   */
  @observable data = BussLineVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultCabUpdateMoveVo}
 */
export class JsonResultCabUpdateMoveVo extends Root {
  /**
   *
   * @example
   * @type {CABUpdateMoveVo}
   */
  @observable data = CabUpdateMoveVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultCancelVo}
 */
export class JsonResultCancelVo extends Root {
  /**
   *
   * @example
   * @type {CancelVO}
   */
  @observable data = CancelVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultDepartmentVo}
 */
export class JsonResultDepartmentVo extends Root {
  /**
   *
   * @example
   * @type {DepartmentVO}
   */
  @observable data = DepartmentVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultGrantsVo}
 */
export class JsonResultGrantsVo extends Root {
  /**
   *
   * @example
   * @type {GrantsVO}
   */
  @observable data = GrantsVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultGrantsViewLog}
 */
export class JsonResultGrantsViewLog extends Root {
  /**
   *
   * @example
   * @type {GrantsViewLog}
   */
  @observable data = GrantsViewLog.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListAgreementSuggestVo}
 */
export class JsonResultListAgreementSuggestVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListBussLineSuggestVo}
 */
export class JsonResultListBussLineSuggestVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListBussOrgLogListVo}
 */
export class JsonResultListBussOrgLogListVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListCGrantForRsvo}
 */
export class JsonResultListCGrantForRsvo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListCGrantForSovo}
 */
export class JsonResultListCGrantForSovo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListDepartmentSimpleVo}
 */
export class JsonResultListDepartmentSimpleVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListDepartmentSuggestVo}
 */
export class JsonResultListDepartmentSuggestVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListEmployeeGrantsVo}
 */
export class JsonResultListEmployeeGrantsVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListEmployeeVo}
 */
export class JsonResultListEmployeeVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListEsopMenuVo}
 */
export class JsonResultListEsopMenuVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListLogCommonVoLogFreezingPeriodViewVo}
 */
export class JsonResultListLogCommonVoLogFreezingPeriodViewVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListLogCommonVoLogPlanViewVo}
 */
export class JsonResultListLogCommonVoLogPlanViewVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListLogCommonVoLogRightPriceViewVo}
 */
export class JsonResultListLogCommonVoLogRightPriceViewVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListLogCommonVoLogStockPriceViewVo}
 */
export class JsonResultListLogCommonVoLogStockPriceViewVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListOrgVo}
 */
export class JsonResultListOrgVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListPlanSimpleVo}
 */
export class JsonResultListPlanSimpleVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListSoAscriptionSimpleVo}
 */
export class JsonResultListSoAscriptionSimpleVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListTbcGrantVo}
 */
export class JsonResultListTbcGrantVo extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultListString}
 */
export class JsonResultListString extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data = [];

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultLogPlanPanelVo}
 */
export class JsonResultLogPlanPanelVo extends Root {
  /**
   *
   * @example
   * @type {LogPlanPanelVO}
   */
  @observable data = LogPlanPanelVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultLogPlanPlanViewVo}
 */
export class JsonResultLogPlanPlanViewVo extends Root {
  /**
   *
   * @example
   * @type {LogPlanPlanViewVO}
   */
  @observable data = LogPlanPlanViewVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultLogQueryInitVo}
 */
export class JsonResultLogQueryInitVo extends Root {
  /**
   *
   * @example
   * @type {LogQueryInitVO}
   */
  @observable data = LogQueryInitVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {Data}
 */
export class Data extends Root {}

/**
 *
 * @typedef {JsonResultMapStringAnalyzeMovePanelVo}
 */
export class JsonResultMapStringAnalyzeMovePanelVo extends Root {
  /**
   *
   * @example
   * @type {data}
   */
  @observable data = Data.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMapStringAnalyzePanelVo}
 */
export class JsonResultMapStringAnalyzePanelVo extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data = {};

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMapStringAnalyzeQuitPanelVo}
 */
export class JsonResultMapStringAnalyzeQuitPanelVo extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data = {};

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMapStringGrantsQueryInitVo}
 */
export class JsonResultMapStringGrantsQueryInitVo extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data = {};

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMapStringMovePanelVo}
 */
export class JsonResultMapStringMovePanelVo extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data = {};

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMapStringQuitPanelVo}
 */
export class JsonResultMapStringQuitPanelVo extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data = {};

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultMoveCbQueryParams}
 */
export class JsonResultMoveCbQueryParams extends Root {
  /**
   *
   * @example
   * @type {MoveCBQueryParams}
   */
  @observable data = MoveCbQueryParams.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoAgreementVo}
 */
export class JsonResultPageInfoAgreementVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_AgreementVO_}
   */
  @observable data = PageInfoAgreementVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoBussLineVo}
 */
export class JsonResultPageInfoBussLineVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_BussLineVO_}
   */
  @observable data = PageInfoBussLineVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoDepartmentVo}
 */
export class JsonResultPageInfoDepartmentVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_DepartmentVO_}
   */
  @observable data = PageInfoDepartmentVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoFreezingPeriodQueryVo}
 */
export class JsonResultPageInfoFreezingPeriodQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_FreezingPeriodQueryVO_}
   */
  @observable data = PageInfoFreezingPeriodQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoGrantsListVo}
 */
export class JsonResultPageInfoGrantsListVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_GrantsListVO_}
   */
  @observable data = PageInfoGrantsListVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoGrantsLogListVo}
 */
export class JsonResultPageInfoGrantsLogListVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_GrantsLogListVO_}
   */
  @observable data = PageInfoGrantsLogListVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoLogPlanQueryVo}
 */
export class JsonResultPageInfoLogPlanQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_LogPlanQueryVO_}
   */
  @observable data = PageInfoLogPlanQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoMoveCbQueryVo}
 */
export class JsonResultPageInfoMoveCbQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveCBQueryVO_}
   */
  @observable data = PageInfoMoveCbQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoMoveRsAnlyVo}
 */
export class JsonResultPageInfoMoveRsAnlyVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveRsAnlyVO_}
   */
  @observable data = PageInfoMoveRsAnlyVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoMoveRsQueryVo}
 */
export class JsonResultPageInfoMoveRsQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveRsQueryVO_}
   */
  @observable data = PageInfoMoveRsQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoMoveSoAnlyVo}
 */
export class JsonResultPageInfoMoveSoAnlyVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveSoAnlyVO_}
   */
  @observable data = PageInfoMoveSoAnlyVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoMoveSoQueryVo}
 */
export class JsonResultPageInfoMoveSoQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveSoQueryVO_}
   */
  @observable data = PageInfoMoveSoQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoPlanQueryVo}
 */
export class JsonResultPageInfoPlanQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_PlanQueryVO_}
   */
  @observable data = PageInfoPlanQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoQuitRsAnlyVo}
 */
export class JsonResultPageInfoQuitRsAnlyVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitRsAnlyVO_}
   */
  @observable data = PageInfoQuitRsAnlyVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoQuitRsQueryVo}
 */
export class JsonResultPageInfoQuitRsQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitRsQueryVO_}
   */
  @observable data = PageInfoQuitRsQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoQuitSoAnlyVo}
 */
export class JsonResultPageInfoQuitSoAnlyVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitSoAnlyVO_}
   */
  @observable data = PageInfoQuitSoAnlyVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoQuitSoQueryVo}
 */
export class JsonResultPageInfoQuitSoQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitSoQueryVO_}
   */
  @observable data = PageInfoQuitSoQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoRightPriceQueryVo}
 */
export class JsonResultPageInfoRightPriceQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_RightPriceQueryVO_}
   */
  @observable data = PageInfoRightPriceQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoStockOwnVo}
 */
export class JsonResultPageInfoStockOwnVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_StockOwnVO_}
   */
  @observable data = PageInfoStockOwnVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPageInfoStockPriceQueryVo}
 */
export class JsonResultPageInfoStockPriceQueryVo extends Root {
  /**
   *
   * @example
   * @type {PageInfo_StockPriceQueryVO_}
   */
  @observable data = PageInfoStockPriceQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPlanPanelVo}
 */
export class JsonResultPlanPanelVo extends Root {
  /**
   *
   * @example
   * @type {PlanPanelVO}
   */
  @observable data = PlanPanelVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultPlanViewVo}
 */
export class JsonResultPlanViewVo extends Root {
  /**
   *
   * @example
   * @type {PlanViewVO}
   */
  @observable data = PlanViewVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultQuitDeduDetailVo}
 */
export class JsonResultQuitDeduDetailVo extends Root {
  /**
   *
   * @example
   * @type {QuitDeduDetailVO}
   */
  @observable data = QuitDeduDetailVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultRsAscriptionVo}
 */
export class JsonResultRsAscriptionVo extends Root {
  /**
   *
   * @example
   * @type {RSAscriptionVO}
   */
  @observable data = RsAscriptionVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultRightPriceQueryVo}
 */
export class JsonResultRightPriceQueryVo extends Root {
  /**
   *
   * @example
   * @type {RightPriceQueryVO}
   */
  @observable data = RightPriceQueryVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultStockUseSimpleInfoVo}
 */
export class JsonResultStockUseSimpleInfoVo extends Root {
  /**
   *
   * @example
   * @type {StockUseSimpleInfoVO}
   */
  @observable data = StockUseSimpleInfoVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultTbcGrantBeforeVo}
 */
export class JsonResultTbcGrantBeforeVo extends Root {
  /**
   *
   * @example
   * @type {TBCGrantBeforeVO}
   */
  @observable data = TbcGrantBeforeVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultUserVo}
 */
export class JsonResultUserVo extends Root {
  /**
   *
   * @example
   * @type {UserVo}
   */
  @observable data = UserVo.create();

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultVoid}
 */
export class JsonResultVoid extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultBoolean}
 */
export class JsonResultBoolean extends Root {
  /**
   *
   * @example
   * @type {boolean}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultInt}
 */
export class JsonResultInt extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable data = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultLong}
 */
export class JsonResultLong extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable data = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {JsonResultString}
 */
export class JsonResultString extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable data = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors = {};

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message = "";

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings = {};
}

/**
 *
 * @typedef {LogCommonVo}
 */
export class LogCommonVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {LogCommonVoLogFreezingPeriodViewVo}
 */
export class LogCommonVoLogFreezingPeriodViewVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {LogCommonVoLogPlanViewVo}
 */
export class LogCommonVoLogPlanViewVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {LogCommonVoLogRightPriceViewVo}
 */
export class LogCommonVoLogRightPriceViewVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {LogCommonVoLogStockPriceViewVo}
 */
export class LogCommonVoLogStockPriceViewVo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs = [];

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation = EmployeeVo.create();

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode = "";

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate = "";

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg = "";
}

/**
 *
 * @typedef {LogFreezingPeriodViewVo}
 */
export class LogFreezingPeriodViewVo extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments = "";

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate = "";

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId = "";

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew = "";

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {LogPlanPanelVo}
 */
export class LogPlanPanelVo extends Root {
  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status = [];
}

/**
 *
 * @typedef {LogPlanPlanViewVo}
 */
export class LogPlanPlanViewVo extends Root {
  /**
   * 协议id
   * @example
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";

  /**
   * 计划状态
   * @example FINISH
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {LogPlanQueryDto}
 */
export class LogPlanQueryDto extends Root {
  /**
   * 业务线id
   * @example 11111
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft = "";

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight = "";

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status = [];
}

/**
 *
 * @typedef {LogPlanQueryVo}
 */
export class LogPlanQueryVo extends Root {
  /**
   * 业务线名称
   * @example 业务线名称
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 是否已冻结
   * @example Y
   * @type {string}
   */
  @observable freezing = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";

  /**
   * 状态
   * @example status
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {LogPlanViewVo}
 */
export class LogPlanViewVo extends Root {
  /**
   * 协议名称
   * @example
   * @type {string}
   */
  @observable agreeName = "";

  /**
   * 业务线名称
   * @example
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId = "";

  /**
   * 老值还是新值
   * @example
   * @type {string}
   */
  @observable oldOrNew = "";

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";
}

/**
 *
 * @typedef {LogQueryInitVo}
 */
export class LogQueryInitVo extends Root {
  /**
   * 授予结束日期
   * @example
   * @type {string}
   */
  @observable grantEndDate = "";

  /**
   * 授予开始日期
   * @example
   * @type {string}
   */
  @observable grantStartDate = "";

  /**
   * 授予类型
   * @example
   * @type {array}
   */
  @observable grantTypeList = [];

  /**
   * 计划下对应业务线下的部门列表
   * @example
   * @type {array}
   */
  @observable orgIdList = [];

  /**
   * 计划列表
   * @example
   * @type {array}
   */
  @observable planList = [];

  /**
   * rs授予状态
   * @example
   * @type {array}
   */
  @observable rsStatusList = [];

  /**
   * so授予状态
   * @example
   * @type {array}
   */
  @observable soStatusList = [];
}

/**
 *
 * @typedef {LogRightPriceViewVo}
 */
export class LogRightPriceViewVo extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId = "";

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew = "";

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {LogStockPriceViewVo}
 */
export class LogStockPriceViewVo extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId = "";

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew = "";

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {MapStringAnalyzeMovePanelVo}
 */
export class MapStringAnalyzeMovePanelVo extends Root {}

/**
 *
 * @typedef {MapStringAnalyzePanelVo}
 */
export class MapStringAnalyzePanelVo extends Root {}

/**
 *
 * @typedef {MapStringAnalyzeQuitPanelVo}
 */
export class MapStringAnalyzeQuitPanelVo extends Root {}

/**
 *
 * @typedef {MapStringGrantsQueryInitVo}
 */
export class MapStringGrantsQueryInitVo extends Root {}

/**
 *
 * @typedef {MapStringMovePanelVo}
 */
export class MapStringMovePanelVo extends Root {}

/**
 *
 * @typedef {MapStringQuitPanelVo}
 */
export class MapStringQuitPanelVo extends Root {}

/**
 *
 * @typedef {MoveAnalyzeDto}
 */
export class MoveAnalyzeDto extends Root {
  /**
   * 扣减状态
   * @example 扣减状态
   * @type {array}
   */
  @observable deduStatusSet = [];

  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {array}
   */
  @observable grantStatusSet = [];

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 退款状态 RS 才有
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * personId
   * @example 员工ID
   * @type {number}
   */
  @observable personId = "";

  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable personMoveEndDate = "";

  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable personMoveStartDate = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {MoveCbListDto}
 */
export class MoveCbListDto extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft = "";

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 计划id或者全选
   * @example 1111
   * @type {string}
   */
  @observable planId = "";

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {MoveCbPanelVo}
 */
export class MoveCbPanelVo extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft = "";

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];
}

/**
 *
 * @typedef {MoveCbQueryDto}
 */
export class MoveCbQueryDto extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable moveDeduId = "";
}

/**
 *
 * @typedef {PanelMap}
 */
export class PanelMap extends Root {}

/**
 *
 * @typedef {MoveCbQueryParams}
 */
export class MoveCbQueryParams extends Root {
  /**
   *
   * @example
   * @type {panelMap}
   */
  @observable panelMap = PanelMap.create();

  /**
   *
   * @example
   * @type {array}
   */
  @observable planList = [];
}

/**
 *
 * @typedef {MoveCbQueryVo}
 */
export class MoveCbQueryVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 归属规则
   * @example 特殊规则
   * @type {string}
   */
  @observable ascriptionRule = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工信息
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId = "";

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName = "";

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 出资本金/股
   * @example 1212.12
   * @type {number}
   */
  @observable price = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {MoveCbUpdateDto}
 */
export class MoveCbUpdateDto extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";
}

/**
 *
 * @typedef {MovePanelVo}
 */
export class MovePanelVo extends Root {
  /**
   * 授予负责角色/授予创建角色
   * @example
   * @type {array}
   */
  @observable creatRole = [];

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus = [];

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft = "";

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status = [];
}

/**
 *
 * @typedef {MoveRsAnlyVo}
 */
export class MoveRsAnlyVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable employeeName = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable grantStatus = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 员工id
   * @example 页面不显示
   * @type {number}
   */
  @observable moveDeduId = "";

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName = "";

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName = "";

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * 员工id
   * @example 页面不显示
   * @type {number}
   */
  @observable personId = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 认购价/股
   * @example 1212.12
   * @type {number}
   */
  @observable price = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";
}

/**
 *
 * @typedef {MoveRsQueryDto}
 */
export class MoveRsQueryDto extends Root {
  /**
   * 授予负责角色
   * @example
   * @type {array}
   */
  @observable creatRole = [];

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus = [];

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft = "";

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status = [];

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {MoveRsQueryVo}
 */
export class MoveRsQueryVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId = "";

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName = "";

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {MoveSoAnlyVo}
 */
export class MoveSoAnlyVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable employeeName = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable grantStatus = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName = "";

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName = "";

  /**
   * personId
   * @example 前端不显示
   * @type {number}
   */
  @observable personId = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 认购价/股
   * @example 1212.12
   * @type {number}
   */
  @observable price = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";
}

/**
 *
 * @typedef {MoveSoQueryDto}
 */
export class MoveSoQueryDto extends Root {
  /**
   * 授予负责角色
   * @example
   * @type {array}
   */
  @observable creatRole = [];

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus = [];

  /**
   * 授予日期左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 人事变更调出时间左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDateLeft = "";

  /**
   * 人事变更调出时间右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDateRight = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status = [];

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {MoveSoQueryVo}
 */
export class MoveSoQueryVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId = "";

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName = "";

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {OrgVo}
 */
export class OrgVo extends Root {
  /**
   * 部门id
   * @example 1111
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName = "";
}

/**
 *
 * @typedef {PageInfoAgreementVo}
 */
export class PageInfoAgreementVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoBussLineVo}
 */
export class PageInfoBussLineVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoDepartmentVo}
 */
export class PageInfoDepartmentVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoFreezingPeriodQueryVo}
 */
export class PageInfoFreezingPeriodQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoGrantsListVo}
 */
export class PageInfoGrantsListVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoGrantsLogListVo}
 */
export class PageInfoGrantsLogListVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoLogPlanQueryVo}
 */
export class PageInfoLogPlanQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoMoveCbQueryVo}
 */
export class PageInfoMoveCbQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoMoveRsAnlyVo}
 */
export class PageInfoMoveRsAnlyVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoMoveRsQueryVo}
 */
export class PageInfoMoveRsQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoMoveSoAnlyVo}
 */
export class PageInfoMoveSoAnlyVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoMoveSoQueryVo}
 */
export class PageInfoMoveSoQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoPlanQueryVo}
 */
export class PageInfoPlanQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoQuitRsAnlyVo}
 */
export class PageInfoQuitRsAnlyVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoQuitRsQueryVo}
 */
export class PageInfoQuitRsQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoQuitSoAnlyVo}
 */
export class PageInfoQuitSoAnlyVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoQuitSoQueryVo}
 */
export class PageInfoQuitSoQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoRightPriceQueryVo}
 */
export class PageInfoRightPriceQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoStockOwnVo}
 */
export class PageInfoStockOwnVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PageInfoStockPriceQueryVo}
 */
export class PageInfoStockPriceQueryVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage = "";

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasNextPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable hasPreviousPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isFirstPage;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable isLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable lastPage = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable list = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages = "";

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable size = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable total = "";
}

/**
 *
 * @typedef {PlanNameCodeCheckDto}
 */
export class PlanNameCodeCheckDto extends Root {
  /**
   * 计划id
   * @example 111
   * @type {number}
   */
  @observable planId = "";

  /**
   * code/name
   * @example A11/渡鸦计划2017
   * @type {string}
   */
  @observable value = "";
}

/**
 *
 * @typedef {PlanPanelVo}
 */
export class PlanPanelVo extends Root {
  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft = "";

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight = "";

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status = [];
}

/**
 *
 * @typedef {PlanQueryDto}
 */
export class PlanQueryDto extends Root {
  /**
   * 业务线id
   * @example 11111
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft = "";

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight = "";

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status = [];
}

/**
 *
 * @typedef {PlanQueryVo}
 */
export class PlanQueryVo extends Root {
  /**
   * 业务线名称
   * @example 业务线名称
   * @type {string}
   */
  @observable bussLineName = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 是否已冻结
   * @example Y
   * @type {string}
   */
  @observable freezing = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";

  /**
   * 状态
   * @example status
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {PlanReleaseDto}
 */
export class PlanReleaseDto extends Root {
  /**
   * 协议
   * @example
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 业务线
   * @example
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBpIdStr
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 计划Code
   * @example A123
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";
}

/**
 *
 * @typedef {PlanSaveDto}
 */
export class PlanSaveDto extends Root {
  /**
   * 协议
   * @example
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 业务线
   * @example
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments = "";

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBpIdStr
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 计划Code
   * @example A123
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";
}

/**
 *
 * @typedef {PlanSimpleVo}
 */
export class PlanSimpleVo extends Root {
  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";
}

/**
 *
 * @typedef {PlanViewVo}
 */
export class PlanViewVo extends Root {
  /**
   * 协议id
   * @example
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId = "";

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager = [];

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments = "";

  /**
   *
   * @example
   * @type {object}
   */
  @observable edit = {};

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp = [];

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp = [];

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode = "";

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate = "";

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal = "";

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal = "";

  /**
   * 计划状态
   * @example FINISH
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {PriceQueryDto}
 */
export class PriceQueryDto extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable dateStr = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable grantType = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {QuitAnalyzeDto}
 */
export class QuitAnalyzeDto extends Root {
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 付款状态 RS 才有
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * personId
   * @example 11
   * @type {number}
   */
  @observable personId = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateEnd = "";

  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateStart = "";
}

/**
 *
 * @typedef {QuitDeduDetailVo}
 */
export class QuitDeduDetailVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 是否可编辑
   * @example Y
   * @type {string}
   */
  @observable editFlag = "";

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 退款状态
   * @example 退款状态
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price = "";

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate = "";

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {QuitModifyDto}
 */
export class QuitModifyDto extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 离职扣减ID
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId = "";

  /**
   * 退款股数
   * @example 10
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";
}

/**
 *
 * @typedef {QuitPanelVo}
 */
export class QuitPanelVo extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation = [];

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 离职日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateLeft = "";

  /**
   * 离职日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateRight = "";
}

/**
 *
 * @typedef {QuitRsAnlyVo}
 */
export class QuitRsAnlyVo extends Root {
  /**
   * 离职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable actualTerminationDate = "";

  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 部门Id
   * @example 前端不显示
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * personId
   * @example 前端不显示
   * @type {number}
   */
  @observable personId = "";

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName = "";

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 退款金额
   * @example 1111
   * @type {number}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 1111
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 1111
   * @type {number}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate = "";
}

/**
 *
 * @typedef {QuitRsQueryDto}
 */
export class QuitRsQueryDto extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus = [];

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 离职时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateLeft = "";

  /**
   * 离职时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateRight = "";

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {QuitRsQueryVo}
 */
export class QuitRsQueryVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 退款状态
   * @example 退款状态
   * @type {string}
   */
  @observable paymentStatus = "";

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price = "";

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate = "";

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {QuitSoAnlyVo}
 */
export class QuitSoAnlyVo extends Root {
  /**
   * 离职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable actualTerminationDate = "";

  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 部门Id
   * @example 前端不显示
   * @type {number}
   */
  @observable orgId = "";

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId = "";

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName = "";

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney = "";

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber = "";

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate = "";
}

/**
 *
 * @typedef {QuitSoQueryDto}
 */
export class QuitSoQueryDto extends Root {
  /**
   * 授予日期左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateLeft = "";

  /**
   * 授予日期右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateRight = "";

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 离职时间左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDateLeft = "";

  /**
   * 离职时间右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDateRight = "";

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {QuitSoQueryVo}
 */
export class QuitSoQueryVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments = "";

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus = "";

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee = EmployeeVo.create();

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price = "";

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate = "";

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId = "";

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status = "";
}

/**
 *
 * @typedef {RsAscrUpdateDto}
 */
export class RsAscrUpdateDto extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable ascrList = [];

  /**
   *
   * @example
   * @type {number}
   */
  @observable grantsId = "";
}

/**
 *
 * @typedef {RsAscriptionDto}
 */
export class RsAscriptionDto extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 归属Id
   * @example 1111
   * @type {number}
   */
  @observable ascrId = "";

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber = "";

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";
}

/**
 *
 * @typedef {RsAscriptionSimpleVo}
 */
export class RsAscriptionSimpleVo extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 归属Id
   * @example 1111
   * @type {number}
   */
  @observable ascrId = "";

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber = "";

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments = "";

  /**
   * 归属规则修改标志
   * @example true
   * @type {boolean}
   */
  @observable editFlag;

  /**
   * 授予ID
   * @example 11111
   * @type {number}
   */
  @observable grantsId = "";
}

/**
 *
 * @typedef {RsAscriptionVo}
 */
export class RsAscriptionVo extends Root {
  /**
   * 员工信息
   * @example {}
   * @type {EmployeeVO}
   */
  @observable employeeVO = EmployeeVo.create();

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予code
   * @example WSSO1000
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 未归属数量
   * @example 2500
   * @type {number}
   */
  @observable nonAscrAmount = "";

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName = "";

  /**
   * 归属明细和是否可以修改标志
   * @example []
   * @type {array}
   */
  @observable rsAscrList = [];
}

/**
 *
 * @typedef {RsFullAscrDto}
 */
export class RsFullAscrDto extends Root {
  /**
   * 归属日期
   * @example 2017-12-10
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 授予id列表
   * @example []
   * @type {array}
   */
  @observable codes = [];
}

/**
 *
 * @typedef {RightPriceQueryDto}
 */
export class RightPriceQueryDto extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 股权类型（不需要传参）
   * @example SO
   * @type {string}
   */
  @observable type = "";
}

/**
 *
 * @typedef {RightPriceQueryVo}
 */
export class RightPriceQueryVo extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 行权价/认购价的ID
   * @example 11111
   * @type {number}
   */
  @observable rightPriceId = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {RightPriceSaveDto}
 */
export class RightPriceSaveDto extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 行权价/认购价的ID
   * @example 11111
   * @type {number}
   */
  @observable rightPriceId = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";

  /**
   * 股权类型（不需要传参）
   * @example SO
   * @type {string}
   */
  @observable type = "";
}

/**
 *
 * @typedef {SoAscriptionSimpleVo}
 */
export class SoAscriptionSimpleVo extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate = "";

  /**
   * 归属规则Id
   * @example 100001
   * @type {number}
   */
  @observable ascrId = "";

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber = "";

  /**
   * 归属规则修改标志
   * @example true
   * @type {boolean}
   */
  @observable editFlag;

  /**
   * 授予Id
   * @example 100001
   * @type {number}
   */
  @observable grantsId = "";
}

/**
 *
 * @typedef {StockOwnQueryDto}
 */
export class StockOwnQueryDto extends Root {
  /**
   * 员工类型
   * @example []
   * @type {array}
   */
  @observable employeeType = [];

  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   * @type {string}
   */
  @observable grantEndDate = "";

  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   * @type {string}
   */
  @observable grantStartDate = "";

  /**
   * 授予类型
   * @example SO/RS
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 部门ID
   * @example
   * @type {array}
   */
  @observable orgIdList = [];

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * 授予角色
   * @example
   * @type {array}
   */
  @observable soClassList = [];

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable statusList = [];

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId = "";

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType = "";
}

/**
 *
 * @typedef {StockOwnVo}
 */
export class StockOwnVo extends Root {
  /**
   * 已归属
   * @example
   * @type {number}
   */
  @observable ascriptionEd = "";

  /**
   * 未归属
   * @example
   * @type {number}
   */
  @observable ascriptionIng = "";

  /**
   * 归属规则
   * @example
   * @type {string}
   */
  @observable ascriptionRule = "";

  /**
   * 取消已归属
   * @example
   * @type {number}
   */
  @observable cancelAscriEd = "";

  /**
   * 取消未归属
   * @example
   * @type {number}
   */
  @observable cancelAscriIng = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 员工编号
   * @example
   * @type {string}
   */
  @observable employeeNumber = "";

  /**
   * 授予数量
   * @example
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example
   * @type {string}
   */
  @observable grantDateStr = "";

  /**
   * 授予类型
   * @example
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 离职时间
   * @example
   * @type {string}
   */
  @observable leaveDate = "";

  /**
   * 离职日期
   * @example
   * @type {string}
   */
  @observable leaveDateStr = "";

  /**
   * 出资期限
   * @example
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 人事变更调出时间
   * @example
   * @type {string}
   */
  @observable moveDate = "";

  /**
   * 人事变更调出日期
   * @example
   * @type {string}
   */
  @observable moveDateStr = "";

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 部门名
   * @example
   * @type {string}
   */
  @observable orgName = "";

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId = "";

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable personName = "";

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名字
   * @example
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价(SO)/认购价(RS)
   * @example
   * @type {number}
   */
  @observable price = "";

  /**
   * 保留已归属
   * @example
   * @type {number}
   */
  @observable retainAscriEd = "";

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass = "";

  /**
   * 授予状态
   * @example
   * @type {string}
   */
  @observable status = "";

  /**
   * 当前股价
   * @example
   * @type {number}
   */
  @observable stockPrice = "";
}

/**
 *
 * @typedef {StockPriceQueryDto}
 */
export class StockPriceQueryDto extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum = "";

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {StockPriceQueryVo}
 */
export class StockPriceQueryVo extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit = {};

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 股价ID
   * @example 11111
   * @type {number}
   */
  @observable priceId = "";

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {StockSaveDto}
 */
export class StockSaveDto extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments = "";

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price = "";

  /**
   * 股价ID
   * @example 11111
   * @type {number}
   */
  @observable priceId = "";

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate = "";

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate = "";
}

/**
 *
 * @typedef {StockSimpleVo}
 */
export class StockSimpleVo extends Root {
  /**
   * 已作废股票
   * @example
   * @type {number}
   */
  @observable abolished = "";

  /**
   * 股票总份额
   * @example
   * @type {number}
   */
  @observable total = "";

  /**
   * 股票类型
   * @example
   * @type {string}
   */
  @observable type = "";

  /**
   * 未使用股票(包含还在池子里没动的以及处于草稿状态的)
   * @example
   * @type {number}
   */
  @observable unused = "";

  /**
   * 已使用股票
   * @example
   * @type {number}
   */
  @observable used = "";
}

/**
 *
 * @typedef {StockUseInfoDto}
 */
export class StockUseInfoDto extends Root {
  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";
}

/**
 *
 * @typedef {StockUseSimpleInfoVo}
 */
export class StockUseSimpleInfoVo extends Root {
  /**
   *
   * @example
   * @type {boolean}
   */
  @observable freeze;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId = "";

  /**
   * rs股票使用情况
   * @example
   * @type {StockSimpleVO}
   */
  @observable rs = StockSimpleVo.create();

  /**
   * so股票使用情况
   * @example
   * @type {StockSimpleVO}
   */
  @observable so = StockSimpleVo.create();
}

/**
 *
 * @typedef {SuggestDto}
 */
export class SuggestDto extends Root {
  /**
   * keyword
   * @example xx
   * @type {string}
   */
  @observable keyword = "";

  /**
   * 限制条数
   * @example 20
   * @type {number}
   */
  @observable limit = "";
}

/**
 *
 * @typedef {TbcGrantBeforeVo}
 */
export class TbcGrantBeforeVo extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 协议富文本内容
   * @example 1111
   * @type {string}
   */
  @observable contents = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名字
   * @example 涂鸦科技
   * @type {string}
   */
  @observable planName = "";
}

/**
 *
 * @typedef {TbcGrantVo}
 */
export class TbcGrantVo extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId = "";

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy = "";

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName = "";

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate = Timestamp.create();

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit = {};

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount = "";

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate = "";

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType = "";

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode = "";

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId = "";

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate = Timestamp.create();

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy = "";

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName = "";

  /**
   * 出资期限
   * @example 2018-07-01
   * @type {string}
   */
  @observable limitDate = "";

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map = {};

  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   * @type {array}
   */
  @observable operations = [];

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId = "";

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName = "";

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price = "";
}

/**
 *
 * @typedef {Timestamp}
 */
export class Timestamp extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable date = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable day = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable hours = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable minutes = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable month = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable nanos = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable seconds = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable time = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable timezoneOffset = "";

  /**
   *
   * @example
   * @type {number}
   */
  @observable year = "";
}

/**
 *
 * @typedef {UserVo}
 */
export class UserVo extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable personId = "";

  /**
   *
   * @example
   * @type {string}
   */
  @observable personName = "";
}
