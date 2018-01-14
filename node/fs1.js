/**
 * Created by 000 on 2017/11/8.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    fs.readFile("./1.txt",function(err,data){
        fs.writeFile("./2.txt",data,function(err){
            if(err){
                console.log("Ð´´í");
            }else{
                console.log("Ð´¶Ô");
            }
        })
    });
    res.end();
}).listen(3000,"localhost");