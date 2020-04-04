var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
          info.updateOne({tel:req.body.tel}, {$set: {password : req.body.password}},(err,data) =>{})
          res.send({type: 1,message: '修改成功'})
        } else {
            res.send({type: 3,message: '修改失败'})
        }
    })
})
module.exports = router;