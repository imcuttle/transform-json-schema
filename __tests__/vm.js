import { Root, observable } from "react-mobx-vm";

/**
 *
 * @typedef {Acceptgrantdto}
 */
export class Acceptgrantdto extends Root {
  /**
   * 授予ID
   * @example 11111
   * @type {number}
   */
  @observable grantsId;
}

/**
 *
 * @typedef {Agreementquerydto}
 */
export class Agreementquerydto extends Root {
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
 * @typedef {Agreementsuggestvo}
 */
export class Agreementsuggestvo extends Root {
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
 * @typedef {Agreementupdatedto}
 */
export class Agreementupdatedto extends Root {
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
 * 属性是否可以编辑
 * @typedef {Edit}
 */
export class Edit extends Root {}

/**
 * 国际化
 * @typedef {Map}
 */
export class Map extends Root {}

/**
 *
 * @typedef {Agreementvo}
 */
export class Agreementvo extends Root {
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
   *
   * @example
   * @type {Edit}
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
   *
   * @example
   * @type {Map}
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
 * @typedef {Agreementviewvo}
 */
export class Agreementviewvo extends Root {
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
 * @typedef {Analyzemovepanelvo}
 */
export class Analyzemovepanelvo extends Root {
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
 * @typedef {Analyzepanelvo}
 */
export class Analyzepanelvo extends Root {
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
 * @typedef {Analyzequitpanelvo}
 */
export class Analyzequitpanelvo extends Root {
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
 * @typedef {Ascrruledto}
 */
export class Ascrruledto extends Root {
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
 * @typedef {Ascriptioninfovo}
 */
export class Ascriptioninfovo extends Root {
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
 * @typedef {Ascriptionsimplevo}
 */
export class Ascriptionsimplevo extends Root {
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
 * @typedef {Ascriptionvo}
 */
export class Ascriptionvo extends Root {
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
 * @typedef {Busslinecreatedto}
 */
export class Busslinecreatedto extends Root {
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
 * @typedef {Busslineorgcreatedto}
 */
export class Busslineorgcreatedto extends Root {
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
 * @typedef {Busslineorgquerydto}
 */
export class Busslineorgquerydto extends Root {
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
 * @typedef {Busslineorgupdatedto}
 */
export class Busslineorgupdatedto extends Root {
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
 * @typedef {Busslinequerytempdto}
 */
export class Busslinequerytempdto extends Root {
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
 * @typedef {Busslinesuggestvo}
 */
export class Busslinesuggestvo extends Root {
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
 * @typedef {Busslineupdatedto}
 */
export class Busslineupdatedto extends Root {
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
 * @typedef {Busslinevo}
 */
export class Busslinevo extends Root {
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
 * @typedef {Bussorgloglistvo}
 */
export class Bussorgloglistvo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Bussorglogvo}
 */
export class Bussorglogvo extends Root {
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
 * @typedef {Cabupdatemovevo}
 */
export class Cabupdatemovevo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Cgrantforrsvo}
 */
export class Cgrantforrsvo extends Root {
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
 * @typedef {Cgrantforsovo}
 */
export class Cgrantforsovo extends Root {
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
 * @typedef {Cancelsimplevo}
 */
export class Cancelsimplevo extends Root {
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
 * @typedef {Cancelvo}
 */
export class Cancelvo extends Root {
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
 * @typedef {Codeandvaluevo}
 */
export class Codeandvaluevo extends Root {
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
 * @typedef {Datecheckdto}
 */
export class Datecheckdto extends Root {
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
 * @typedef {Departmentsimplevo}
 */
export class Departmentsimplevo extends Root {
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
 * @typedef {Departmentsuggestvo}
 */
export class Departmentsuggestvo extends Root {
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
 * @typedef {Departmentvo}
 */
export class Departmentvo extends Root {
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
 * @typedef {Employeegrantsdatavo}
 */
export class Employeegrantsdatavo extends Root {
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
 * @typedef {Employeegrantsvo}
 */
export class Employeegrantsvo extends Root {
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
 * @typedef {Employeevo}
 */
export class Employeevo extends Root {
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
 * @typedef {Esopmenuvo}
 */
export class Esopmenuvo extends Root {
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
 * @typedef {Freezingperiodquerydto}
 */
export class Freezingperiodquerydto extends Root {
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
 * @typedef {Freezingperiodqueryvo}
 */
export class Freezingperiodqueryvo extends Root {
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
 * @typedef {Freezingperiodsavedto}
 */
export class Freezingperiodsavedto extends Root {
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
 * @typedef {Grantadddto}
 */
export class Grantadddto extends Root {
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
 * @typedef {Grantloglistdto}
 */
export class Grantloglistdto extends Root {
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
 * @typedef {Grantpostdto}
 */
export class Grantpostdto extends Root {
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
 * @typedef {Grantupdatedto}
 */
export class Grantupdatedto extends Root {
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
 * @typedef {Grantslistdto}
 */
export class Grantslistdto extends Root {
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
 * @typedef {Grantslistvo}
 */
export class Grantslistvo extends Root {
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
 * @typedef {Grantsloglistvo}
 */
export class Grantsloglistvo extends Root {
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
 * @typedef {Grantsqueryinitvo}
 */
export class Grantsqueryinitvo extends Root {
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
 * @typedef {Grantsvo}
 */
export class Grantsvo extends Root {
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
   * @type {Employeevo}
   */
  @observable employeeVo;

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
 * @typedef {Grantsviewlog}
 */
export class Grantsviewlog extends Root {
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
 * @typedef {Jsonresult_agreementviewvo_}
 */
export class Jsonresult_agreementviewvo_ extends Root {
  /**
   *
   * @example
   * @type {Agreementviewvo}
   */
  @observable data;

  /**
   *
   * @example
   * @type {Errors}
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
   * @type {Warnings}
   */
  @observable warnings;
}

/**
 *
 * @typedef {Jsonresult_ascriptionvo_}
 */
export class Jsonresult_ascriptionvo_ extends Root {
  /**
   *
   * @example
   * @type {Ascriptionvo}
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
 * @typedef {Jsonresult_busslinevo_}
 */
export class Jsonresult_busslinevo_ extends Root {
  /**
   *
   * @example
   * @type {Busslinevo}
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
 * @typedef {Jsonresult_cabupdatemovevo_}
 */
export class Jsonresult_cabupdatemovevo_ extends Root {
  /**
   *
   * @example
   * @type {Cabupdatemovevo}
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
 * @typedef {Jsonresult_cancelvo_}
 */
export class Jsonresult_cancelvo_ extends Root {
  /**
   *
   * @example
   * @type {Cancelvo}
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
 * @typedef {Jsonresult_departmentvo_}
 */
export class Jsonresult_departmentvo_ extends Root {
  /**
   *
   * @example
   * @type {Departmentvo}
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
 * @typedef {Jsonresult_grantsvo_}
 */
export class Jsonresult_grantsvo_ extends Root {
  /**
   *
   * @example
   * @type {Grantsvo}
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
 * @typedef {Jsonresult_grantsviewlog_}
 */
export class Jsonresult_grantsviewlog_ extends Root {
  /**
   *
   * @example
   * @type {Grantsviewlog}
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
 * @typedef {Jsonresult_list_agreementsuggestvo__}
 */
export class Jsonresult_list_agreementsuggestvo__ extends Root {
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
 * @typedef {Jsonresult_list_busslinesuggestvo__}
 */
export class Jsonresult_list_busslinesuggestvo__ extends Root {
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
 * @typedef {Jsonresult_list_bussorgloglistvo__}
 */
export class Jsonresult_list_bussorgloglistvo__ extends Root {
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
 * @typedef {Jsonresult_list_cgrantforrsvo__}
 */
export class Jsonresult_list_cgrantforrsvo__ extends Root {
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
 * @typedef {Jsonresult_list_cgrantforsovo__}
 */
export class Jsonresult_list_cgrantforsovo__ extends Root {
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
 * @typedef {Jsonresult_list_departmentsimplevo__}
 */
export class Jsonresult_list_departmentsimplevo__ extends Root {
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
 * @typedef {Jsonresult_list_departmentsuggestvo__}
 */
export class Jsonresult_list_departmentsuggestvo__ extends Root {
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
 * @typedef {Jsonresult_list_employeegrantsvo__}
 */
export class Jsonresult_list_employeegrantsvo__ extends Root {
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
 * @typedef {Jsonresult_list_employeevo__}
 */
export class Jsonresult_list_employeevo__ extends Root {
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
 * @typedef {Jsonresult_list_esopmenuvo__}
 */
export class Jsonresult_list_esopmenuvo__ extends Root {
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
 * @typedef {Jsonresult_list_logcommonvo_logfreezingperiodviewvo___}
 */
export class Jsonresult_list_logcommonvo_logfreezingperiodviewvo___ extends Root {
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
 * @typedef {Jsonresult_list_logcommonvo_logplanviewvo___}
 */
export class Jsonresult_list_logcommonvo_logplanviewvo___ extends Root {
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
 * @typedef {Jsonresult_list_logcommonvo_logrightpriceviewvo___}
 */
export class Jsonresult_list_logcommonvo_logrightpriceviewvo___ extends Root {
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
 * @typedef {Jsonresult_list_logcommonvo_logstockpriceviewvo___}
 */
export class Jsonresult_list_logcommonvo_logstockpriceviewvo___ extends Root {
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
 * @typedef {Jsonresult_list_orgvo__}
 */
export class Jsonresult_list_orgvo__ extends Root {
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
 * @typedef {Jsonresult_list_plansimplevo__}
 */
export class Jsonresult_list_plansimplevo__ extends Root {
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
 * @typedef {Jsonresult_list_soascriptionsimplevo__}
 */
export class Jsonresult_list_soascriptionsimplevo__ extends Root {
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
 * @typedef {Jsonresult_list_tbcgrantvo__}
 */
export class Jsonresult_list_tbcgrantvo__ extends Root {
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
 * @typedef {Jsonresult_list_string__}
 */
export class Jsonresult_list_string__ extends Root {
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
 * @typedef {Jsonresult_logplanpanelvo_}
 */
export class Jsonresult_logplanpanelvo_ extends Root {
  /**
   *
   * @example
   * @type {Logplanpanelvo}
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
 * @typedef {Jsonresult_logplanplanviewvo_}
 */
export class Jsonresult_logplanplanviewvo_ extends Root {
  /**
   *
   * @example
   * @type {Logplanplanviewvo}
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
 * @typedef {Jsonresult_logqueryinitvo_}
 */
export class Jsonresult_logqueryinitvo_ extends Root {
  /**
   *
   * @example
   * @type {Logqueryinitvo}
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
 * @typedef {Data}
 */
export class Data extends Root {}

/**
 *
 * @typedef {Jsonresult_map_string_analyzemovepanelvo__}
 */
export class Jsonresult_map_string_analyzemovepanelvo__ extends Root {
  /**
   *
   * @example
   * @type {Data}
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
 * @typedef {Jsonresult_map_string_analyzepanelvo__}
 */
export class Jsonresult_map_string_analyzepanelvo__ extends Root {
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
 * @typedef {Jsonresult_map_string_analyzequitpanelvo__}
 */
export class Jsonresult_map_string_analyzequitpanelvo__ extends Root {
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
 * @typedef {Jsonresult_map_string_grantsqueryinitvo__}
 */
export class Jsonresult_map_string_grantsqueryinitvo__ extends Root {
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
 * @typedef {Jsonresult_map_string_movepanelvo__}
 */
export class Jsonresult_map_string_movepanelvo__ extends Root {
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
 * @typedef {Jsonresult_map_string_quitpanelvo__}
 */
export class Jsonresult_map_string_quitpanelvo__ extends Root {
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
 * @typedef {Jsonresult_movecbqueryparams_}
 */
export class Jsonresult_movecbqueryparams_ extends Root {
  /**
   *
   * @example
   * @type {Movecbqueryparams}
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
 * @typedef {Jsonresult_pageinfo_agreementvo__}
 */
export class Jsonresult_pageinfo_agreementvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_agreementvo_}
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
 * @typedef {Jsonresult_pageinfo_busslinevo__}
 */
export class Jsonresult_pageinfo_busslinevo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_busslinevo_}
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
 * @typedef {Jsonresult_pageinfo_departmentvo__}
 */
export class Jsonresult_pageinfo_departmentvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_departmentvo_}
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
 * @typedef {Jsonresult_pageinfo_freezingperiodqueryvo__}
 */
export class Jsonresult_pageinfo_freezingperiodqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_freezingperiodqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_grantslistvo__}
 */
export class Jsonresult_pageinfo_grantslistvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_grantslistvo_}
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
 * @typedef {Jsonresult_pageinfo_grantsloglistvo__}
 */
export class Jsonresult_pageinfo_grantsloglistvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_grantsloglistvo_}
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
 * @typedef {Jsonresult_pageinfo_logplanqueryvo__}
 */
export class Jsonresult_pageinfo_logplanqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_logplanqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_movecbqueryvo__}
 */
export class Jsonresult_pageinfo_movecbqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_movecbqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_moversanlyvo__}
 */
export class Jsonresult_pageinfo_moversanlyvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_moversanlyvo_}
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
 * @typedef {Jsonresult_pageinfo_moversqueryvo__}
 */
export class Jsonresult_pageinfo_moversqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_moversqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_movesoanlyvo__}
 */
export class Jsonresult_pageinfo_movesoanlyvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_movesoanlyvo_}
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
 * @typedef {Jsonresult_pageinfo_movesoqueryvo__}
 */
export class Jsonresult_pageinfo_movesoqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_movesoqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_planqueryvo__}
 */
export class Jsonresult_pageinfo_planqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_planqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_quitrsanlyvo__}
 */
export class Jsonresult_pageinfo_quitrsanlyvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_quitrsanlyvo_}
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
 * @typedef {Jsonresult_pageinfo_quitrsqueryvo__}
 */
export class Jsonresult_pageinfo_quitrsqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_quitrsqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_quitsoanlyvo__}
 */
export class Jsonresult_pageinfo_quitsoanlyvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_quitsoanlyvo_}
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
 * @typedef {Jsonresult_pageinfo_quitsoqueryvo__}
 */
export class Jsonresult_pageinfo_quitsoqueryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_quitsoqueryvo_}
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
 * @typedef {Jsonresult_pageinfo_rightpricequeryvo__}
 */
export class Jsonresult_pageinfo_rightpricequeryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_rightpricequeryvo_}
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
 * @typedef {Jsonresult_pageinfo_stockownvo__}
 */
export class Jsonresult_pageinfo_stockownvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_stockownvo_}
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
 * @typedef {Jsonresult_pageinfo_stockpricequeryvo__}
 */
export class Jsonresult_pageinfo_stockpricequeryvo__ extends Root {
  /**
   *
   * @example
   * @type {Pageinfo_stockpricequeryvo_}
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
 * @typedef {Jsonresult_planpanelvo_}
 */
export class Jsonresult_planpanelvo_ extends Root {
  /**
   *
   * @example
   * @type {Planpanelvo}
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
 * @typedef {Jsonresult_planviewvo_}
 */
export class Jsonresult_planviewvo_ extends Root {
  /**
   *
   * @example
   * @type {Planviewvo}
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
 * @typedef {Jsonresult_quitdedudetailvo_}
 */
export class Jsonresult_quitdedudetailvo_ extends Root {
  /**
   *
   * @example
   * @type {Quitdedudetailvo}
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
 * @typedef {Jsonresult_rsascriptionvo_}
 */
export class Jsonresult_rsascriptionvo_ extends Root {
  /**
   *
   * @example
   * @type {Rsascriptionvo}
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
 * @typedef {Jsonresult_rightpricequeryvo_}
 */
export class Jsonresult_rightpricequeryvo_ extends Root {
  /**
   *
   * @example
   * @type {Rightpricequeryvo}
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
 * @typedef {Jsonresult_stockusesimpleinfovo_}
 */
export class Jsonresult_stockusesimpleinfovo_ extends Root {
  /**
   *
   * @example
   * @type {Stockusesimpleinfovo}
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
 * @typedef {Jsonresult_tbcgrantbeforevo_}
 */
export class Jsonresult_tbcgrantbeforevo_ extends Root {
  /**
   *
   * @example
   * @type {Tbcgrantbeforevo}
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
 * @typedef {Jsonresult_uservo_}
 */
export class Jsonresult_uservo_ extends Root {
  /**
   *
   * @example
   * @type {Uservo}
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
 * @typedef {Jsonresult_void_}
 */
export class Jsonresult_void_ extends Root {
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
 * @typedef {Jsonresult_boolean_}
 */
export class Jsonresult_boolean_ extends Root {
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
 * @typedef {Jsonresult_int_}
 */
export class Jsonresult_int_ extends Root {
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
 * @typedef {Jsonresult_long_}
 */
export class Jsonresult_long_ extends Root {
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
 * @typedef {Jsonresult_string_}
 */
export class Jsonresult_string_ extends Root {
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
 * @typedef {Logcommonvo}
 */
export class Logcommonvo extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Logcommonvo_logfreezingperiodviewvo_}
 */
export class Logcommonvo_logfreezingperiodviewvo_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Logcommonvo_logplanviewvo_}
 */
export class Logcommonvo_logplanviewvo_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Logcommonvo_logrightpriceviewvo_}
 */
export class Logcommonvo_logrightpriceviewvo_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Logcommonvo_logstockpriceviewvo_}
 */
export class Logcommonvo_logstockpriceviewvo_ extends Root {
  /**
   * 日志详情
   * @example
   * @type {array}
   */
  @observable logs;

  /**
   * 操作人信息
   * @example
   * @type {Employeevo}
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
 * @typedef {Logfreezingperiodviewvo}
 */
export class Logfreezingperiodviewvo extends Root {
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
 * @typedef {Logplanpanelvo}
 */
export class Logplanpanelvo extends Root {
  /**
   * 状态
   * @example
   * @type {array}
   */
  @observable status;
}

/**
 *
 * @typedef {Logplanplanviewvo}
 */
export class Logplanplanviewvo extends Root {
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
 * @typedef {Logplanquerydto}
 */
export class Logplanquerydto extends Root {
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
 * @typedef {Logplanqueryvo}
 */
export class Logplanqueryvo extends Root {
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
 * @typedef {Logplanviewvo}
 */
export class Logplanviewvo extends Root {
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
 * @typedef {Logqueryinitvo}
 */
export class Logqueryinitvo extends Root {
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
 * @typedef {Logrightpriceviewvo}
 */
export class Logrightpriceviewvo extends Root {
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
 * @typedef {Logstockpriceviewvo}
 */
export class Logstockpriceviewvo extends Root {
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
 * @typedef {Map_string_analyzemovepanelvo_}
 */
export class Map_string_analyzemovepanelvo_ extends Root {}

/**
 *
 * @typedef {Map_string_analyzepanelvo_}
 */
export class Map_string_analyzepanelvo_ extends Root {}

/**
 *
 * @typedef {Map_string_analyzequitpanelvo_}
 */
export class Map_string_analyzequitpanelvo_ extends Root {}

/**
 *
 * @typedef {Map_string_grantsqueryinitvo_}
 */
export class Map_string_grantsqueryinitvo_ extends Root {}

/**
 *
 * @typedef {Map_string_movepanelvo_}
 */
export class Map_string_movepanelvo_ extends Root {}

/**
 *
 * @typedef {Map_string_quitpanelvo_}
 */
export class Map_string_quitpanelvo_ extends Root {}

/**
 *
 * @typedef {Moveanalyzedto}
 */
export class Moveanalyzedto extends Root {
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
 * @typedef {Movecblistdto}
 */
export class Movecblistdto extends Root {
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
 * @typedef {Movecbpanelvo}
 */
export class Movecbpanelvo extends Root {
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
 * @typedef {Movecbquerydto}
 */
export class Movecbquerydto extends Root {
  /**
   *
   * @example
   * @type {number}
   */
  @observable moveDeduId;
}

/**
 *
 * @typedef {Panelmap}
 */
export class Panelmap extends Root {}

/**
 *
 * @typedef {Movecbqueryparams}
 */
export class Movecbqueryparams extends Root {
  /**
   *
   * @example
   * @type {Panelmap}
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
 * @typedef {Movecbqueryvo}
 */
export class Movecbqueryvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Movecbupdatedto}
 */
export class Movecbupdatedto extends Root {
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
 * @typedef {Movepanelvo}
 */
export class Movepanelvo extends Root {
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
 * @typedef {Moversanlyvo}
 */
export class Moversanlyvo extends Root {
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
 * @typedef {Moversquerydto}
 */
export class Moversquerydto extends Root {
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
 * @typedef {Moversqueryvo}
 */
export class Moversqueryvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Movesoanlyvo}
 */
export class Movesoanlyvo extends Root {
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
 * @typedef {Movesoquerydto}
 */
export class Movesoquerydto extends Root {
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
 * @typedef {Movesoqueryvo}
 */
export class Movesoqueryvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Orgvo}
 */
export class Orgvo extends Root {
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
 * @typedef {Pageinfo_agreementvo_}
 */
export class Pageinfo_agreementvo_ extends Root {
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
 * @typedef {Pageinfo_busslinevo_}
 */
export class Pageinfo_busslinevo_ extends Root {
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
 * @typedef {Pageinfo_departmentvo_}
 */
export class Pageinfo_departmentvo_ extends Root {
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
 * @typedef {Pageinfo_freezingperiodqueryvo_}
 */
export class Pageinfo_freezingperiodqueryvo_ extends Root {
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
 * @typedef {Pageinfo_grantslistvo_}
 */
export class Pageinfo_grantslistvo_ extends Root {
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
 * @typedef {Pageinfo_grantsloglistvo_}
 */
export class Pageinfo_grantsloglistvo_ extends Root {
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
 * @typedef {Pageinfo_logplanqueryvo_}
 */
export class Pageinfo_logplanqueryvo_ extends Root {
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
 * @typedef {Pageinfo_movecbqueryvo_}
 */
export class Pageinfo_movecbqueryvo_ extends Root {
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
 * @typedef {Pageinfo_moversanlyvo_}
 */
export class Pageinfo_moversanlyvo_ extends Root {
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
 * @typedef {Pageinfo_moversqueryvo_}
 */
export class Pageinfo_moversqueryvo_ extends Root {
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
 * @typedef {Pageinfo_movesoanlyvo_}
 */
export class Pageinfo_movesoanlyvo_ extends Root {
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
 * @typedef {Pageinfo_movesoqueryvo_}
 */
export class Pageinfo_movesoqueryvo_ extends Root {
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
 * @typedef {Pageinfo_planqueryvo_}
 */
export class Pageinfo_planqueryvo_ extends Root {
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
 * @typedef {Pageinfo_quitrsanlyvo_}
 */
export class Pageinfo_quitrsanlyvo_ extends Root {
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
 * @typedef {Pageinfo_quitrsqueryvo_}
 */
export class Pageinfo_quitrsqueryvo_ extends Root {
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
 * @typedef {Pageinfo_quitsoanlyvo_}
 */
export class Pageinfo_quitsoanlyvo_ extends Root {
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
 * @typedef {Pageinfo_quitsoqueryvo_}
 */
export class Pageinfo_quitsoqueryvo_ extends Root {
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
 * @typedef {Pageinfo_rightpricequeryvo_}
 */
export class Pageinfo_rightpricequeryvo_ extends Root {
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
 * @typedef {Pageinfo_stockownvo_}
 */
export class Pageinfo_stockownvo_ extends Root {
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
 * @typedef {Pageinfo_stockpricequeryvo_}
 */
export class Pageinfo_stockpricequeryvo_ extends Root {
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
 * @typedef {Plannamecodecheckdto}
 */
export class Plannamecodecheckdto extends Root {
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
 * @typedef {Planpanelvo}
 */
export class Planpanelvo extends Root {
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
 * @typedef {Planquerydto}
 */
export class Planquerydto extends Root {
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
 * @typedef {Planqueryvo}
 */
export class Planqueryvo extends Root {
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
 * @typedef {Planreleasedto}
 */
export class Planreleasedto extends Root {
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
 * @typedef {Plansavedto}
 */
export class Plansavedto extends Root {
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
 * @typedef {Plansimplevo}
 */
export class Plansimplevo extends Root {
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
 * @typedef {Planviewvo}
 */
export class Planviewvo extends Root {
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
 * @typedef {Pricequerydto}
 */
export class Pricequerydto extends Root {
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
 * @typedef {Quitanalyzedto}
 */
export class Quitanalyzedto extends Root {
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
 * @typedef {Quitdedudetailvo}
 */
export class Quitdedudetailvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Quitmodifydto}
 */
export class Quitmodifydto extends Root {
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
 * @typedef {Quitpanelvo}
 */
export class Quitpanelvo extends Root {
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
 * @typedef {Quitrsanlyvo}
 */
export class Quitrsanlyvo extends Root {
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
 * @typedef {Quitrsquerydto}
 */
export class Quitrsquerydto extends Root {
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
 * @typedef {Quitrsqueryvo}
 */
export class Quitrsqueryvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Quitsoanlyvo}
 */
export class Quitsoanlyvo extends Root {
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
 * @typedef {Quitsoquerydto}
 */
export class Quitsoquerydto extends Root {
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
 * @typedef {Quitsoqueryvo}
 */
export class Quitsoqueryvo extends Root {
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
   * @type {Employeevo}
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
 * @typedef {Rsascrupdatedto}
 */
export class Rsascrupdatedto extends Root {
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
 * @typedef {Rsascriptiondto}
 */
export class Rsascriptiondto extends Root {
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
 * @typedef {Rsascriptionsimplevo}
 */
export class Rsascriptionsimplevo extends Root {
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
 * @typedef {Rsascriptionvo}
 */
export class Rsascriptionvo extends Root {
  /**
   * 员工信息
   * @example {}
   * @type {Employeevo}
   */
  @observable employeeVo;

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
 * @typedef {Rsfullascrdto}
 */
export class Rsfullascrdto extends Root {
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
 * @typedef {Rightpricequerydto}
 */
export class Rightpricequerydto extends Root {
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
 * @typedef {Rightpricequeryvo}
 */
export class Rightpricequeryvo extends Root {
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
 * @typedef {Rightpricesavedto}
 */
export class Rightpricesavedto extends Root {
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
 * @typedef {Soascriptionsimplevo}
 */
export class Soascriptionsimplevo extends Root {
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
 * @typedef {Stockownquerydto}
 */
export class Stockownquerydto extends Root {
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
 * @typedef {Stockownvo}
 */
export class Stockownvo extends Root {
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
 * @typedef {Stockpricequerydto}
 */
export class Stockpricequerydto extends Root {
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
 * @typedef {Stockpricequeryvo}
 */
export class Stockpricequeryvo extends Root {
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
 * @typedef {Stocksavedto}
 */
export class Stocksavedto extends Root {
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
 * @typedef {Stocksimplevo}
 */
export class Stocksimplevo extends Root {
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
 * @typedef {Stockuseinfodto}
 */
export class Stockuseinfodto extends Root {
  /**
   * 计划ID
   * @example
   * @type {number}
   */
  @observable planId;
}

/**
 *
 * @typedef {Stockusesimpleinfovo}
 */
export class Stockusesimpleinfovo extends Root {
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
   * @type {Stocksimplevo}
   */
  @observable rs;

  /**
   * so股票使用情况
   * @example
   * @type {Stocksimplevo}
   */
  @observable so;
}

/**
 *
 * @typedef {Suggestdto}
 */
export class Suggestdto extends Root {
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
 * @typedef {Tbcgrantbeforevo}
 */
export class Tbcgrantbeforevo extends Root {
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
 * @typedef {Tbcgrantvo}
 */
export class Tbcgrantvo extends Root {
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
 * @typedef {Uservo}
 */
export class Uservo extends Root {
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
