var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
            res.send({type: 1,message: '查询成功',data: data})
        } else {
            res.send({type: 3,message: '该手机号未注册'})
        }
    })
})
module.exports = router;