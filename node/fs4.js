/**
 * Created by 000 on 2017/11/9.
 */
var http=require("http");
var fs=require("fs");
var path=require("path");
var url=require("url");
http.createServer(function(req,res){
    /*req.url ： 获取地址栏内容时，如果不用req.url去获取，获取到
     的内容没有什么概念，毫无服务器而言
     */
    //path.normalize();  /*返回标准格式的路径字符串*/
    //path.extname();   /*返回括号里面的文件扩展名*/
    var  pathname=url.parse(req.url).pathname;

    if(req.url=="/"){
        pathname+="index.html";
    }else if(pathname.indexOf(".")==-1){
        pathname+=".html"
    }/*默认打开index页面*/
    var fileUrl="./"+path.normalize("./catalog/"+pathname);
    console.log(fileUrl);
    var extname=path.extname(pathname);/*取后缀*/
    fs.readFile(fileUrl,function(err,data){
        if(err) {
            res.writeHead(404, {"Content-type": "text/html;charset:utf-8"});
            res.end("404页面找不到");
        }else if(req.url=="/red"){
            fs.readFile("./catalog/red.html",function(err,data){
                res.end(data);
            });
        }else if(req.url=="/green"){
            fs.readFile("./catalog/green.html",function(err,data){
                res.end(data);
            })
        }else if(req.url=="/img/banner1.jpg"){
            fs.readFile("./img/banner1.jpg",function(err,data){
                res.end(data);
            })
        }else if(req.url=="/css/red.css"){
            fs.readFile("./css/red.css",function(err,data){
                res.end(data);
            })
        }
        exten(extname,function(encod){
            res.writeHead(200,{"Content-type":encod});
            res.end(data);
        })
    });

}).listen(3000,"localhost");
function exten(extname,callback){
    fs.readFile("./mime.json",function(err,data){
        var mimeJson=JSON.parse(data);
        var encod=mimeJson[extname]||"text/plain";
        callback(encod)/*把encode暂时存储在callback中*/
    })
}