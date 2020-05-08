var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    let model = {
        status: 1,
        tel: Number(req.body.histel),
        headimg: Number(req.body.hisheadimg),
        name: req.body.hisname // 对方名字
    }
    var minetel = JSON.parse(req.body.datamine)
    if(minetel.friends && minetel.friends.length > 0) {
        for(var i = 0 ;i< minetel.friends.length ; i++) {
            if(minetel.friends[i].tel == req.body.histel) {
                info.findOne({tel:req.body.histel},(err,data) => {
                    if(data && data.friends) {
                        for(var k = 0,w = 0 ;k< data.friends.length ; k++) {
                            if(data.friends[i].tel == req.body.tel) {
                                w++
                            }
                            if(w == 1) {
                                return res.send({type: 3,msg: '你们已经是好友'})
                            }
                        }
                    }
                })
            }
        }
    }
    if(minetel.sendFriend && minetel.sendFriend.length > 0) {
        for(var i =0 ;i<minetel.sendFriend.length ; i++) {
            if(minetel.sendFriend[i].tel == req.body.histel && minetel.sendFriend[i].status == 3) {
                info.updateMany({tel:minetel.tel},{$pull: {'sendFriend':{ tel : model.tel}}},{new: true},(err,data) =>{})
                info.updateMany({tel:Number(req.body.histel)},{$pull: {'getFriend':{tel : minetel.tel }}},{new: true},(err,data) =>{
                })
            }
            if(minetel.sendFriend[i].tel == req.body.histel && minetel.sendFriend[i].status == 1) {
                return res.send({type: 1,msg: '你已经发送了申请'})
            }
        }
    }
     // 对方
    let modelb = {
        status: 1,
        tel: Number(req.body.tel),
        headimg: Number(req.body.headimg),
        name: req.body.name // 对方名字
    }
    info.updateOne({tel: req.body.histel}, {$push: {"getFriend": modelb}}, { new: true}, (err, datab) => {
        if (err) {
          return res.send({type: 0,msg: '出错'})
        }
    })
    // 自己
    info.updateOne({tel: req.body.tel}, {$push: {"sendFriend": model}}, {new: true}, (err, data) => {
        if (err) {
            return res.send({type: 0, msg: '出错'})
        }
    })
    info.findOne({tel: req.body.tel},(err,data) =>{
        return res.send({type: 2,msg: '发送成功',data: data})
    })
    
})
module.exports = router;