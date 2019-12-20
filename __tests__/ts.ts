export interface AcceptGrantDto {
  /**
   * 授予ID
   */
  grantsId: number;
}

export interface AgreementQueryDto {
  language: string;
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
}

export interface AgreementSuggestVo {
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 协议名字
   */
  agreeName: string;
  /**
   * 协议code
   */
  agreeNum: string;
}

export interface AgreementUpdateDto {
  /**
   * 英文协议内容
   */
  agreeContentUs: string;
  /**
   * 中文协议内容
   */
  agreeContentZh: string;
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 协议名称
   */
  agreeName: string;
  signCodeEn: string;
  signCodeZh: string;
}

export interface AgreementVo {
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 协议名称
   */
  agreeName: string;
  /**
   * 协议编号
   */
  agreeNum: string;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  edit: Edit;
  /**
   * 授予类型
   */
  esopType: string;
  /**
   * 是否已经上传签字页
   */
  isSignPage: string;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  map: Map;
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划状态
   */
  planStatus: string;
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
   */
  agreeContentUs: string;
  /**
   * 英文协议内容
   */
  agreeContentZh: string;
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 协议名称
   */
  agreeName: string;
  /**
   * 协议编号
   */
  agreeNum: string;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 授予类型
   */
  esopType: string;
  /**
   * 是否已上传英文协议签字页
   */
  hasSignCodeUs: string;
  /**
   * 是否已上传中文协议签字页
   */
  hasSignCodeZh: string;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 英文协议签字页名字
   */
  signPageNameUs: string;
  /**
   * 中文协议签字页名字
   */
  signPageNameZh: string;
}

export interface AnalyzeMovePanelVo {
  /**
   * 扣减状态
   */
  deductionStatus: [];
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 授予处理调出结束时间
   */
  grantMoveEndDate: string;
  /**
   * 授予处理调出开始时间
   */
  grantMoveStartDate: string;
  /**
   * 授予状态
   */
  grantStatus: [];
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 操作角色
   */
  operationRole: [];
  /**
   * 退款状态
   */
  paymentStatus: [];
  /**
   * 人事变更调出结束时间
   */
  personMoveEndDate: string;
  /**
   * 人事变更调出开始时间
   */
  personMoveStartDate: string;
}

export interface AnalyzePanelVo {
  /**
   * 员工类型
   */
  employeeType: [];
  /**
   * 授予编号
   */
  grantCode: string;
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 授予负责角色/授予创建角色
   */
  grantRole: [];
  /**
   * 授予状态
   */
  grantStatus: [];
  /**
   * 操作列表
   */
  operation: [];
}

export interface AnalyzeQuitPanelVo {
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 操作角色
   */
  operationRole: [];
  /**
   * 退款状态
   */
  paymentStatus: [];
  /**
   * 离职日期截止时间
   */
  quitDateEnd: string;
  /**
   * 离职日期起始时间
   */
  quitDateStart: string;
}

export interface AscrRuleDto {
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
}

export interface AscriptionInfoVo {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 是否已归属
   */
  ascrFlag: string;
  /**
   * 归属数量
   */
  ascrNumber: number;
  /**
   * 归属ID
   */
  ascriptionId: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 国际化
   */
  map: {};
}

export interface AscriptionSimpleVo {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 归属数量
   */
  ascrNumber: number;
  /**
   * 归属规则修改标志
   */
  editFlag: boolean;
}

export interface AscriptionVo {
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 归属明细
   */
  rsAscrList: [];
}

export interface BussLineCreateDto {
  /**
   * 业务线名字
   */
  bussLineName: string;
  /**
   * 备注
   */
  comments: string;
  /**
   * Leading BP/HRBP
   */
  leadingBp: [];
  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布)),默认为”保存“操作
   */
  operationCode: string;
}

export interface BussLineOrgCreateDto {
  /**
   * 业务线ID
   */
  bussLineId: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 部門ID
   */
  orgId: number;
  /**
   * 部門名字
   */
  orgName: string;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface BussLineOrgQueryDto {
  /**
   * 业务线id
   */
  bussLineId: number;
  /**
   * 标志位（大于0有效部门，小于0无效部门，等于0所有部门）
   */
  flag: number;
  /**
   * 部门名称
   */
  orgName: string;
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
}

export interface BussLineOrgUpdateDto {
  /**
   * 部門ID
   */
  bussOrgId: number;
  /**
   * 備註
   */
  comments: string;
  /**
   * 部門失效日期
   */
  endDate: string;
  /**
   * 部門生效日期
   */
  startDate: string;
}

export interface BussLineQueryTempDto {
  /**
   * 业务线名字
   */
  bussLineName: string;
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
}

export interface BussLineSuggestVo {
  /**
   * ID
   */
  bussLineId: number;
  /**
   * 业务线名字
   */
  bussLineName: string;
}

export interface BussLineUpdateDto {
  /**
   * 业务线ID
   */
  bussLineId: number;
  /**
   * 业务线名字
   */
  bussLineName: string;
  /**
   * 备注
   */
  comments: string;
  /**
   * Leading BP/HRBP
   */
  leadingBp: [];
  /**
   * 操作类型(SAVE(保存),PUBLISH(保存并发布))
   */
  operationCode: string;
}

export interface BussLineVo {
  /**
   * ID
   */
  bussLineId: number;
  /**
   * 业务线名字
   */
  bussLineName: string;
  /**
   * 备注
   */
  comments: string;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 有效部门数量
   */
  departmentNum: number;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * leadingBpIdStr
   */
  leadingBp: [];
  /**
   * leadingBpIdStr(该字段FE忽略)
   */
  leadingBpIdStr: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 状态
   */
  status: string;
}

export interface BussOrgLogListVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface BussOrgLogVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 原值／新值
   */
  dataFlag: string;
  /**
   *  失效日期
   */
  endDate: string;
  /**
   * 日志id
   */
  logId: number;
  /**
   * 部门名称
   */
  orgName: string;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface CabUpdateMoveVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 员工信息
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
}

export interface CGrantForRsvo {
  /**
   * 已出资金额
   */
  alreadyFound: number;
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 已取消
   */
  canceled: number;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 当前股价
   */
  currentStockPrice: number;
  /**
   * 当前股价生效日期
   */
  currentStockStartDate: string;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 出资期限
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 出资本金/股
   */
  price: number;
}

export interface CGrantForSovo {
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 已取消
   */
  canceled: number;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 当前股价
   */
  currentStockPrice: number;
  /**
   * 当前股价生效日期
   */
  currentStockStartDate: string;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
}

export interface CancelSimpleVo {
  /**
   * 取消时间
   */
  cancelDate: Timestamp;
  /**
   * 取消数量
   */
  cancelNumber: number;
  /**
   * 取消原因
   */
  comments: string;
  /**
   * 国际化
   */
  map: {};
}

export interface CancelVo {
  /**
   * 已经归属
   */
  ascriEd: [];
  /**
   * 未归属
   */
  ascriIng: [];
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 计划名称
   */
  planName: string;
}

export interface CodeAndValueVo {
  /**
   * code
   */
  code: string;
  /**
   * 是否被选中
   */
  selectFlag: string;
  /**
   * value
   */
  value: string;
}

export interface DateCheckDto {
  grantType: string;
  grantsDate: string;
  personId: number;
  planId: number;
}

export interface DepartmentSimpleVo {
  /**
   * 部门ID
   */
  orgId: number;
  /**
   * 部門名字
   */
  orgName: string;
}

export interface DepartmentSuggestVo {
  /**
   * 部门Id
   */
  orgId: number;
  /**
   * 部门名字
   */
  orgName: string;
  /**
   * 计划Id
   */
  planId: number;
}

export interface DepartmentVo {
  /**
   * 业务线ID
   */
  bussLineId: number;
  /**
   * 业务线名字
   */
  bussLineName: string;
  /**
   * ID
   */
  bussOrgId: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 删除日期
   */
  deleteDate: Timestamp;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 删除生效日期
   */
  endDate: string;
  /**
   * 后台使用，前端忽略
   */
  flag: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 部门ID
   */
  orgId: number;
  /**
   * 部門名字
   */
  orgName: string;
  /**
   * 新增生效日期
   */
  startDate: string;
}

export interface EmployeeGrantsDataVo {
  /**
   * 部门名称
   */
  departmentName: string;
  /**
   * 公司邮箱
   */
  email: string;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 员工姓名
   */
  fullName: string;
  /**
   * 服务器ID
   */
  periodOfServiceId: number;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 职位名称
   */
  positionName: string;
  /**
   * 入职日期
   */
  serviceStartDate: string;
  /**
   * id
   */
  suggestId: number;
  /**
   * suggest
   */
  suggestValue: string;
}

export interface EmployeeGrantsVo {
  /**
   * id
   */
  list: [];
  /**
   * 类型，需要回传
   */
  type: string;
}

export interface EmployeeVo {
  /**
   * 部门名称
   */
  departmentName: string;
  /**
   * 公司邮箱
   */
  email: string;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 员工姓名
   */
  fullName: string;
  /**
   * 服务器ID
   */
  periodOfServiceId: number;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 职位名称
   */
  positionName: string;
  /**
   * 入职日期
   */
  serviceStartDate: string;
}

export interface EsopMenuVo {
  /**
   * 应用ID
   */
  appId: number;
  /**
   * 子菜单
   */
  childList: [];
  /**
   * 功能CODE
   */
  funcCode: string;
  /**
   * 功能描述
   */
  funcDesc: string;
  /**
   * 功能名称
   */
  funcName: string;
  /**
   * 功能地址
   */
  resUrl: string;
  /**
   * 职责ID
   */
  respId: number;
  /**
   * 业务组ID
   */
  secGroupId: number;
}

export interface FreezingPeriodQueryDto {
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
}

export interface FreezingPeriodQueryVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 编辑
   */
  edit: {};
  /**
   * 冻结结束日期
   */
  endDate: string;
  /**
   * 冻结设置ID
   */
  freezingId: number;
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 冻结开始日期
   */
  startDate: string;
}

export interface FreezingPeriodSaveDto {
  /**
   * 备注
   */
  comments: string;
  /**
   * 冻结结束日期
   */
  endDate: string;
  /**
   * 冻结设置ID
   */
  freezingId: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 冻结开始日期
   */
  startDate: string;
}

export interface GrantAddDto {
  /**
   * 归属明细，SO类型有
   */
  ascriptionList: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * 是否已经确认
   */
  confirm: boolean;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 出资期限，RS类型有
   */
  limitDate: string;
  /**
   * 员工Id
   */
  personId: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
  /**
   * 提交类型，保存并发布/保存
   */
  saveType: string;
  /**
   * 授予角色
   */
  soClass: string;
}

export interface GrantLogListDto {
  /**
   * 授予结束日期
   */
  grantEndDate: string;
  /**
   * 授予开始日期
   */
  grantStartDate: string;
  /**
   * 授予类型
   */
  grantTypeList: [];
  /**
   * 部门ID
   */
  orgIdList: [];
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 授予状态
   */
  rsStatusList: [];
  /**
   * 授予状态
   */
  soStatusList: [];
  /**
   * suggestId
   */
  suggestId: number;
  /**
   * suggest类型
   */
  suggestType: string;
}

export interface GrantPostDto {
  code: string;
  codes: [];
  confirm: boolean;
}

export interface GrantUpdateDto {
  /**
   * 归属明细，SO类型有
   */
  ascriptionList: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * 是否已经确认
   */
  confirm: boolean;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 出资期限，RS类型有
   */
  limitDate: string;
  /**
   * 员工Id
   */
  personId: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
  /**
   * 提交类型，保存并发布/保存
   */
  saveType: string;
  /**
   * 授予角色
   */
  soClass: string;
}

export interface GrantsListDto {
  /**
   * 负责角色
   */
  createRoleList: [];
  /**
   * 员工类型
   */
  employeeType: [];
  /**
   * 授予日期结束时间
   */
  grantEndDate: string;
  /**
   * 授予日期开始时间
   */
  grantStartDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 计划下对应业务线下的部门列表
   */
  orgIdList: [];
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 授予角色
   */
  soClassList: [];
  /**
   * 授予状态
   */
  statusList: [];
  /**
   * suggestId
   */
  suggestId: number;
  /**
   * suggest类型
   */
  suggestType: string;
}

export interface GrantsListVo {
  /**
   * 归属规则
   */
  ascriptionRule: string;
  /**
   * 备注
   */
  comments: string;
  /**
   * 负责角色
   */
  createRole: string;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期时间戳，后端使用
   */
  grantDate: string;
  /**
   * 授予日期-前端使用
   */
  grantDateStr: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 大层级
   */
  largeLevel: string;
  /**
   * 大序列
   */
  largeSequence: string;
  /**
   * 出资期限
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 可操作类型
   */
  operation: [];
  /**
   * 部门
   */
  orgName: string;
  /**
   * 员工Id
   */
  personId: number;
  /**
   * 员工姓名
   */
  personName: string;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
  /**
   * 入职日期
   */
  serviceStartDate: string;
  /**
   * 小序列
   */
  smallSequence: string;
  /**
   * 授予角色
   */
  soClass: string;
  /**
   * 授予状态
   */
  status: string;
  /**
   * 小层级
   */
  subLevel: string;
}

export interface GrantsLogListVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 归属规则
   */
  ascriptionRule: string;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDateStr: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 离职时间
   */
  leaveDate: string;
  /**
   * 离职日期
   */
  leaveDateStr: string;
  /**
   * 出资期限
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 人事变更调出日期
   */
  moveDateStr: string;
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 部门名
   */
  orgName: string;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 员工姓名
   */
  personName: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名字
   */
  planName: string;
  /**
   * 行权价(SO)/认购价(RS)
   */
  price: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予角色
   */
  soClass: string;
  /**
   * 授予状态
   */
  status: string;
  /**
   * 当前股价
   */
  stockPrice: number;
}

export interface GrantsQueryInitVo {
  /**
   * 负责角色
   */
  createRoleList: [];
  /**
   * 员工类型
   */
  employeeType: [];
  /**
   * 批量操作按钮
   */
  options: [];
  /**
   * 计划下对应业务线下的部门列表
   */
  orgIdList: [];
  /**
   * 计划结束日期
   */
  planEndDate: string;
  /**
   * 计划开始日期
   */
  planStartDate: string;
  /**
   * 授予角色
   */
  soClassList: [];
  /**
   * 授予状态
   */
  statusList: [];
}

export interface GrantsVo {
  /**
   * 归属明细，SO类型有
   */
  ascriptionList: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * 修改查询时，能够修改的范围标志,rs只有生效前和已生效两种状态
   */
  editFlag: string;
  /**
   * 员工信息
   */
  employeeVO: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 出资期限，RS类型有
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
  /**
   * 授予角色
   */
  soClass: string;
}

export interface GrantsViewLog {
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 日志list
   */
  logList: [];
}

export interface JsonResultAgreementViewVo {
  data: AgreementViewVo;
  errors: Errors;
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: Warnings;
}

export interface Errors {}

export interface Warnings {}

export interface JsonResultAscriptionVo {
  data: AscriptionVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultBussLineVo {
  data: BussLineVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultCabUpdateMoveVo {
  data: CabUpdateMoveVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultCancelVo {
  data: CancelVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultDepartmentVo {
  data: DepartmentVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultGrantsVo {
  data: GrantsVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultGrantsViewLog {
  data: GrantsViewLog;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListAgreementSuggestVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListBussLineSuggestVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListBussOrgLogListVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListCGrantForRsvo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListCGrantForSovo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListDepartmentSimpleVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListDepartmentSuggestVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListEmployeeGrantsVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListEmployeeVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListEsopMenuVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListLogCommonVoLogFreezingPeriodViewVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListLogCommonVoLogPlanViewVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListLogCommonVoLogRightPriceViewVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListLogCommonVoLogStockPriceViewVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListOrgVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListPlanSimpleVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListSoAscriptionSimpleVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListTbcGrantVo {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultListString {
  data: [];
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultLogPlanPanelVo {
  data: LogPlanPanelVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultLogPlanPlanViewVo {
  data: LogPlanPlanViewVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultLogQueryInitVo {
  data: LogQueryInitVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMapStringAnalyzeMovePanelVo {
  data: Data;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface Data {}

export interface JsonResultMapStringAnalyzePanelVo {
  data: {};
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMapStringAnalyzeQuitPanelVo {
  data: {};
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMapStringGrantsQueryInitVo {
  data: {};
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMapStringMovePanelVo {
  data: {};
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMapStringQuitPanelVo {
  data: {};
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultMoveCbQueryParams {
  data: MoveCbQueryParams;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoAgreementVo {
  data: PageInfoAgreementVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoBussLineVo {
  data: PageInfoBussLineVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoDepartmentVo {
  data: PageInfoDepartmentVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoFreezingPeriodQueryVo {
  data: PageInfoFreezingPeriodQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoGrantsListVo {
  data: PageInfoGrantsListVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoGrantsLogListVo {
  data: PageInfoGrantsLogListVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoLogPlanQueryVo {
  data: PageInfoLogPlanQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoMoveCbQueryVo {
  data: PageInfoMoveCbQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoMoveRsAnlyVo {
  data: PageInfoMoveRsAnlyVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoMoveRsQueryVo {
  data: PageInfoMoveRsQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoMoveSoAnlyVo {
  data: PageInfoMoveSoAnlyVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoMoveSoQueryVo {
  data: PageInfoMoveSoQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoPlanQueryVo {
  data: PageInfoPlanQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoQuitRsAnlyVo {
  data: PageInfoQuitRsAnlyVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoQuitRsQueryVo {
  data: PageInfoQuitRsQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoQuitSoAnlyVo {
  data: PageInfoQuitSoAnlyVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoQuitSoQueryVo {
  data: PageInfoQuitSoQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoRightPriceQueryVo {
  data: PageInfoRightPriceQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoStockOwnVo {
  data: PageInfoStockOwnVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPageInfoStockPriceQueryVo {
  data: PageInfoStockPriceQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPlanPanelVo {
  data: PlanPanelVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultPlanViewVo {
  data: PlanViewVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultQuitDeduDetailVo {
  data: QuitDeduDetailVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultRsAscriptionVo {
  data: RsAscriptionVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultRightPriceQueryVo {
  data: RightPriceQueryVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultStockUseSimpleInfoVo {
  data: StockUseSimpleInfoVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultTbcGrantBeforeVo {
  data: TbcGrantBeforeVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultUserVo {
  data: UserVo;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultVoid {
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultBoolean {
  data: boolean;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultInt {
  data: number;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultLong {
  data: number;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface JsonResultString {
  data: string;
  errors: {};
  /**
   * 话术
   */
  message: string;
  /**
   * 状态code
   */
  status: string;
  warnings: {};
}

export interface LogCommonVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface LogCommonVoLogFreezingPeriodViewVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface LogCommonVoLogPlanViewVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface LogCommonVoLogRightPriceViewVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface LogCommonVoLogStockPriceViewVo {
  /**
   * 日志详情
   */
  logs: [];
  /**
   * 操作人信息
   */
  operation: EmployeeVo;
  /**
   * 操作类型
   */
  operationCode: string;
  /**
   * 操作日期
   */
  operationDate: string;
  /**
   * 操作描述
   */
  operationMsg: string;
}

export interface LogFreezingPeriodViewVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 冻结结束日期
   */
  endDate: string;
  /**
   * 日志ID
   */
  logId: number;
  /**
   * 老值或新值
   */
  oldOrNew: string;
  /**
   * 冻结开始日期
   */
  startDate: string;
}

export interface LogPlanPanelVo {
  /**
   * 状态
   */
  status: [];
}

export interface LogPlanPlanViewVo {
  /**
   * 协议id
   */
  agreeId: number;
  /**
   * 业务线id
   */
  bussLineId: number;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBp
   */
  leadingBp: [];
  /**
   * 国际化
   */
  map: {};
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
  /**
   * 计划状态
   */
  status: string;
}

export interface LogPlanQueryDto {
  /**
   * 业务线id
   */
  bussLineId: number;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 开始日期左边界
   */
  planStartDateLeft: string;
  /**
   * 开始日期右边界
   */
  planStartDateRight: string;
  /**
   * 状态
   */
  status: [];
}

export interface LogPlanQueryVo {
  /**
   * 业务线名称
   */
  bussLineName: string;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 是否已冻结
   */
  freezing: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBp
   */
  leadingBp: [];
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
  /**
   * 状态
   */
  status: string;
}

export interface LogPlanViewVo {
  /**
   * 协议名称
   */
  agreeName: string;
  /**
   * 业务线名称
   */
  bussLineName: string;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBp
   */
  leadingBp: [];
  /**
   * 日志ID
   */
  logId: number;
  /**
   * 老值还是新值
   */
  oldOrNew: string;
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
}

export interface LogQueryInitVo {
  /**
   * 授予结束日期
   */
  grantEndDate: string;
  /**
   * 授予开始日期
   */
  grantStartDate: string;
  /**
   * 授予类型
   */
  grantTypeList: [];
  /**
   * 计划下对应业务线下的部门列表
   */
  orgIdList: [];
  /**
   * 计划列表
   */
  planList: [];
  /**
   * rs授予状态
   */
  rsStatusList: [];
  /**
   * so授予状态
   */
  soStatusList: [];
}

export interface LogRightPriceViewVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 日志ID
   */
  logId: number;
  /**
   * 老值或新值
   */
  oldOrNew: string;
  /**
   * RS/SO价格/股
   */
  price: string;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface LogStockPriceViewVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 日志ID
   */
  logId: number;
  /**
   * 老值或新值
   */
  oldOrNew: string;
  /**
   * 股价
   */
  price: string;
  /**
   * 发布日期
   */
  publishDate: string;
  /**
   * 生效日期
   */
  startDate: string;
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
   */
  deduStatusSet: [];
  /**
   * 授予处理调出开始时间
   */
  grantDateLeft: string;
  /**
   * 授予处理调出结束时间
   */
  grantDateRight: string;
  /**
   * 授予状态
   */
  grantStatusSet: [];
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 退款状态 RS 才有
   */
  paymentStatus: [];
  /**
   * personId
   */
  personId: number;
  /**
   * 人事变更调出结束时间
   */
  personMoveEndDate: string;
  /**
   * 人事变更调出开始时间
   */
  personMoveStartDate: string;
  /**
   * 计划ID
   */
  planId: number;
}

export interface MoveCbListDto {
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 人事变更调出时间左边界
   */
  moveDateLeft: string;
  /**
   * 人事变更调出时间右边界
   */
  moveDateRight: string;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 付款状态
   */
  paymentStatus: [];
  /**
   * 计划id或者全选
   */
  planId: string;
  /**
   * 员工/授予ID
   */
  suggestId: number;
  /**
   * 员工/授予code
   */
  suggestType: string;
}

export interface MoveCbPanelVo {
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 人事变更调出时间左边界
   */
  moveDateLeft: string;
  /**
   * 人事变更调出时间右边界
   */
  moveDateRight: string;
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 付款状态
   */
  paymentStatus: [];
}

export interface MoveCbQueryDto {
  moveDeduId: number;
}

export interface MoveCbQueryParams {
  panelMap: PanelMap;
  planList: [];
}

export interface MoveCbQueryVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 归属规则
   */
  ascriptionRule: string;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工信息
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 调出扣减id
   */
  moveDeduId: number;
  /**
   * 新部门
   */
  newOrgName: string;
  /**
   * 原部门
   */
  oldOrgName: string;
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 付款状态
   */
  paymentStatus: string;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 出资本金/股
   */
  price: number;
  /**
   * 退款金额
   */
  refundMoney: number;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface MoveCbUpdateDto {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 调出扣减id
   */
  moveDeduId: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
}

export interface MovePanelVo {
  /**
   * 授予负责角色/授予创建角色
   */
  creatRole: [];
  /**
   * 扣减状态
   */
  deduStatus: [];
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 人事变更调出时间左边界
   */
  moveDateLeft: string;
  /**
   * 人事变更调出时间右边界
   */
  moveDateRight: string;
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 付款状态
   */
  paymentStatus: [];
  /**
   * 授予状态
   */
  status: [];
}

export interface MoveRsAnlyVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工姓名
   */
  employeeName: string;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予状态
   */
  grantStatus: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 员工id
   */
  moveDeduId: number;
  /**
   * 新部门
   */
  newOrgName: string;
  /**
   * 原部门
   */
  oldOrgName: string;
  /**
   * 付款状态
   */
  paymentStatus: string;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 认购价/股
   */
  price: number;
  /**
   * 退款金额
   */
  refundMoney: number;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
}

export interface MoveRsQueryDto {
  /**
   * 授予负责角色
   */
  creatRole: [];
  /**
   * 扣减状态
   */
  deduStatus: [];
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 人事变更调出时间左边界
   */
  moveDateLeft: string;
  /**
   * 人事变更调出时间右边界
   */
  moveDateRight: string;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 付款状态
   */
  paymentStatus: [];
  /**
   * 计划id
   */
  planId: number;
  /**
   * 授予状态
   */
  status: [];
  /**
   * 员工/授予ID
   */
  suggestId: number;
  /**
   * 员工/授予code
   */
  suggestType: string;
}

export interface MoveRsQueryVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 调出扣减id
   */
  moveDeduId: number;
  /**
   * 新部门
   */
  newOrgName: string;
  /**
   * 原部门
   */
  oldOrgName: string;
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 付款状态
   */
  paymentStatus: string;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 认购价/股
   */
  price: string;
  /**
   * 退款金额
   */
  refundMoney: string;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: string;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface MoveSoAnlyVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工姓名
   */
  employeeName: string;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予状态
   */
  grantStatus: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 新部门
   */
  newOrgName: string;
  /**
   * 原部门
   */
  oldOrgName: string;
  /**
   * personId
   */
  personId: number;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 认购价/股
   */
  price: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
}

export interface MoveSoQueryDto {
  /**
   * 授予负责角色
   */
  creatRole: [];
  /**
   * 扣减状态
   */
  deduStatus: [];
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 人事变更调出时间左边界
   */
  moveDateLeft: string;
  /**
   * 人事变更调出时间右边界
   */
  moveDateRight: string;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划id
   */
  planId: number;
  /**
   * 授予状态
   */
  status: [];
  /**
   * 员工/授予ID
   */
  suggestId: number;
  /**
   * 员工/授予code
   */
  suggestType: string;
}

export interface MoveSoQueryVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 调出扣减id
   */
  moveDeduId: number;
  /**
   * 新部门
   */
  newOrgName: string;
  /**
   * 原部门
   */
  oldOrgName: string;
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 行权价/股
   */
  price: string;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface OrgVo {
  /**
   * 部门id
   */
  orgId: number;
  /**
   * 部门名称
   */
  orgName: string;
}

export interface PageInfoAgreementVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoBussLineVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoDepartmentVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoFreezingPeriodQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoGrantsListVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoGrantsLogListVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoLogPlanQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoMoveCbQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoMoveRsAnlyVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoMoveRsQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoMoveSoAnlyVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoMoveSoQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoPlanQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoQuitRsAnlyVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoQuitRsQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoQuitSoAnlyVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoQuitSoQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoRightPriceQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoStockOwnVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PageInfoStockPriceQueryVo {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: [];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: [];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  size: number;
  startRow: number;
  total: number;
}

export interface PlanNameCodeCheckDto {
  /**
   * 计划id
   */
  planId: number;
  /**
   * code/name
   */
  value: string;
}

export interface PlanPanelVo {
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 开始日期左边界
   */
  planStartDateLeft: string;
  /**
   * 开始日期右边界
   */
  planStartDateRight: string;
  /**
   * 状态
   */
  status: [];
}

export interface PlanQueryDto {
  /**
   * 业务线id
   */
  bussLineId: number;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 开始日期左边界
   */
  planStartDateLeft: string;
  /**
   * 开始日期右边界
   */
  planStartDateRight: string;
  /**
   * 状态
   */
  status: [];
}

export interface PlanQueryVo {
  /**
   * 业务线名称
   */
  bussLineName: string;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 是否已冻结
   */
  freezing: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBp
   */
  leadingBp: [];
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
  /**
   * 状态
   */
  status: string;
}

export interface PlanReleaseDto {
  /**
   * 协议
   */
  agreeId: number;
  /**
   * 业务线
   */
  bussLineId: number;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBpIdStr
   */
  leadingBp: [];
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID，有表示更新，无表示创建
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
}

export interface PlanSaveDto {
  /**
   * 协议
   */
  agreeId: number;
  /**
   * 业务线
   */
  bussLineId: number;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 备注
   */
  comments: string;
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBpIdStr
   */
  leadingBp: [];
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID，有表示更新，无表示创建
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
}

export interface PlanSimpleVo {
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
}

export interface PlanViewVo {
  /**
   * 协议id
   */
  agreeId: number;
  /**
   * 业务线id
   */
  bussLineId: number;
  /**
   * 业务负责人
   */
  bussManager: [];
  /**
   * 备注
   */
  comments: string;
  edit: {};
  /**
   * HRBP
   */
  hrbp: [];
  /**
   * leadingBp
   */
  leadingBp: [];
  /**
   * 国际化
   */
  map: {};
  /**
   * 计划Code
   */
  planCode: string;
  /**
   * 结束日期
   */
  planEndDate: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 起始日期
   */
  planStartDate: string;
  /**
   * RS总份额
   */
  rsTotal: number;
  /**
   * SO总份额
   */
  soTotal: number;
  /**
   * 计划状态
   */
  status: string;
}

export interface PriceQueryDto {
  dateStr: string;
  grantType: string;
  planId: number;
}

export interface QuitAnalyzeDto {
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 付款状态 RS 才有
   */
  paymentStatus: [];
  /**
   * personId
   */
  personId: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 离职日期截止时间
   */
  quitDateEnd: string;
  /**
   * 离职日期起始时间
   */
  quitDateStart: string;
}

export interface QuitDeduDetailVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 是否可编辑
   */
  editFlag: string;
  /**
   * 员工
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 退款状态
   */
  paymentStatus: string;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 认购价/股
   */
  price: string;
  /**
   * 离职日期
   */
  quitDate: string;
  /**
   * 离职扣减id
   */
  quitDeduId: number;
  /**
   * 退款金额
   */
  refundMoney: string;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: string;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface QuitModifyDto {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 离职扣减ID
   */
  quitDeduId: number;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
}

export interface QuitPanelVo {
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 操作列表
   */
  operation: [];
  /**
   * 付款状态
   */
  paymentStatus: [];
  /**
   * 离职日期左边界
   */
  quitDateLeft: string;
  /**
   * 离职日期右边界
   */
  quitDateRight: string;
}

export interface QuitRsAnlyVo {
  /**
   * 离职日期
   */
  actualTerminationDate: string;
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 部门Id
   */
  orgId: number;
  /**
   * 部门
   */
  orgName: string;
  paymentStatus: string;
  /**
   * personId
   */
  personId: number;
  /**
   * 员工姓名
   */
  personName: string;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 退款金额
   */
  refundMoney: number;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 入职日期
   */
  serviceStartDate: string;
}

export interface QuitRsQueryDto {
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 付款状态
   */
  paymentStatus: [];
  /**
   * 计划id
   */
  planId: number;
  /**
   * 离职时间左边界
   */
  quitDateLeft: string;
  /**
   * 离职时间右边界
   */
  quitDateRight: string;
  /**
   * 员工/授予ID
   */
  suggestId: number;
  /**
   * 员工/授予code
   */
  suggestType: string;
}

export interface QuitRsQueryVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 退款状态
   */
  paymentStatus: string;
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 认购价/股
   */
  price: string;
  /**
   * 离职日期
   */
  quitDate: string;
  /**
   * 离职扣减id
   */
  quitDeduId: number;
  /**
   * 退款金额
   */
  refundMoney: string;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: string;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface QuitSoAnlyVo {
  /**
   * 离职日期
   */
  actualTerminationDate: string;
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 部门Id
   */
  orgId: number;
  /**
   * 部门
   */
  orgName: string;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 员工姓名
   */
  personName: string;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 退款金额
   */
  refundMoney: number;
  /**
   * 退款股数
   */
  refundNumber: number;
  /**
   * 退款股价
   */
  refundPrice: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 入职日期
   */
  serviceStartDate: string;
}

export interface QuitSoQueryDto {
  /**
   * 授予日期左边界
   */
  grantDateLeft: string;
  /**
   * 授予日期右边界
   */
  grantDateRight: string;
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划id
   */
  planId: number;
  /**
   * 离职时间左边界
   */
  quitDateLeft: string;
  /**
   * 离职时间右边界
   */
  quitDateRight: string;
  /**
   * 员工/授予ID
   */
  suggestId: number;
  /**
   * 员工/授予code
   */
  suggestType: string;
}

export interface QuitSoQueryVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 扣减状态
   */
  deduStatus: string;
  /**
   * 员工
   */
  employee: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 虚拟股权计划名称
   */
  planName: string;
  /**
   * 行权价/股
   */
  price: string;
  /**
   * 离职日期
   */
  quitDate: string;
  /**
   * 离职扣减id
   */
  quitDeduId: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予状态
   */
  status: string;
}

export interface RsAscrUpdateDto {
  ascrList: [];
  grantsId: number;
}

export interface RsAscriptionDto {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 归属Id
   */
  ascrId: number;
  /**
   * 归属数量
   */
  ascrNumber: number;
  /**
   * 备注
   */
  comments: string;
}

export interface RsAscriptionSimpleVo {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 归属Id
   */
  ascrId: number;
  /**
   * 归属数量
   */
  ascrNumber: number;
  /**
   * 备注
   */
  comments: string;
  /**
   * 归属规则修改标志
   */
  editFlag: boolean;
  /**
   * 授予ID
   */
  grantsId: number;
}

export interface RsAscriptionVo {
  /**
   * 员工信息
   */
  employeeVO: EmployeeVo;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予code
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 未归属数量
   */
  nonAscrAmount: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 归属明细和是否可以修改标志
   */
  rsAscrList: [];
}

export interface RsFullAscrDto {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 授予id列表
   */
  codes: [];
}

export interface RightPriceQueryDto {
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 股权类型（不需要传参）
   */
  type: string;
}

export interface RightPriceQueryVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 编辑
   */
  edit: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 计划ID
   */
  planId: number;
  /**
   * RS/SO价格/股
   */
  price: string;
  /**
   * 行权价/认购价的ID
   */
  rightPriceId: number;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface RightPriceSaveDto {
  /**
   * 备注
   */
  comments: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * RS/SO价格/股
   */
  price: string;
  /**
   * 行权价/认购价的ID
   */
  rightPriceId: number;
  /**
   * 生效日期
   */
  startDate: string;
  /**
   * 股权类型（不需要传参）
   */
  type: string;
}

export interface SoAscriptionSimpleVo {
  /**
   * 归属日期
   */
  ascrDate: string;
  /**
   * 归属规则Id
   */
  ascrId: number;
  /**
   * 归属数量
   */
  ascrNumber: number;
  /**
   * 归属规则修改标志
   */
  editFlag: boolean;
  /**
   * 授予Id
   */
  grantsId: number;
}

export interface StockOwnQueryDto {
  /**
   * 员工类型
   */
  employeeType: [];
  /**
   * 授予结束日期
   */
  grantEndDate: string;
  /**
   * 授予开始日期
   */
  grantStartDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 部门ID
   */
  orgIdList: [];
  /**
   * 第几页
   */
  pageNum: number;
  /**
   * 每页大小
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 授予角色
   */
  soClassList: [];
  /**
   * 授予状态
   */
  statusList: [];
  /**
   * suggestId
   */
  suggestId: number;
  /**
   * suggest类型
   */
  suggestType: string;
}

export interface StockOwnVo {
  /**
   * 已归属
   */
  ascriptionEd: number;
  /**
   * 未归属
   */
  ascriptionIng: number;
  /**
   * 归属规则
   */
  ascriptionRule: string;
  /**
   * 取消已归属
   */
  cancelAscriEd: number;
  /**
   * 取消未归属
   */
  cancelAscriIng: number;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 员工编号
   */
  employeeNumber: string;
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDateStr: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 离职时间
   */
  leaveDate: string;
  /**
   * 离职日期
   */
  leaveDateStr: string;
  /**
   * 出资期限
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 人事变更调出时间
   */
  moveDate: string;
  /**
   * 人事变更调出日期
   */
  moveDateStr: string;
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 部门名
   */
  orgName: string;
  /**
   * 员工id
   */
  personId: number;
  /**
   * 员工姓名
   */
  personName: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名字
   */
  planName: string;
  /**
   * 行权价(SO)/认购价(RS)
   */
  price: number;
  /**
   * 保留已归属
   */
  retainAscriEd: number;
  /**
   * 授予角色
   */
  soClass: string;
  /**
   * 授予状态
   */
  status: string;
  /**
   * 当前股价
   */
  stockPrice: number;
}

export interface StockPriceQueryDto {
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 最大条数
   */
  pageSize: number;
  /**
   * 计划ID
   */
  planId: number;
}

export interface StockPriceQueryVo {
  /**
   * 备注
   */
  comments: string;
  /**
   * 编辑
   */
  edit: {};
  /**
   * 操作列表
   */
  operations: [];
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 股价
   */
  price: string;
  /**
   * 股价ID
   */
  priceId: number;
  /**
   * 发布日期
   */
  publishDate: string;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface StockSaveDto {
  /**
   * 备注
   */
  comments: string;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 股价
   */
  price: string;
  /**
   * 股价ID
   */
  priceId: number;
  /**
   * 发布日期
   */
  publishDate: string;
  /**
   * 生效日期
   */
  startDate: string;
}

export interface StockSimpleVo {
  /**
   * 已作废股票
   */
  abolished: number;
  /**
   * 股票总份额
   */
  total: number;
  /**
   * 股票类型
   */
  type: string;
  /**
   * 未使用股票(包含还在池子里没动的以及处于草稿状态的)
   */
  unused: number;
  /**
   * 已使用股票
   */
  used: number;
}

export interface StockUseInfoDto {
  /**
   * 计划ID
   */
  planId: number;
}

export interface StockUseSimpleInfoVo {
  freeze: boolean;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * rs股票使用情况
   */
  rs: StockSimpleVo;
  /**
   * so股票使用情况
   */
  so: StockSimpleVo;
}

export interface SuggestDto {
  /**
   * keyword
   */
  keyword: string;
  /**
   * 限制条数
   */
  limit: number;
}

export interface TbcGrantBeforeVo {
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 协议富文本内容
   */
  contents: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名字
   */
  planName: string;
}

export interface TbcGrantVo {
  /**
   * 协议ID
   */
  agreeId: number;
  /**
   * 创建者ID
   */
  createdBy: number;
  /**
   * 创建者
   */
  createdByName: string;
  /**
   * 创建时间
   */
  creationDate: Timestamp;
  /**
   * 属性是否可以编辑
   */
  edit: {};
  /**
   * 授予数量
   */
  grantAmount: number;
  /**
   * 授予日期
   */
  grantDate: string;
  /**
   * 授予类型
   */
  grantType: string;
  /**
   * 授予编号
   */
  grantsCode: string;
  /**
   * 授予ID
   */
  grantsId: number;
  /**
   * 修改时间
   */
  lastUpdateDate: Timestamp;
  /**
   * 修改者ID
   */
  lastUpdatedBy: number;
  /**
   * 修改者
   */
  lastUpdatedByName: string;
  /**
   * 出资期限
   */
  limitDate: string;
  /**
   * 国际化
   */
  map: {};
  /**
   * 操作列所有需要显示的按钮
   */
  operations: [];
  /**
   * 计划ID
   */
  planId: number;
  /**
   * 计划名称
   */
  planName: string;
  /**
   * 行权价/股 出资本金/股
   */
  price: number;
}

export interface Timestamp {
  date: number;
  day: number;
  hours: number;
  minutes: number;
  month: number;
  nanos: number;
  seconds: number;
  time: number;
  timezoneOffset: number;
  year: number;
}

export interface UserVo {
  personId: number;
  personName: string;
}

export interface PanelMap {}
