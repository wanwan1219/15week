/**
 * Created by 000 on 2017/11/20.
 */
//与views 下面的1.html相对应
//把前台的form表单的数据传送到后台
/*1.搭建布局，实现静态页面
 2.实现后台功能：
 2.1加载所需模块
 2.2如果需要ejs来实现，那么需要设置引擎，html的话不需要
 2.3定义字段，获取前端页面的发送内容
 2.4连接数据库
 2.5插入数据，链接集合 insert
 2.6关闭数据库
 */
var express=require("express");
var app=express();
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017/text";
app.get("/",function(req,res){
    var user=req.query.name;
    var sex=req.query.sex;
    var hobbies1=req.query.hobbies1;
    var hobbies2=req.query.hobbies2;
    var hobbies3=req.query.hobbies3;
    MongoClient.connect(url,function(err,db) {
        //err 数据库连接失败 db 数据库的操作方法
        if (err) {
            console.log("链接数据库失败");
            return
        }
        var data = db.collection("form").insert({"name":user,"sex":sex,"hobbies":{"play":hobbies1,"game":hobbies2,"read":hobbies3}},function(err,result){
            if(err){
                console.log("插入失败");
                return
            }
            console.log("插入成功");
            db.close();
        });
    });
    res.end();
});
app.listen(3000);