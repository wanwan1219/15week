/**
 * Created by 000 on 2017/11/13.
 */
var http=require("http");
//引入文件上传模块
var formidable=require("formidable");
//工具库
var util=require("util");
var fs=require("fs");
var path=require("path");
var date=require("silly-datetime");
//console.log(date);
http.createServer(function(req,res){
    //上传图片部分
    if(req.url=="/gopost" && req.method.toLowerCase()=="post"){
        var form = new formidable.IncomingForm();
        form.uploadDir="./uploadDir";
        form.parse(req,function(err,fields,files){
            if(err){
                throw err;
            }
            console.log(fields);
            console.log(files);
            //util.inspect({fields: fields, files: files});
            var extname=path.extname(files.pic.name);
            var oldpath=__dirname+"/"+files.pic.path;
            //要求日期 加上 随机数 加上 扩展名
            var string=date.format(new Date(), 'YYYYMMDD');
            var newpath=__dirname+"/uploadDir/"+string+parseInt(Math.random()*1000)+extname;
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw err;
                    console.log("改名失败");
                }
                console.log("改名成功");
            });
            console.log(newpath);
        });
        res.end("success");
    }



}).listen(3000,"127.0.0.1");