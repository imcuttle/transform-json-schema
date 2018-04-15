import { Root, observable } from "react-mobx-vm";

/**
 *
 * @typedef {AcceptGrantDTO}
 */
export class AcceptGrantDTO extends Root {
  /**
   * 授予ID
   * @example 11111
   * @type {number}
   */
  @observable grantsId;
}

/**
 *
 * @typedef {AgreementQueryDTO}
 */
export class AgreementQueryDTO extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable language;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;
}

/**
 *
 * @typedef {AgreementSuggestVO}
 */
export class AgreementSuggestVO extends Root {
  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId;

  /**
   * 协议名字
   * @example 协议名字
   * @type {string}
   */
  @observable agreeName;

  /**
   * 协议code
   * @example 0001
   * @type {string}
   */
  @observable agreeNum;
}

/**
 *
 * @typedef {AgreementUpdateDTO}
 */
export class AgreementUpdateDTO extends Root {
  /**
   * 英文协议内容
   * @example Hello XiaoHu
   * @type {string}
   */
  @observable agreeContentUs;

  /**
   * 中文协议内容
   * @example 您好
   * @type {string}
   */
  @observable agreeContentZh;

  /**
   * 协议ID
   * @example
   * @type {number}
   */
  @observable agreeId;

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName;

  /**
   *
   * @example
   * @type {string}
   */
  @observable signCodeEn;

  /**
   *
   * @example
   * @type {string}
   */
  @observable signCodeZh;
}

/**
 *
 * @typedef {AgreementVO}
 */
export class AgreementVO extends Root {
  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId;

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName;

  /**
   * 协议编号
   * @example 0001
   * @type {string}
   */
  @observable agreeNum;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 授予类型
   * @example SO
   * @type {string}
   */
  @observable esopType;

  /**
   * 是否已经上传签字页
   * @example Y
   * @type {string}
   */
  @observable isSignPage;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;

  /**
   * 计划状态
   * @example SAVED
   * @type {string}
   */
  @observable planStatus;
}

/**
 *
 * @typedef {AgreementViewVO}
 */
export class AgreementViewVO extends Root {
  /**
   * 中文协议内容
   * @example 你好
   * @type {string}
   */
  @observable agreeContentUs;

  /**
   * 英文协议内容
   * @example Hi All
   * @type {string}
   */
  @observable agreeContentZh;

  /**
   * 协议ID
   * @example 1212
   * @type {number}
   */
  @observable agreeId;

  /**
   * 协议名称
   * @example 渡鸦协议
   * @type {string}
   */
  @observable agreeName;

  /**
   * 协议编号
   * @example 0001
   * @type {string}
   */
  @observable agreeNum;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 授予类型
   * @example SO
   * @type {string}
   */
  @observable esopType;

  /**
   * 是否已上传英文协议签字页
   * @example N
   * @type {string}
   */
  @observable hasSignCodeUs;

  /**
   * 是否已上传中文协议签字页
   * @example Y
   * @type {string}
   */
  @observable hasSignCodeZh;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 英文协议签字页名字
   * @example 度秘协议签字页
   * @type {string}
   */
  @observable signPageNameUs;

  /**
   * 中文协议签字页名字
   * @example 度秘协议签字页
   * @type {string}
   */
  @observable signPageNameZh;
}

/**
 *
 * @typedef {AnalyzeMovePanelVO}
 */
export class AnalyzeMovePanelVO extends Root {
  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deductionStatus;

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable grantMoveEndDate;

  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable grantMoveStartDate;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable grantStatus;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 操作角色
   * @example
   * @type {array}
   */
  @observable operationRole;

  /**
   * 退款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable personMoveEndDate;

  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable personMoveStartDate;
}

/**
 *
 * @typedef {AnalyzePanelVO}
 */
export class AnalyzePanelVO extends Root {
  /**
   * 员工类型
   * @example
   * @type {array}
   */
  @observable employeeType;

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantCode;

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 授予负责角色/授予创建角色
   * @example
   * @type {array}
   */
  @observable grantRole;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable grantStatus;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;
}

/**
 *
 * @typedef {AnalyzeQuitPanelVO}
 */
export class AnalyzeQuitPanelVO extends Root {
  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 操作角色
   * @example
   * @type {array}
   */
  @observable operationRole;

  /**
   * 退款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateEnd;

  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateStart;
}

/**
 *
 * @typedef {AscrRuleDTO}
 */
export class AscrRuleDTO extends Root {
  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable grantDate;
}

/**
 *
 * @typedef {AscriptionInfoVO}
 */
export class AscriptionInfoVO extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 是否已归属
   * @example Y
   * @type {string}
   */
  @observable ascrFlag;

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber;

  /**
   * 归属ID
   * @example 1000
   * @type {number}
   */
  @observable ascriptionId;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;
}

/**
 *
 * @typedef {AscriptionSimpleVO}
 */
export class AscriptionSimpleVO extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber;

  /**
   * 归属规则修改标志
   * @example true
   * @type {boolean}
   */
  @observable editFlag;
}

/**
 *
 * @typedef {AscriptionVO}
 */
export class AscriptionVO extends Root {
  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 归属明细
   * @example []
   * @type {array}
   */
  @observable rsAscrList;
}

/**
 *
 * @typedef {BussLineCreateDTO}
 */
export class BussLineCreateDTO extends Root {
  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 备注
   * @example XXX
   * @type {string}
   */
  @observable comments;

  /**
   * Leading BP/HRBP
   * @example [[object Undefined], [object Undefined]]
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布)),默认为”保存“操作
   * @example PUBLISH
   * @type {string}
   */
  @observable operationCode;
}

/**
 *
 * @typedef {BussLineOrgCreateDTO}
 */
export class BussLineOrgCreateDTO extends Root {
  /**
   * 业务线ID
   * @example 12
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 备注
   * @example BPIT
   * @type {string}
   */
  @observable comments;

  /**
   * 部門ID
   * @example 12
   * @type {number}
   */
  @observable orgId;

  /**
   * 部門名字
   * @example BPIT
   * @type {string}
   */
  @observable orgName;

  /**
   * 生效日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {BussLineOrgQueryDTO}
 */
export class BussLineOrgQueryDTO extends Root {
  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 标志位（大于0有效部门，小于0无效部门，等于0所有部门）
   * @example
   * @type {number}
   */
  @observable flag;

  /**
   * 部门名称
   * @example
   * @type {string}
   */
  @observable orgName;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;
}

/**
 *
 * @typedef {BussLineOrgUpdateDTO}
 */
export class BussLineOrgUpdateDTO extends Root {
  /**
   * 部門ID
   * @example 12
   * @type {number}
   */
  @observable bussOrgId;

  /**
   * 備註
   * @example notes
   * @type {string}
   */
  @observable comments;

  /**
   * 部門失效日期
   * @example 2018-01-21
   * @type {string}
   */
  @observable endDate;

  /**
   * 部門生效日期
   * @example 2018-01-21
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {BussLineQueryTempDTO}
 */
export class BussLineQueryTempDTO extends Root {
  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;
}

/**
 *
 * @typedef {BussLineSuggestVO}
 */
export class BussLineSuggestVO extends Root {
  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;
}

/**
 *
 * @typedef {BussLineUpdateDTO}
 */
export class BussLineUpdateDTO extends Root {
  /**
   * 业务线ID
   * @example 12
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 备注
   * @example
   * @type {string}
   */
  @observable comments;

  /**
   * Leading BP/HRBP
   * @example [[object Undefined], [object Undefined]]
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布))
   * @example
   * @type {string}
   */
  @observable operationCode;
}

/**
 *
 * @typedef {BussLineVO}
 */
export class BussLineVO extends Root {
  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 备注
   * @example XXX
   * @type {string}
   */
  @observable comments;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 有效部门数量
   * @example 2
   * @type {number}
   */
  @observable departmentNum;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * leadingBpIdStr
   * @example [[object Undefined], [object Undefined]]
   * @type {array}
   */
  @observable leadingBp;

  /**
   * leadingBpIdStr(该字段FE忽略)
   * @example
   * @type {string}
   */
  @observable leadingBpIdStr;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 状态
   * @example 已发布
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {BussOrgLogListVO}
 */
export class BussOrgLogListVO extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {BussOrgLogVO}
 */
export class BussOrgLogVO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 原值／新值
   * @example 只有操作类型为修改的才有
   * @type {string}
   */
  @observable dataFlag;

  /**
   *  失效日期
   * @example 新建状态下不显示失效日期
   * @type {string}
   */
  @observable endDate;

  /**
   * 日志id
   * @example 1111
   * @type {number}
   */
  @observable logId;

  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName;

  /**
   * 生效日期
   * @example 删除状态下不显示生效日期
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {CABUpdateMoveVo}
 */
export class CABUpdateMoveVo extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 员工信息
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-03-31
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;
}

/**
 *
 * @typedef {CGrantForRSVO}
 */
export class CGrantForRSVO extends Root {
  /**
   * 已出资金额
   * @example 12.1
   * @type {number}
   */
  @observable alreadyFound;

  /**
   * 已归属
   * @example 1000
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 100
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 已取消
   * @example 100
   * @type {number}
   */
  @observable canceled;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 当前股价
   * @example 270.6
   * @type {number}
   */
  @observable currentStockPrice;

  /**
   * 当前股价生效日期
   * @example 2018-07-01
   * @type {string}
   */
  @observable currentStockStartDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 出资期限
   * @example 2018-07-01
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 出资本金/股
   * @example 11.21
   * @type {number}
   */
  @observable price;
}

/**
 *
 * @typedef {CGrantForSOVO}
 */
export class CGrantForSOVO extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId;

  /**
   * 已归属
   * @example 1000
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 100
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 已取消
   * @example 100
   * @type {number}
   */
  @observable canceled;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 当前股价
   * @example 270.6
   * @type {number}
   */
  @observable currentStockPrice;

  /**
   * 当前股价生效日期
   * @example 2018-07-01
   * @type {string}
   */
  @observable currentStockStartDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;
}

/**
 *
 * @typedef {CancelSimpleVO}
 */
export class CancelSimpleVO extends Root {
  /**
   * 取消时间
   * @example 2018-01-01 01:02:2
   * @type {Timestamp}
   */
  @observable cancelDate;

  /**
   * 取消数量
   * @example 1000
   * @type {number}
   */
  @observable cancelNumber;

  /**
   * 取消原因
   * @example XX
   * @type {string}
   */
  @observable comments;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;
}

/**
 *
 * @typedef {CancelVO}
 */
export class CancelVO extends Root {
  /**
   * 已经归属
   * @example []
   * @type {array}
   */
  @observable ascriEd;

  /**
   * 未归属
   * @example []
   * @type {array}
   */
  @observable ascriIng;

  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;
}

/**
 *
 * @typedef {CodeAndValueVO}
 */
export class CodeAndValueVO extends Root {
  /**
   * code
   * @example update
   * @type {string}
   */
  @observable code;

  /**
   * 是否被选中
   * @example N
   * @type {string}
   */
  @observable selectFlag;

  /**
   * value
   * @example 更新
   * @type {string}
   */
  @observable value;
}

/**
 *
 * @typedef {DateCheckDTO}
 */
export class DateCheckDTO extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable grantType;

  /**
   *
   * @example
   * @type {string}
   */
  @observable grantsDate;

  /**
   *
   * @example
   * @type {number}
   */
  @observable personId;

  /**
   *
   * @example
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {DepartmentSimpleVO}
 */
export class DepartmentSimpleVO extends Root {
  /**
   * 部门ID
   * @example 1212
   * @type {number}
   */
  @observable orgId;

  /**
   * 部門名字
   * @example 度秘
   * @type {string}
   */
  @observable orgName;
}

/**
 *
 * @typedef {DepartmentSuggestVO}
 */
export class DepartmentSuggestVO extends Root {
  /**
   * 部门Id
   * @example
   * @type {number}
   */
  @observable orgId;

  /**
   * 部门名字
   * @example
   * @type {string}
   */
  @observable orgName;

  /**
   * 计划Id
   * @example
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {DepartmentVO}
 */
export class DepartmentVO extends Root {
  /**
   * 业务线ID
   * @example 1212
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务线名字
   * @example 度秘
   * @type {string}
   */
  @observable bussLineName;

  /**
   * ID
   * @example 1212
   * @type {number}
   */
  @observable bussOrgId;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 删除日期
   * @example 2018-01-01 01:23:32
   * @type {Timestamp}
   */
  @observable deleteDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 删除生效日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable endDate;

  /**
   * 后台使用，前端忽略
   * @example
   * @type {number}
   */
  @observable flag;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 部门ID
   * @example 1212
   * @type {number}
   */
  @observable orgId;

  /**
   * 部門名字
   * @example 度秘
   * @type {string}
   */
  @observable orgName;

  /**
   * 新增生效日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {EmployeeGrantsDataVO}
 */
export class EmployeeGrantsDataVO extends Root {
  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable departmentName;

  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   * @type {string}
   */
  @observable email;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable fullName;

  /**
   * 服务器ID
   * @example 111
   * @type {number}
   */
  @observable periodOfServiceId;

  /**
   * 员工id
   * @example 1111
   * @type {number}
   */
  @observable personId;

  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   * @type {string}
   */
  @observable positionName;

  /**
   * 入职日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable serviceStartDate;

  /**
   * id
   * @example 1111
   * @type {number}
   */
  @observable suggestId;

  /**
   * suggest
   * @example 张大彪
   * @type {string}
   */
  @observable suggestValue;
}

/**
 *
 * @typedef {EmployeeGrantsVO}
 */
export class EmployeeGrantsVO extends Root {
  /**
   * id
   * @example
   * @type {array}
   */
  @observable list;

  /**
   * 类型，需要回传
   * @example employee
   * @type {string}
   */
  @observable type;
}

/**
 *
 * @typedef {EmployeeVO}
 */
export class EmployeeVO extends Root {
  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable departmentName;

  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   * @type {string}
   */
  @observable email;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable fullName;

  /**
   * 服务器ID
   * @example 111
   * @type {number}
   */
  @observable periodOfServiceId;

  /**
   * 员工id
   * @example 1111
   * @type {number}
   */
  @observable personId;

  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   * @type {string}
   */
  @observable positionName;

  /**
   * 入职日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable serviceStartDate;
}

/**
 *
 * @typedef {EsopMenuVO}
 */
export class EsopMenuVO extends Root {
  /**
   * 应用ID
   * @example 800
   * @type {number}
   */
  @observable appId;

  /**
   * 子菜单
   * @example
   * @type {array}
   */
  @observable childList;

  /**
   * 功能CODE
   * @example CUX_ESOP_AGREEMENT
   * @type {string}
   */
  @observable funcCode;

  /**
   * 功能描述
   * @example CUX_ESOP_协议设置
   * @type {string}
   */
  @observable funcDesc;

  /**
   * 功能名称
   * @example CUX_ESOP_协议设置
   * @type {string}
   */
  @observable funcName;

  /**
   * 功能地址
   * @example pages/setting.html#/agreement
   * @type {string}
   */
  @observable resUrl;

  /**
   * 职责ID
   * @example 74454
   * @type {number}
   */
  @observable respId;

  /**
   * 业务组ID
   * @example
   * @type {number}
   */
  @observable secGroupId;
}

/**
 *
 * @typedef {FreezingPeriodQueryDTO}
 */
export class FreezingPeriodQueryDTO extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {FreezingPeriodQueryVO}
 */
export class FreezingPeriodQueryVO extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments;

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit;

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate;

  /**
   * 冻结设置ID
   * @example 11111
   * @type {number}
   */
  @observable freezingId;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {FreezingPeriodSaveDTO}
 */
export class FreezingPeriodSaveDTO extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments;

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate;

  /**
   * 冻结设置ID
   * @example 11111
   * @type {number}
   */
  @observable freezingId;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {GrantAddDTO}
 */
export class GrantAddDTO extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

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
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate;

  /**
   * 员工Id
   * @example 10000
   * @type {number}
   */
  @observable personId;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;

  /**
   * 提交类型，保存并发布/保存
   * @example post
   * @type {string}
   */
  @observable saveType;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;
}

/**
 *
 * @typedef {GrantLogListDTO}
 */
export class GrantLogListDTO extends Root {
  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   * @type {string}
   */
  @observable grantEndDate;

  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   * @type {string}
   */
  @observable grantStartDate;

  /**
   * 授予类型
   * @example SO/RS
   * @type {array}
   */
  @observable grantTypeList;

  /**
   * 部门ID
   * @example
   * @type {array}
   */
  @observable orgIdList;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable rsStatusList;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable soStatusList;

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId;

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {GrantPostDTO}
 */
export class GrantPostDTO extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable code;

  /**
   *
   * @example
   * @type {array}
   */
  @observable codes;

  /**
   *
   * @example
   * @type {boolean}
   */
  @observable confirm;
}

/**
 *
 * @typedef {GrantUpdateDTO}
 */
export class GrantUpdateDTO extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

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
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate;

  /**
   * 员工Id
   * @example 10000
   * @type {number}
   */
  @observable personId;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;

  /**
   * 提交类型，保存并发布/保存
   * @example post
   * @type {string}
   */
  @observable saveType;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;
}

/**
 *
 * @typedef {GrantsListDTO}
 */
export class GrantsListDTO extends Root {
  /**
   * 负责角色
   * @example []
   * @type {array}
   */
  @observable createRoleList;

  /**
   * 员工类型
   * @example []
   * @type {array}
   */
  @observable employeeType;

  /**
   * 授予日期结束时间
   * @example 2018-02-01
   * @type {string}
   */
  @observable grantEndDate;

  /**
   * 授予日期开始时间
   * @example 2018-02-01
   * @type {string}
   */
  @observable grantStartDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 计划下对应业务线下的部门列表
   * @example []
   * @type {array}
   */
  @observable orgIdList;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 授予角色
   * @example []
   * @type {array}
   */
  @observable soClassList;

  /**
   * 授予状态
   * @example []
   * @type {array}
   */
  @observable statusList;

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId;

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {GrantsListVO}
 */
export class GrantsListVO extends Root {
  /**
   * 归属规则
   * @example 特殊规则
   * @type {string}
   */
  @observable ascriptionRule;

  /**
   * 备注
   * @example 保存中
   * @type {string}
   */
  @observable comments;

  /**
   * 负责角色
   * @example HRBP
   * @type {string}
   */
  @observable createRole;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期时间戳，后端使用
   * @example
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予日期-前端使用
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDateStr;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 大层级
   * @example Band3
   * @type {string}
   */
  @observable largeLevel;

  /**
   * 大序列
   * @example 研发
   * @type {string}
   */
  @observable largeSequence;

  /**
   * 出资期限
   * @example 2018-03-03
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 可操作类型
   * @example 编辑
   * @type {array}
   */
  @observable operation;

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName;

  /**
   * 员工Id
   * @example 23423423
   * @type {number}
   */
  @observable personId;

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate;

  /**
   * 小序列
   * @example 开发
   * @type {string}
   */
  @observable smallSequence;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;

  /**
   * 授予状态
   * @example 保存中
   * @type {string}
   */
  @observable status;

  /**
   * 小层级
   * @example T1
   * @type {string}
   */
  @observable subLevel;
}

/**
 *
 * @typedef {GrantsLogListVO}
 */
export class GrantsLogListVO extends Root {
  /**
   * 已归属
   * @example
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 归属规则
   * @example
   * @type {string}
   */
  @observable ascriptionRule;

  /**
   * 取消已归属
   * @example
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 员工编号
   * @example
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example
   * @type {string}
   */
  @observable grantDateStr;

  /**
   * 授予类型
   * @example
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example
   * @type {number}
   */
  @observable grantsId;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 离职时间
   * @example
   * @type {string}
   */
  @observable leaveDate;

  /**
   * 离职日期
   * @example
   * @type {string}
   */
  @observable leaveDateStr;

  /**
   * 出资期限
   * @example
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example
   * @type {string}
   */
  @observable moveDate;

  /**
   * 人事变更调出日期
   * @example
   * @type {string}
   */
  @observable moveDateStr;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 部门名
   * @example
   * @type {string}
   */
  @observable orgName;

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId;

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable personName;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名字
   * @example
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价(SO)/认购价(RS)
   * @example
   * @type {number}
   */
  @observable price;

  /**
   * 保留已归属
   * @example
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;

  /**
   * 授予状态
   * @example
   * @type {string}
   */
  @observable status;

  /**
   * 当前股价
   * @example
   * @type {number}
   */
  @observable stockPrice;
}

/**
 *
 * @typedef {GrantsQueryInitVO}
 */
export class GrantsQueryInitVO extends Root {
  /**
   * 负责角色
   * @example
   * @type {array}
   */
  @observable createRoleList;

  /**
   * 员工类型
   * @example
   * @type {array}
   */
  @observable employeeType;

  /**
   * 批量操作按钮
   * @example
   * @type {array}
   */
  @observable options;

  /**
   * 计划下对应业务线下的部门列表
   * @example
   * @type {array}
   */
  @observable orgIdList;

  /**
   * 计划结束日期
   * @example
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划开始日期
   * @example
   * @type {string}
   */
  @observable planStartDate;

  /**
   * 授予角色
   * @example
   * @type {array}
   */
  @observable soClassList;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable statusList;
}

/**
 *
 * @typedef {GrantsVO}
 */
export class GrantsVO extends Root {
  /**
   * 归属明细，SO类型有
   * @example []
   * @type {array}
   */
  @observable ascriptionList;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

  /**
   * 修改查询时，能够修改的范围标志,rs只有生效前和已生效两种状态
   * @example RS_ADD
   * @type {string}
   */
  @observable editFlag;

  /**
   * 员工信息
   * @example {}
   * @type {EmployeeVO}
   */
  @observable employeeVO;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;
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
  @observable grantType;

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 日志list
   * @example
   * @type {array}
   */
  @observable logList;
}

/**
 *
 * @typedef {JsonResult_AgreementViewVO_}
 */
export class JsonResult_AgreementViewVO_ extends Root {
  /**
   *
   * @example
   * @type {AgreementViewVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_AscriptionVO_}
 */
export class JsonResult_AscriptionVO_ extends Root {
  /**
   *
   * @example
   * @type {AscriptionVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_BussLineVO_}
 */
export class JsonResult_BussLineVO_ extends Root {
  /**
   *
   * @example
   * @type {BussLineVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_CABUpdateMoveVo_}
 */
export class JsonResult_CABUpdateMoveVo_ extends Root {
  /**
   *
   * @example
   * @type {CABUpdateMoveVo}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_CancelVO_}
 */
export class JsonResult_CancelVO_ extends Root {
  /**
   *
   * @example
   * @type {CancelVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_DepartmentVO_}
 */
export class JsonResult_DepartmentVO_ extends Root {
  /**
   *
   * @example
   * @type {DepartmentVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_GrantsVO_}
 */
export class JsonResult_GrantsVO_ extends Root {
  /**
   *
   * @example
   * @type {GrantsVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_GrantsViewLog_}
 */
export class JsonResult_GrantsViewLog_ extends Root {
  /**
   *
   * @example
   * @type {GrantsViewLog}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_AgreementSuggestVO__}
 */
export class JsonResult_List_AgreementSuggestVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_BussLineSuggestVO__}
 */
export class JsonResult_List_BussLineSuggestVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_BussOrgLogListVO__}
 */
export class JsonResult_List_BussOrgLogListVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_CGrantForRSVO__}
 */
export class JsonResult_List_CGrantForRSVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_CGrantForSOVO__}
 */
export class JsonResult_List_CGrantForSOVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_DepartmentSimpleVO__}
 */
export class JsonResult_List_DepartmentSimpleVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_DepartmentSuggestVO__}
 */
export class JsonResult_List_DepartmentSuggestVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_EmployeeGrantsVO__}
 */
export class JsonResult_List_EmployeeGrantsVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_EmployeeVO__}
 */
export class JsonResult_List_EmployeeVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_EsopMenuVO__}
 */
export class JsonResult_List_EsopMenuVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogFreezingPeriodViewVO___}
 */
export class JsonResult_List_LogCommonVO_LogFreezingPeriodViewVO___ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogPlanViewVO___}
 */
export class JsonResult_List_LogCommonVO_LogPlanViewVO___ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogRightPriceViewVO___}
 */
export class JsonResult_List_LogCommonVO_LogRightPriceViewVO___ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_LogCommonVO_LogStockPriceViewVO___}
 */
export class JsonResult_List_LogCommonVO_LogStockPriceViewVO___ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_OrgVO__}
 */
export class JsonResult_List_OrgVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_PlanSimpleVO__}
 */
export class JsonResult_List_PlanSimpleVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_SOAscriptionSimpleVO__}
 */
export class JsonResult_List_SOAscriptionSimpleVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_TBCGrantVO__}
 */
export class JsonResult_List_TBCGrantVO__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_List_string__}
 */
export class JsonResult_List_string__ extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_LogPlanPanelVO_}
 */
export class JsonResult_LogPlanPanelVO_ extends Root {
  /**
   *
   * @example
   * @type {LogPlanPanelVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_LogPlanPlanViewVO_}
 */
export class JsonResult_LogPlanPlanViewVO_ extends Root {
  /**
   *
   * @example
   * @type {LogPlanPlanViewVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_LogQueryInitVO_}
 */
export class JsonResult_LogQueryInitVO_ extends Root {
  /**
   *
   * @example
   * @type {LogQueryInitVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzeMovePanelVO__}
 */
export class JsonResult_Map_string_AnalyzeMovePanelVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzePanelVO__}
 */
export class JsonResult_Map_string_AnalyzePanelVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_AnalyzeQuitPanelVO__}
 */
export class JsonResult_Map_string_AnalyzeQuitPanelVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_GrantsQueryInitVO__}
 */
export class JsonResult_Map_string_GrantsQueryInitVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_MovePanelVO__}
 */
export class JsonResult_Map_string_MovePanelVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Map_string_QuitPanelVO__}
 */
export class JsonResult_Map_string_QuitPanelVO__ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_MoveCBQueryParams_}
 */
export class JsonResult_MoveCBQueryParams_ extends Root {
  /**
   *
   * @example
   * @type {MoveCBQueryParams}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_AgreementVO__}
 */
export class JsonResult_PageInfo_AgreementVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_AgreementVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_BussLineVO__}
 */
export class JsonResult_PageInfo_BussLineVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_BussLineVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_DepartmentVO__}
 */
export class JsonResult_PageInfo_DepartmentVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_DepartmentVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_FreezingPeriodQueryVO__}
 */
export class JsonResult_PageInfo_FreezingPeriodQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_FreezingPeriodQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_GrantsListVO__}
 */
export class JsonResult_PageInfo_GrantsListVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_GrantsListVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_GrantsLogListVO__}
 */
export class JsonResult_PageInfo_GrantsLogListVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_GrantsLogListVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_LogPlanQueryVO__}
 */
export class JsonResult_PageInfo_LogPlanQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_LogPlanQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_MoveCBQueryVO__}
 */
export class JsonResult_PageInfo_MoveCBQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveCBQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_MoveRsAnlyVO__}
 */
export class JsonResult_PageInfo_MoveRsAnlyVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveRsAnlyVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_MoveRsQueryVO__}
 */
export class JsonResult_PageInfo_MoveRsQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveRsQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_MoveSoAnlyVO__}
 */
export class JsonResult_PageInfo_MoveSoAnlyVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveSoAnlyVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_MoveSoQueryVO__}
 */
export class JsonResult_PageInfo_MoveSoQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_MoveSoQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_PlanQueryVO__}
 */
export class JsonResult_PageInfo_PlanQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_PlanQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_QuitRsAnlyVO__}
 */
export class JsonResult_PageInfo_QuitRsAnlyVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitRsAnlyVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_QuitRsQueryVO__}
 */
export class JsonResult_PageInfo_QuitRsQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitRsQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_QuitSoAnlyVO__}
 */
export class JsonResult_PageInfo_QuitSoAnlyVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitSoAnlyVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_QuitSoQueryVO__}
 */
export class JsonResult_PageInfo_QuitSoQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_QuitSoQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_RightPriceQueryVO__}
 */
export class JsonResult_PageInfo_RightPriceQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_RightPriceQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_StockOwnVO__}
 */
export class JsonResult_PageInfo_StockOwnVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_StockOwnVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PageInfo_StockPriceQueryVO__}
 */
export class JsonResult_PageInfo_StockPriceQueryVO__ extends Root {
  /**
   *
   * @example
   * @type {PageInfo_StockPriceQueryVO_}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PlanPanelVO_}
 */
export class JsonResult_PlanPanelVO_ extends Root {
  /**
   *
   * @example
   * @type {PlanPanelVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_PlanViewVO_}
 */
export class JsonResult_PlanViewVO_ extends Root {
  /**
   *
   * @example
   * @type {PlanViewVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_QuitDeduDetailVO_}
 */
export class JsonResult_QuitDeduDetailVO_ extends Root {
  /**
   *
   * @example
   * @type {QuitDeduDetailVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_RSAscriptionVO_}
 */
export class JsonResult_RSAscriptionVO_ extends Root {
  /**
   *
   * @example
   * @type {RSAscriptionVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_RightPriceQueryVO_}
 */
export class JsonResult_RightPriceQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {RightPriceQueryVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_StockUseSimpleInfoVO_}
 */
export class JsonResult_StockUseSimpleInfoVO_ extends Root {
  /**
   *
   * @example
   * @type {StockUseSimpleInfoVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_TBCGrantBeforeVO_}
 */
export class JsonResult_TBCGrantBeforeVO_ extends Root {
  /**
   *
   * @example
   * @type {TBCGrantBeforeVO}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_UserVo_}
 */
export class JsonResult_UserVo_ extends Root {
  /**
   *
   * @example
   * @type {UserVo}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_Void_}
 */
export class JsonResult_Void_ extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_boolean_}
 */
export class JsonResult_boolean_ extends Root {
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
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_int_}
 */
export class JsonResult_int_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_long_}
 */
export class JsonResult_long_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {JsonResult_string_}
 */
export class JsonResult_string_ extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable data;

  /**
   *
   * @example
   * @type {object}
   */
  @observable errors;

  /**
   * 话术
   * @example 系统异常/操作成功
   * @type {string}
   */
  @observable message;

  /**
   * 状态code
   * @example ok
   * @type {string}
   */
  @observable status;

  /**
   *
   * @example
   * @type {object}
   */
  @observable warnings;
}

/**
 *
 * @typedef {LogCommonVO}
 */
export class LogCommonVO extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {LogCommonVO_LogFreezingPeriodViewVO_}
 */
export class LogCommonVO_LogFreezingPeriodViewVO_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {LogCommonVO_LogPlanViewVO_}
 */
export class LogCommonVO_LogPlanViewVO_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {LogCommonVO_LogRightPriceViewVO_}
 */
export class LogCommonVO_LogRightPriceViewVO_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {LogCommonVO_LogStockPriceViewVO_}
 */
export class LogCommonVO_LogStockPriceViewVO_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {EmployeeVO}
   */
  @observable operation;

  /**
   * 操作类型
   * @example CREATE
   * @type {string}
   */
  @observable operationCode;

  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   * @type {string}
   */
  @observable operationDate;

  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   * @type {string}
   */
  @observable operationMsg;
}

/**
 *
 * @typedef {LogFreezingPeriodViewVO}
 */
export class LogFreezingPeriodViewVO extends Root {
  /**
   * 备注
   * @example 冻结2周，授予停止
   * @type {string}
   */
  @observable comments;

  /**
   * 冻结结束日期
   * @example 2018-02-04
   * @type {string}
   */
  @observable endDate;

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId;

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew;

  /**
   * 冻结开始日期
   * @example 2018-02-03
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {LogPlanPanelVO}
 */
export class LogPlanPanelVO extends Root {
  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {LogPlanPlanViewVO}
 */
export class LogPlanPlanViewVO extends Root {
  /**
   * 协议id
   * @example
   * @type {number}
   */
  @observable agreeId;

  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;

  /**
   * 计划状态
   * @example FINISH
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {LogPlanQueryDTO}
 */
export class LogPlanQueryDTO extends Root {
  /**
   * 业务线id
   * @example 11111
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft;

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight;

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {LogPlanQueryVO}
 */
export class LogPlanQueryVO extends Root {
  /**
   * 业务线名称
   * @example 业务线名称
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 是否已冻结
   * @example Y
   * @type {string}
   */
  @observable freezing;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;

  /**
   * 状态
   * @example status
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {LogPlanViewVO}
 */
export class LogPlanViewVO extends Root {
  /**
   * 协议名称
   * @example
   * @type {string}
   */
  @observable agreeName;

  /**
   * 业务线名称
   * @example
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId;

  /**
   * 老值还是新值
   * @example
   * @type {string}
   */
  @observable oldOrNew;

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;
}

/**
 *
 * @typedef {LogQueryInitVO}
 */
export class LogQueryInitVO extends Root {
  /**
   * 授予结束日期
   * @example
   * @type {string}
   */
  @observable grantEndDate;

  /**
   * 授予开始日期
   * @example
   * @type {string}
   */
  @observable grantStartDate;

  /**
   * 授予类型
   * @example
   * @type {array}
   */
  @observable grantTypeList;

  /**
   * 计划下对应业务线下的部门列表
   * @example
   * @type {array}
   */
  @observable orgIdList;

  /**
   * 计划列表
   * @example
   * @type {array}
   */
  @observable planList;

  /**
   * rs授予状态
   * @example
   * @type {array}
   */
  @observable rsStatusList;

  /**
   * so授予状态
   * @example
   * @type {array}
   */
  @observable soStatusList;
}

/**
 *
 * @typedef {LogRightPriceViewVO}
 */
export class LogRightPriceViewVO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId;

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew;

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {LogStockPriceViewVO}
 */
export class LogStockPriceViewVO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 日志ID
   * @example 11111
   * @type {number}
   */
  @observable logId;

  /**
   * 老值或新值
   * @example
   * @type {string}
   */
  @observable oldOrNew;

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {Map_string_AnalyzeMovePanelVO_}
 */
export class Map_string_AnalyzeMovePanelVO_ extends Root {}

/**
 *
 * @typedef {Map_string_AnalyzePanelVO_}
 */
export class Map_string_AnalyzePanelVO_ extends Root {}

/**
 *
 * @typedef {Map_string_AnalyzeQuitPanelVO_}
 */
export class Map_string_AnalyzeQuitPanelVO_ extends Root {}

/**
 *
 * @typedef {Map_string_GrantsQueryInitVO_}
 */
export class Map_string_GrantsQueryInitVO_ extends Root {}

/**
 *
 * @typedef {Map_string_MovePanelVO_}
 */
export class Map_string_MovePanelVO_ extends Root {}

/**
 *
 * @typedef {Map_string_QuitPanelVO_}
 */
export class Map_string_QuitPanelVO_ extends Root {}

/**
 *
 * @typedef {MoveAnalyzeDTO}
 */
export class MoveAnalyzeDTO extends Root {
  /**
   * 扣减状态
   * @example 扣减状态
   * @type {array}
   */
  @observable deduStatusSet;

  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 授予状态
   * @example 授予状态
   * @type {array}
   */
  @observable grantStatusSet;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;

  /**
   * 退款状态 RS 才有
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * personId
   * @example 员工ID
   * @type {number}
   */
  @observable personId;

  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   * @type {string}
   */
  @observable personMoveEndDate;

  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   * @type {string}
   */
  @observable personMoveStartDate;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {MoveCBListDTO}
 */
export class MoveCBListDTO extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft;

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 计划id或者全选
   * @example 1111
   * @type {string}
   */
  @observable planId;

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId;

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {MoveCBPanelVO}
 */
export class MoveCBPanelVO extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft;

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;
}

/**
 *
 * @typedef {MoveCBQueryDTO}
 */
export class MoveCBQueryDTO extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable moveDeduId;
}

/**
 *
 * @typedef {MoveCBQueryParams}
 */
export class MoveCBQueryParams extends Root {
  /**
   *
   * @example
   * @type {object}
   */
  @observable panelMap;

  /**
   *
   * @example
   * @type {array}
   */
  @observable planList;
}

/**
 *
 * @typedef {MoveCBQueryVO}
 */
export class MoveCBQueryVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 归属规则
   * @example 特殊规则
   * @type {string}
   */
  @observable ascriptionRule;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工信息
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId;

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName;

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 出资本金/股
   * @example 1212.12
   * @type {number}
   */
  @observable price;

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {MoveCBUpdateDTO}
 */
export class MoveCBUpdateDTO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;
}

/**
 *
 * @typedef {MovePanelVO}
 */
export class MovePanelVO extends Root {
  /**
   * 授予负责角色/授予创建角色
   * @example
   * @type {array}
   */
  @observable creatRole;

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus;

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft;

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {MoveRsAnlyVO}
 */
export class MoveRsAnlyVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable employeeName;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable grantStatus;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 员工id
   * @example 页面不显示
   * @type {number}
   */
  @observable moveDeduId;

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName;

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName;

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * 员工id
   * @example 页面不显示
   * @type {number}
   */
  @observable personId;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 认购价/股
   * @example 1212.12
   * @type {number}
   */
  @observable price;

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;
}

/**
 *
 * @typedef {MoveRsQueryDTO}
 */
export class MoveRsQueryDTO extends Root {
  /**
   * 授予负责角色
   * @example
   * @type {array}
   */
  @observable creatRole;

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus;

  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateLeft;

  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable moveDateRight;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status;

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId;

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {MoveRsQueryVO}
 */
export class MoveRsQueryVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId;

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName;

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 付款状态
   * @example 付款状态
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price;

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {MoveSoAnlyVO}
 */
export class MoveSoAnlyVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable employeeName;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable grantStatus;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName;

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName;

  /**
   * personId
   * @example 前端不显示
   * @type {number}
   */
  @observable personId;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 认购价/股
   * @example 1212.12
   * @type {number}
   */
  @observable price;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;
}

/**
 *
 * @typedef {MoveSoQueryDTO}
 */
export class MoveSoQueryDTO extends Root {
  /**
   * 授予负责角色
   * @example
   * @type {array}
   */
  @observable creatRole;

  /**
   * 扣减状态
   * @example
   * @type {array}
   */
  @observable deduStatus;

  /**
   * 授予日期左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 人事变更调出时间左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDateLeft;

  /**
   * 人事变更调出时间右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDateRight;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable status;

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId;

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {MoveSoQueryVO}
 */
export class MoveSoQueryVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example 2018-02-02
   * @type {string}
   */
  @observable moveDate;

  /**
   * 调出扣减id
   * @example 1111
   * @type {number}
   */
  @observable moveDeduId;

  /**
   * 新部门
   * @example 渡鸦
   * @type {string}
   */
  @observable newOrgName;

  /**
   * 原部门
   * @example 流程信息
   * @type {string}
   */
  @observable oldOrgName;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {OrgVO}
 */
export class OrgVO extends Root {
  /**
   * 部门id
   * @example 1111
   * @type {number}
   */
  @observable orgId;

  /**
   * 部门名称
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName;
}

/**
 *
 * @typedef {PageInfo_AgreementVO_}
 */
export class PageInfo_AgreementVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_BussLineVO_}
 */
export class PageInfo_BussLineVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_DepartmentVO_}
 */
export class PageInfo_DepartmentVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_FreezingPeriodQueryVO_}
 */
export class PageInfo_FreezingPeriodQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_GrantsListVO_}
 */
export class PageInfo_GrantsListVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_GrantsLogListVO_}
 */
export class PageInfo_GrantsLogListVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_LogPlanQueryVO_}
 */
export class PageInfo_LogPlanQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_MoveCBQueryVO_}
 */
export class PageInfo_MoveCBQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_MoveRsAnlyVO_}
 */
export class PageInfo_MoveRsAnlyVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_MoveRsQueryVO_}
 */
export class PageInfo_MoveRsQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_MoveSoAnlyVO_}
 */
export class PageInfo_MoveSoAnlyVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_MoveSoQueryVO_}
 */
export class PageInfo_MoveSoQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_PlanQueryVO_}
 */
export class PageInfo_PlanQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_QuitRsAnlyVO_}
 */
export class PageInfo_QuitRsAnlyVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_QuitRsQueryVO_}
 */
export class PageInfo_QuitRsQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_QuitSoAnlyVO_}
 */
export class PageInfo_QuitSoAnlyVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_QuitSoQueryVO_}
 */
export class PageInfo_QuitSoQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_RightPriceQueryVO_}
 */
export class PageInfo_RightPriceQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_StockOwnVO_}
 */
export class PageInfo_StockOwnVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PageInfo_StockPriceQueryVO_}
 */
export class PageInfo_StockPriceQueryVO_ extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable endRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable firstPage;

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
  @observable lastPage;

  /**
   *
   * @example
   * @type {array}
   */
  @observable list;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateFirstPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigateLastPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable navigatePages;

  /**
   *
   * @example
   * @type {array}
   */
  @observable navigatepageNums;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nextPage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageNum;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pageSize;

  /**
   *
   * @example
   * @type {number}
   */
  @observable pages;

  /**
   *
   * @example
   * @type {number}
   */
  @observable prePage;

  /**
   *
   * @example
   * @type {number}
   */
  @observable size;

  /**
   *
   * @example
   * @type {number}
   */
  @observable startRow;

  /**
   *
   * @example
   * @type {number}
   */
  @observable total;
}

/**
 *
 * @typedef {PlanNameCodeCheckDTO}
 */
export class PlanNameCodeCheckDTO extends Root {
  /**
   * 计划id
   * @example 111
   * @type {number}
   */
  @observable planId;

  /**
   * code/name
   * @example A11/渡鸦计划2017
   * @type {string}
   */
  @observable value;
}

/**
 *
 * @typedef {PlanPanelVO}
 */
export class PlanPanelVO extends Root {
  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft;

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight;

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {PlanQueryDTO}
 */
export class PlanQueryDTO extends Root {
  /**
   * 业务线id
   * @example 11111
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 开始日期左边界
   * @example 2017-02-08
   * @type {string}
   */
  @observable planStartDateLeft;

  /**
   * 开始日期右边界
   * @example 2017-12-08
   * @type {string}
   */
  @observable planStartDateRight;

  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {PlanQueryVO}
 */
export class PlanQueryVO extends Root {
  /**
   * 业务线名称
   * @example 业务线名称
   * @type {string}
   */
  @observable bussLineName;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 是否已冻结
   * @example Y
   * @type {string}
   */
  @observable freezing;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;

  /**
   * 状态
   * @example status
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {PlanReleaseDTO}
 */
export class PlanReleaseDTO extends Root {
  /**
   * 协议
   * @example
   * @type {number}
   */
  @observable agreeId;

  /**
   * 业务线
   * @example
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBpIdStr
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 计划Code
   * @example A123
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;
}

/**
 *
 * @typedef {PlanSaveDTO}
 */
export class PlanSaveDTO extends Root {
  /**
   * 协议
   * @example
   * @type {number}
   */
  @observable agreeId;

  /**
   * 业务线
   * @example
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBpIdStr
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 计划Code
   * @example A123
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;
}

/**
 *
 * @typedef {PlanSimpleVO}
 */
export class PlanSimpleVO extends Root {
  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;
}

/**
 *
 * @typedef {PlanViewVO}
 */
export class PlanViewVO extends Root {
  /**
   * 协议id
   * @example
   * @type {number}
   */
  @observable agreeId;

  /**
   * 业务线id
   * @example
   * @type {number}
   */
  @observable bussLineId;

  /**
   * 业务负责人
   * @example
   * @type {array}
   */
  @observable bussManager;

  /**
   * 备注
   * @example 激励效果非常好，继续保持
   * @type {string}
   */
  @observable comments;

  /**
   *
   * @example
   * @type {object}
   */
  @observable edit;

  /**
   * HRBP
   * @example
   * @type {array}
   */
  @observable hrbp;

  /**
   * leadingBp
   * @example
   * @type {array}
   */
  @observable leadingBp;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 计划Code
   * @example planCode
   * @type {string}
   */
  @observable planCode;

  /**
   * 结束日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable planEndDate;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 起始日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable planStartDate;

  /**
   * RS总份额
   * @example 1200
   * @type {number}
   */
  @observable rsTotal;

  /**
   * SO总份额
   * @example 1200
   * @type {number}
   */
  @observable soTotal;

  /**
   * 计划状态
   * @example FINISH
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {PriceQueryDTO}
 */
export class PriceQueryDTO extends Root {
  /**
   *
   * @example
   * @type {string}
   */
  @observable dateStr;

  /**
   *
   * @example
   * @type {string}
   */
  @observable grantType;

  /**
   *
   * @example
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {QuitAnalyzeDTO}
 */
export class QuitAnalyzeDTO extends Root {
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;

  /**
   * 付款状态 RS 才有
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * personId
   * @example 11
   * @type {number}
   */
  @observable personId;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateEnd;

  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   * @type {string}
   */
  @observable quitDateStart;
}

/**
 *
 * @typedef {QuitDeduDetailVO}
 */
export class QuitDeduDetailVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 是否可编辑
   * @example Y
   * @type {string}
   */
  @observable editFlag;

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 退款状态
   * @example 退款状态
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price;

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate;

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId;

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {QuitModifyDTO}
 */
export class QuitModifyDTO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 离职扣减ID
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId;

  /**
   * 退款股数
   * @example 10
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;
}

/**
 *
 * @typedef {QuitPanelVO}
 */
export class QuitPanelVO extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operation;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 离职日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateLeft;

  /**
   * 离职日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateRight;
}

/**
 *
 * @typedef {QuitRsAnlyVO}
 */
export class QuitRsAnlyVO extends Root {
  /**
   * 离职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable actualTerminationDate;

  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 部门Id
   * @example 前端不显示
   * @type {number}
   */
  @observable orgId;

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName;

  /**
   *
   * @example
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * personId
   * @example 前端不显示
   * @type {number}
   */
  @observable personId;

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName;

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 退款金额
   * @example 1111
   * @type {number}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 1111
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 1111
   * @type {number}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate;
}

/**
 *
 * @typedef {QuitRsQueryDTO}
 */
export class QuitRsQueryDTO extends Root {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 付款状态
   * @example
   * @type {array}
   */
  @observable paymentStatus;

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 离职时间左边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateLeft;

  /**
   * 离职时间右边界
   * @example 2018-01-03
   * @type {string}
   */
  @observable quitDateRight;

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId;

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {QuitRsQueryVO}
 */
export class QuitRsQueryVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 退款状态
   * @example 退款状态
   * @type {string}
   */
  @observable paymentStatus;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 认购价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price;

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate;

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId;

  /**
   * 退款金额
   * @example 退款金额
   * @type {string}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {string}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {QuitSoAnlyVO}
 */
export class QuitSoAnlyVO extends Root {
  /**
   * 离职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable actualTerminationDate;

  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 员工编号
   * @example B1111
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 部门Id
   * @example 前端不显示
   * @type {number}
   */
  @observable orgId;

  /**
   * 部门
   * @example 流程信息管理部
   * @type {string}
   */
  @observable orgName;

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId;

  /**
   * 员工姓名
   * @example 张大彪
   * @type {string}
   */
  @observable personName;

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 退款金额
   * @example 退款金额
   * @type {number}
   */
  @observable refundMoney;

  /**
   * 退款股数
   * @example 退款股数
   * @type {number}
   */
  @observable refundNumber;

  /**
   * 退款股价
   * @example 退款股价
   * @type {number}
   */
  @observable refundPrice;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 入职日期
   * @example 2017-12-12
   * @type {string}
   */
  @observable serviceStartDate;
}

/**
 *
 * @typedef {QuitSoQueryDTO}
 */
export class QuitSoQueryDTO extends Root {
  /**
   * 授予日期左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateLeft;

  /**
   * 授予日期右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDateRight;

  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划id
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 离职时间左边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDateLeft;

  /**
   * 离职时间右边界
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDateRight;

  /**
   * 员工/授予ID
   * @example 11111
   * @type {number}
   */
  @observable suggestId;

  /**
   * 员工/授予code
   * @example employee
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {QuitSoQueryVO}
 */
export class QuitSoQueryVO extends Root {
  /**
   * 已归属
   * @example 111
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example 1111
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 取消已归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example 1111
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 备注
   * @example 备注
   * @type {string}
   */
  @observable comments;

  /**
   * 扣减状态
   * @example 扣减状态
   * @type {string}
   */
  @observable deduStatus;

  /**
   * 员工
   * @example
   * @type {EmployeeVO}
   */
  @observable employee;

  /**
   * 授予数量
   * @example 1111
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example code
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价/股
   * @example 1212.12
   * @type {string}
   */
  @observable price;

  /**
   * 离职日期
   * @example 2018-02-02
   * @type {string}
   */
  @observable quitDate;

  /**
   * 离职扣减id
   * @example 1111
   * @type {number}
   */
  @observable quitDeduId;

  /**
   * 保留已归属
   * @example 1111
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予状态
   * @example 授予状态
   * @type {string}
   */
  @observable status;
}

/**
 *
 * @typedef {RSAscrUpdateDTO}
 */
export class RSAscrUpdateDTO extends Root {
  /**
   *
   * @example
   * @type {array}
   */
  @observable ascrList;

  /**
   *
   * @example
   * @type {number}
   */
  @observable grantsId;
}

/**
 *
 * @typedef {RSAscriptionDTO}
 */
export class RSAscriptionDTO extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 归属Id
   * @example 1111
   * @type {number}
   */
  @observable ascrId;

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;
}

/**
 *
 * @typedef {RSAscriptionSimpleVO}
 */
export class RSAscriptionSimpleVO extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 归属Id
   * @example 1111
   * @type {number}
   */
  @observable ascrId;

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber;

  /**
   * 备注
   * @example XX
   * @type {string}
   */
  @observable comments;

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
  @observable grantsId;
}

/**
 *
 * @typedef {RSAscriptionVO}
 */
export class RSAscriptionVO extends Root {
  /**
   * 员工信息
   * @example {}
   * @type {EmployeeVO}
   */
  @observable employeeVO;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予code
   * @example WSSO1000
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1000
   * @type {number}
   */
  @observable grantsId;

  /**
   * 未归属数量
   * @example 2500
   * @type {number}
   */
  @observable nonAscrAmount;

  /**
   * 计划名称
   * @example 度秘
   * @type {string}
   */
  @observable planName;

  /**
   * 归属明细和是否可以修改标志
   * @example []
   * @type {array}
   */
  @observable rsAscrList;
}

/**
 *
 * @typedef {RSFullAscrDTO}
 */
export class RSFullAscrDTO extends Root {
  /**
   * 归属日期
   * @example 2017-12-10
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 授予id列表
   * @example []
   * @type {array}
   */
  @observable codes;
}

/**
 *
 * @typedef {RightPriceQueryDTO}
 */
export class RightPriceQueryDTO extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 股权类型（不需要传参）
   * @example SO
   * @type {string}
   */
  @observable type;
}

/**
 *
 * @typedef {RightPriceQueryVO}
 */
export class RightPriceQueryVO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 行权价/认购价的ID
   * @example 11111
   * @type {number}
   */
  @observable rightPriceId;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {RightPriceSaveDTO}
 */
export class RightPriceSaveDTO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * RS/SO价格/股
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 行权价/认购价的ID
   * @example 11111
   * @type {number}
   */
  @observable rightPriceId;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;

  /**
   * 股权类型（不需要传参）
   * @example SO
   * @type {string}
   */
  @observable type;
}

/**
 *
 * @typedef {SOAscriptionSimpleVO}
 */
export class SOAscriptionSimpleVO extends Root {
  /**
   * 归属日期
   * @example 2018-01-01
   * @type {string}
   */
  @observable ascrDate;

  /**
   * 归属规则Id
   * @example 100001
   * @type {number}
   */
  @observable ascrId;

  /**
   * 归属数量
   * @example 1000
   * @type {number}
   */
  @observable ascrNumber;

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
  @observable grantsId;
}

/**
 *
 * @typedef {StockOwnQueryDTO}
 */
export class StockOwnQueryDTO extends Root {
  /**
   * 员工类型
   * @example []
   * @type {array}
   */
  @observable employeeType;

  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   * @type {string}
   */
  @observable grantEndDate;

  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   * @type {string}
   */
  @observable grantStartDate;

  /**
   * 授予类型
   * @example SO/RS
   * @type {string}
   */
  @observable grantType;

  /**
   * 部门ID
   * @example
   * @type {array}
   */
  @observable orgIdList;

  /**
   * 第几页
   * @example 1
   * @type {number}
   */
  @observable pageNum;

  /**
   * 每页大小
   * @example 5
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;

  /**
   * 授予角色
   * @example
   * @type {array}
   */
  @observable soClassList;

  /**
   * 授予状态
   * @example
   * @type {array}
   */
  @observable statusList;

  /**
   * suggestId
   * @example 1111
   * @type {number}
   */
  @observable suggestId;

  /**
   * suggest类型
   * @example grants
   * @type {string}
   */
  @observable suggestType;
}

/**
 *
 * @typedef {StockOwnVO}
 */
export class StockOwnVO extends Root {
  /**
   * 已归属
   * @example
   * @type {number}
   */
  @observable ascriptionEd;

  /**
   * 未归属
   * @example
   * @type {number}
   */
  @observable ascriptionIng;

  /**
   * 归属规则
   * @example
   * @type {string}
   */
  @observable ascriptionRule;

  /**
   * 取消已归属
   * @example
   * @type {number}
   */
  @observable cancelAscriEd;

  /**
   * 取消未归属
   * @example
   * @type {number}
   */
  @observable cancelAscriIng;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 员工编号
   * @example
   * @type {string}
   */
  @observable employeeNumber;

  /**
   * 授予数量
   * @example
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example
   * @type {string}
   */
  @observable grantDateStr;

  /**
   * 授予类型
   * @example
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example
   * @type {number}
   */
  @observable grantsId;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 离职时间
   * @example
   * @type {string}
   */
  @observable leaveDate;

  /**
   * 离职日期
   * @example
   * @type {string}
   */
  @observable leaveDateStr;

  /**
   * 出资期限
   * @example
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 人事变更调出时间
   * @example
   * @type {string}
   */
  @observable moveDate;

  /**
   * 人事变更调出日期
   * @example
   * @type {string}
   */
  @observable moveDateStr;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 部门名
   * @example
   * @type {string}
   */
  @observable orgName;

  /**
   * 员工id
   * @example
   * @type {number}
   */
  @observable personId;

  /**
   * 员工姓名
   * @example
   * @type {string}
   */
  @observable personName;

  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名字
   * @example
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价(SO)/认购价(RS)
   * @example
   * @type {number}
   */
  @observable price;

  /**
   * 保留已归属
   * @example
   * @type {number}
   */
  @observable retainAscriEd;

  /**
   * 授予角色
   * @example XX
   * @type {string}
   */
  @observable soClass;

  /**
   * 授予状态
   * @example
   * @type {string}
   */
  @observable status;

  /**
   * 当前股价
   * @example
   * @type {number}
   */
  @observable stockPrice;
}

/**
 *
 * @typedef {StockPriceQueryDTO}
 */
export class StockPriceQueryDTO extends Root {
  /**
   * 页码
   * @example 2
   * @type {number}
   */
  @observable pageNum;

  /**
   * 最大条数
   * @example 20
   * @type {number}
   */
  @observable pageSize;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {StockPriceQueryVO}
 */
export class StockPriceQueryVO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 编辑
   * @example
   * @type {object}
   */
  @observable edit;

  /**
   * 操作列表
   * @example
   * @type {array}
   */
  @observable operations;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 股价ID
   * @example 11111
   * @type {number}
   */
  @observable priceId;

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {StockSaveDTO}
 */
export class StockSaveDTO extends Root {
  /**
   * 备注
   * @example 涨势喜人
   * @type {string}
   */
  @observable comments;

  /**
   * 计划ID
   * @example 11111
   * @type {number}
   */
  @observable planId;

  /**
   * 股价
   * @example 160.33
   * @type {string}
   */
  @observable price;

  /**
   * 股价ID
   * @example 11111
   * @type {number}
   */
  @observable priceId;

  /**
   * 发布日期
   * @example 2018-12-02
   * @type {string}
   */
  @observable publishDate;

  /**
   * 生效日期
   * @example 2018-01-02
   * @type {string}
   */
  @observable startDate;
}

/**
 *
 * @typedef {StockSimpleVO}
 */
export class StockSimpleVO extends Root {
  /**
   * 已作废股票
   * @example
   * @type {number}
   */
  @observable abolished;

  /**
   * 股票总份额
   * @example
   * @type {number}
   */
  @observable total;

  /**
   * 股票类型
   * @example
   * @type {string}
   */
  @observable type;

  /**
   * 未使用股票(包含还在池子里没动的以及处于草稿状态的)
   * @example
   * @type {number}
   */
  @observable unused;

  /**
   * 已使用股票
   * @example
   * @type {number}
   */
  @observable used;
}

/**
 *
 * @typedef {StockUseInfoDTO}
 */
export class StockUseInfoDTO extends Root {
  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {StockUseSimpleInfoVO}
 */
export class StockUseSimpleInfoVO extends Root {
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
  @observable planId;

  /**
   * rs股票使用情况
   * @example
   * @type {StockSimpleVO}
   */
  @observable rs;

  /**
   * so股票使用情况
   * @example
   * @type {StockSimpleVO}
   */
  @observable so;
}

/**
 *
 * @typedef {SuggestDTO}
 */
export class SuggestDTO extends Root {
  /**
   * keyword
   * @example xx
   * @type {string}
   */
  @observable keyword;

  /**
   * 限制条数
   * @example 20
   * @type {number}
   */
  @observable limit;
}

/**
 *
 * @typedef {TBCGrantBeforeVO}
 */
export class TBCGrantBeforeVO extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId;

  /**
   * 协议富文本内容
   * @example 1111
   * @type {string}
   */
  @observable contents;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名字
   * @example 涂鸦科技
   * @type {string}
   */
  @observable planName;
}

/**
 *
 * @typedef {TBCGrantVO}
 */
export class TBCGrantVO extends Root {
  /**
   * 协议ID
   * @example 1111
   * @type {number}
   */
  @observable agreeId;

  /**
   * 创建者ID
   * @example 12
   * @type {number}
   */
  @observable createdBy;

  /**
   * 创建者
   * @example 逍遥子
   * @type {string}
   */
  @observable createdByName;

  /**
   * 创建时间
   * @example 2018-01-19
   * @type {Timestamp}
   */
  @observable creationDate;

  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   * @type {object}
   */
  @observable edit;

  /**
   * 授予数量
   * @example 10000
   * @type {number}
   */
  @observable grantAmount;

  /**
   * 授予日期
   * @example 2018-01-22
   * @type {string}
   */
  @observable grantDate;

  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   * @type {string}
   */
  @observable grantType;

  /**
   * 授予编号
   * @example RSDM000001
   * @type {string}
   */
  @observable grantsCode;

  /**
   * 授予ID
   * @example 1111
   * @type {number}
   */
  @observable grantsId;

  /**
   * 修改时间
   * @example
   * @type {Timestamp}
   */
  @observable lastUpdateDate;

  /**
   * 修改者ID
   * @example 23
   * @type {number}
   */
  @observable lastUpdatedBy;

  /**
   * 修改者
   * @example 杨铁心
   * @type {string}
   */
  @observable lastUpdatedByName;

  /**
   * 出资期限
   * @example 2018-07-01
   * @type {string}
   */
  @observable limitDate;

  /**
   * 国际化
   * @example
   * @type {object}
   */
  @observable map;

  /**
   * 操作列所有需要显示的按钮
   * @example [[object Undefined]]
   * @type {array}
   */
  @observable operations;

  /**
   * 计划ID
   * @example 1111
   * @type {number}
   */
  @observable planId;

  /**
   * 计划名称
   * @example 渡鸦计划
   * @type {string}
   */
  @observable planName;

  /**
   * 行权价/股 出资本金/股
   * @example 1
   * @type {number}
   */
  @observable price;
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
  @observable date;

  /**
   *
   * @example
   * @type {number}
   */
  @observable day;

  /**
   *
   * @example
   * @type {number}
   */
  @observable hours;

  /**
   *
   * @example
   * @type {number}
   */
  @observable minutes;

  /**
   *
   * @example
   * @type {number}
   */
  @observable month;

  /**
   *
   * @example
   * @type {number}
   */
  @observable nanos;

  /**
   *
   * @example
   * @type {number}
   */
  @observable seconds;

  /**
   *
   * @example
   * @type {number}
   */
  @observable time;

  /**
   *
   * @example
   * @type {number}
   */
  @observable timezoneOffset;

  /**
   *
   * @example
   * @type {number}
   */
  @observable year;
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
  @observable personId;

  /**
   *
   * @example
   * @type {string}
   */
  @observable personName;
}
