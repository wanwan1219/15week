/**
 * Created by 000 on 2017/11/20.
 */
var express=require("express");
var app=express();
//导入mongodb模块
var MongoClient=require("mongodb").MongoClient;
//选中数据库
var url="mongodb://127.0.0.1:27017/text";
var engine=app.set("views engine","ejs");
app.get("/",function(req,res){
    //链接数据库
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("链接数据库失败");
            return
        }
        var data=db.collection("aa").find();
        var arr=[];
        data.each(function(err,doc){
            if(err) {
                return
            }
            if(doc!=null){
               arr.push(doc);
            }else{
                db.close();
                res.render("02.ejs",{news:arr})
            }
        })
    });
});
app.listen(3000);