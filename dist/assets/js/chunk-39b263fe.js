(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39b263fe"],{"155b":function(t,e,s){t.exports=s.p+"assets/img/womanf.png"},"39b2":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list-content",attrs:{id:"list-content"}},[s("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.listinfo(),(function(e,o){return e.remove?t._e():s("van-swipe-cell",{key:o,attrs:{"stop-propagation":""},nativeOn:{click:function(s){return t.goChat(e)}}},[s("van-cell",{style:{background:e.toTop?"lightgray":"white"},attrs:{border:!0}},[s("template",{slot:"title"},[s("img",{staticClass:"imgbg",attrs:{src:t.imgbox[e.headimg||0].src}}),s("div",{staticClass:"imgcot"},[s("div",[t._v(t._s(e.name||0))]),s("div",{staticClass:"con"},[t._v(" "+t._s(t.lastMsg(e.tel))+" ")])])]),s("template",{slot:"default"},[t.newMsg&&-1!=t.newMsg.indexOf(e.tel)?s("span",{staticClass:"dot"},[t._v(t._s(t.num(e.tel)))]):t._e()])],2),s("template",{slot:"right"},[e.toTop?t._e():s("van-button",{attrs:{square:"",type:"primary",text:"置顶"},on:{click:function(e){return t.toTop(o)}}}),e.toTop?s("van-button",{attrs:{square:"",type:"primary",text:"取消置顶"},on:{click:function(e){return t.canceltoTop(o)}}}):t._e(),e.toTop?t._e():s("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(e){return t.remove(o)}}})],1)],2)})),1)],1)},n=[],i=(s("a434"),s("b0c0"),s("5530")),r=s("2f62"),a=s("d399"),l={name:"chat",data:function(){return{loading:!1,isLoading:!1,list:[],socket:null,imgbox:[{id:0,src:s("7f56")},{id:1,src:s("155b")},{id:2,src:s("dafb")},{id:3,src:s("9071")}]}},computed:Object(i["a"])({},Object(r["c"])(["userInfo","newMsg","newFir"])),methods:Object(i["a"])({},Object(r["b"])(["clearNewMsg","addNewMsg","changMsg","updateUserInfo"]),{listinfo:function(){var t=this.userInfo.friends;return t},num:function(t){var e=0;for(e=0;e<this.newMsg.length;e++)this.newMsg[e].tel==t&&e++;return e>99?"99+":e},lastMsg:function(t){var e=JSON.parse(localStorage.getItem(t))||[];return e&&e.length>0?e[e.length-1].content:"我们已是好友，开始聊天吧"},onRefresh:function(){var t=this;setTimeout((function(){t.finished=!1,t.isLoading=!1}),1500)},goChat:function(t){this.$router.push({path:"/chatinfo",query:{id:t}})},cont:function(t){var e=JSON.parse(localStorage.getItem(t));return e?e[e.length-1].content:void 0},toTop:function(t){var e=this.userInfo.friends;if(0==e[t].toTop&&e.length>=2){for(var s=0,o=0;s<e.length;s++)if(0==e[s].toTop&&(o++,1==o)){e[t].toTop=!0;var n=e[t].tel,i=e[t];e.splice(t,1),e.unshift(i);var r={tel:this.userInfo.tel,histel:n,status:!0,data:e};this.$socket.emit("toTop",r)}}else if(0==e[t].toTop&&e.length<2){e[t].toTop=!0;var a={tel:this.userInfo.tel,histel:e[t].tel,status:!0,data:e};this.$socket.emit("toTop",a)}},canceltoTop:function(t){var e=this.userInfo.friends;if(1==e[t].toTop&&e.length>=2){for(var s=0,o=0,n=0;s<e.length;s++)if(0==e[s].toTop){if(o++,1==o){e[t].toTop=!1;var i=e[t].tel,r=e[t];e.splice(t,1),e.splice(s,0,r);var a={tel:this.userInfo.tel,histel:i,status:!1,data:e};this.$socket.emit("toTop",a)}}else if(n++,n==e.length){e[t].toTop=!1;i=e[t].tel,r=e[t];e.splice(t,1),e.push(r);var l={tel:this.userInfo.tel,histel:i,status:!1,data:e};this.$socket.emit("toTop",l)}}else if(1==e[t].toTop&&e.length<2){e[t].toTop=!1;var c={tel:this.userInfo.tel,histel:e[t].tel,status:!1,data:e};this.$socket.emit("toTop",c)}},remove:function(t){var e=this.list;e[t].remove=!0;var s={tel:this.userInfo.tel,histel:e[t].tel,status:!0};this.$socket.emit("remove",s)}}),mounted:function(){var t=this;this.$socket.removeAllListeners("agreeFir"),this.$socket.removeAllListeners("updateInfo"),this.$socket.removeAllListeners("updateUser"),this.$socket.removeAllListeners("toTop"),this.$socket.removeAllListeners("remove"),this.$socket.removeAllListeners("getMsg"),this.$socket.removeAllListeners("online"),this.$socket.removeAllListeners("getFriend"),this.$socket.removeAllListeners("notGetMsg"),this.$socket.removeAllListeners("newFirend"),this.list=this.userInfo.friends,this.$socket.on("notGetMsg",(function(e){for(var s=0;s<e.length;s++)if(e[s].histel==t.userInfo.tel){t.addNewMsg(e[s].tel),e[s].type=1;var o=JSON.parse(localStorage.getItem(e[s].tel))||[];o.push(e[s]),localStorage.setItem(e[s].tel,JSON.stringify(o))}})),this.$socket.on("getFriend",(function(e){e.histel==t.userInfo.tel&&(t.changMsg(!0),localStorage.setItem("newFir",!0),Object(a["a"])("收到新的好友申请"))})),this.$socket.on("newFirend",(function(e){for(var s=0,o=0;o<e.length;o++)e[o].histel==t.userInfo.tel&&(s++,1==s&&(t.changMsg(!0),localStorage.setItem("newFir",!0),Object(a["a"])("收到新的好友申请")))})),this.$socket.on("getMsg",(function(e){if(e.histel===t.userInfo.tel){t.addNewMsg(e.tel),e.type=1;var s=JSON.parse(localStorage.getItem(e.tel))||[];s.push(e),localStorage.setItem(e.tel,JSON.stringify(s))}})),this.$socket.on("agreeFir",(function(e){e.tel==t.userInfo.tel&&t.updateUserInfo(e)})),this.$socket.on("online",(function(e){var s=localStorage.getItem("checked");if(1==s)for(var o=0;o<e.friends.length;o++)if(e.friends[o].tel==t.userInfo.tel){var n="你的好友 ".concat(e.name," 上线了");t.$notify({type:"success",message:n,duration:1e3})}})),this.$socket.on("updateInfo",(function(e){e.tel==t.userInfo.tel&&t.updateUserInfo(e)})),this.$socket.on("updateUser",(function(e){e.tel==t.userInfo.tel&&t.updateUserInfo(e)})),this.$socket.on("toTop",(function(e){e.tel==t.userInfo.tel&&(t.updateUserInfo(e),t.listinfo())})),this.$socket.on("remove",(function(e){e.tel==t.userInfo.tel&&(t.updateUserInfo(e),t.listinfo())}))}},c=l,f=(s("9161"),s("2877")),u=Object(f["a"])(c,o,n,!1,null,"07304cda",null);e["default"]=u.exports},"4c04":function(t,e,s){},"7f56":function(t,e,s){t.exports=s.p+"assets/img/manf.png"},9071:function(t,e,s){t.exports=s.p+"assets/img/womans.png"},9161:function(t,e,s){"use strict";var o=s("4c04"),n=s.n(o);n.a},a434:function(t,e,s){"use strict";var o=s("23e7"),n=s("23cb"),i=s("a691"),r=s("50c4"),a=s("7b0b"),l=s("65f0"),c=s("8418"),f=s("1dde"),u=s("ae40"),h=f("splice"),g=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,d=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!h||!g},{splice:function(t,e){var s,o,f,u,h,g,k=a(this),I=r(k.length),b=n(t,I),$=arguments.length;if(0===$?s=o=0:1===$?(s=0,o=I-b):(s=$-2,o=d(p(i(e),0),I-b)),I+s-o>m)throw TypeError(v);for(f=l(k,o),u=0;u<o;u++)h=b+u,h in k&&c(f,u,k[h]);if(f.length=o,s<o){for(u=b;u<I-o;u++)h=u+o,g=u+s,h in k?k[g]=k[h]:delete k[g];for(u=I;u>I-o+s;u--)delete k[u-1]}else if(s>o)for(u=I-o;u>b;u--)h=u+o-1,g=u+s-1,h in k?k[g]=k[h]:delete k[g];for(u=0;u<s;u++)k[u+b]=arguments[u+2];return k.length=I-o+s,f}})},dafb:function(t,e,s){t.exports=s.p+"assets/img/mans.png"}}]);
//# sourceMappingURL=chunk-39b263fe.js.map