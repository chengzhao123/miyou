module.exports =app =>{
    var mongoose=require('mongoose');
    mongoose.connect('mongodb://47.240.250.215:27017/miyou',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    mongoose.connection.once("open",function(){
        console.log("连接打开")
    })
}