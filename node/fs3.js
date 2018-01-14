/**
 * Created by 000 on 2017/11/8.
 */
var http=require("http");
var fs=require("fs");
var path=require("path");
http.createServer(function(req,res){
    //path.normalize();  /*返回标准格式的路径字符串*/
    //path.extname();   /*返回括号里面的文件扩展名*/
    //res.writeHead(200,{"Content-type":exten()});
    if(req.url=="/"){
        fs.readFile("./index.html",function(err,data){
            var aa=path.extname("./index.html");
            //console.log(data);
            res.end(data);
        })
    }else if(req.url=="/redddd"){
        fs.readFile("./red.html",function(err,data){
            //res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            res.end(data);
        });
    }else if(req.url=="/green"){
        fs.readFile("./green.html",function(err,data){
            //res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
            res.end(data);
        })
    }else if(req.url=="/img/banner1.jpg"){  /*匹配html的路径 */
        fs.readFile("./img/banner1.jpg",function(err,data){ /*匹配js的路径 */
            //res.writeHead(200,{"Content-type":"image/jpeg"});
            res.end(data);
        })
    }else if(req.url=="/css/red.css"){
        fs.readFile("./css/red.css",function(err,data){
            //res.writeHead(200,{"Content-type":"text/css"});
            res.end(data);
        })
    }else{
        //res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("找不到了");
    }
}).listen(3000,"127.0.0.1");

function exten(extenname){
    switch (extenname){
        case ".html":
            return "html/text;charset=utf-8;";
            break;
        case ".css":
            return "text/css";
            break;
        case ".jpg":
            return "image/jpg";
            break;
        case ".jpeg":
            return "image/jpeg";
            break;
        case ".js":
            return "javascript/text";
            break;


    }
}