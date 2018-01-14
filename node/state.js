/**
 * Created by 000 on 2017/11/6.
 */
var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    if(req.url=="/redddd"){
        fs.readFile("./red.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            res.end(data);
        });
    }else if(req.url=="/green"){
        fs.readFile("./green.html",function(err,data){
            res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            res.end(data);
        })
    }else if(req.url=="/img/banner1.jpg"){  /*匹配html的路径 */
        fs.readFile("./img/banner1.jpg",function(err,data){ /*匹配js的路径 */
            res.writeHead(200,{"Content-type":"image/jpeg"});
            res.end(data);
        })
    }else if(req.url=="/css/red.css"){
            fs.readFile("./css/red.css",function(err,data){
                res.writeHead(200,{"Content-type":"text/css"});
                res.end(data);
            })
    }else{
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("找不到了");
    }
});
server.listen(3000,"127.0.0.1"); /*搜索  127.0.0.1:3000/redddd*/



