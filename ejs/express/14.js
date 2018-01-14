/**
 * Created by 000 on 2017/11/21.
 */
var express=require("express");
var app=express();
var db=require("./db.js");

app.get("/",function(req,res){
    var user=req.query.name;
    var sex=req.query.sex;
    var hobbies1=req.query.hobbies1;
    var hobbies2=req.query.hobbies2;
    var hobbies3=req.query.hobbies3;
    var json={"user":user,"sex":sex,"hobbies":{"play":hobbies1,"game":hobbies2,"read":hobbies3}};
    db.add("form2",json,function(err,result){
        if(err){
            console.log("插入失败");
            return
        }
        console.log('插入成功了')
    });
    res.end()
});
app.get("/del",function(req,res){
    db.del("form2",{"name":null},function(err,result){
        if(err){
            console.log("删除失败");
            return
        }
        console.log('删除成功')
    });
    res.end()
});
app.get("/change",function(req,res){
    db.change("form2",{"sex":"0"},{$set:{"sex":"3"}},true,function(err,result){
        if(err){
            console.log("替换失败");
            return
        }
        console.log('替换成功')
    });
    res.end()
});
app.get("/find",function(req,res){
    db.find("form2",{},{"pageNum":3,"page":1},function(err,result){
        if(err){
            console.log("查找失败");
            return
        }
        console.log('查找成功')
    });

    res.end()
});
app.listen(3000);