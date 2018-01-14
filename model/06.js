var http=require("http");
var querystring=require("querystring");
//querystring  查询指定的字符串    addlisener
//引入文件上传模块
var formidable=require("formidable");
//工具库
var util=require("util");
var fs=require("fs");
var path=require("path");
http.createServer(function(req,res){
    //接收的请求是/sendpost字段时，当做是请求路径
    if(req.url=="/gopost" && req.method.toLowerCase()=="post"){/*/gopost 与前端传递数据action保持一致*//*req.method默认是大写的 所以要转换成小写*/
        //接收数据
       var allData="";
        //node追求的极致，一点一点接收数据 ,防止提交数据过大，造成服务器崩溃
       req.addListener('data',function(chunk){/*"data"是后端带的 不能改变 且必须是一个字符串*/
           allData+=chunk;/*请求一次发一点 连接起来 结合单线程的特点*/
       });
       //接收完成
       req.addListener('end',function(){
          var data=allData.toString();/*解析数据*/
          res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});/*注意html 之前是plain */
          var obj=querystring.parse(data);  /*充分解析字符串 成一个对象的形式*/
           res.write('<h1>'+obj.name+'</h1>');
          //console.log(obj);
          //console.log(obj.name);
           /*res.writeHead(200,{"Content-type":"image/jpeg"});
           res.write('<img url="'+obj.pic+'"/>');*/
           res.end("成功")
          
       });


    }
   
}).listen(3000,"127.0.0.1");