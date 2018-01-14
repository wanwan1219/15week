/**
 * Created by 000 on 2017/11/9.
 */
function People(name,age,sex){
    this.name=name;
    this.age=age;
    this.sex=sex;
}
People.prototype={
    sayHello:function(){
        console.log("您好" + this.name + "你今年" + this.age + "岁，" + "你是" + this.sex + "吗");
    }
};
module.exports=People;  /*是一个函数 也就是说是一个类*/

//exports.People=People;/*可以这么抛出*/