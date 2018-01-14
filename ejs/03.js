/**
 * Created by 晓霞 on 2017/11/14.
 */
var http=require("http");
var ejs=require("ejs");
var fs=require("fs");
console.log(ejs);
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    fs.readFile("./new.ejs",function(err,data) {
        var lists = {
            list:[
                {"name": "凯凯", "age": 17},
                {"name": "权权", "age": 3},
                {"name": "hh", "age": 18}
            ]
        };
        var sm=data.toString();
        var render=ejs.render(sm,lists);
        res.end(render.toString());
    })
}).listen(3000,"127.0.0.1");