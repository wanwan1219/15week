/**
 * Created by 000 on 2017/11/20.
 */
//    es6   class  promise generator     module  解构赋值  map   箭头函数  await(es7  和 promise 区别)  fetch
//  数据库test   dao层（应用程序编程接口 简称API）           增 删 改 查
var express=require("express");
var app=express();
//导入mongodb模块
var MongoClient=require("mongodb").MongoClient;
//选中数据库
var url="mongodb://127.0.0.1:27017/text";
app.get("/",function(req,res){
    //链接数据库
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("链接数据库失败");
            return
        }
        console.log("链接成功");
        //数据操作  增   删   改   查
        //插入数据库
        db.collection("aa").insert({"name":"jerry","age":20,"sex":0},function(err,result){
            if(err){
                console.log("数据插入失败");
                return
            }
            console.log("数据写入成功");
            var result=JSON.stringify(result);
            res.send("success:"+result);
        });
        db.collection("aa").update({"_id":45},{$set:{"sex":2}},function(err,result){
            if(err){
                console.log("数据更新失败");
                return
            }
            console.log("数据更新成功");
        });
        db.collection("aa").remove({"name":"jerry"},function(){
            if(err){
                console.log("数据删除失败");
                return
            }
            console.log("数据删除成功");
        });
        //var data=db.collection("bb").find();
        var list=[];
        //data.each(function(err,doc){
        //    list.push(doc);
        //    console.log(list);
        //});
        db.collection("aa").find({},function(err,result){
            if(err){
                console.log("请求数据失败");
                return
            }
            result.each(function(err,doc){
                list.push(doc);
                console.log(list);
            })
        });
        db.close();
    });
});
app.listen(3000,"127.0.0.1");
