/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render('form')
});
app.post("/aaa",function(req,res){  //对应提交的地址的path路径
    res.send("去死吧");
});
app.listen(3000);