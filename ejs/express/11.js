/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
var jade=require("jade");
app.set("view engine","jade");
//ÉèÖÃÄ£°æÒıÇæ
app.engine("jade",require("jade").__express);
app.get("/",function(req,res){
    res.render("kk");
    res.end();
});
app.listen(3000);

