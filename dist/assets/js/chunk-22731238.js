(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22731238"],{"155b":function(e,t,s){e.exports=s.p+"assets/img/womanf.png"},"39b2":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-content",attrs:{id:"list-content"}},[s("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:e.onRefresh},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},e._l(e.listinfo(),(function(t,o){return s("van-swipe-cell",{directives:[{name:"show",rawName:"v-show",value:!t.remove,expression:"!item.remove"}],key:o,attrs:{"stop-propagation":""},nativeOn:{click:function(s){return e.goChat(t)}}},[s("van-cell",{style:{background:t.toTop?"#f8f9fb":"white",border:"1px solid #e6e6e6"},attrs:{border:!0}},[s("template",{slot:"title"},[s("img",{staticClass:"imgbg",attrs:{src:e.imgbox[t.headimg||0].src}}),s("div",{staticClass:"imgcot"},[s("div",[e._v(e._s(t.name||0))]),s("div",{staticClass:"con"},[e._v(" "+e._s(e.lastMsg(t.tel))+" ")])])]),s("template",{slot:"default"},[e.newMsg&&-1!=e.newMsg.indexOf(t.tel)?s("span",{staticClass:"dot"},[e._v(e._s(e.num(t.tel)))]):e._e()])],2),s("template",{slot:"right"},[t.toTop?e._e():s("van-button",{staticClass:"rbtn",attrs:{square:"",color:"#e6e6e6",text:"置顶"},on:{click:function(t){return e.toTop(o)}}}),t.toTop?s("van-button",{staticClass:"rbtn",attrs:{square:"",color:"#e6e6e6",text:"取消置顶"},on:{click:function(t){return e.canceltoTop(o)}}}):e._e(),s("van-button",{staticClass:"rbtn",attrs:{square:"",text:"删除",color:"#eb4310"},on:{click:function(t){return e.remove(o)}}})],1)],2)})),1)],1)},n=[],i=(s("a434"),s("b0c0"),s("5530")),r=s("2f62"),l=s("d399"),a={name:"chat",data:function(){return{loading:!1,isLoading:!1,list:[],imgbox:[{id:0,src:s("7f56")},{id:1,src:s("155b")},{id:2,src:s("dafb")},{id:3,src:s("9071")}]}},computed:Object(i["a"])({},Object(r["c"])(["userInfo","newMsg","newFir"])),methods:Object(i["a"])({},Object(r["b"])(["clearNewMsg","addNewMsg","changMsg","updateUserInfo"]),{listinfo:function(){var e=this.userInfo.friends;return e},num:function(e){for(var t=0,s=0;s<this.newMsg.length;s++)this.newMsg[s]==e&&t++;return t>99?"99+":t},lastMsg:function(e){var t=JSON.parse(localStorage.getItem(e))||[];return t&&t.length>0?t[t.length-1].content:"我们已是好友，开始聊天吧"},onRefresh:function(){var e=this;setTimeout((function(){e.finished=!1,e.isLoading=!1}),1500)},goChat:function(e){this.$router.push({path:"/chatinfo",query:{id:e}})},cont:function(e){var t=JSON.parse(localStorage.getItem(e))||[];return t?t[t.length-1].content:void 0},toTop:function(e){var t=this.userInfo.friends;if(0==t[e].toTop&&t.length>=2){for(var s=0,o=0;s<t.length;s++)if(0==t[s].toTop&&(o++,1==o)){var n=t[e].tel,i=t[e];i.toTop=!0,t.splice(e,1),t.unshift(i),this.userInfo.friends=t,this.updateUserInfo(this.userInfo);var r={tel:this.userInfo.tel,histel:n,status:!0,data:t};this.$socket.emit("toTop",r)}}else if(0==t[e].toTop&&t.length<2){t[0].toTop=!0;n=t[0].tel;this.userInfo.friends=t,this.updateUserInfo(this.userInfo);var l={tel:this.userInfo.tel,histel:n,status:!0,data:t};this.$socket.emit("toTop",l)}},canceltoTop:function(e){var t=this.userInfo.friends;if(1==t[e].toTop&&t.length>=2){for(var s=0,o=0,n=0;s<t.length;s++)if(0==t[s].toTop){if(o++,1==o){t[e].toTop=!1;var i=t[e].tel,r=t[e];t.splice(e,1),t.splice(s,0,r),this.userInfo.friends=t,this.updateUserInfo(this.userInfo);var l={tel:this.userInfo.tel,histel:i,status:!1,data:t};this.$socket.emit("toTop",l)}}else if(n++,n==t.length){t[e].toTop=!1;i=t[e].tel,r=t[e];t.splice(e,1),t.push(r),this.userInfo.friends=t,this.updateUserInfo(this.userInfo);var a={tel:this.userInfo.tel,histel:i,status:!1,data:t};this.$socket.emit("toTop",a)}}else if(1==t[e].toTop&&t.length<2){t[e].toTop=!1;var f={tel:this.userInfo.tel,histel:t[e].tel,status:!1,data:t};this.$socket.emit("toTop",f)}},remove:function(e){var t=this.list;t[e].remove=!0;for(var s=0;s<this.userInfo.friends.length;s++)this.userInfo.friends[s].tel==t[e].tel&&(this.userInfo.friends[s].remove=!0,this.updateUserInfo(this.userInfo));this.clearNewMsg(t[e].tel);var o={tel:this.userInfo.tel,histel:t[e].tel,status:!0};this.$socket.emit("remove",o)}}),mounted:function(){var e=this;this.$socket.removeAllListeners("agreeFir"),this.$socket.removeAllListeners("agreeFirMe"),this.$socket.removeAllListeners("updateInfo"),this.$socket.removeAllListeners("updateUser"),this.$socket.removeAllListeners("toTop"),this.$socket.removeAllListeners("remove"),this.$socket.removeAllListeners("getMsg"),this.$socket.removeAllListeners("online"),this.$socket.removeAllListeners("getFriend"),this.$socket.removeAllListeners("notGetMsg"),this.$socket.removeAllListeners("newFirend"),this.$socket.removeAllListeners("warning"),this.$socket.removeAllListeners("surePos"),this.$socket.removeAllListeners("quitremove"),this.$socket.removeAllListeners("removeMeinfo"),this.$socket.removeAllListeners("removeHisinfo"),this.list=this.userInfo.friends,this.$socket.on("notGetMsg",(function(t){for(var s=0;s<t.length;s++)if(t[s].histel==e.userInfo.tel){e.addNewMsg(t[s].tel),t[s].type=1;var o=JSON.parse(localStorage.getItem(t[s].tel))||[];o.push(t[s]),localStorage.setItem(t[s].tel,JSON.stringify(o))}})),this.$socket.on("quitremove",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("surePos",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("removeMeinfo",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("removeHisinfo",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("getFriend",(function(t){t.histel==e.userInfo.tel&&(e.changMsg(!0),localStorage.setItem("newFir",!0),Object(l["a"])("收到新的好友申请"))})),this.$socket.on("warning",(function(t){t==e.userInfo.tel&&Object(l["a"])("你的账号在别处正在尝试登录，请更改密码！")})),this.$socket.on("newFirend",(function(t){for(var s=0,o=0;o<t.length;o++)t[o].histel==e.userInfo.tel&&(s++,1==s&&(e.changMsg(!0),localStorage.setItem("newFir",!0),Object(l["a"])("收到新的好友申请")))})),this.$socket.on("getMsg",(function(t){if(t.histel===e.userInfo.tel){e.addNewMsg(t.tel),t.type=1;for(var s=0;s<e.userInfo.friends.length;s++)e.userInfo.friends[s]==t.tel&&(e.userInfo.friends[s].remove=!1,e.updateUserInfo(e.userInfo));var o=JSON.parse(localStorage.getItem(t.tel))||[];o.push(t),localStorage.setItem(t.tel,JSON.stringify(o))}})),this.$socket.on("agreeFir",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("agreeFirMe",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("online",(function(t){var s=localStorage.getItem("checked");if(1==s)for(var o=0;o<t.friends.length;o++)if(t.friends[o].tel==e.userInfo.tel){var n="你的好友 ".concat(t.name," 上线了");e.$notify({type:"success",message:n,duration:1e3})}})),this.$socket.on("updateInfo",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("updateUser",(function(t){t.tel==e.userInfo.tel&&e.updateUserInfo(t)})),this.$socket.on("toTop",(function(t){t.tel==e.userInfo.tel&&(e.updateUserInfo(t),e.listinfo())})),this.$socket.on("remove",(function(t){t.tel==e.userInfo.tel&&(e.updateUserInfo(t),e.listinfo())}))}},f=a,c=(s("7648"),s("2877")),u=Object(c["a"])(f,o,n,!1,null,"38ec8b54",null);t["default"]=u.exports},7648:function(e,t,s){"use strict";var o=s("935a"),n=s.n(o);n.a},"7f56":function(e,t,s){e.exports=s.p+"assets/img/manf.png"},9071:function(e,t,s){e.exports=s.p+"assets/img/womans.png"},"935a":function(e,t,s){},a434:function(e,t,s){"use strict";var o=s("23e7"),n=s("23cb"),i=s("a691"),r=s("50c4"),l=s("7b0b"),a=s("65f0"),f=s("8418"),c=s("1dde"),u=s("ae40"),h=c("splice"),d=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!h||!d},{splice:function(e,t){var s,o,c,u,h,d,I=l(this),k=r(I.length),$=n(e,k),b=arguments.length;if(0===b?s=o=0:1===b?(s=0,o=k-$):(s=b-2,o=g(p(i(t),0),k-$)),k+s-o>v)throw TypeError(m);for(c=a(I,o),u=0;u<o;u++)h=$+u,h in I&&f(c,u,I[h]);if(c.length=o,s<o){for(u=$;u<k-o;u++)h=u+o,d=u+s,h in I?I[d]=I[h]:delete I[d];for(u=k;u>k-o+s;u--)delete I[u-1]}else if(s>o)for(u=k-o;u>$;u--)h=u+o-1,d=u+s-1,h in I?I[d]=I[h]:delete I[d];for(u=0;u<s;u++)I[u+$]=arguments[u+2];return I.length=k-o+s,c}})},dafb:function(e,t,s){e.exports=s.p+"assets/img/mans.png"}}]);
//# sourceMappingURL=chunk-22731238.js.map