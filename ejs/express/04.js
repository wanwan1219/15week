/**
 * Created by 000 on 2017/11/14.
 */
var express=require("express");
var app=express();
//不区分大小写
app.get("/AbA",function(req,res){
   res.end("11111");
});
app.get("/student/:id",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
   var id=req.params["id"];
    var re=/^\d{6}$/;
    var token=re.test(id);
    if(token){
        res.end("此学生的id为"+id)
    }else{
        res.end("没有此学生")
    }
});
app.get("/teacher/:id",function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var id=req.params["id"];
    var re=/^\d{6}$/;
    var token=re.test(id);
    if(token){
        res.end("此老师的id为"+id)
    }else{
        res.end("没有此老师")
}
});
app.listen(3000);