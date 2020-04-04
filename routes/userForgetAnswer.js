var express = require('express');
var router = express.Router();
var app = express();
var info = require('../models/UserReg')
require('../plugins/db')(app);
router.post('/', (req, res) => {
    info.findOne({tel:req.body.tel}, (err, data) =>{
        if(data) {
            if(req.body.answer == data.answer) {
              res.send({type: 1,message: '成功'})
            } else {
              res.send({type: 3,message: '答案错误'})
            }
        } else {
            res.send({type: 3,message: '出错'})
        }
    })
})
module.exports = router;