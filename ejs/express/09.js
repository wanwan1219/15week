/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
app.get("/aa",function(req,res){
    console.log(req.query);
    res.end();
});
app.listen(3000);