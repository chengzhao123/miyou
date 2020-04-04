var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findByIdAndUpdate({_id:req.body._id}, req.body, {new: true}, (err, data) =>{
        if(err) {
            console.log(err)
          return res.send({type: 0,msg: '出错'})
        } else {
          var arr = data.friends // 自己所有的朋友
          if(arr.length > 0) {
            for(var i = 0 ;i < arr.length; i++) {
                info.updateMany({tel: arr[i].tel , "friends.tel" : Number(Number(req.body.tel))  }, {
                  $set: { "friends.$.name" : req.body.name,"friends.$.headimg" : req.body.headimg }},
                   {new: true},(err,data) =>{}) //必须要err和data 否则无法修改
            }
          }
          var arrf = data.sendFriend
          if(arrf.length > 0) {
            for(var j = 0 ;j < arrf.length; j++) {
                info.updateMany({tel: arrf[j].tel, "getFriend.tel" : Number(Number(req.body.tel))},
                {$set: { "getFriend.$.name" : req.body.name, "getFriend.$.headimg": req.body.headimg}} , 
                {new: true},(err,data) =>{}) //必须要err和data 否则无法修改
              }
          }
          var arrs = data.getFriend
          if(arrs.length > 0) {
            for(var k = 0 ;k < arrs.length; k++) {
                info.updateMany(
                  {tel : arrs[k].tel, "sendFriend.tel" : Number(req.body.tel)}, 
                  {$set: { "sendFriend.$.name" : req.body.name, "sendFriend.$.headimg": req.body.headimg}} , 
                  {new: true},(err,data) =>{}) //必须要err和data 否则无法修改
              }
          }
        }
        info.findOne({tel: req.body.tel}, (err,data) =>{
          res.send({type:2, msg: '更改成功' , data:data})
        })
    })
})
module.exports = router;