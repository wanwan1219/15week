/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("form")
});
//用到中间件
//bodyParser.urlencoded 专门用来处理表单post提交的数据
app.use(bodyParser.urlencoded({extended:false}));
app.post("/aaa",function(req,res){
    console.log(req.body);
    var username=req.body.username;
    var password=req.body.password;
    res.send("用户名："+username+"密码："+password)
});
app.listen(3000);