/**
 * Created by 000 on 2017/11/15.
 */
//������req   res   next
//û��ʵ��Ч����Ҫ�����ݿ���ϵ����
var express=require("express");
var app=express();
app.get("/:username/:id",function(req,res,next){
    //���ݿ�
    var username=req.params['username'];
    if(�������ݿ�){
        res.send(data)
    }else{
        next(){} //es6�﷨  ��������ʧ��ִ��
    }
});
app.get("/admin/login",function(req,res){
    var username=req.body.username;
    var tokenId=  //ȡ��Id����Ҫ
    res.send(data);//data��ƴ�ӳ���������
});
app.listen(3000);
