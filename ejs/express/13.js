/**
 * Created by 000 on 2017/11/20.
 */
//与views 里面的2.ejs对应
var express=require("express");
var app=express();
var MongoClient=require("mongodb").MongoClient;
var bodyParser=require("body-parser");
var url="mongodb://127.0.0.1:27017/text";
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.get("/",function(req,res){
    res.render("2");
});
app.post("/",function(req,res){
    //利用中间件 用body
    var user=req.body.name;
    var sex=req.body.sex;
    var hobbies1=req.body.hobbies1;
    var hobbies2=req.body.hobbies2;
    var hobbies3=req.body.hobbies3;
    MongoClient.connect(url,function(err,db) {
        //err 数据库连接失败 db 数据库的操作方法
        if (err) {
            console.log("链接数据库失败");
            return
        }
        var data = db.collection("form2").insert({"name":user,"sex":sex,"hobbies":{"play":hobbies1,"game":hobbies2,"read":hobbies3}},function(err,result){
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