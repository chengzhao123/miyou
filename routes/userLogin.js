var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
var socketModel = require('../models/Socket')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
          if(req.body.password == data.password) {
            socketModel.findOne({tel:req.body.tel},(err,msg) =>{
              if(msg && msg.isLogin == true) {
                res.send({type: 4,message: '你的账号在别处登录，请检查账号安全！',data: data})
              } else {
                res.send({type: 1,message: '登录成功',data: data})
              }
            })
          } else {
            res.send({type: 2,message: '密码错误'})
          }
        } else {
            res.send({type: 3,message: '手机号未注册'})
        }
    })
})
module.exports = router;