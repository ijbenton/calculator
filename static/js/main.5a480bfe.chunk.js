(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],[,function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return u}));var n=a(2),l=a(0),r=a.n(l),_=Object(l.createContext)([{},function(){}]),u=function(e){var t=Object(l.useState)({display:"0",equation:"0",lastClicked:"",operators:0}),a=Object(n.a)(t,2),u=a[0],i=a[1];return r.a.createElement(_.Provider,{value:[u,i]},e.children)}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_19496_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),C_Users_19496_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_context_calculatorContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(a,!0).forEach((function(t){Object(C_Users_19496_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Buttons=function Buttons(){var _useContext=Object(react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_calculatorContext__WEBPACK_IMPORTED_MODULE_3__.a),_useContext2=Object(C_Users_19496_Desktop_projects_react_calculator_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useContext,2),state=_useContext2[0],setState=_useContext2[1],handleNum=function(e){console.log(state),"0"===state.display&&"0"!==e.target.value&&"."!==e.target.value||"="===state.lastClicked?(clearDisplay(),clearEquation(),setState((function(t){return _objectSpread({},t,{display:e.target.value,equation:e.target.value,lastClicked:e.target.value})}))):"."===e.target.value&&-1===state.display.indexOf(".")||("+"===state.lastClicked||"*"===state.lastClicked||"/"===state.lastClicked||"-"===state.lastClicked)&&"0"===e.target.value?setState((function(t){return _objectSpread({},t,{display:t.display+e.target.value,equation:t.equation+e.target.value,lastClicked:e.target.value})})):"0"===state.lastClicked?(clearDisplay(),setState((function(t){return _objectSpread({},t,{equation:t.equation.substring(0,t.equation.length-1)+e.target.value,display:e.target.value,lastClicked:e.target.value,operators:1})}))):"."!==e.target.value&&"0"!==state.display&&state.display.length<21&&setState((function(t){return _objectSpread({},t,{display:t.display+e.target.value,equation:t.equation+e.target.value,lastClicked:e.target.value})})),e.persist()},handleOperator=function(e){"0"===state.display||"0"===state.equation?(clearDisplay(),clearEquation(),setState((function(t){return _objectSpread({},t,{display:e.target.value,equation:e.target.value,lastClicked:e.target.value,operators:1})}))):"="===state.lastClicked?(clearDisplay(),setState((function(t){return _objectSpread({},t,{display:e.target.value,equation:t.equation.substring(t.equation.indexOf("=")+1,t.equation.length)+e.target.value,lastClicked:e.target.value,operators:1})}))):"-"!==e.target.value||"+"!==state.lastClicked&&"*"!==state.lastClicked&&"/"!==state.lastClicked?"-"===state.lastClicked&&2===state.operators&&"-"!==e.target.value?(clearDisplay(),setState((function(t){return _objectSpread({},t,{equation:t.equation.substring(0,t.equation.length-2)+e.target.value,display:e.target.value,lastClicked:e.target.value})}))):"+"!==e.target.value&&"*"!==e.target.value&&"/"!==e.target.value||"+"!==state.lastClicked&&"*"!==state.lastClicked&&"/"!==state.lastClicked&&"-"!==state.lastClicked?"+"!==e.target.value&&"*"!==e.target.value&&"/"!==e.target.value&&"-"!==e.target.value||"+"===state.lastClicked||"*"===state.lastClicked||"/"===state.lastClicked||"-"===state.lastClicked||(clearDisplay(),setState((function(t){return _objectSpread({},t,{equation:t.equation+e.target.value,display:e.target.value,lastClicked:e.target.value,operators:1})}))):(clearDisplay(),setState((function(t){return _objectSpread({},t,{equation:t.equation.substring(0,t.equation.length-1)+e.target.value,display:e.target.value,lastClicked:e.target.value,operators:1})}))):(clearDisplay(),setState((function(t){return _objectSpread({},t,{equation:t.equation+e.target.value,display:e.target.value,lastClicked:e.target.value,operators:2})}))),e.persist()},handleEval=function handleEval(e){var trimmedEquation="",testRegex=/^([*\/]{1,}[+-]*)+([\d.]*[-+*\/]*)*([\d.]*[-+*\/]{1,}[\d.]*)*$|(^[.=]+$)/;if((state.equation.endsWith("+-")||state.equation.endsWith("*-")||state.equation.endsWith("/-"))&&"="!==state.lastClicked&&!1===testRegex.test(state.equation)){trimmedEquation=state.equation.substring(0,state.equation.length-2);var answer=Math.round(1e12*eval(trimmedEquation))/1e12;setState((function(t){return _objectSpread({},t,{equation:"".concat(trimmedEquation," = ").concat(answer),display:answer,lastClicked:e.target.value})}))}else if((state.equation.endsWith("+")||state.equation.endsWith("-")||state.equation.endsWith("*")||state.equation.endsWith("/"))&&"="!==state.lastClicked&&!1===testRegex.test(state.equation)){trimmedEquation=state.equation.substring(0,state.equation.length-1);var _answer=Math.round(1e12*eval(trimmedEquation))/1e12;setState((function(t){return _objectSpread({},t,{equation:"".concat(trimmedEquation," = ").concat(_answer),display:_answer,lastClicked:e.target.value})}))}else if("="!==state.lastClicked&&!1===testRegex.test(state.equation)){var _answer2=Math.round(1e12*eval(state.equation))/1e12;setState((function(t){return _objectSpread({},t,{equation:"".concat(t.equation," = ").concat(_answer2),display:_answer2,lastClicked:e.target.value})}))}else"="!==state.lastClicked&&setState((function(t){return _objectSpread({},t,{equation:"Error",display:"0",lastClicked:e.target.value})}));e.persist()},clearDisplay=function(){setState((function(e){return _objectSpread({},e,{display:"0"})}))},clearEquation=function(){setState((function(e){return _objectSpread({},e,{equation:"0"})}))},onClear=function(){clearDisplay(),clearEquation()};return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{className:"buttons"},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"clear",value:"AC",onClick:onClear},"AC"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"divide",value:"/",onClick:handleOperator},"/"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"multiply",value:"*",onClick:handleOperator},"*"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"seven",value:"7",onClick:handleNum},"7"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"eight",value:"8",onClick:handleNum},"8"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"nine",value:"9",onClick:handleNum},"9"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"subtract",value:"-",onClick:handleOperator},"-"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"four",value:"4",onClick:handleNum},"4"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"five",value:"5",onClick:handleNum},"5"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"six",value:"6",onClick:handleNum},"6"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"add",value:"+",onClick:handleOperator},"+"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"one",value:"1",onClick:handleNum},"1"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"two",value:"2",onClick:handleNum},"2"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"three",value:"3",onClick:handleNum},"3"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"zero",value:"0",onClick:handleNum},"0"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"decimal",value:".",onClick:handleNum},"."),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{id:"equals",value:"=",onClick:handleEval},"="))};__webpack_exports__.a=Buttons},,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),_=a.n(r),u=(a(12),a(2)),i=a(1),s=function(){var e=Object(n.useContext)(i.a),t=Object(u.a)(e,1)[0];return l.a.createElement("div",{id:"current"},l.a.createElement("div",{id:"equation"},t.equation),l.a.createElement("div",{id:"display"},t.display))},c=a(5),o=(a(13),function(){return l.a.createElement(i.b,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"appContainer"},l.a.createElement("div",{className:"calcContainer"},l.a.createElement(s,null),l.a.createElement(c.a,null)),l.a.createElement("div",{className:"author"},"Designed and Coded by",l.a.createElement("br",null),l.a.createElement("span",null,"Ian Benton")))))});_.a.render(l.a.createElement(o,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.5a480bfe.chunk.js.map