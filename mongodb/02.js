/**
 * Created by 000 on 2017/11/20.
 */
var express=require("express");
var app=express();
//����mongodbģ��
var MongoClient=require("mongodb").MongoClient;
//ѡ�����ݿ�
var url="mongodb://127.0.0.1:27017/text";
var engine=app.set("views engine","ejs");
app.get("/",function(req,res){
    //�������ݿ�
    MongoClient.connect(url,function(err,db){
        if(err){
            console.log("�������ݿ�ʧ��");
            return
        }
        var data=db.collection("aa").find();
        var arr=[];
        data.each(function(err,doc){
            if(err) {
                return
            }
            if(doc!=null){
               arr.push(doc);
            }else{
                db.close();
                res.render("02.ejs",{news:arr})
            }
        })
    });
});
app.listen(3000);