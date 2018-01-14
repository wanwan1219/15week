/**
 * Created by 000 on 2017/11/21.
 */
/*1.�ҵ����ݿ�
2.�������ݿ�  ��װ���� mongoClient.connect("���ݿ��ַ",callback)
*/
//���뱻�׳���settingsģ��
var setting=require("./settings.js");
//����mongodb
var mongoclient=require("mongodb").MongoClient;
//��װ���õ����ݿ⺯��
function ConnectDb(callback){
    var url=setting.dbUrl;
    mongoclient.connect(url,function(err,db){
        if(err){
            //����
            callback(err,null);
            return
        }
        callback(err,db)

    })
}
//��
exports.add=function(collName,json,callback){
    ConnectDb(function(err,db){
        //ֻҪ�д��󶼻��������if(err){} ����Ҫ�����ж�
        db.collection(collName).insert(json,function(err,result){
            //Ҳ����Ҫ�ж�err ���е�err������������ж� ֻ���жϵĲ�ͬ
            callback(err,result);
            db.close()
        })
    })
};
//ɾ
exports.del=function(collName,json,callback){
    ConnectDb(function(err,db){
        db.collection(collName).remove(json,function(err,result){
            callback(err,result);
            db.close()
        })
    })
};
//��
exports.change=function(collName,oldJson,newJson,fa,callback){
    ConnectDb(function(err,db){
        db.collection(collName).update(oldJson,newJson,{multi:fa},function(err,result){
            callback(err,result);
            db.close()
        })
    })
};
//��
exports.find=function(collName,json,c,d){
    var arr=[];
    if(arguments.length==3){
        //û�в���d ���һ����callback
        var callback=c;
        //��������
        var limit=0;
        //������ǰҳ���һ�����ݵ��½ű�
        var skipNum=0;
    }else if(arguments.length==4){
        var callback= d;
        var arg=c;
        //��ȡҳ����ÿҳ��ʾ������
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

