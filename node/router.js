/**
 * Created by 000 on 2017/11/7.
 */
/*var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var user=req.url;
    if(user.substr(0,9)=="/teacher/"){
        var teacherid=user.substring(9);
        if(/^\d{6}$/.test(teacherid)){
            res.end("此老师的id为"+teacherid)
        }else{
            res.end("查无此老师");
        }
    }else if(user.substr(0,9)=="/student/"){
        var studentid=user.substring(9);
        if(/^\d{6}$/.test(studentid)){
            res.end("此学生的id为"+studentid)
        }else{
            res.end("查无此学生");
        }
    }else{
        res.end("查无此人");
    }
}).listen(3000,"127.0.0.1");*/


var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    var pathname=url.parse(req.url).pathname;
    var username=pathname.split("/")[1];
    var userid=pathname.split("/")[2];
    console.log(pathname, userid, username);
    if(username=="teacher"){
        if(/^\d{6}$/.test(userid)){
            res.end("此老师的id为"+userid)
        }else{
            res.end("查无此老师");
        }
    }else if(username=="student"){
        if(/^\d{6}$/.test(userid)){
            res.end("此学生的id为"+userid)
        }else{
            res.end("查无此学生");
        }
    }else{
        res.end("查无此人");
    }
}).listen(3000,"127.0.0.1");