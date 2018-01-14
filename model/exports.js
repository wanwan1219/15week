/**
 * Created by 000 on 2017/11/9.
 */
var exports=require("./exports2.js");
var http=require("http");
http.createServer(function(req,res){
    if(req.url=="/student"){
        exports.showStudent(req,res);
    }else if(req.url=="/teacher"){
        exports.showTeacher(req,res);
    }else if(req.url=="/"){
       exports.showIndex(req,res);
    }else{
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("404,页面找不到")
    }
}).listen(3000,"localhost");



//函数

