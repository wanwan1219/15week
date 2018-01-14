/**
 * Created by 000 on 2017/11/7.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    var num=parseInt(Math.random()*9000000)+1000000;
    fs.readFile("./green.html",function(err,data){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end(num+"访问了"+data)
    })
}).listen(3000,"127.0.0.1");