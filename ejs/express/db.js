/**
 * Created by 000 on 2017/11/21.
 */
/*1.找到数据库
2.连接数据库  封装函数 mongoClient.connect("数据库地址",callback)
*/
//引入被抛出的settings模块
var setting=require("./settings.js");
//引入mongodb
var mongoclient=require("mongodb").MongoClient;
//封装公用的数据库函数
function ConnectDb(callback){
    var url=setting.dbUrl;
    mongoclient.connect(url,function(err,db){
        if(err){
            //参数
            callback(err,null);
            return
        }
        callback(err,db)

    })
}
//增
exports.add=function(collName,json,callback){
    ConnectDb(function(err,db){
        //只要有错误都会走上面的if(err){} 不需要单独判断
        db.collection(collName).insert(json,function(err,result){
            //也不需要判断err 所有的err都会走上面的判断 只是判断的不同
            callback(err,result);
            db.close()
        })
    })
};
//删
exports.del=function(collName,json,callback){
    ConnectDb(function(err,db){
        db.collection(collName).remove(json,function(err,result){
            callback(err,result);
            db.close()
        })
    })
};
//改
exports.change=function(collName,oldJson,newJson,fa,callback){
    ConnectDb(function(err,db){
        db.collection(collName).update(oldJson,newJson,{multi:fa},function(err,result){
            callback(err,result);
            db.close()
        })
    })
};
//查
exports.find=function(collName,json,c,d){
    var arr=[];
    if(arguments.length==3){
        //没有参数d 最后一个是callback
        var callback=c;
        //个数限制
        var limit=0;
        //跳过当前页最后一条数据的下脚标
        var skipNum=0;
    }else if(arguments.length==4){
        var callback= d;
        var arg=c;
        //获取页数和每页显示的条数
        var limit=arg.pageNum||0;
        var skipNum=arg.page*limit;
    }else{
        throw err;
        return
    }
    ConnectDb(function(err,db){
        var data=db.collection(collName).find(json).limit(limit).skip(skipNum);
        data.each(function(err,result){
            if(result!=null){
                arr.push(result)
            }else{
                console.log(arr);
            }
        })
    })
};

