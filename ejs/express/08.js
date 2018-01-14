/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
/*app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("new",{
        "list":[]
    })
});*/
app.get("/kk",function(req,res){
    res.send({
        "success":{
            "list":[
                {"name":"aaa","tokenId":233},
                {"name":"aaa","tokenId":233},
                {"name":"aaa","tokenId":233},
                {"name":"aaa","tokenId":233}
            ]
        }
    })
});
app.listen(3000);