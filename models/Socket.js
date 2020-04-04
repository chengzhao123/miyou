var mongose=require('mongoose');
mongose.set('useFindAndModify', false)
var Schema=mongose.Schema;
var schema=new Schema({
    tel: {type: Number}, //自己电话
    isLogin: {type: Boolean,default: false}, // true为在线。false为不在线
    notGetMsg: {type: Array,default: []}, //未读消息 {tel:发送者电话，msg: 消息的内容，time: 时间}
    newFirend: {type: Array,default: []} //下线后收到的好友消息 {tel: 申请者电话}
})
var scoketId = mongose.model('scoketId',schema)
module.exports = scoketId