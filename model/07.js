/**
 * Created by 000 on 2017/11/13.
 */
var http=require("http");
//�����ļ��ϴ�ģ��
var formidable=require("formidable");
//���߿�
var util=require("util");
var fs=require("fs");
var path=require("path");
var date=require("silly-datetime");
//console.log(date);
http.createServer(function(req,res){
    //�ϴ�ͼƬ����
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
            //Ҫ������ ���� ����� ���� ��չ��
            var string=date.format(new Date(), 'YYYYMMDD');
            var newpath=__dirname+"/uploadDir/"+string+parseInt(Math.random()*1000)+extname;
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw err;
                    console.log("����ʧ��");
                }
                console.log("�����ɹ�");
            });
            console.log(newpath);
        });
        res.end("success");
    }



}).listen(3000,"127.0.0.1");