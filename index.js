//这是主页

require('events').EventEmitter.defaultMaxListeners = 0//取消最大10连接的限制 https://www.cnblogs.com/3teeth/p/9606028.html
var express=require('express');
var app=express();
var router = express.Router();
var socketModel = require('./models/Socket')
var userModel = require('./models/UserReg')
app.use(express.static(__dirname + '/dist'));//dist中的客服端打包的前端静态界面
var userId = []
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var a= 0
    io.sockets.on('connection',function(socket){
        a++
        console.log(a+'人连接')
        // 登录
        socket.on('login', res =>{
            socketModel.findOne({tel:res.tel },(err,info) =>{
                userId[res.tel] = socket.id
                console.log(userId)
                // 上线通知
                io.emit('online', res)
                if(info) {
                    socketModel.updateOne({tel:res.tel},{$set: {isLogin :true}},(err ,data) => {})
                   //下线收到的消息
                   if(info && info.notGetMsg && info.notGetMsg.length > 0) {

                      io.emit('notGetMsg',info.notGetMsg)
                      socketModel.updateOne({tel:res.tel},{$set: {notGetMsg: []}},(err ,data) => {})
                   }
                   //下线收到的好友申请
                   if(info && info.newFirend && info.newFirend.length > 0) {
                    io.emit('newFirend',info.newFirend)
                    socketModel.updateOne({tel:res.tel},{$set: {newFirend : [] }},(err ,data) => {})
                   }
                } else {
                    socketModel.create({tel: res.tel,isLogin :true})
                }
             })
        })
        // 在线 自己同意对方的申请，对方在线时，更新对方数据
        socket.on('agreeFir',res => {
            userModel.findOne({tel: res.histel}, (err,data) =>{
                io.emit('agreeFir',data)
            })
        })
        // 在线 对方同意我的好友申请时更新自己朋友
        socket.on('updateUser',res => {
            userModel.findOne({tel: res.tel}, (err,data) =>{
                for (var i = 0; i< data.friends.length; i++) {
                    userModel.findOne({tel: data.friends[i].tel}, (err,data) =>{
                       io.emit('updateUser',data)
                    })
                }
            })
        })
        // 置顶联系人
        socket.on('toTop',res => {
            userModel.updateOne({tel: res.tel}, {$set : {'friends' : res.data}},(err, data) =>{})
            userModel.findOne({tel: res.tel}, (err, data) =>{
                io.emit('toTop', data)
            })
        })
        //删除聊天人信息
        socket.on('remove',res => {
            userModel.updateOne({tel: res.tel, 'friends.tel': Number(res.histel)}, {$set : {'friends.$.remove' : res.status}},(err, data) =>{})
            userModel.findOne({tel: res.tel}, (err, data) =>{
                io.emit('remove', data)
            })
        })
        // 更新坐标
        socket.on('posUpdate',res => {
            userModel.updateOne({tel: res.tel}, {$set : {'lng' :res.lng, 'lat' : res.lat}},(err, data) =>{})
            userModel.findOne({tel: res.tel}, (err, data) =>{
                io.emit('posUpdate', data)
            })
        })
        // 清空发送的历史记录 
        socket.on('clearSendFir',res => {
            userModel.updateOne({tel: res}, {$set : {sendFriend: []}},(err, data) =>{})
        })
        // 清空收到的请求历史记录 
        socket.on('clearGetFir',res => {
            userModel.updateOne({tel: res}, {$set : {getFriend: []}},(err, data) =>{})
        })
        // 查看好友位置
        socket.on('otherPos',res => {
            userModel.findOne({tel: res.tel}, (err, data) =>{
                io.emit('otherPos', data)
            })
        })
        //发送私聊消息
         socket.on('sendMsg',res => {
               socketModel.findOne({tel: res.histel},(err,info)=>{
                    // 如果对方在线
                    if(info && info.isLogin == true) {
                      io.emit('getMsg', res)
                      userModel.updateOne({tel: res.histel, 'friends.tel': Number(res.tel)}, {$set : {'friends.$.remove' : false}},(err, data) =>{})
                      userModel.findOne({tel: res.histel}, (err,data) =>{
                          io.emit('remove', data)
                      })
                    // 如果对方没在线
                    } else {
                      socketModel.updateOne({tel: res.histel},{$push:{'notGetMsg' : res}},(err ,data) => {})
                      userModel.updateOne({tel: res.histel, 'friends.tel': Number(res.tel)}, {$set : {'friends.$.remove' : false}},(err, data) =>{})
                    }
                    
                })
        })
        //发送申请
        socket.on('addFriend', res =>{
            socketModel.findOne({tel: res.histel},(err,info)=>{
                if(info && info.isLogin == true) {
                  io.emit('getFriend',res)
                  userModel.findOne({tel: res.histel}, (err,data) => {
                    io.emit('updateInfo',data)
                  })
                } else {
                  socketModel.updateOne({tel: res.histel},{$push:{'newFirend' : res}},(err ,dataa) => {})
                }
            })
        })
        // 用户退出登录
        socket.on('quit', res =>{
            var arr = Object.keys(userId) 
                for (var i = 0; i < arr.length; i++) {
                    if(arr[i] == res) {
                        socketModel.updateOne({tel: res},{$set: {isLogin : false}},(err ,data) => {})
                        delete userId[arr[i]]
                    }
                }
        })
        // 断开连接
        socket.on('disconnect', () =>{
            a--
            var arr = Object.keys(userId) 
                for (var i = 0; i < arr.length; i++) {
                    if(userId[arr[i]] == socket.id) {
                        socketModel.updateOne({tel: Number(arr[i])},{$set: {isLogin : false}},(err ,data) => {})
                        delete userId[arr[i]]
                    }
                }
            console.log(socket.id +'断开链接,还剩下' + a+'人')
        })
    })
    
var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));//解析 x-www-form-urlencoded
app.use(bodyParser.json());
var userReg=require('./routes/userReg')//用户注册
var userLogin=require('./routes/userLogin')//用户登录
var userForget=require('./routes/userForget')//用户忘记密码
var userForgetAnswer=require('./routes/userForgetAnswer')//判断用户输入密码答案是否正确
var userForgetTel=require('./routes/userForgetTel')//判断用户注册没有
var userChangePwd=require('./routes/userChangePwd')//用户更改密码
var userMibaoSet=require('./routes/userMibaoSet')//用户更改密保
var userUpdate=require('./routes/userUpdate')//用户更新个人资料
var friendAllSearch=require('./routes/friendAllSearch')//用户查询所有的用户
var friendAdd=require('./routes/friendAdd')//用户查询所有的用户
var friendAgree=require('./routes/friendAgree')//用户同意某个好友申请
var friendReject=require('./routes/friendReject')//用户拒绝某个好友申请
//跨域
app.use(require('cors')())
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})
// 接口路径
app.use('/user/reg',userReg)
app.use('/user/login',userLogin)
app.use('/user/forget',userForget)
app.use('/user/forgetTel',userForgetTel)
app.use('/user/forgetAnswer',userForgetAnswer)
app.use('/user/update',userUpdate)
app.use('/user/changePwd',userChangePwd)
app.use('/user/mibaoSet',userMibaoSet)
app.use('/friend/all/search',friendAllSearch)
app.use('/friend/add',friendAdd)
app.use('/friend/agree',friendAgree)
app.use('/friend/reject',friendReject)

http.listen(8080,function(){
    console.log('在8080端口啊')
})