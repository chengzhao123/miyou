var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
          if(req.body.password == data.password) {
              res.send({type: 1,message: '登录成功',data: data})
          } else {
            res.send({type: 2,message: '密码错误'})
          }
        } else {
            res.send({type: 3,message: '手机号未注册'})
        }
    })
})
module.exports = router;