/**
 * Created by 000 on 2017/11/14.
 */
//express.static 引入静态资源
var express=require("express");
var app=express();
//app.use() 使用一些插件  默认查找index文件
var a=app.use(express.static("./source"));
//不写路径的话 就直接打开默认路径 出现aaaa
/*var b=app.use(function(){
   res.end("aaaa")
});*/
app.get("/aa",function(req,res){
   res.end("22222")
});
app.listen(3000);
