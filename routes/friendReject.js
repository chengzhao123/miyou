var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.updateOne({tel: req.body.histel, 'sendFriend.tel' : Number(req.body.tel)}, {$set: {
        "sendFriend.$.status" :3, "sendFriend.$.headimg" : req.body.headimg, "sendFriend.$.name" : req.body.name,
    }}, {new: true}, (err,datab) =>{})
    info.updateOne({tel: req.body.tel, 'getFriend.tel' : Number(req.body.histel)}, {$set: {
        "getFriend.$.status" : 3, "getFriend.$.headimg" : req.body.hisheadimg, "getFriend.$.name" : req.body.hisname,
    }}, {new: true}, (err,data) =>{})
    info.findOne({tel:req.body.tel},(err,data) =>{
        res.send({type: 2,msg: '成功',data: data})
    })
            
})
module.exports = router;