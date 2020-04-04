var mongose=require('mongoose');
mongose.set('useFindAndModify', false)
var Schema=mongose.Schema;
var schema=new Schema({
    name:{
        type: String,
        default: '用户'
    },
    tel: {
        type: Number,
        default: null
    },
    password:{
        type: Number,
        default: null
    },
    //性别 0男 1女
    sex:{
        type:Number,
        default: 0
    },
    //好友
    friends:{
        type: Array,
        default: []
    },
    //自己发送的好友申请 
    sendFriend:{ 
        type: Array,
        default: []
    },
    //收到的好友申请
    getFriend: { 
        type: Array,
        default: []
    },
    // 头像
    headimg: {
        type: Number,
        default : 0
    },
    lng: {
        type: Number,
        default: 103.591019
    },
    lat: {
        type: Number,
        default:30.886797
    },
    question: {type: String},
    answer: {type: String}
})
var info=mongose.model('info',schema)
module.exports = info