(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-299ebf81"],{"155b":function(t,e,s){t.exports=s.p+"assets/img/womanf.png"},"1dce":function(t,e,s){},2783:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"chatcontent"},[s("ul",t._l(t.infobox,(function(e,i){return s("li",{key:i},[s("div",{staticClass:"time"},[t._v(t._s(e.time))]),0===e.type?s("div",{staticClass:"mine_box"},[s("div",{staticClass:"imgbox"},[s("img",{staticClass:"img",attrs:{src:t.imgbox[t.userInfo.headimg||0].src,alt:""}})]),s("div",{staticClass:"mine_msg"},[s("div",{staticClass:"mine_info"},[t._v(t._s(e.content))])])]):1===e.type?s("div",{staticClass:"other_box"},[s("div",{staticClass:"imgbox"},[s("img",{staticClass:"img",attrs:{src:t.imgbox[t.$route.query.id.headimg||0].src,alt:""}})]),s("div",{staticClass:"other_msg"},[s("div",{staticClass:"other_info",domProps:{innerHTML:t._s(e.content)}})])]):t._e()])})),0)]),s("div",{staticClass:"btn_btm"},[s("van-search",{staticClass:"search_box",attrs:{shape:"round","left-icon":"chat"},on:{focus:t.softTe},model:{value:t.info,callback:function(e){t.info="string"===typeof e?e.trim():e},expression:"info"}}),s("van-button",{staticClass:"search_btn",attrs:{round:"",type:"primary",size:"small"},on:{click:t.searchbtn}},[t._v("确定")])],1)])},n=[],o=s("5530"),a=s("2f62"),c=s("d399"),l={nmae:"chatinfo",data:function(){return{info:"",infobox:[],date:"",imgbox:[{id:0,src:s("7f56")},{id:1,src:s("155b")},{id:2,src:s("dafb")},{id:3,src:s("9071")}]}},computed:Object(o["a"])({},Object(a["c"])(["userInfo"])),methods:Object(o["a"])({},Object(a["b"])(["clearNewMsg","addNewMsg"]),{searchbtn:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,s=(new Date).getDate(),i=(new Date).getHours(),n=(new Date).getMinutes(),o=(new Date).getSeconds(),a=null;a=i>=12?"下午":"早上";var l=t+"/"+e+"/"+s+" "+a+i+":"+n+":"+o;if(this.info.length){this.infobox.push({content:this.info,time:l,tel:this.userInfo.tel,histel:this.$route.query.id.tel,type:0}),this.$socket.emit("sendMsg",{content:this.info,time:l,tel:this.userInfo.tel,histel:this.$route.query.id.tel,type:0}),this.info="","/chatinfo"==this.$route.path&&this.scrollToBottom(),localStorage.setItem(this.$route.query.id.tel,JSON.stringify(this.infobox));var r=document.getElementsByClassName("chatcontent")[0].style.height;document.getElementsByClassName("chatcontent")[0].style.height=r-50+"px"}else Object(c["a"])("不能输入空值")},scrollToBottom:function(){"/chatinfo"==this.$route.path&&setTimeout((function(){var t=document.getElementsByClassName("chatcontent")[0];t.scrollTop=t.scrollHeight||0}),100)},softTe:function(){var t=document.getElementsByClassName("chatcontent")[0].style.height;document.getElementsByClassName("chatcontent")[0].style.height=t-50+"px"},getMsg:function(){var t=this;this.$socket.removeAllListeners("getMsg"),this.$socket.on("getMsg",(function(e){"/chatinfo"==t.$route.path&&t.$route.query.id.tel==e.tel&&e.histel===t.userInfo.tel&&(e.type=1,t.infobox.push(e),localStorage.setItem(e.tel,JSON.stringify(t.infobox)),t.scrollToBottom())}))},init:function(){var t=localStorage.getItem(this.$route.query.id.tel)||[];if(t.length>0){var e=JSON.parse(t);if(e.length>30){for(var s=[],i=e.length-30;i<e.length;i++)s.push(e[i]);this.infobox=s}else this.infobox=e;this.scrollToBottom()}}}),created:function(){this.clearNewMsg(this.$route.query.id.tel),this.getMsg(),this.init()}},r=l,h=(s("7212"),s("2877")),u=Object(h["a"])(r,i,n,!1,null,"380de6fb",null);e["default"]=u.exports},7212:function(t,e,s){"use strict";var i=s("1dce"),n=s.n(i);n.a},"7f56":function(t,e,s){t.exports=s.p+"assets/img/manf.png"},9071:function(t,e,s){t.exports=s.p+"assets/img/womans.png"},dafb:function(t,e,s){t.exports=s.p+"assets/img/mans.png"}}]);
//# sourceMappingURL=chunk-299ebf81.js.map