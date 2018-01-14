/**
 * Created by 000 on 2017/11/14.
 */
//加载express模块  必须下载express包  express属于方法
var express=require("express");
//引用express方法
var app=express();
var fs=require("fs");
//app.get 设置路由  相当于req.url 不需要设置服务器
app.get("/",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(req.url=="/favicon.ico"){
        return
    }
    fs.readFile("./index.html",function(err,data){
        res.end(data);
    })
});
app.get("/teacher",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.readFile("./teacher.html",function(err,data){
        res.end(data);
    })
});
app.get("/student",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.readFile("./student.html",function(err,data){
        res.end(data);
    })
});
app.get(/\/student\/([\d]{6})/,function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("学生的id为"+req.params[0]);
});
app.get(/\/teacher\/([\d]{6})/,function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    //req.params[0]  取到路径中最后一个/后面的路径
    res.end("教师的id为"+req.params[0]);
});
//如果不是以上的路径 打开404页面
/*app.get("*",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.readFile("./404.html",function(err,data){
        res.end(data);
    })
});*/
//另一种方式检测状态码 打开404页面 在控制台里会返回相应的代码 检测找不到文件的状态
/*Failed to load resource: the server responded with a status of 404 (Not Found)*/
app.use(function(req,res){
    res.status("404").send("aaaaaa")
});
app.listen(3000,"127.0.0.1");