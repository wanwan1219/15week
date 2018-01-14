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
        /*readdir 判断目标文件下有没有文件 并以数组形式返回下面的文件*/
        /*stat 检查一个文件是否存在
        fs.stat("./catalog/aa",function(err,stats){
            if(stats){
                console.log(stats.isDirectory()); //true
            }
        })
        */


        fs.readdir("./catalog",function(err,file){
            /*第一种方法*/
            /*for(let i=0;i<file.length;i++){
                fs.stat("./catalog/"+file[i],function(err,stats){
                    //if(stats){                /!*异步*!/
                        if(stats.isDirectory()){
                            arr.push(file[i]);
                        }else{
                            console.log("不是文件夹");
                        }
                    //}
                    console.log(arr); //在回调函数中打印 否则会出作用域
                });

            }*/


            /*第二种方法*/
            for(var i=0;i<file.length;i++){
                if(fs.lstatSync("./catalog/"+file[i]).isDirectory()){  /*sync同步*/
                    arr.push(file[i]);
                }
            }
            console.log(arr);


        });
        res.end();
    }

}).listen(3000,"localhost");