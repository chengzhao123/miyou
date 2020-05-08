var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
var socketModel = require('../models/Socket')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        info.updateMany({tel: Number(req.body.tel)}, {$pull : {'sendFriend': {'tel': Number(req.body.histel)}}}, { new: true},(err, data) =>{
          if(err) {
            return res.send({type:2, message: err})
          }
        })
        info.updateMany({tel: Number(req.body.tel)}, {$pull : {'getFriend': {'tel': Number(req.body.histel)}}}, { new: true},(err, data) =>{
          if(err) {
            return res.send({type:2, message: err})
          }
        })
        info.updateMany({tel: Number(req.body.histel)}, {$pull : {'sendFriend': {'tel': Number(req.body.tel)}}}, { new: true},(err, data) =>{
          if(err) {
            return res.send({type:2, message: err})
          }
        })
        info.updateMany({tel: Number(req.body.histel)}, {$pull : {'getFriend': {'tel': Number(req.body.tel)}}}, { new: true},(err, data) =>{
          if(err) {
            return res.send({type:2, message: err})
          }
        })
        info.updateMany({tel: Number(req.body.tel)}, {$pull : {'friends': {'tel': Number(req.body.histel)} }}, { new: true},(err, data) =>{
          if(err) {
            return res.send({type:2, message: err})
          }
        })
        info.findOne({tel:Number(req.body.tel)},(err,data) => {
          if(!err) {
            return res.send({type:1, message: '成功',data:data})
          }
          return res.send({type:2, message: err})
        })
    })
})
module.exports = router;