/**
 * Created by 000 on 2017/11/9.
 */
function showIndex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("这是首页")
}
function showTeacher(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("这是老师页")
}
function showStudent(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("这是学生页")
}
exports.showIndex=showIndex;
exports.showTeacher=showTeacher;
exports.showStudent=showTeacher;

/*
module.exports=showIndex;
module.exports=showTeacher;
module.exports=showTeacher;
这样抛出只能剩下最后一个 module 抛出会被覆盖掉
*/