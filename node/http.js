/**
 * Created by 000 on 2017/11/7.
 */
//http 简单操作
var http=require("http");
http.createServer(function(req,res){
   res.writeHead(200,{"Content-type":"text/html;charset=utf-8;"}) ;
    res.write("<h1>啦啦啦啦</h1>");
    res.write("<h2>啦啦啦啦</h2>");
    res.write("<h3>啦啦啦啦</h3>");
    res.write("<h4>啦啦啦啦</h4>");
    /*end必须是字符串或者Buffer */
    res.end((1+2+3).toString());
    //res.end(String(1+2+3));  /*可以用 但是不推荐 仍然会转化成进制来计算 */
}).listen(3000,"127.0.0.1");