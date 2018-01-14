/**
 * Created by 000 on 2017/11/9.
 */
var msg="hello node";
var show=function(){
    console.log(1213);
};
//exports 暴露模块

exports.msg=msg;
exports.show=show;

//module.exports 暴露的是一个对象
//module.exports 和 exports区别？
/*
 module.exports的初始值是一个空对象
 exports是module.exports的引用
 require加载模块时默认返回的是对象(module.exports)而不是 exports
*/
/*module.exports={
    msg:msg
};*/
module.exports={
    show:show
    /*show 是一个变量 所以用module.exports来抛出 当他是一个类的时候就不能这样做了 就直接等于他 */
};
