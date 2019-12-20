export interface AcceptGrantDto {
  /**
   * 授予ID
   * @example 11111
   */
  grantsId?: number;
}

export interface AgreementQueryDto {
  language?: string;
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
}

export interface AgreementSuggestVo {
  /**
   * 协议ID
   * @example 1212
   */
  agreeId?: number;
  /**
   * 协议名字
   * @example 协议名字
   */
  agreeName?: string;
  /**
   * 协议code
   * @example 0001
   */
  agreeNum?: string;
}

export interface AgreementUpdateDto {
  /**
   * 英文协议内容
   * @example Hello XiaoHu
   */
  agreeContentUs?: string;
  /**
   * 中文协议内容
   * @example 您好
   */
  agreeContentZh?: string;
  /**
   * 协议ID
   * @example
   */
  agreeId?: number;
  /**
   * 协议名称
   * @example 渡鸦协议
   */
  agreeName?: string;
  signCodeEn?: string;
  signCodeZh?: string;
}

export interface AgreementVo {
  /**
   * 协议ID
   * @example 1212
   */
  agreeId?: number;
  /**
   * 协议名称
   * @example 渡鸦协议
   */
  agreeName?: string;
  /**
   * 协议编号
   * @example 0001
   */
  agreeNum?: string;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  edit?: Edit;
  /**
   * 授予类型
   * @example SO
   */
  esopType?: string;
  /**
   * 是否已经上传签字页
   * @example Y
   */
  isSignPage?: string;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  map?: Map;
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * 计划状态
   * @example SAVED
   */
  planStatus?: string;
}

/**
 * 属性是否可以编辑
 */
export interface Edit {}

/**
 * 国际化
 */
export interface Map {}

export interface AgreementViewVo {
  /**
   * 中文协议内容
   * @example 你好
   */
  agreeContentUs?: string;
  /**
   * 英文协议内容
   * @example Hi All
   */
  agreeContentZh?: string;
  /**
   * 协议ID
   * @example 1212
   */
  agreeId?: number;
  /**
   * 协议名称
   * @example 渡鸦协议
   */
  agreeName?: string;
  /**
   * 协议编号
   * @example 0001
   */
  agreeNum?: string;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 授予类型
   * @example SO
   */
  esopType?: string;
  /**
   * 是否已上传英文协议签字页
   * @example N
   */
  hasSignCodeUs?: string;
  /**
   * 是否已上传中文协议签字页
   * @example Y
   */
  hasSignCodeZh?: string;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 英文协议签字页名字
   * @example 度秘协议签字页
   */
  signPageNameUs?: string;
  /**
   * 中文协议签字页名字
   * @example 度秘协议签字页
   */
  signPageNameZh?: string;
}

export interface AnalyzeMovePanelVo {
  /**
   * 扣减状态
   * @example
   */
  deductionStatus?: [];
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   */
  grantMoveEndDate?: string;
  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   */
  grantMoveStartDate?: string;
  /**
   * 授予状态
   * @example
   */
  grantStatus?: [];
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 操作角色
   * @example
   */
  operationRole?: [];
  /**
   * 退款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   */
  personMoveEndDate?: string;
  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   */
  personMoveStartDate?: string;
}

export interface AnalyzePanelVo {
  /**
   * 员工类型
   * @example
   */
  employeeType?: [];
  /**
   * 授予编号
   * @example
   */
  grantCode?: string;
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 授予负责角色/授予创建角色
   * @example
   */
  grantRole?: [];
  /**
   * 授予状态
   * @example
   */
  grantStatus?: [];
  /**
   * 操作列表
   * @example
   */
  operation?: [];
}

export interface AnalyzeQuitPanelVo {
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 操作角色
   * @example
   */
  operationRole?: [];
  /**
   * 退款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   */
  quitDateEnd?: string;
  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   */
  quitDateStart?: string;
}

export interface AscrRuleDto {
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-01
   */
  grantDate?: string;
}

export interface AscriptionInfoVo {
  /**
   * 归属日期
   * @example 2018-01-01
   */
  ascrDate?: string;
  /**
   * 是否已归属
   * @example Y
   */
  ascrFlag?: string;
  /**
   * 归属数量
   * @example 1000
   */
  ascrNumber?: number;
  /**
   * 归属ID
   * @example 1000
   */
  ascriptionId?: number;
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
}

export interface AscriptionSimpleVo {
  /**
   * 归属日期
   * @example 2018-01-01
   */
  ascrDate?: string;
  /**
   * 归属数量
   * @example 1000
   */
  ascrNumber?: number;
  /**
   * 归属规则修改标志
   * @example true
   */
  editFlag?: boolean;
}

export interface AscriptionVo {
  /**
   * 授予ID
   * @example 1000
   */
  grantsId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 归属明细
   * @example []
   */
  rsAscrList?: [];
}

export interface BussLineCreateDto {
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
  /**
   * 备注
   * @example XXX
   */
  comments?: string;
  /**
   * Leading BP/HRBP
   * @example [12, 23]
   */
  leadingBp?: [];
  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布)),默认为”保存“操作
   * @example PUBLISH
   */
  operationCode?: string;
}

export interface BussLineOrgCreateDto {
  /**
   * 业务线ID
   * @example 12
   */
  bussLineId?: number;
  /**
   * 备注
   * @example BPIT
   */
  comments?: string;
  /**
   * 部門ID
   * @example 12
   */
  orgId?: number;
  /**
   * 部門名字
   * @example BPIT
   */
  orgName?: string;
  /**
   * 生效日期
   * @example 2018-01-22
   */
  startDate?: string;
}

export interface BussLineOrgQueryDto {
  /**
   * 业务线id
   * @example
   */
  bussLineId?: number;
  /**
   * 标志位（大于0有效部门，小于0无效部门，等于0所有部门）
   * @example
   */
  flag?: number;
  /**
   * 部门名称
   * @example
   */
  orgName?: string;
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
}

export interface BussLineOrgUpdateDto {
  /**
   * 部門ID
   * @example 12
   */
  bussOrgId?: number;
  /**
   * 備註
   * @example notes
   */
  comments?: string;
  /**
   * 部門失效日期
   * @example 2018-01-21
   */
  endDate?: string;
  /**
   * 部門生效日期
   * @example 2018-01-21
   */
  startDate?: string;
}

export interface BussLineQueryTempDto {
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
}

export interface BussLineSuggestVo {
  /**
   * ID
   * @example 1212
   */
  bussLineId?: number;
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
}

export interface BussLineUpdateDto {
  /**
   * 业务线ID
   * @example 12
   */
  bussLineId?: number;
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
  /**
   * 备注
   * @example
   */
  comments?: string;
  /**
   * Leading BP/HRBP
   * @example [12, 23]
   */
  leadingBp?: [];
  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布))
   * @example
   */
  operationCode?: string;
}

export interface BussLineVo {
  /**
   * ID
   * @example 1212
   */
  bussLineId?: number;
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
  /**
   * 备注
   * @example XXX
   */
  comments?: string;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 有效部门数量
   * @example 2
   */
  departmentNum?: number;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * leadingBpIdStr
   * @example [{"personId":"12","email":"12@baidu.com"}, {"personId":"12","email":"12@baidu.com"}]
   */
  leadingBp?: [];
  /**
   * leadingBpIdStr(该字段FE忽略)
   * @example
   */
  leadingBpIdStr?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 状态
   * @example 已发布
   */
  status?: string;
}

export interface BussOrgLogListVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface BussOrgLogVo {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 原值／新值
   * @example 只有操作类型为修改的才有
   */
  dataFlag?: string;
  /**
   *  失效日期
   * @example 新建状态下不显示失效日期
   */
  endDate?: string;
  /**
   * 日志id
   * @example 1111
   */
  logId?: number;
  /**
   * 部门名称
   * @example 流程信息管理部
   */
  orgName?: string;
  /**
   * 生效日期
   * @example 删除状态下不显示生效日期
   */
  startDate?: string;
}

export interface CabUpdateMoveVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 员工信息
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-03-31
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
}

export interface CGrantForRsvo {
  /**
   * 已出资金额
   * @example 12.1
   */
  alreadyFound?: number;
  /**
   * 已归属
   * @example 1000
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 100
   */
  ascriptionIng?: number;
  /**
   * 已取消
   * @example 100
   */
  canceled?: number;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 当前股价
   * @example 270.6
   */
  currentStockPrice?: number;
  /**
   * 当前股价生效日期
   * @example 2018-07-01
   */
  currentStockStartDate?: string;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 出资期限
   * @example 2018-07-01
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 出资本金/股
   * @example 11.21
   */
  price?: number;
}

export interface CGrantForSovo {
  /**
   * 协议ID
   * @example 1111
   */
  agreeId?: number;
  /**
   * 已归属
   * @example 1000
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 100
   */
  ascriptionIng?: number;
  /**
   * 已取消
   * @example 100
   */
  canceled?: number;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 当前股价
   * @example 270.6
   */
  currentStockPrice?: number;
  /**
   * 当前股价生效日期
   * @example 2018-07-01
   */
  currentStockStartDate?: string;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
}

export interface CancelSimpleVo {
  /**
   * 取消时间
   * @example 2018-01-01 01:02:2
   */
  cancelDate?: Timestamp;
  /**
   * 取消数量
   * @example 1000
   */
  cancelNumber?: number;
  /**
   * 取消原因
   * @example XX
   */
  comments?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
}

export interface CancelVo {
  /**
   * 已经归属
   * @example []
   */
  ascriEd?: [];
  /**
   * 未归属
   * @example []
   */
  ascriIng?: [];
  /**
   * 授予ID
   * @example 1000
   */
  grantsId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
}

export interface CodeAndValueVo {
  /**
   * code
   * @example update
   */
  code?: string;
  /**
   * 是否被选中
   * @example N
   */
  selectFlag?: string;
  /**
   * value
   * @example 更新
   */
  value?: string;
}

export interface DateCheckDto {
  grantType?: string;
  grantsDate?: string;
  personId?: number;
  planId?: number;
}

export interface DepartmentSimpleVo {
  /**
   * 部门ID
   * @example 1212
   */
  orgId?: number;
  /**
   * 部門名字
   * @example 度秘
   */
  orgName?: string;
}

export interface DepartmentSuggestVo {
  /**
   * 部门Id
   * @example
   */
  orgId?: number;
  /**
   * 部门名字
   * @example
   */
  orgName?: string;
  /**
   * 计划Id
   * @example
   */
  planId?: number;
}

export interface DepartmentVo {
  /**
   * 业务线ID
   * @example 1212
   */
  bussLineId?: number;
  /**
   * 业务线名字
   * @example 度秘
   */
  bussLineName?: string;
  /**
   * ID
   * @example 1212
   */
  bussOrgId?: number;
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 删除日期
   * @example 2018-01-01 01:23:32
   */
  deleteDate?: Timestamp;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 删除生效日期
   * @example 2018-01-01
   */
  endDate?: string;
  /**
   * 后台使用，前端忽略
   * @example
   */
  flag?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 部门ID
   * @example 1212
   */
  orgId?: number;
  /**
   * 部門名字
   * @example 度秘
   */
  orgName?: string;
  /**
   * 新增生效日期
   * @example 2018-01-01
   */
  startDate?: string;
}

export interface EmployeeGrantsDataVo {
  /**
   * 部门名称
   * @example 流程信息管理部
   */
  departmentName?: string;
  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   */
  email?: string;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 员工姓名
   * @example 张大彪
   */
  fullName?: string;
  /**
   * 服务器ID
   * @example 111
   */
  periodOfServiceId?: number;
  /**
   * 员工id
   * @example 1111
   */
  personId?: number;
  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   */
  positionName?: string;
  /**
   * 入职日期
   * @example 2018-01-01
   */
  serviceStartDate?: string;
  /**
   * id
   * @example 1111
   */
  suggestId?: number;
  /**
   * suggest
   * @example 张大彪
   */
  suggestValue?: string;
}

export interface EmployeeGrantsVo {
  /**
   * id
   * @example
   */
  list?: [];
  /**
   * 类型，需要回传
   * @example employee
   */
  type?: string;
}

export interface EmployeeVo {
  /**
   * 部门名称
   * @example 流程信息管理部
   */
  departmentName?: string;
  /**
   * 公司邮箱
   * @example zhangdabiao@baidu.com
   */
  email?: string;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 员工姓名
   * @example 张大彪
   */
  fullName?: string;
  /**
   * 服务器ID
   * @example 111
   */
  periodOfServiceId?: number;
  /**
   * 员工id
   * @example 1111
   */
  personId?: number;
  /**
   * 职位名称
   * @example 1110T050.研发.开发.-.Band4.T5.高级研发工程师
   */
  positionName?: string;
  /**
   * 入职日期
   * @example 2018-01-01
   */
  serviceStartDate?: string;
}

export interface EsopMenuVo {
  /**
   * 应用ID
   * @example 800
   */
  appId?: number;
  /**
   * 子菜单
   * @example
   */
  childList?: [];
  /**
   * 功能CODE
   * @example CUX_ESOP_AGREEMENT
   */
  funcCode?: string;
  /**
   * 功能描述
   * @example CUX_ESOP_协议设置
   */
  funcDesc?: string;
  /**
   * 功能名称
   * @example CUX_ESOP_协议设置
   */
  funcName?: string;
  /**
   * 功能地址
   * @example pages/setting.html#/agreement
   */
  resUrl?: string;
  /**
   * 职责ID
   * @example 74454
   */
  respId?: number;
  /**
   * 业务组ID
   * @example
   */
  secGroupId?: number;
}

export interface FreezingPeriodQueryDto {
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
}

export interface FreezingPeriodQueryVo {
  /**
   * 备注
   * @example 冻结2周，授予停止
   */
  comments?: string;
  /**
   * 编辑
   * @example
   */
  edit?: {};
  /**
   * 冻结结束日期
   * @example 2018-02-04
   */
  endDate?: string;
  /**
   * 冻结设置ID
   * @example 11111
   */
  freezingId?: number;
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 冻结开始日期
   * @example 2018-02-03
   */
  startDate?: string;
}

export interface FreezingPeriodSaveDto {
  /**
   * 备注
   * @example 冻结2周，授予停止
   */
  comments?: string;
  /**
   * 冻结结束日期
   * @example 2018-02-04
   */
  endDate?: string;
  /**
   * 冻结设置ID
   * @example 11111
   */
  freezingId?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 冻结开始日期
   * @example 2018-02-03
   */
  startDate?: string;
}

export interface GrantAddDto {
  /**
   * 归属明细，SO类型有
   * @example []
   */
  ascriptionList?: [];
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 是否已经确认
   * @example true
   */
  confirm?: boolean;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   */
  limitDate?: string;
  /**
   * 员工Id
   * @example 10000
   */
  personId?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
  /**
   * 提交类型，保存并发布/保存
   * @example post
   */
  saveType?: string;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
}

export interface GrantLogListDto {
  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   */
  grantEndDate?: string;
  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   */
  grantStartDate?: string;
  /**
   * 授予类型
   * @example SO/RS
   */
  grantTypeList?: [];
  /**
   * 部门ID
   * @example
   */
  orgIdList?: [];
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * 授予状态
   * @example
   */
  rsStatusList?: [];
  /**
   * 授予状态
   * @example
   */
  soStatusList?: [];
  /**
   * suggestId
   * @example 1111
   */
  suggestId?: number;
  /**
   * suggest类型
   * @example grants
   */
  suggestType?: string;
}

export interface GrantPostDto {
  code?: string;
  codes?: [];
  confirm?: boolean;
}

export interface GrantUpdateDto {
  /**
   * 归属明细，SO类型有
   * @example []
   */
  ascriptionList?: [];
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 是否已经确认
   * @example true
   */
  confirm?: boolean;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   */
  limitDate?: string;
  /**
   * 员工Id
   * @example 10000
   */
  personId?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
  /**
   * 提交类型，保存并发布/保存
   * @example post
   */
  saveType?: string;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
}

export interface GrantsListDto {
  /**
   * 负责角色
   * @example []
   */
  createRoleList?: [];
  /**
   * 员工类型
   * @example []
   */
  employeeType?: [];
  /**
   * 授予日期结束时间
   * @example 2018-02-01
   */
  grantEndDate?: string;
  /**
   * 授予日期开始时间
   * @example 2018-02-01
   */
  grantStartDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 计划下对应业务线下的部门列表
   * @example []
   */
  orgIdList?: [];
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 授予角色
   * @example []
   */
  soClassList?: [];
  /**
   * 授予状态
   * @example []
   */
  statusList?: [];
  /**
   * suggestId
   * @example 1111
   */
  suggestId?: number;
  /**
   * suggest类型
   * @example grants
   */
  suggestType?: string;
}

export interface GrantsListVo {
  /**
   * 归属规则
   * @example 特殊规则
   */
  ascriptionRule?: string;
  /**
   * 备注
   * @example 保存中
   */
  comments?: string;
  /**
   * 负责角色
   * @example HRBP
   */
  createRole?: string;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期时间戳，后端使用
   * @example
   */
  grantDate?: string;
  /**
   * 授予日期-前端使用
   * @example 2018-01-22
   */
  grantDateStr?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 大层级
   * @example Band3
   */
  largeLevel?: string;
  /**
   * 大序列
   * @example 研发
   */
  largeSequence?: string;
  /**
   * 出资期限
   * @example 2018-03-03
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 可操作类型
   * @example 编辑
   */
  operation?: [];
  /**
   * 部门
   * @example 流程信息管理部
   */
  orgName?: string;
  /**
   * 员工Id
   * @example 23423423
   */
  personId?: number;
  /**
   * 员工姓名
   * @example 张大彪
   */
  personName?: string;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
  /**
   * 入职日期
   * @example 2017-12-12
   */
  serviceStartDate?: string;
  /**
   * 小序列
   * @example 开发
   */
  smallSequence?: string;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
  /**
   * 授予状态
   * @example 保存中
   */
  status?: string;
  /**
   * 小层级
   * @example T1
   */
  subLevel?: string;
}

export interface GrantsLogListVo {
  /**
   * 已归属
   * @example
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example
   */
  ascriptionIng?: number;
  /**
   * 归属规则
   * @example
   */
  ascriptionRule?: string;
  /**
   * 取消已归属
   * @example
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example
   */
  cancelAscriIng?: number;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 员工编号
   * @example
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example
   */
  grantDateStr?: string;
  /**
   * 授予类型
   * @example
   */
  grantType?: string;
  /**
   * 授予编号
   * @example
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example
   */
  grantsId?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 离职时间
   * @example
   */
  leaveDate?: string;
  /**
   * 离职日期
   * @example
   */
  leaveDateStr?: string;
  /**
   * 出资期限
   * @example
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example
   */
  moveDate?: string;
  /**
   * 人事变更调出日期
   * @example
   */
  moveDateStr?: string;
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 部门名
   * @example
   */
  orgName?: string;
  /**
   * 员工id
   * @example
   */
  personId?: number;
  /**
   * 员工姓名
   * @example
   */
  personName?: string;
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * 计划名字
   * @example
   */
  planName?: string;
  /**
   * 行权价(SO)/认购价(RS)
   * @example
   */
  price?: number;
  /**
   * 保留已归属
   * @example
   */
  retainAscriEd?: number;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
  /**
   * 授予状态
   * @example
   */
  status?: string;
  /**
   * 当前股价
   * @example
   */
  stockPrice?: number;
}

export interface GrantsQueryInitVo {
  /**
   * 负责角色
   * @example
   */
  createRoleList?: [];
  /**
   * 员工类型
   * @example
   */
  employeeType?: [];
  /**
   * 批量操作按钮
   * @example
   */
  options?: [];
  /**
   * 计划下对应业务线下的部门列表
   * @example
   */
  orgIdList?: [];
  /**
   * 计划结束日期
   * @example
   */
  planEndDate?: string;
  /**
   * 计划开始日期
   * @example
   */
  planStartDate?: string;
  /**
   * 授予角色
   * @example
   */
  soClassList?: [];
  /**
   * 授予状态
   * @example
   */
  statusList?: [];
}

export interface GrantsVo {
  /**
   * 归属明细，SO类型有
   * @example []
   */
  ascriptionList?: [];
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 修改查询时，能够修改的范围标志,rs只有生效前和已生效两种状态
   * @example RS_ADD
   */
  editFlag?: string;
  /**
   * 员工信息
   * @example {}
   */
  employeeVO?: EmployeeVo;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 出资期限，RS类型有
   * @example 2018-01-01
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 计划ID
   * @example 1111
   */
  planId?: number;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
}

export interface GrantsViewLog {
  /**
   * 授予类型
   * @example
   */
  grantType?: string;
  /**
   * 授予编号
   * @example
   */
  grantsCode?: string;
  /**
   * 日志list
   * @example
   */
  logList?: [];
}

export interface JsonResultAgreementViewVo {
  data?: AgreementViewVo;
  errors?: Errors;
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: Warnings;
}

export interface Errors {}

export interface Warnings {}

export interface JsonResultAscriptionVo {
  data?: AscriptionVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultBussLineVo {
  data?: BussLineVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultCabUpdateMoveVo {
  data?: CabUpdateMoveVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultCancelVo {
  data?: CancelVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultDepartmentVo {
  data?: DepartmentVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultGrantsVo {
  data?: GrantsVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultGrantsViewLog {
  data?: GrantsViewLog;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListAgreementSuggestVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListBussLineSuggestVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListBussOrgLogListVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListCGrantForRsvo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListCGrantForSovo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListDepartmentSimpleVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListDepartmentSuggestVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListEmployeeGrantsVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListEmployeeVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListEsopMenuVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListLogCommonVoLogFreezingPeriodViewVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListLogCommonVoLogPlanViewVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListLogCommonVoLogRightPriceViewVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListLogCommonVoLogStockPriceViewVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListOrgVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListPlanSimpleVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListSoAscriptionSimpleVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListTbcGrantVo {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultListString {
  data?: [];
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultLogPlanPanelVo {
  data?: LogPlanPanelVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultLogPlanPlanViewVo {
  data?: LogPlanPlanViewVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultLogQueryInitVo {
  data?: LogQueryInitVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMapStringAnalyzeMovePanelVo {
  data?: Data;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface Data {}

export interface JsonResultMapStringAnalyzePanelVo {
  data?: {};
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMapStringAnalyzeQuitPanelVo {
  data?: {};
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMapStringGrantsQueryInitVo {
  data?: {};
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMapStringMovePanelVo {
  data?: {};
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMapStringQuitPanelVo {
  data?: {};
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultMoveCbQueryParams {
  data?: MoveCbQueryParams;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoAgreementVo {
  data?: PageInfoAgreementVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoBussLineVo {
  data?: PageInfoBussLineVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoDepartmentVo {
  data?: PageInfoDepartmentVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoFreezingPeriodQueryVo {
  data?: PageInfoFreezingPeriodQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoGrantsListVo {
  data?: PageInfoGrantsListVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoGrantsLogListVo {
  data?: PageInfoGrantsLogListVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoLogPlanQueryVo {
  data?: PageInfoLogPlanQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoMoveCbQueryVo {
  data?: PageInfoMoveCbQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoMoveRsAnlyVo {
  data?: PageInfoMoveRsAnlyVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoMoveRsQueryVo {
  data?: PageInfoMoveRsQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoMoveSoAnlyVo {
  data?: PageInfoMoveSoAnlyVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoMoveSoQueryVo {
  data?: PageInfoMoveSoQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoPlanQueryVo {
  data?: PageInfoPlanQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoQuitRsAnlyVo {
  data?: PageInfoQuitRsAnlyVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoQuitRsQueryVo {
  data?: PageInfoQuitRsQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoQuitSoAnlyVo {
  data?: PageInfoQuitSoAnlyVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoQuitSoQueryVo {
  data?: PageInfoQuitSoQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoRightPriceQueryVo {
  data?: PageInfoRightPriceQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoStockOwnVo {
  data?: PageInfoStockOwnVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPageInfoStockPriceQueryVo {
  data?: PageInfoStockPriceQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPlanPanelVo {
  data?: PlanPanelVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultPlanViewVo {
  data?: PlanViewVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultQuitDeduDetailVo {
  data?: QuitDeduDetailVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultRsAscriptionVo {
  data?: RsAscriptionVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultRightPriceQueryVo {
  data?: RightPriceQueryVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultStockUseSimpleInfoVo {
  data?: StockUseSimpleInfoVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultTbcGrantBeforeVo {
  data?: TbcGrantBeforeVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultUserVo {
  data?: UserVo;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultVoid {
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultBoolean {
  data?: boolean;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultInt {
  data?: number;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultLong {
  data?: number;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface JsonResultString {
  data?: string;
  errors?: {};
  /**
   * 话术
   * @example 系统异常/操作成功
   */
  message?: string;
  /**
   * 状态code
   * @example ok
   */
  status?: string;
  warnings?: {};
}

export interface LogCommonVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface LogCommonVoLogFreezingPeriodViewVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface LogCommonVoLogPlanViewVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface LogCommonVoLogRightPriceViewVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface LogCommonVoLogStockPriceViewVo {
  /**
   * 日志详情
   * @example
   */
  logs?: [];
  /**
   * 操作人信息
   * @example
   */
  operation?: EmployeeVo;
  /**
   * 操作类型
   * @example CREATE
   */
  operationCode?: string;
  /**
   * 操作日期
   * @example 2018-01-02 11:11:11
   */
  operationDate?: string;
  /**
   * 操作描述
   * @example 本次操作对XX做了XX修改
   */
  operationMsg?: string;
}

export interface LogFreezingPeriodViewVo {
  /**
   * 备注
   * @example 冻结2周，授予停止
   */
  comments?: string;
  /**
   * 冻结结束日期
   * @example 2018-02-04
   */
  endDate?: string;
  /**
   * 日志ID
   * @example 11111
   */
  logId?: number;
  /**
   * 老值或新值
   * @example
   */
  oldOrNew?: string;
  /**
   * 冻结开始日期
   * @example 2018-02-03
   */
  startDate?: string;
}

export interface LogPlanPanelVo {
  /**
   * 状态
   * @example
   */
  status?: [];
}

export interface LogPlanPlanViewVo {
  /**
   * 协议id
   * @example
   */
  agreeId?: number;
  /**
   * 业务线id
   * @example
   */
  bussLineId?: number;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 备注
   * @example 激励效果非常好，继续保持
   */
  comments?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBp
   * @example
   */
  leadingBp?: [];
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
  /**
   * 计划状态
   * @example FINISH
   */
  status?: string;
}

export interface LogPlanQueryDto {
  /**
   * 业务线id
   * @example 11111
   */
  bussLineId?: number;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 开始日期左边界
   * @example 2017-02-08
   */
  planStartDateLeft?: string;
  /**
   * 开始日期右边界
   * @example 2017-12-08
   */
  planStartDateRight?: string;
  /**
   * 状态
   * @example
   */
  status?: [];
}

export interface LogPlanQueryVo {
  /**
   * 业务线名称
   * @example 业务线名称
   */
  bussLineName?: string;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 是否已冻结
   * @example Y
   */
  freezing?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBp
   * @example
   */
  leadingBp?: [];
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
  /**
   * 状态
   * @example status
   */
  status?: string;
}

export interface LogPlanViewVo {
  /**
   * 协议名称
   * @example
   */
  agreeName?: string;
  /**
   * 业务线名称
   * @example
   */
  bussLineName?: string;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 备注
   * @example 激励效果非常好，继续保持
   */
  comments?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBp
   * @example
   */
  leadingBp?: [];
  /**
   * 日志ID
   * @example 11111
   */
  logId?: number;
  /**
   * 老值还是新值
   * @example
   */
  oldOrNew?: string;
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
}

export interface LogQueryInitVo {
  /**
   * 授予结束日期
   * @example
   */
  grantEndDate?: string;
  /**
   * 授予开始日期
   * @example
   */
  grantStartDate?: string;
  /**
   * 授予类型
   * @example
   */
  grantTypeList?: [];
  /**
   * 计划下对应业务线下的部门列表
   * @example
   */
  orgIdList?: [];
  /**
   * 计划列表
   * @example
   */
  planList?: [];
  /**
   * rs授予状态
   * @example
   */
  rsStatusList?: [];
  /**
   * so授予状态
   * @example
   */
  soStatusList?: [];
}

export interface LogRightPriceViewVo {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 日志ID
   * @example 11111
   */
  logId?: number;
  /**
   * 老值或新值
   * @example
   */
  oldOrNew?: string;
  /**
   * RS/SO价格/股
   * @example 160.33
   */
  price?: string;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
}

export interface LogStockPriceViewVo {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 日志ID
   * @example 11111
   */
  logId?: number;
  /**
   * 老值或新值
   * @example
   */
  oldOrNew?: string;
  /**
   * 股价
   * @example 160.33
   */
  price?: string;
  /**
   * 发布日期
   * @example 2018-12-02
   */
  publishDate?: string;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
}

export interface MapStringAnalyzeMovePanelVo {}

export interface MapStringAnalyzePanelVo {}

export interface MapStringAnalyzeQuitPanelVo {}

export interface MapStringGrantsQueryInitVo {}

export interface MapStringMovePanelVo {}

export interface MapStringQuitPanelVo {}

export interface MoveAnalyzeDto {
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatusSet?: [];
  /**
   * 授予处理调出开始时间
   * @example 2017-11-11
   */
  grantDateLeft?: string;
  /**
   * 授予处理调出结束时间
   * @example 2017-12-11
   */
  grantDateRight?: string;
  /**
   * 授予状态
   * @example 授予状态
   */
  grantStatusSet?: [];
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
  /**
   * 退款状态 RS 才有
   * @example
   */
  paymentStatus?: [];
  /**
   * personId
   * @example 员工ID
   */
  personId?: number;
  /**
   * 人事变更调出结束时间
   * @example 2017-12-11
   */
  personMoveEndDate?: string;
  /**
   * 人事变更调出开始时间
   * @example 2017-11-11
   */
  personMoveStartDate?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
}

export interface MoveCbListDto {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   */
  moveDateLeft?: string;
  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   */
  moveDateRight?: string;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 计划id或者全选
   * @example 1111
   */
  planId?: string;
  /**
   * 员工/授予ID
   * @example 11111
   */
  suggestId?: number;
  /**
   * 员工/授予code
   * @example employee
   */
  suggestType?: string;
}

export interface MoveCbPanelVo {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   */
  moveDateLeft?: string;
  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   */
  moveDateRight?: string;
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
}

export interface MoveCbQueryDto {
  moveDeduId?: number;
}

export interface MoveCbQueryParams {
  panelMap?: PanelMap;
  planList?: [];
}

export interface MoveCbQueryVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 归属规则
   * @example 特殊规则
   */
  ascriptionRule?: string;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工信息
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 调出扣减id
   * @example 1111
   */
  moveDeduId?: number;
  /**
   * 新部门
   * @example 渡鸦
   */
  newOrgName?: string;
  /**
   * 原部门
   * @example 流程信息
   */
  oldOrgName?: string;
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 付款状态
   * @example 付款状态
   */
  paymentStatus?: string;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 出资本金/股
   * @example 1212.12
   */
  price?: number;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: number;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface MoveCbUpdateDto {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 调出扣减id
   * @example 1111
   */
  moveDeduId?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
}

export interface MovePanelVo {
  /**
   * 授予负责角色/授予创建角色
   * @example
   */
  creatRole?: [];
  /**
   * 扣减状态
   * @example
   */
  deduStatus?: [];
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   */
  moveDateLeft?: string;
  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   */
  moveDateRight?: string;
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 授予状态
   * @example
   */
  status?: [];
}

export interface MoveRsAnlyVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工姓名
   * @example
   */
  employeeName?: string;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予状态
   * @example 授予状态
   */
  grantStatus?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 员工id
   * @example 页面不显示
   */
  moveDeduId?: number;
  /**
   * 新部门
   * @example 渡鸦
   */
  newOrgName?: string;
  /**
   * 原部门
   * @example 流程信息
   */
  oldOrgName?: string;
  /**
   * 付款状态
   * @example 付款状态
   */
  paymentStatus?: string;
  /**
   * 员工id
   * @example 页面不显示
   */
  personId?: number;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 认购价/股
   * @example 1212.12
   */
  price?: number;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: number;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
}

export interface MoveRsQueryDto {
  /**
   * 授予负责角色
   * @example
   */
  creatRole?: [];
  /**
   * 扣减状态
   * @example
   */
  deduStatus?: [];
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 人事变更调出时间左边界
   * @example 2018-01-03
   */
  moveDateLeft?: string;
  /**
   * 人事变更调出时间右边界
   * @example 2018-01-03
   */
  moveDateRight?: string;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 计划id
   * @example 1111
   */
  planId?: number;
  /**
   * 授予状态
   * @example
   */
  status?: [];
  /**
   * 员工/授予ID
   * @example 11111
   */
  suggestId?: number;
  /**
   * 员工/授予code
   * @example employee
   */
  suggestType?: string;
}

export interface MoveRsQueryVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 调出扣减id
   * @example 1111
   */
  moveDeduId?: number;
  /**
   * 新部门
   * @example 渡鸦
   */
  newOrgName?: string;
  /**
   * 原部门
   * @example 流程信息
   */
  oldOrgName?: string;
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 付款状态
   * @example 付款状态
   */
  paymentStatus?: string;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 认购价/股
   * @example 1212.12
   */
  price?: string;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: string;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: string;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface MoveSoAnlyVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工姓名
   * @example
   */
  employeeName?: string;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予状态
   * @example 授予状态
   */
  grantStatus?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 新部门
   * @example 渡鸦
   */
  newOrgName?: string;
  /**
   * 原部门
   * @example 流程信息
   */
  oldOrgName?: string;
  /**
   * personId
   * @example 前端不显示
   */
  personId?: number;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 认购价/股
   * @example 1212.12
   */
  price?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
}

export interface MoveSoQueryDto {
  /**
   * 授予负责角色
   * @example
   */
  creatRole?: [];
  /**
   * 扣减状态
   * @example
   */
  deduStatus?: [];
  /**
   * 授予日期左边界
   * @example 2018-02-02
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-02-02
   */
  grantDateRight?: string;
  /**
   * 人事变更调出时间左边界
   * @example 2018-02-02
   */
  moveDateLeft?: string;
  /**
   * 人事变更调出时间右边界
   * @example 2018-02-02
   */
  moveDateRight?: string;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划id
   * @example 1111
   */
  planId?: number;
  /**
   * 授予状态
   * @example
   */
  status?: [];
  /**
   * 员工/授予ID
   * @example 11111
   */
  suggestId?: number;
  /**
   * 员工/授予code
   * @example employee
   */
  suggestType?: string;
}

export interface MoveSoQueryVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example 2018-02-02
   */
  moveDate?: string;
  /**
   * 调出扣减id
   * @example 1111
   */
  moveDeduId?: number;
  /**
   * 新部门
   * @example 渡鸦
   */
  newOrgName?: string;
  /**
   * 原部门
   * @example 流程信息
   */
  oldOrgName?: string;
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 行权价/股
   * @example 1212.12
   */
  price?: string;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface OrgVo {
  /**
   * 部门id
   * @example 1111
   */
  orgId?: number;
  /**
   * 部门名称
   * @example 流程信息管理部
   */
  orgName?: string;
}

export interface PageInfoAgreementVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoBussLineVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoDepartmentVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoFreezingPeriodQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoGrantsListVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoGrantsLogListVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoLogPlanQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoMoveCbQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoMoveRsAnlyVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoMoveRsQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoMoveSoAnlyVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoMoveSoQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoPlanQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoQuitRsAnlyVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoQuitRsQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoQuitSoAnlyVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoQuitSoQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoRightPriceQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoStockOwnVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PageInfoStockPriceQueryVo {
  endRow?: number;
  firstPage?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  lastPage?: number;
  list?: [];
  navigateFirstPage?: number;
  navigateLastPage?: number;
  navigatePages?: number;
  navigatepageNums?: [];
  nextPage?: number;
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  prePage?: number;
  size?: number;
  startRow?: number;
  total?: number;
}

export interface PlanNameCodeCheckDto {
  /**
   * 计划id
   * @example 111
   */
  planId?: number;
  /**
   * code/name
   * @example A11/渡鸦计划2017
   */
  value?: string;
}

export interface PlanPanelVo {
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 开始日期左边界
   * @example 2017-02-08
   */
  planStartDateLeft?: string;
  /**
   * 开始日期右边界
   * @example 2017-12-08
   */
  planStartDateRight?: string;
  /**
   * 状态
   * @example
   */
  status?: [];
}

export interface PlanQueryDto {
  /**
   * 业务线id
   * @example 11111
   */
  bussLineId?: number;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 开始日期左边界
   * @example 2017-02-08
   */
  planStartDateLeft?: string;
  /**
   * 开始日期右边界
   * @example 2017-12-08
   */
  planStartDateRight?: string;
  /**
   * 状态
   * @example
   */
  status?: [];
}

export interface PlanQueryVo {
  /**
   * 业务线名称
   * @example 业务线名称
   */
  bussLineName?: string;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 是否已冻结
   * @example Y
   */
  freezing?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBp
   * @example
   */
  leadingBp?: [];
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
  /**
   * 状态
   * @example status
   */
  status?: string;
}

export interface PlanReleaseDto {
  /**
   * 协议
   * @example
   */
  agreeId?: number;
  /**
   * 业务线
   * @example
   */
  bussLineId?: number;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 备注
   * @example 激励效果非常好，继续保持
   */
  comments?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBpIdStr
   * @example
   */
  leadingBp?: [];
  /**
   * 计划Code
   * @example A123
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
}

export interface PlanSaveDto {
  /**
   * 协议
   * @example
   */
  agreeId?: number;
  /**
   * 业务线
   * @example
   */
  bussLineId?: number;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 备注
   * @example 激励效果非常好，继续保持
   */
  comments?: string;
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBpIdStr
   * @example
   */
  leadingBp?: [];
  /**
   * 计划Code
   * @example A123
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID，有表示更新，无表示创建
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
}

export interface PlanSimpleVo {
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
}

export interface PlanViewVo {
  /**
   * 协议id
   * @example
   */
  agreeId?: number;
  /**
   * 业务线id
   * @example
   */
  bussLineId?: number;
  /**
   * 业务负责人
   * @example
   */
  bussManager?: [];
  /**
   * 备注
   * @example 激励效果非常好，继续保持
   */
  comments?: string;
  edit?: {};
  /**
   * HRBP
   * @example
   */
  hrbp?: [];
  /**
   * leadingBp
   * @example
   */
  leadingBp?: [];
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 计划Code
   * @example planCode
   */
  planCode?: string;
  /**
   * 结束日期
   * @example 2018-12-02
   */
  planEndDate?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 起始日期
   * @example 2018-01-02
   */
  planStartDate?: string;
  /**
   * RS总份额
   * @example 1200
   */
  rsTotal?: number;
  /**
   * SO总份额
   * @example 1200
   */
  soTotal?: number;
  /**
   * 计划状态
   * @example FINISH
   */
  status?: string;
}

export interface PriceQueryDto {
  dateStr?: string;
  grantType?: string;
  planId?: number;
}

export interface QuitAnalyzeDto {
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
  /**
   * 付款状态 RS 才有
   * @example
   */
  paymentStatus?: [];
  /**
   * personId
   * @example 11
   */
  personId?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 离职日期截止时间
   * @example 授予Id/员工ID
   */
  quitDateEnd?: string;
  /**
   * 离职日期起始时间
   * @example 授予Id/员工ID
   */
  quitDateStart?: string;
}

export interface QuitDeduDetailVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 是否可编辑
   * @example Y
   */
  editFlag?: string;
  /**
   * 员工
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 退款状态
   * @example 退款状态
   */
  paymentStatus?: string;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 认购价/股
   * @example 1212.12
   */
  price?: string;
  /**
   * 离职日期
   * @example 2018-02-02
   */
  quitDate?: string;
  /**
   * 离职扣减id
   * @example 1111
   */
  quitDeduId?: number;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: string;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: string;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface QuitModifyDto {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 离职扣减ID
   * @example 1111
   */
  quitDeduId?: number;
  /**
   * 退款股数
   * @example 10
   */
  refundNumber?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
}

export interface QuitPanelVo {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 操作列表
   * @example
   */
  operation?: [];
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 离职日期左边界
   * @example 2018-01-03
   */
  quitDateLeft?: string;
  /**
   * 离职日期右边界
   * @example 2018-01-03
   */
  quitDateRight?: string;
}

export interface QuitRsAnlyVo {
  /**
   * 离职日期
   * @example 2017-12-12
   */
  actualTerminationDate?: string;
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 部门Id
   * @example 前端不显示
   */
  orgId?: number;
  /**
   * 部门
   * @example 流程信息管理部
   */
  orgName?: string;
  paymentStatus?: string;
  /**
   * personId
   * @example 前端不显示
   */
  personId?: number;
  /**
   * 员工姓名
   * @example 张大彪
   */
  personName?: string;
  /**
   * 计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 退款金额
   * @example 1111
   */
  refundMoney?: number;
  /**
   * 退款股数
   * @example 1111
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 1111
   */
  refundPrice?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 入职日期
   * @example 2017-12-12
   */
  serviceStartDate?: string;
}

export interface QuitRsQueryDto {
  /**
   * 授予日期左边界
   * @example 2018-01-03
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-01-03
   */
  grantDateRight?: string;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 付款状态
   * @example
   */
  paymentStatus?: [];
  /**
   * 计划id
   * @example 1111
   */
  planId?: number;
  /**
   * 离职时间左边界
   * @example 2018-01-03
   */
  quitDateLeft?: string;
  /**
   * 离职时间右边界
   * @example 2018-01-03
   */
  quitDateRight?: string;
  /**
   * 员工/授予ID
   * @example 11111
   */
  suggestId?: number;
  /**
   * 员工/授予code
   * @example employee
   */
  suggestType?: string;
}

export interface QuitRsQueryVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 退款状态
   * @example 退款状态
   */
  paymentStatus?: string;
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 认购价/股
   * @example 1212.12
   */
  price?: string;
  /**
   * 离职日期
   * @example 2018-02-02
   */
  quitDate?: string;
  /**
   * 离职扣减id
   * @example 1111
   */
  quitDeduId?: number;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: string;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: string;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface QuitSoAnlyVo {
  /**
   * 离职日期
   * @example 2017-12-12
   */
  actualTerminationDate?: string;
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 员工编号
   * @example B1111
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 部门Id
   * @example 前端不显示
   */
  orgId?: number;
  /**
   * 部门
   * @example 流程信息管理部
   */
  orgName?: string;
  /**
   * 员工id
   * @example
   */
  personId?: number;
  /**
   * 员工姓名
   * @example 张大彪
   */
  personName?: string;
  /**
   * 计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 退款金额
   * @example 退款金额
   */
  refundMoney?: number;
  /**
   * 退款股数
   * @example 退款股数
   */
  refundNumber?: number;
  /**
   * 退款股价
   * @example 退款股价
   */
  refundPrice?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 入职日期
   * @example 2017-12-12
   */
  serviceStartDate?: string;
}

export interface QuitSoQueryDto {
  /**
   * 授予日期左边界
   * @example 2018-02-02
   */
  grantDateLeft?: string;
  /**
   * 授予日期右边界
   * @example 2018-02-02
   */
  grantDateRight?: string;
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划id
   * @example 1111
   */
  planId?: number;
  /**
   * 离职时间左边界
   * @example 2018-02-02
   */
  quitDateLeft?: string;
  /**
   * 离职时间右边界
   * @example 2018-02-02
   */
  quitDateRight?: string;
  /**
   * 员工/授予ID
   * @example 11111
   */
  suggestId?: number;
  /**
   * 员工/授予code
   * @example employee
   */
  suggestType?: string;
}

export interface QuitSoQueryVo {
  /**
   * 已归属
   * @example 111
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example 1111
   */
  ascriptionIng?: number;
  /**
   * 取消已归属
   * @example 1111
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example 1111
   */
  cancelAscriIng?: number;
  /**
   * 备注
   * @example 备注
   */
  comments?: string;
  /**
   * 扣减状态
   * @example 扣减状态
   */
  deduStatus?: string;
  /**
   * 员工
   * @example
   */
  employee?: EmployeeVo;
  /**
   * 授予数量
   * @example 1111
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-02-02
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型
   */
  grantType?: string;
  /**
   * 授予编号
   * @example code
   */
  grantsCode?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 虚拟股权计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 行权价/股
   * @example 1212.12
   */
  price?: string;
  /**
   * 离职日期
   * @example 2018-02-02
   */
  quitDate?: string;
  /**
   * 离职扣减id
   * @example 1111
   */
  quitDeduId?: number;
  /**
   * 保留已归属
   * @example 1111
   */
  retainAscriEd?: number;
  /**
   * 授予状态
   * @example 授予状态
   */
  status?: string;
}

export interface RsAscrUpdateDto {
  ascrList?: [];
  grantsId?: number;
}

export interface RsAscriptionDto {
  /**
   * 归属日期
   * @example 2018-01-01
   */
  ascrDate?: string;
  /**
   * 归属Id
   * @example 1111
   */
  ascrId?: number;
  /**
   * 归属数量
   * @example 1000
   */
  ascrNumber?: number;
  /**
   * 备注
   * @example XX
   */
  comments?: string;
}

export interface RsAscriptionSimpleVo {
  /**
   * 归属日期
   * @example 2018-01-01
   */
  ascrDate?: string;
  /**
   * 归属Id
   * @example 1111
   */
  ascrId?: number;
  /**
   * 归属数量
   * @example 1000
   */
  ascrNumber?: number;
  /**
   * 备注
   * @example XX
   */
  comments?: string;
  /**
   * 归属规则修改标志
   * @example true
   */
  editFlag?: boolean;
  /**
   * 授予ID
   * @example 11111
   */
  grantsId?: number;
}

export interface RsAscriptionVo {
  /**
   * 员工信息
   * @example {}
   */
  employeeVO?: EmployeeVo;
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予code
   * @example WSSO1000
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1000
   */
  grantsId?: number;
  /**
   * 未归属数量
   * @example 2500
   */
  nonAscrAmount?: number;
  /**
   * 计划名称
   * @example 度秘
   */
  planName?: string;
  /**
   * 归属明细和是否可以修改标志
   * @example []
   */
  rsAscrList?: [];
}

export interface RsFullAscrDto {
  /**
   * 归属日期
   * @example 2017-12-10
   */
  ascrDate?: string;
  /**
   * 授予id列表
   * @example []
   */
  codes?: [];
}

export interface RightPriceQueryDto {
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 股权类型（不需要传参）
   * @example SO
   */
  type?: string;
}

export interface RightPriceQueryVo {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 编辑
   * @example
   */
  edit?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * RS/SO价格/股
   * @example 160.33
   */
  price?: string;
  /**
   * 行权价/认购价的ID
   * @example 11111
   */
  rightPriceId?: number;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
}

export interface RightPriceSaveDto {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * RS/SO价格/股
   * @example 160.33
   */
  price?: string;
  /**
   * 行权价/认购价的ID
   * @example 11111
   */
  rightPriceId?: number;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
  /**
   * 股权类型（不需要传参）
   * @example SO
   */
  type?: string;
}

export interface SoAscriptionSimpleVo {
  /**
   * 归属日期
   * @example 2018-01-01
   */
  ascrDate?: string;
  /**
   * 归属规则Id
   * @example 100001
   */
  ascrId?: number;
  /**
   * 归属数量
   * @example 1000
   */
  ascrNumber?: number;
  /**
   * 归属规则修改标志
   * @example true
   */
  editFlag?: boolean;
  /**
   * 授予Id
   * @example 100001
   */
  grantsId?: number;
}

export interface StockOwnQueryDto {
  /**
   * 员工类型
   * @example []
   */
  employeeType?: [];
  /**
   * 授予结束日期
   * @example 2018-01-25 12:23:12
   */
  grantEndDate?: string;
  /**
   * 授予开始日期
   * @example 2018-01-22 12:23:12
   */
  grantStartDate?: string;
  /**
   * 授予类型
   * @example SO/RS
   */
  grantType?: string;
  /**
   * 部门ID
   * @example
   */
  orgIdList?: [];
  /**
   * 第几页
   * @example 1
   */
  pageNum?: number;
  /**
   * 每页大小
   * @example 5
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * 授予角色
   * @example
   */
  soClassList?: [];
  /**
   * 授予状态
   * @example
   */
  statusList?: [];
  /**
   * suggestId
   * @example 1111
   */
  suggestId?: number;
  /**
   * suggest类型
   * @example grants
   */
  suggestType?: string;
}

export interface StockOwnVo {
  /**
   * 已归属
   * @example
   */
  ascriptionEd?: number;
  /**
   * 未归属
   * @example
   */
  ascriptionIng?: number;
  /**
   * 归属规则
   * @example
   */
  ascriptionRule?: string;
  /**
   * 取消已归属
   * @example
   */
  cancelAscriEd?: number;
  /**
   * 取消未归属
   * @example
   */
  cancelAscriIng?: number;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 员工编号
   * @example
   */
  employeeNumber?: string;
  /**
   * 授予数量
   * @example
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example
   */
  grantDateStr?: string;
  /**
   * 授予类型
   * @example
   */
  grantType?: string;
  /**
   * 授予编号
   * @example
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example
   */
  grantsId?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 离职时间
   * @example
   */
  leaveDate?: string;
  /**
   * 离职日期
   * @example
   */
  leaveDateStr?: string;
  /**
   * 出资期限
   * @example
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 人事变更调出时间
   * @example
   */
  moveDate?: string;
  /**
   * 人事变更调出日期
   * @example
   */
  moveDateStr?: string;
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 部门名
   * @example
   */
  orgName?: string;
  /**
   * 员工id
   * @example
   */
  personId?: number;
  /**
   * 员工姓名
   * @example
   */
  personName?: string;
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * 计划名字
   * @example
   */
  planName?: string;
  /**
   * 行权价(SO)/认购价(RS)
   * @example
   */
  price?: number;
  /**
   * 保留已归属
   * @example
   */
  retainAscriEd?: number;
  /**
   * 授予角色
   * @example XX
   */
  soClass?: string;
  /**
   * 授予状态
   * @example
   */
  status?: string;
  /**
   * 当前股价
   * @example
   */
  stockPrice?: number;
}

export interface StockPriceQueryDto {
  /**
   * 页码
   * @example 2
   */
  pageNum?: number;
  /**
   * 最大条数
   * @example 20
   */
  pageSize?: number;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
}

export interface StockPriceQueryVo {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 编辑
   * @example
   */
  edit?: {};
  /**
   * 操作列表
   * @example
   */
  operations?: [];
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 股价
   * @example 160.33
   */
  price?: string;
  /**
   * 股价ID
   * @example 11111
   */
  priceId?: number;
  /**
   * 发布日期
   * @example 2018-12-02
   */
  publishDate?: string;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
}

export interface StockSaveDto {
  /**
   * 备注
   * @example 涨势喜人
   */
  comments?: string;
  /**
   * 计划ID
   * @example 11111
   */
  planId?: number;
  /**
   * 股价
   * @example 160.33
   */
  price?: string;
  /**
   * 股价ID
   * @example 11111
   */
  priceId?: number;
  /**
   * 发布日期
   * @example 2018-12-02
   */
  publishDate?: string;
  /**
   * 生效日期
   * @example 2018-01-02
   */
  startDate?: string;
}

export interface StockSimpleVo {
  /**
   * 已作废股票
   * @example
   */
  abolished?: number;
  /**
   * 股票总份额
   * @example
   */
  total?: number;
  /**
   * 股票类型
   * @example
   */
  type?: string;
  /**
   * 未使用股票(包含还在池子里没动的以及处于草稿状态的)
   * @example
   */
  unused?: number;
  /**
   * 已使用股票
   * @example
   */
  used?: number;
}

export interface StockUseInfoDto {
  /**
   * 计划ID
   * @example
   */
  planId?: number;
}

export interface StockUseSimpleInfoVo {
  freeze?: boolean;
  /**
   * 计划ID
   * @example
   */
  planId?: number;
  /**
   * rs股票使用情况
   * @example
   */
  rs?: StockSimpleVo;
  /**
   * so股票使用情况
   * @example
   */
  so?: StockSimpleVo;
}

export interface SuggestDto {
  /**
   * keyword
   * @example xx
   */
  keyword?: string;
  /**
   * 限制条数
   * @example 20
   */
  limit?: number;
}

export interface TbcGrantBeforeVo {
  /**
   * 协议ID
   * @example 1111
   */
  agreeId?: number;
  /**
   * 协议富文本内容
   * @example 1111
   */
  contents?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 计划ID
   * @example 1111
   */
  planId?: number;
  /**
   * 计划名字
   * @example 涂鸦科技
   */
  planName?: string;
}

export interface TbcGrantVo {
  /**
   * 协议ID
   * @example 1111
   */
  agreeId?: number;
  /**
   * 创建者ID
   * @example 12
   */
  createdBy?: number;
  /**
   * 创建者
   * @example 逍遥子
   */
  createdByName?: string;
  /**
   * 创建时间
   * @example 2018-01-19
   */
  creationDate?: Timestamp;
  /**
   * 属性是否可以编辑
   * @example {"attribute1":"N","attribute2":"Y"}
   */
  edit?: {};
  /**
   * 授予数量
   * @example 10000
   */
  grantAmount?: number;
  /**
   * 授予日期
   * @example 2018-01-22
   */
  grantDate?: string;
  /**
   * 授予类型
   * @example 授予类型CODE RS/SO
   */
  grantType?: string;
  /**
   * 授予编号
   * @example RSDM000001
   */
  grantsCode?: string;
  /**
   * 授予ID
   * @example 1111
   */
  grantsId?: number;
  /**
   * 修改时间
   * @example
   */
  lastUpdateDate?: Timestamp;
  /**
   * 修改者ID
   * @example 23
   */
  lastUpdatedBy?: number;
  /**
   * 修改者
   * @example 杨铁心
   */
  lastUpdatedByName?: string;
  /**
   * 出资期限
   * @example 2018-07-01
   */
  limitDate?: string;
  /**
   * 国际化
   * @example
   */
  map?: {};
  /**
   * 操作列所有需要显示的按钮
   * @example ["SAVE"]
   */
  operations?: [];
  /**
   * 计划ID
   * @example 1111
   */
  planId?: number;
  /**
   * 计划名称
   * @example 渡鸦计划
   */
  planName?: string;
  /**
   * 行权价/股 出资本金/股
   * @example 1
   */
  price?: number;
}

export interface Timestamp {
  date?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  month?: number;
  nanos?: number;
  seconds?: number;
  time?: number;
  timezoneOffset?: number;
  year?: number;
}

export interface UserVo {
  personId?: number;
  personName?: string;
}

export interface PanelMap {}
