var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    let model = {
        status: 2,
        tel: Number(req.body.histel),
        toTop: false,
        remove: false,
        headimg: Number(req.body.hisheadimg),
        name: req.body.hisname // 对方名字
    }
    info.updateOne({tel: req.body.tel}, {$addToSet :{
        "friends": model
    }}, {new: true} , (err,data) =>{})
    let modelb ={
        status: 2,
        tel: Number(req.body.tel),
        toTop: false,
        remove: false,
        headimg: Number(req.body.headimg),
        name: req.body.name // 对方名字
    }
    info.updateOne({tel: req.body.histel} ,{$addToSet: {
        "friends": modelb
    }}, {new: true} ,(err,data) => {})
    
    info.updateOne({tel: req.body.histel, 'sendFriend.tel' : Number(req.body.tel)}, {$set: {
        "sendFriend.$.status" : 2, "sendFriend.$.headimg" : req.body.headimg, "sendFriend.$.name" : req.body.name,
    }}, {new: true}, (err,datab) =>{})
    info.updateOne({tel: req.body.tel, 'getFriend.tel' : Number(req.body.histel)}, {$set: {
        "getFriend.$.status" : 2, "getFriend.$.headimg" : req.body.hisheadimg, "getFriend.$.name" : req.body.hisname,
    }}, {new: true}, (err,dataa) =>{})
    info.findOne({tel: req.body.tel},(err,data) =>{
      res.send({type: 2,msg: '成功',data: data})
    })
   
})
module.exports = router;