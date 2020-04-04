var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
          info.updateOne({tel:req.body.tel}, {$set: {question: req.body.question,answer: req.body.answer}},(err,data) =>{})
          info.findOne({tel:req.body.tel}, (err,dataa) =>{
            res.send({type: 1,message: '设置成功',data:dataa})
          })
        } else {
            res.send({type: 3,message: '出现了错误'})
        }
    })
})
module.exports = router;