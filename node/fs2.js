/**
 * Created by 000 on 2017/11/8.
 */
var http=require("http");
var fs=require("fs");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(req.url=="/favicon.ico"){
        return
    }else{
       var arr=[];
        /*readdir �ж�Ŀ���ļ�����û���ļ� ����������ʽ����������ļ�*/
        /*stat ���һ���ļ��Ƿ����
        fs.stat("./catalog/aa",function(err,stats){
            if(stats){
                console.log(stats.isDirectory()); //true
            }
        })
        */


        fs.readdir("./catalog",function(err,file){
            /*��һ�ַ���*/
            /*for(let i=0;i<file.length;i++){
                fs.stat("./catalog/"+file[i],function(err,stats){
                    //if(stats){                /!*�첽*!/
                        if(stats.isDirectory()){
                            arr.push(file[i]);
                        }else{
                            console.log("�����ļ���");
                        }
                    //}
                    console.log(arr); //�ڻص������д�ӡ ������������
                });

            }*/


            /*�ڶ��ַ���*/
            for(var i=0;i<file.length;i++){
                if(fs.lstatSync("./catalog/"+file[i]).isDirectory()){  /*syncͬ��*/
                    arr.push(file[i]);
                }
            }
            console.log(arr);


        });
        res.end();
    }

}).listen(3000,"localhost");