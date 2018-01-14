/**
 * Created by 000 on 2017/11/14.
 */
//mvc设计模式:models view  controller
var express=require("express");
var app=express();
//配置默认选项 配置模板 .ejs后缀的叫new的文件
app.set("view engine","ejs");  //view engine 配置视图引擎
app.get("/",function(req,res){
    res.render("new",{
        list:[{"name":"凯凯","age":13},
            {"name":"权权","age":14},
            {"name":"二狗","age":16}]
    });/*渲染的数据必须是个对象*/
});
app.listen(3000);