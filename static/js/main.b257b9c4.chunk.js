(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],{111:function(e,t,a){"use strict";var r=a(86),n=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return f.bind(e)};var o=n(a(38)),c=(a(71),r(a(87))),u=a(167),i=a(112);function s(e,t,a){var r=this,n=a.typeTrans,u=a.propertyTrans;return e?Object.keys(e).map((function(a){return function(e,a,i){if(a.$ref){var l=t.ref(a.$ref);l.isEmpty()||(a.type=l.schema.title)}if(a.items&&a.items.$ref){var f=t.ref(a.items.$ref);f.isEmpty()||(a.items.type=f.schema.title)}var p=n(c.type(c.keyword(a.type||"any"))),d=u(c.keyword(e));return r.propertyString((0,o.default)((0,o.default)({},a),{},{type:p,name:d}),s.bind(r,a.properties,i,{typeTrans:n,propertyTrans:u}))}(a,e[a],t.get(["properties",a]))})).join(this.propertyDelimiter||"\n\n"):""}function l(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.typeTrans,n=a.propertyTrans,u=a.cache,i=a.depth,f=void 0===i?1:i,p=a.inner,d=void 0!==p&&p,_=e.schema,m=_.type,y=_.properties,h=_.title;if(d&&"object"===m){var v=e.rootParent.schema.definitions=e.rootParent.schema.definitions||{},g=e.schema.title;v[g]||(v[g]=(0,o.default)({},e.schema),e.clear(),e.set("$ref","#/definitions/"+g))}var b="";if(f>0&&(b=Object.keys(y||{}).map((function(a){var o=e.get(["properties",a]);return o.isEmpty()?"":(o.schema.title||(o.schema.title=a),l.call(t,o,{cache:u,depth:f-1,inner:!0,typeTrans:r,propertyTrans:n}))})).join(this.classBodyDelimiter||"\n\n")),"object"===m){var x=r(c.uKeyword(h));return u.has(x)?b:(u.add(x),"".concat(b,"\n    ").concat(this.generateClassString((0,o.default)((0,o.default)({},_),{},{title:x}),s.bind(this,y,e,{typeTrans:r,propertyTrans:n}))))}return b+""}function f(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a=Object.assign({},this.options,a),this.normalizeOptions&&this.normalizeOptions(a);var r=a,n=r.prefix,o=r.suffix,c=r.depth,s=void 0===c?1:c,f=r.typeCapitalize,p=void 0!==f&&f,d=r.propertyCamelcase,_=void 0!==d&&d,m=new Set([]),y=p?function(e){return u(e)}:function(e){return e},h=_?function(e){return i(e)}:function(e){return e};if(e.schema.swagger){var v=Object.keys(e.schema.definitions).map((function(t){var a=e.get(["definitions",t]);return a.has("title")||a.set("title",t),a}));return(n||"")+this.wrapString(v.map((function(e){return l.call(t,e,{depth:s,cache:m,propertyTrans:h,typeTrans:y})})).join(this.classBodyDelimiter||"\n\n"))+(o||"")}return this.wrapString(l.call(this,e,{depth:s,cache:m,propertyTrans:h,typeTrans:y}))}},113:function(e,t,a){"use strict";var r=a(86),n=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.fillType=i,t.default=void 0;var o=n(a(38)),c=r(a(87)),u=r(a(114));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!(e=(0,o.default)({},e)).type)return"any";switch(e.type){case"number":case"string":case"boolean":case"any":return e.type;case"integer":return"number";case"date":return"Date";case"object":return"Object";case"array":return e.items.type?"".concat(i(e.items),"[]"):"[]";default:return u.pascalCase(e.type)}}var s=(0,a(111).default)({propertyDelimiter:"\n",options:{loose:!0},generateClassString:function(e,t){var a=e.description,r=e.title,n=(e.type,a?"/**\n     * ".concat(a||"","\n     */"):"");return"".concat(n,"\n    export interface ").concat(u.pascalCase(r)," {\n      ").concat(t(),"\n    }\n    ")},wrapString:function(e){return e},propertyString:function(e){var t,a=c.toString(e.example||""),r=a||e.description?["/**",e.description&&" * ".concat(e.description||""),a&&" * @example ".concat(a)," */\n"].filter(Boolean).join("\n"):"";return t=!!this.options.loose||!!e.allowEmptyValue,r+" ".concat(e.name).concat(t?"?":"",": ").concat(i(e),";")}});t.default=s},165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(166),n=a(449),o=n.keys().reduce((function(e,t){return e[(0,r.basename)(t,(0,r.extname)(t))]=n(t),e}),{});t.default=o},172:function(e,t,a){"use strict";var r=a(31),n=r(a(0)),o=r(a(29));a(177);var c=r(a(178)),u=r(a(475));o.default.render(n.default.createElement(n.default.StrictMode,null,n.default.createElement(c.default,null)),document.getElementById("root")),(0,u.default)(console.log)},177:function(e,t,a){},178:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(31);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,__webpack_require__(179);var _configProvider=_interopRequireDefault(__webpack_require__(24));__webpack_require__(234);var _spin=_interopRequireDefault(__webpack_require__(236));__webpack_require__(245);var _popover=_interopRequireDefault(__webpack_require__(247));__webpack_require__(105);var _tooltip=_interopRequireDefault(__webpack_require__(79));__webpack_require__(106);var _button=_interopRequireDefault(__webpack_require__(107));__webpack_require__(260);var _form=_interopRequireDefault(__webpack_require__(264));__webpack_require__(347);var _select=_interopRequireDefault(__webpack_require__(351)),_objectSpread2=_interopRequireDefault(__webpack_require__(38)),_regenerator=_interopRequireDefault(__webpack_require__(361));__webpack_require__(150);var _notification2=_interopRequireDefault(__webpack_require__(101)),_asyncToGenerator2=_interopRequireDefault(__webpack_require__(363));__webpack_require__(364);var _layout=_interopRequireDefault(__webpack_require__(366));__webpack_require__(378);var _input=_interopRequireDefault(__webpack_require__(380)),_slicedToArray2=_interopRequireDefault(__webpack_require__(22)),_react=_interopRequireDefault(__webpack_require__(0)),_AppModule=_interopRequireDefault(__webpack_require__(392)),_axios=_interopRequireDefault(__webpack_require__(393)),_zh_CN=_interopRequireDefault(__webpack_require__(411)),_home=_interopRequireDefault(__webpack_require__(415)),_modules=_interopRequireDefault(__webpack_require__(165)),_reactCodemirror=__webpack_require__(163),useLocalStorageState=function(e,t){var a=_react.default.useMemo((function(){try{return JSON.parse(localStorage.getItem("localStorage_".concat(e)))}catch(t){}return null}),[]),r=_react.default.useState(a||t),n=(0,_slicedToArray2.default)(r,2),o=n[0],c=n[1],u=_react.default.useRef(!1);return _react.default.useLayoutEffect((function(){u.current?localStorage.setItem("localStorage_".concat(e),JSON.stringify(o)):u.current=!0}),[o]),[o,c]},TextArea=_input.default.TextArea,Header=_layout.default.Header,Content=_layout.default.Content,Footer=_layout.default.Footer,CONFIG=JSON.stringify({axiosRequest:"axios",commonConfig:{responseData:!0},splitModule:!0,prefix:"/* eslint-disable */\n// @ts-nocheck\n",suffix:""},null,2);function App(){var _React$useState3=_react.default.useState(!1),_React$useState4=(0,_slicedToArray2.default)(_React$useState3,2),loading=_React$useState4[0],setLoading=_React$useState4[1],_React$useState5=_react.default.useState("{}"),_React$useState6=(0,_slicedToArray2.default)(_React$useState5,2),jsonText=_React$useState6[0],setJsonText=_React$useState6[1],_useLocalStorageState=useLocalStorageState("transform-type",{type:"to-swagger-axios",config:CONFIG}),_useLocalStorageState2=(0,_slicedToArray2.default)(_useLocalStorageState,2),transform=_useLocalStorageState2[0],setTransform=_useLocalStorageState2[1],_useLocalStorageState3=useLocalStorageState("import-type","url"),_useLocalStorageState4=(0,_slicedToArray2.default)(_useLocalStorageState3,2),type=_useLocalStorageState4[0],setType=_useLocalStorageState4[1],_useLocalStorageState5=useLocalStorageState("import-value-url","http://tutor-test.zhenguanyu.com/tutor-cyber-corpus/swagger/v2/api-docs"),_useLocalStorageState6=(0,_slicedToArray2.default)(_useLocalStorageState5,2),urlText=_useLocalStorageState6[0],setUrlText=_useLocalStorageState6[1],_useLocalStorageState7=useLocalStorageState("import-value-js",""),_useLocalStorageState8=(0,_slicedToArray2.default)(_useLocalStorageState7,2),jsText=_useLocalStorageState8[0],setJsText=_useLocalStorageState8[1],onSearch=_react.default.useCallback(function(){var _ref=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function _callee(val){var res,_res,_e$config$method,_e$response;return _regenerator.default.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(setLoading(!0),_context.prev=1,"js"!==type){_context.next=19;break}if(val=jsText,val){_context.next=6;break}return _context.abrupt("return");case 6:return _context.next=8,eval(val);case 8:if(res=_context.sent,200!==res.status){_context.next=17;break}return _context.t0=setJsonText,_context.t1=JSON,_context.next=14,res.json();case 14:_context.t2=_context.sent,_context.t3=_context.t1.stringify.call(_context.t1,_context.t2,null,2),(0,_context.t0)(_context.t3);case 17:_context.next=26;break;case 19:if(val=urlText,val){_context.next=22;break}return _context.abrupt("return");case 22:return _context.next=24,_axios.default.get(val.trim(),{responseType:"json",withCredentials:!0});case 24:_res=_context.sent,200===_res.status&&setJsonText(JSON.stringify(_res.data,null,2));case 26:_context.next=31;break;case 28:_context.prev=28,_context.t4=_context.catch(1),_notification2.default.error({message:"\u8bf7\u6c42\u51fa\u9519",description:_context.t4.config?"".concat(null===(_e$config$method=_context.t4.config.method)||void 0===_e$config$method?void 0:_e$config$method.toUpperCase()," ").concat(_context.t4.config.url," (").concat((null===(_e$response=_context.t4.response)||void 0===_e$response?void 0:_e$response.status)||"-",")"):String(_context.t4)});case 31:setLoading(!1);case 32:case"end":return _context.stop()}}),_callee,null,[[1,28]])})));return function(e){return _ref.apply(this,arguments)}}(),[type,urlText,jsonText]);_react.default.useEffect((function(){onSearch()}),[]);var config=_react.default.useMemo((function(){try{return JSON.parse(transform.config)}catch(e){}return null}),[transform.config]);return _react.default.createElement(_configProvider.default,{locale:_zh_CN.default,theme:"light"},_react.default.createElement(_layout.default,{className:_AppModule.default.App,theme:"light"},_react.default.createElement(Header,{className:_AppModule.default.header},_react.default.createElement("span",{className:_AppModule.default.logo},"Transform json schema"),_react.default.createElement(_form.default.Item,{label:"\u8f6c\u6362\u7c7b\u578b",wrapperCol:{style:{width:150}}},_react.default.createElement(_select.default,{value:transform.type,className:_AppModule.default.select,onChange:function(e){setTransform((function(t){return(0,_objectSpread2.default)((0,_objectSpread2.default)({},t),{},{type:e})}))}},Object.keys(_modules.default).map((function(e){return _react.default.createElement(_select.default.Option,{key:e,value:e},e)})))),_react.default.createElement(_popover.default,{content:_react.default.createElement(_reactCodemirror.Controlled,{className:_AppModule.default.paramsEditor,value:transform.config,onBeforeChange:function(e,t,a){setTransform((function(e){return(0,_objectSpread2.default)((0,_objectSpread2.default)({},e),{},{config:a})}))},options:{mode:"application/json",theme:"material",smartIndent:!0,tabSize:2,lint:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]}})},_react.default.createElement(_tooltip.default,{title:"\u8bbe\u7f6e\u8f6c\u6362\u914d\u7f6e",placement:"right"},_react.default.createElement(_button.default,{style:{marginLeft:10}},"\u8bbe\u7f6e"))),_react.default.createElement("div",{className:_AppModule.default.btns},_react.default.createElement(_select.default,{value:type,onChange:function(e){return setType(e)}},_react.default.createElement(_select.default.Option,{value:"url"},"\u4ece URL \u5bfc\u5165"),_react.default.createElement(_select.default.Option,{value:"js"},"\u4ece JS \u811a\u672c \u5bfc\u5165")),"url"===type&&_react.default.createElement(_input.default.Search,{value:urlText,onChange:function(e){return setUrlText(e.target.value)},enterButton:"\u5bfc\u5165",placeholder:"\u4ece URL \u5bfc\u5165",onSearch:onSearch,className:_AppModule.default.search}),"js"===type&&_react.default.createElement("div",{className:_AppModule.default.jsTextareaWrapper},_react.default.createElement(_popover.default,{destroyTooltipOnHide:!0,content:_react.default.createElement(TextArea,{autoFocus:!0,style:{width:400},rows:10,value:jsText,onChange:function(e){return setJsText(e.target.value)},placeholder:"\u8f93\u5165 JS \u8bf7\u6c42\u811a\u672c\uff0c\u5177\u4f53\u53ef\u4ee5\u4f7f\u7528 Chrome Network \u4e2d\u7684 Copy as fetch"}),trigger:"click"},_react.default.createElement(_input.default.Search,{readOnly:!0,onSearch:onSearch,className:_AppModule.default.jsTextarea,value:jsText,enterButton:"\u5bfc\u5165",placeholder:"\u8f93\u5165 JS \u8bf7\u6c42\u811a\u672c\uff0c\u5177\u4f53\u53ef\u4ee5\u4f7f\u7528 Chrome Network \u4e2d\u7684 Copy as fetch"}))))),_react.default.createElement(Content,{style:{padding:"0 50px"},className:_AppModule.default.body},_react.default.createElement(_spin.default,{spinning:loading,wrapperClassName:_AppModule.default.loading,delay:400},_react.default.createElement(_home.default,{type:transform.type,config:config,jsonText:jsonText,onJsonTextChange:setJsonText})))))}var _default=App;exports.default=_default},392:function(e,t,a){e.exports={App:"App_App__15LM-",header:"App_header__2L3DO",search:"App_search__13zFb",jsTextareaWrapper:"App_jsTextareaWrapper__25Ez6",jsTextarea:"App_jsTextarea__2yuDh",btns:"App_btns__15KWL",loading:"App_loading__3Rsj5",clickable:"App_clickable__Fqvmh",logo:"App_logo__2qPv-",body:"App_body__2a4FT",paramsEditor:"App_paramsEditor__oCSss"}},415:function(e,t,a){"use strict";var r=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(416);var n=r(a(418)),o=r(a(30)),c=r(a(38));a(105);var u=r(a(79));a(106);var i=r(a(107)),s=r(a(56));a(150);var l=r(a(101)),f=r(a(22)),p=r(a(0)),d=r(a(484)),_=r(a(425)),m=a(432),y=r(a(433)),h=a(163);a(434),a(435),a(436),a(437),a(438),a(164),a(439),a(440),a(441),a(442),a(443),a(444),a(445),a(446),a(447);var v=r(a(448)),g=r(a(165));window.jsonlint=v.default;var b=function(e){var t=e.type,a=void 0===t?"to-ts":t,r=e.config,v=e.defaultJsonText,b=e.jsonText,x=e.onJsonTextChange,S=(0,d.default)({value:b,onChange:x,defaultValue:v||"{}"}),w=(0,f.default)(S,2),j=w[0],k=w[1],C=p.default.useState(""),T=(0,f.default)(C,2),O=T[0],E=T[1];return p.default.useEffect((function(){try{var e=JSON.parse(j);e&&g.default[a]&&g.default[a](e,r||{},(function(e,t){e?(console.error(e),l.default.error({message:String(e)})):E(t)}))}catch(t){console.error(t)}}),[a,r,j]),p.default.createElement("div",{className:y.default.container},p.default.createElement(h.Controlled,{className:y.default.jsonEditor,value:j,onBeforeChange:function(e,t,a){k(a)},options:{mode:"application/json",theme:"material",lineNumbers:!0,smartIndent:!0,tabSize:2,lint:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]}}),"string"===typeof O&&p.default.createElement(h.Controlled,{className:y.default.resultEditor,value:O,onBeforeChange:function(e,t,a){E(a)},options:{mode:"text/typescript",theme:"material",lineNumbers:!0,smartIndent:!0,tabSize:2,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]}}),"object"===(0,s.default)(O)&&O&&p.default.createElement("div",{className:y.default.wrapperResult},p.default.createElement(n.default,{size:"small",tabBarGutter:0,tabPosition:"left",defaultActiveKey:Object.keys(O)[0],tabBarExtraContent:p.default.createElement(u.default,{title:"\u4e0b\u8f7d ZIP"},p.default.createElement(i.default,{size:"small",type:"primary",onClick:function(){var e=new _.default;Object.keys(O).forEach((function(t){e.file(t,O[t])})),e.generateAsync({type:"blob"}).then((function(e){(0,m.saveAs)(e,"transform-json-schema-result.zip")}))}},"\u4e0b\u8f7d"))},Object.keys(O).map((function(e){return p.default.createElement(n.default.TabPane,{tab:e,key:e},p.default.createElement(h.Controlled,{className:y.default.subEditor,value:O[e],onBeforeChange:function(t,a,r){E((0,c.default)((0,c.default)({},O),{},(0,o.default)({},e,r)))},options:{mode:"text/typescript",theme:"material",lineNumbers:!0,smartIndent:!0,tabSize:2,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"]}}))})))))};t.default=b},433:function(e,t,a){e.exports={container:"style_container__TPmxo",jsonEditor:"style_jsonEditor__dG7Rz",resultEditor:"style_resultEditor__1ZfRb",wrapperResult:"style_wrapperResult__2yfYP",subEditor:"style_subEditor__39vb3"}},449:function(e,t,a){var r={"./to-swagger-axios.js":450,"./to-ts.js":472,"./to-vm.js":473,"./to-walli.js":474};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=449},450:function(e,t,a){"use strict";var r=a(31)(a(38)),n=a(85),o=a(88);e.exports=function(e,t,a){n().use(o,{filter:t.filter}).format(e,"swagger-axios",(0,r.default)((0,r.default)({},t),{},{pretty:!0}),a)}},453:function(e,t,a){"use strict";var r=a(31),n=r(a(38)),o=r(a(480)),c=r(a(454));e.exports=function(e,t){return o.default.format(e,(0,n.default)((0,n.default)({parser:"typescript"},t),{},{plugins:[c.default]}))}},456:function(e,t,a){"use strict";var r=a(86),n=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(38)),c=r(a(87)),u=r(a(114));var i=(0,a(111).default)({options:{default:!0},wrapString:function(e){return"import { Root, observable } from 'react-mobx-vm'\n"+e},generateClassString:function(e,t){var a=e.description,r=e.title;return r=u.pascalCase(r),"\n    /**\n     * ".concat(a||"","\n     * @typedef {").concat(r,"}\n     */\n    export class ").concat(r," extends Root {\n      ").concat(t(),"\n    }\n    ")},propertyString:function(e){return this.options.default&&(e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((e=(0,o.default)({},e)).hasOwnProperty("default"))return e;if(!e.type)return delete e.default,e;switch(e.type){case"number":case"string":case"integer":return e.default='""',e;case"date":case"boolean":return delete e.default,e;case"object":return e.default="{}",e;case"array":return e.default="[]",e;default:return e.default="".concat(u.pascalCase(e.type),".create()"),e}}(e)),"/**\n"+" * ".concat(e.description||"","\n")+" * @example ".concat(c.toString(e.example||""),"\n")+" * @type {".concat(e.type,"}\n")+" */\n"+" @observable ".concat(e.name," ").concat(e.hasOwnProperty("default")?"= "+e.default:"")}});t.default=i},460:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(87);var r=a(112),n=(a(167),(0,a(111).default)({options:{deep:!1},normalizeOptions:function(e){e.deep&&(e.depth=0)},propertyDelimiter:"\n",classBodyDelimiter:"\n\n",wrapString:function(e){return"import * as t from 'walli'\n"+e},generateClassString:function(e,t){var a=e.description,n=e.title;return"\n    /**\n     * ".concat(a||"","\n     * @typedef {").concat(n,"Class}\n     */\n    export class ").concat(n,"Class extends t.Verifiable {\n      _check(req) {\n        return t.leq({").concat(t(),"}).check(req)\n      }\n    }\n    export const ").concat(r(n)," = t.util.createFinalVerifiable(").concat(n,"Class)\n    ")},propertyString:function(e,t){var a=e.type.toLowerCase(),n=r(e.type);return this.options.deep&&"object"===a?"".concat(e.name,": {").concat(t(),"},"):["array","string","object","boolean","number"].includes(a)?"".concat(e.name,": t.").concat(a,","):"".concat(e.name,": ").concat(n,",")}}));t.default=n},461:function(e,t,a){"use strict";var r=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.axiosRequest,r=void 0===a?"axios":a,s=t.commonConfig,d=void 0===s?{responseData:!0}:s,_=t.splitModule,m=void 0!==_&&_,y=t.typeRequest,h=void 0===y?"./type":y,v=t.prefix,g=t.suffix,b=(0,n.default)(t,["axiosRequest","commonConfig","splitModule","typeRequest","prefix","suffix"]),x=[(0,o.default)(e,b)+"\n"],S="",w=(0,c.default)(e,b);if(w){var j=[],k=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return p.apply(void 0,m?[j].concat(t):[x].concat(t))},C={},T=function(e,t){var a=h;if(m){x.push(e);var r=C[a]=C[a]||[];r.push(t),C[a]=(0,i.default)(r)}else x.push(e)},O=function(){Object.keys(C).forEach((function(e){var t=C[e];p(j,e,"{ ".concat(t.join(", ")," }"))}))};j.push("\n// Api code start");var E=k(r,"axios");k("axios","{ AxiosRequestConfig }"),k("lodash.merge","merge"),k("decorate-axios","{ responseDataAxios, pathRegexpAxios, stringDataAxios }"),j.push("responseDataAxios()(".concat(E,");"),"pathRegexpAxios()(".concat(E,");"),"stringDataAxios()(".concat(E,");\n"));var q=w.commonPrefix,A=w.data;j.push("const COMMON_PREFIX = ".concat(JSON.stringify(f(q)||""),";")),j.push("const COMMON_CONFIG = ".concat(JSON.stringify(d),";\n")),Object.keys(A).forEach((function(e){Object.keys(A[e]).forEach((function(t){var a=A[e][t],r=a.responseType,n=a.paramType,o=l(e),c=t+" "+e,i=[];o.forEach((function(e){i.push("".concat(e,": any"))}));var s=!1;n&&(n.query&&(T(n.query.code,n.query.name),i.push("params?: ".concat(n.query.name))),s=n.body||n.formData,n.body?(T(n.body.code,n.body.name),i.push("data?: ".concat(n.body.name))):n.formData&&i.push("data?: FormData"));var p="any";r&&r[200]&&(p=r[200].name,r[200].code&&T(r[200].code,p)),i.push("axiosRequestConfig?: AxiosRequestConfig"),j.push("\n      export function ".concat((0,u.default)(c),"(").concat(i.join(", "),") {\n        return ").concat(E,"<").concat(p,">(merge({\n          url: COMMON_PREFIX + ").concat(JSON.stringify(f(e)),",\n          method: ").concat(JSON.stringify(t),",\n          pathData: {\n            ").concat(o.map((function(e){return"".concat(e,",")})).join("\n"),"\n          },\n          ").concat(n&&n.query?"params,":"").concat(s?"data,":"","\n        }, COMMON_CONFIG, axiosRequestConfig))\n      }\n      "))}))})),O(),S=j.join("\n")}if(!m)return"".concat(v||"").concat(x.concat(S).join("\n")).concat(g||"");return{"type.ts":"".concat(v||"").concat(x.join("\n")).concat(g||""),"api.ts":"".concat(v||"").concat(S).concat(g||"")}};var n=r(a(170)),o=(a(71),r(a(113))),c=r(a(462)),u=r(a(112)),i=r(a(471)),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.default)(e);return{code:"import ".concat(t," from ").concat(JSON.stringify(e),";"),key:t}},l=function(e){return(e.match(/{(.+?)}/g)||[]).map((function(e){return e.slice(1,-1)}))},f=function(e){return e.replace(/{(.+?)}/g,":$1")},p=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=s.apply(void 0,a),o=n.code,c=n.key;return e.unshift(o),c}},462:function(e,t,a){"use strict";var r=a(86),n=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e.schema.paths||!Object.keys(e.schema.paths).length)return null;var a={},r=Object.keys(e.schema.paths),n=(0,l.default)(r);return r.map((function(r){var l=r.slice(n.length),f=a[l]={},p=e.schema.paths[r];Object.keys(p).forEach((function(a){var r=p[a],n=f[a]={},d="".concat(l.replace(/\//,"_"),"_").concat(a);if(r.parameters){var _=(0,i.default)(r.parameters,"in"),m=n.paramType={};Object.keys(_).forEach((function(a){var r=s.pascalCase("".concat(d,"_").concat(a,"_Params"));m[a]={name:r,code:(0,u.default)(new c.SchemaPath({type:"object",properties:_[a].reduce((function(e,t){return e[t.name]=(0,o.default)((0,o.default)({},t),t.schema),e}),{}),title:r},e),(0,o.default)((0,o.default)({},t),{},{depth:2})).trim()}}));var y=n.responseType={};if(r.responses[200]){var h=s.pascalCase("".concat(d,"_Res200")),v=(0,o.default)((0,o.default)({},r.responses[200]),r.responses[200].schema);if("object"===v.type)y[200]={name:h,code:(0,u.default)(new c.SchemaPath((0,o.default)({title:h},v),e)).trim()};else if(v.$ref){var g=e.ref(v.$ref);y[200]={name:h,code:"export type ".concat(h," = ").concat(s.pascalCase(g.schema.title))}}else if("array"===v.type)if(v.items&&v.items.$ref){var b=e.ref(v.items.$ref);b&&!b.isEmpty()?y[200]={name:h,code:"export type ".concat(h," = ").concat(s.pascalCase(b.schema.title),"[]")}:y[200]={name:h,code:"export type ".concat(h," = any[]")}}else y[200]={name:h,code:"export type ".concat(h," = ").concat((0,u.fillType)(v))};else y[200]={name:h,code:"export type ".concat(h," = ").concat((0,u.fillType)(v))}}}}))})),{commonPrefix:n,data:a}};var o=n(a(38)),c=a(71),u=r(a(113)),i=n(a(463)),s=r(a(114)),l=n(a(464))},472:function(e,t,a){"use strict";var r=a(31)(a(38)),n=a(85),o=a(88);e.exports=function(e,t,a){n().use(o,{filter:t.filter}).format(e,"ts",(0,r.default)((0,r.default)({},t),{},{pretty:!0}),a)}},473:function(e,t,a){"use strict";var r=a(31)(a(38)),n=a(85),o=a(88);e.exports=function(e,t,a){n().use(o,{filter:t.filter}).format(e,"vm",(0,r.default)((0,r.default)({},t),{},{pretty:!0}),a)}},474:function(e,t,a){"use strict";var r=a(31)(a(38)),n=a(85),o=a(88);e.exports=function(e,t,a){n().use(o,{filter:t.filter}).format(e,"walli",(0,r.default)((0,r.default)({},t),{},{pretty:!0}),a)}},475:function(e,t,a){"use strict";var r=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(476)),o=function(e){e&&e instanceof Function&&Promise.resolve().then((function(){return(0,n.default)(a(477))})).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),o(e),c(e)}))};t.default=o},71:function(e,t,a){"use strict";var r=a(31);Object.defineProperty(t,"__esModule",{value:!0}),t.SchemaPath=void 0;var n=r(a(170)),o=r(a(11)),c=r(a(16)),u=r(a(30)),i=r(a(56)),s=r(a(3)),l=(r(a(451)),r(a(452)));function f(e){return e.startsWith("#")?e.replace(/^#+/,"").split("/").filter(Boolean):e}function p(e,t){var a,r=(0,s.default)(t);try{var n=function(){var t=a.value;if(!e)return{v:null};if(e.hasOwnProperty(t))e=e[t];else{if(!Array.isArray(e))return{v:null};e=e.find((function(e){return e.title===t}))}};for(r.s();!(a=r.n()).done;){var o=n();if("object"===(0,i.default)(o))return o.v}}catch(c){r.e(c)}finally{r.f()}return e}var d=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;(0,o.default)(this,e),(0,u.default)(this,"schema",void 0),(0,u.default)(this,"parent",void 0),this.schema=t,this.parent=a}return(0,c.default)(e,[{key:"clear",value:function(){var e=this;Object.keys(this.schema).forEach((function(t){delete e.schema[t]}))}},{key:"rootParent",get:function(){for(var e=this;e.parent;)e=e.parent;return e}},{key:"get",value:function(t){return new e(p(this.schema,t),this)}},{key:"has",value:function(e){return!!p(this.schema,e)}},{key:"set",value:function(e,t){return(0,l.default)(this.schema,e,t),this}},{key:"isEmpty",value:function(){return!this.schema}},{key:"fillSchema",get:function(){var e=this.schema;if(e&&e.$ref){var t=this.ref(),a=(e.$ref,(0,n.default)(e,["$ref"]));return Object.assign({},a,t.fillSchema)}return e}},{key:"ref",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.schema.$ref,a=f(t),r=this;do{e=r.get(a),r=r.parent}while(r&&e.isEmpty());return e}}]),e}();t.SchemaPath=d},85:function(e,t,a){"use strict";var r=a(31),n=r(a(56)),o=r(a(22)),c=r(a(38)),u=r(a(11)),i=r(a(16)),s=r(a(30)),l=a(71),f=r(a(453)),p=a(455),d={vm:a(456).default,walli:a(460).default,ts:a(113).default,"swagger-axios":a(461).default},_=function(){function e(){(0,u.default)(this,e),(0,s.default)(this,"transformers",[])}return(0,i.default)(e,[{key:"use",value:function(e,t){return this.transformers.push([e,t]),this}},{key:"format",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0,u=new l.SchemaPath(e);"function"===typeof a?(r=a,a={pretty:!0}):a=(0,c.default)({pretty:!0,prettyOptions:{}},a),p(this.transformers,(function(e,t){var a=(0,o.default)(t,2),r=a[0],n=a[1];return Promise.resolve(r(e,n)).then((function(){return e}))}),u).then((function(e){if("string"===typeof t){var r=t;if(!(t=d[t]))throw new Error("Formatter: "+r+" is not exists.")}return t(e,a)})).then((function(e){a.pretty&&("string"===typeof e?e=(0,f.default)(e,a.prettyOptions):e&&"object"===(0,n.default)(e)&&Object.keys(e).forEach((function(t){e[t]=(0,f.default)(e[t],a.prettyOptions)}))),r&&r(null,e)})).catch((function(e){r&&r(e)}))}}]),e}();e.exports=function(){return new _}},87:function(e,t,a){"use strict";var r=a(458);t.keyword=function(e){return(e||"").replace(/[^\w]/g,"_")};var n=a(459);t.uKeyword=function(e){return t.keyword(e)||n("_")},t.type=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toLowerCase();return{integer:"number",number:"number",string:"string",object:"object",array:"array",boolean:"boolean",function:"function"}[t]||e},t.toString=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.empty,n=void 0===a?"undefined":a;return"undefined"===typeof e?n:Array.isArray(e)?"[".concat(e.map((function(e){return JSON.stringify(e)})).join(", "),"]"):r(e)?JSON.stringify(e):"string"===typeof e?e:null===e?"null":e.toString()||""}},88:function(e,t,a){"use strict";a(71);e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.filter,r=void 0===a?/.*/:a;e.schema.swagger&&Object.keys(e.schema.definitions).filter((function(t){return r.lastIndex=0,!!r.test(t)||(delete e.schema.definitions[t],!1)})).forEach((function(t){var a=e.get(["definitions",t]);a.get("title").isEmpty()&&a.set("title",t)}))}}},[[172,1,2]]]);
//# sourceMappingURL=main.b257b9c4.chunk.js.map