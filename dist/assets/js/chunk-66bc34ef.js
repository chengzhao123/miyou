(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66bc34ef"],{"0061":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-notice-bar",{attrs:{scrollable:!0,text:"设置密保方便自己忘记密码时能够找回,设置密保方便自己忘记密码时能够找回,设置密保方便自己忘记密码时能够找回","left-icon":"volume-o"}}),n("van-cell-group",[n("van-field",{attrs:{type:"text",maxlength:"12",center:"",clearable:"",placeholder:"请输入密保问题",label:"问题"},model:{value:e.question,callback:function(t){e.question="string"===typeof t?t.trim():t},expression:"question"}}),n("van-field",{attrs:{type:"text",maxlength:"6",center:"",clearable:"",placeholder:"请输入答案",label:"答案"},model:{value:e.answer,callback:function(t){e.answer="string"===typeof t?t.trim():t},expression:"answer"}}),n("van-button",{attrs:{color:"#00887a",block:""},on:{click:e.handleSubmit}},[e._v("确定提交")])],1)],1)},u=[],a=(n("96cf"),n("1da1")),c=n("5530"),s=n("d399"),i=n("2f62"),o=n("c24f"),p={name:"userinfo",data:function(){return{question:"",answer:""}},computed:Object(c["a"])({},Object(i["c"])(["userInfo"])),methods:Object(c["a"])({},Object(i["b"])(["updateUserInfo"]),{handleSubmit:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.question){t.next=3;break}return Object(s["a"])("问题不能为空"),t.abrupt("return");case 3:if(e.answer){t.next=6;break}return Object(s["a"])("答案不能为空"),t.abrupt("return");case 6:if(e.question!=e.userInfo.question||e.answer!=e.userInfo.answer){t.next=9;break}return Object(s["a"])("新问题和新答案不能同时和原问题和原答案相同"),t.abrupt("return");case 9:return n={tel:e.userInfo.tel,question:e.question,answer:e.answer},t.next=12,Object(o["f"])(n);case 12:r=t.sent,r?(1===r.type&&(e.updateUserInfo(r.data),e.$router.push("/password")),Object(s["a"])(r.message)):Object(s["a"])("似乎出现了错误");case 14:case"end":return t.stop()}}),t)})))()}}),mounted:function(){this.question=this.userInfo.question,this.answer=this.userInfo.answer}},f=p,l=n("2877"),b=Object(l["a"])(f,r,u,!1,null,"1e2b68f1",null);t["default"]=b.exports},c24f:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return b})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return x}));n("96cf");var r=n("1da1"),u=n("b775");function a(e){return c.apply(this,arguments)}function c(){return c=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/reg",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function s(e){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/update",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return l=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/forget",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return h=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/changePwd",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function w(e){return d.apply(this,arguments)}function d(){return d=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/mibaoSet",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/forgetTel",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return j=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("user/forgetAnswer",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}}}]);
//# sourceMappingURL=chunk-66bc34ef.js.map