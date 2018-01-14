/**
 * Created by 000 on 2017/11/7.
 */
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return
    }else{
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8;"});
        var query=url.parse(req.url,true).query;
        var name=query.name;
        var age=query.age;
        var sex=query.sex;
        res.end("输出结果为 name="+name+" age="+age+" sex="+sex);
    }
}).listen(3000,"localhost");

/*http://localhost:63342/html/第十五周/node/url.html*/  /*文件的路径*/
/*http://localhost:3000/?name=aaa+&age=bbb+&sex=ccc*/  /*点击之后跳转的路径  就是提交到的地址*/