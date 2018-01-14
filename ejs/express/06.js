/**
 * Created by 000 on 2017/11/15.
 */
//参数：req   res   next
//没有实际效果，要跟数据库联系起来
var express=require("express");
var app=express();
app.get("/:username/:id",function(req,res,next){
    //数据库
    var username=req.params['username'];
    if(检索数据库){
        res.send(data)
    }else{
        next(){} //es6语法  检索数据失败执行
    }
});
app.get("/admin/login",function(req,res){
    var username=req.body.username;
    var tokenId=  //取到Id很重要
    res.send(data);//data是拼接出来的数据
});
app.listen(3000);
