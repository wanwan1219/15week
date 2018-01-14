/**
 * Created by 000 on 2017/11/7.
 */

    //query和pathname
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    //url.parse
    //pathname获取的是url路径(path)后面的部分 ?#前面的
    //req.url 获取的是后面所有的 包括pathname和query

   /* var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    res.end();*/


    //query匹配的是search(?)后面的路径部分 如果 url.parse()传递的是一个参数 返回数据是一个字符串 传递的是两个参数 返回的是一个对象

    if(req.url=="/favicon.ico"){
        return;
    }else{
        var query=url.parse(req.url,true).query;/*http://localhost:3000/name?name=a&sex=3*/
        console.log(query.sex);
        res.end();
    }

}).listen(3000,"127.0.0.1");