/**
 * Created by 000 on 2017/11/14.
 */
//express.static ���뾲̬��Դ
var express=require("express");
var app=express();
//app.use() ʹ��һЩ���  Ĭ�ϲ���index�ļ�
var a=app.use(express.static("./source"));
//��д·���Ļ� ��ֱ�Ӵ�Ĭ��·�� ����aaaa
/*var b=app.use(function(){
   res.end("aaaa")
});*/
app.get("/aa",function(req,res){
   res.end("22222")
});
app.listen(3000);
