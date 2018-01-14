/**
 * Created by 000 on 2017/11/15.
 */
var express=require("express");
var app=express();
app.get("/aa/bb",function(req,res){
    console.log(req.baseUrl);//根路径
    console.log(req.originalUrl);//源路径
    console.log(req.path);
    res.end("123")
});
app.listen(3000);


//原生
var URL=require("url");
var textUrl="http://localhost:300/a/b/c=12?d=13&e=14";
var p=URL.parse(textUrl);
console.log(p);
/*
Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:300',
    port: '300',
    hostname: 'localhost',
    hash: null,
    search: '?d=13&e=14',
    query: 'd=13&e=14',
    pathname: '/a/b/c=12',
    path: '/a/b/c=12?d=13&e=14',  /!* express 里面path 只包括 /a/b/c=12*!/
    href: 'http://localhost:300/a/b/c=12?d=13&e=14' }
*/
