var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(!data) {
            info.create({
                tel:req.body.tel,
                password:req.body.password,
                question: req.body.question,
                answer: req.body.answer
            }, (err) =>{
                if(!err){
                    res.send({type: 1,message: '注册成功'})
                }else{
                    res.send({type: 2,message: '注册失败'})
                }
            })
        } else {
            res.send({type: 3,message: '手机号已注册'})
        }
    })
})
module.exports = router;