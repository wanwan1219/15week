/**
 * Created by 000 on 2017/11/6.
 */
    //引入加载模块 http 服务器模块
var http=require("http");/*创建服务器*/
var server=http.createServer(function(req,res){
    //req  request  请求
    //res  response  响应
    //请求头 200状态码 内容类型 HTML 编码格式
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("狗头人");//必须有响应结束 否则会一直加载
});
//监听端口 挂载
    server.listen(3000,"127.0.0.1");
    //server.listen(3000,"localhost");

//window.location href()地址ַ  hash#  search?  path/ pathname  port域名  host主机
