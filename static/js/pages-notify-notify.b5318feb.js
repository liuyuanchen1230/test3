(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notify-notify"],{"0c50":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"wrap"},[this.title?e("v-uni-view",{staticClass:"title"},[this._v(this._s(this.title))]):this._e(),this._t("default")],2)},a=[]},"0fc4":function(t,e,n){"use strict";n.r(e);var o=n("0c50"),a=n("c680");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("ee93");var r=n("828b"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"4816ebba",null,!1,o["a"],void 0);e["default"]=c.exports},"55da":function(t,e,n){"use strict";n.r(e);var o=n("9f28"),a=n("5a31");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var r=n("828b"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"695855fa",null,!1,o["a"],void 0);e["default"]=c.exports},"5a31":function(t,e,n){"use strict";n.r(e);var o=n("e35c"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"912d":function(t,e,n){var o=n("f868");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("967d").default;a("73ceccc0",o,!0,{sourceMap:!1,shadowMode:!1})},"9f28":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("wrap",{attrs:{title:"基础用法"}},[n("van-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showNotify.apply(void 0,arguments)}}},[t._v("显示消息通知")])],1),n("wrap",{attrs:{title:"自定义配置"}},[n("van-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showNotify2.apply(void 0,arguments)}}},[t._v("显示自定义消息通知")])],1),n("van-notify",{attrs:{id:"van-notify"}}),n("van-notify",{attrs:{id:"custom-selector"}})],1)},a=[]},ba24:function(t,e,n){"use strict";n("6a54");var o=this&&this.__assign||function(){return o=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},o.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n("bf7e"),i={selector:"#van-notify",type:"danger",message:"",background:"",duration:3e3,zIndex:110,top:0,color:a.WHITE,safeAreaInsetTop:!1,onClick:function(){},onOpened:function(){},onClose:function(){}};function r(t){return"string"===typeof t?{message:t}:t}function c(){var t=getCurrentPages();return t[t.length-1]}function u(t){t=o(o({},i),r(t));var e=t.context||c(),n=e.selectComponent(t.selector);if(delete t.context,delete t.selector,n)return n.setData(t),n.showNotify(),n;console.warn("未找到 van-notify 节点，请确认 selector 及 context 是否正确")}e.default=u,u.clear=function(t){t=o(o({},i),r(t));var e=t.context||c(),n=e.selectComponent(t.selector);n&&n.hide()}},c680:function(t,e,n){"use strict";n.r(e);var o=n("f305"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},e35c:function(t,e,n){"use strict";n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("0fc4")),i=o(n("ba24")),r={methods:{showNotify:function(){(0,i.default)("通知内容")},showNotify2:function(){(0,i.default)({duration:1e3,text:"通知内容",selector:"#custom-selector",backgroundColor:"#1989fa"})}},components:{wrap:a.default}};e.default=r},ee93:function(t,e,n){"use strict";var o=n("912d"),a=n.n(o);a.a},f305:function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={props:{title:{default:""}}}},f868:function(t,e,n){var o=n("c86c");e=o(!1),e.push([t.i,".title[data-v-4816ebba]{margin:0;font-weight:400;font-size:14px;color:rgba(69,90,100,.6);padding:20px 15px 15px}.wrap[data-v-4816ebba]{padding:10px}",""]),t.exports=e}}]);