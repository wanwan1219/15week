/**
 * Created by 000 on 2017/11/7.
 */

    //query��pathname
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    //url.parse
    //pathname��ȡ����url·��(path)����Ĳ��� ?#ǰ���
    //req.url ��ȡ���Ǻ������е� ����pathname��query

   /* var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    res.end();*/


    //queryƥ�����search(?)�����·������ ��� url.parse()���ݵ���һ������ ����������һ���ַ��� ���ݵ����������� ���ص���һ������

    if(req.url=="/favicon.ico"){
        return;
    }else{
        var query=url.parse(req.url,true).query;/*http://localhost:3000/name?name=a&sex=3*/
        console.log(query.sex);
        res.end();
    }

}).listen(3000,"127.0.0.1");