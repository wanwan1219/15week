/**
 * Created by 000 on 2017/11/9.
 */
var msg="hello node";
var show=function(){
    console.log(1213);
};
//exports ��¶ģ��

exports.msg=msg;
exports.show=show;

//module.exports ��¶����һ������
//module.exports �� exports����
/*
 module.exports�ĳ�ʼֵ��һ���ն���
 exports��module.exports������
 require����ģ��ʱĬ�Ϸ��ص��Ƕ���(module.exports)������ exports
*/
/*module.exports={
    msg:msg
};*/
module.exports={
    show:show
    /*show ��һ������ ������module.exports���׳� ������һ�����ʱ��Ͳ����������� ��ֱ�ӵ����� */
};
