/**
 * Created by Administrator on 2016/1/10.
 */
$().ready(function(){
    $("#phone").focus(function(){
        var phone_msg=$("#phone_msg");
        phone_msg.text("由十一位数字组成");
        phone_msg.attr("class","focus");
    }).blur(userValidator);
    $("#password").focus(function(){
        var phone_msg=$("#pwd_msg");
        phone_msg.text("6-20位字符，可使用字母、数字的组合");
        phone_msg.attr("class","focus1");
    }).blur(pwdValidator);

    //定义验证用户手机函数
    function userValidator(){
        //获取用户输入的值
        var value=$("#phone").val();
        //获取用于显示提示信息的元素
        var phone_msg=$("#phone_msg");
        //验证逻辑
        if(value==''||value==null){
            phone_msg.text("手机号码不能为空");
            phone_msg.attr("class","error");
            return false;
        }else if(value.length<11||value.length>11){
            phone_msg.text("手机号码的长度不正确");
            phone_msg.attr("class","error");
            return false;
        }else if(!/^[0-9]{11}$/.test(value)){
            phone_msg.text("手机号码输入不正确");
            phone_msg.attr("class","error");
            return false;
        }
        //验证通过修改正确样式
        if(!phone_msg.hasClass("hide")){
            phone_msg.text("");
            phone_msg.attr("class","hide");
        }
        return true;
    }

    //定义验证密码的函数
    function pwdValidator(){
        var value=$("#password").val();
        var pwd_msg=$("#pwd_msg");
        if(value==""||value==null){
            pwd_msg.text("密码不能为空");
            pwd_msg.attr("class","error1");
            return false;
        }else if(value.length<6||value.length>20){
            pwd_msg.text("密码的长度不正确");
            pwd_msg.attr("class","error1");
            return false;
        }else if(!/^[a-zA-Z0-9-_]{6,20}$/.test(value)){
            pwd_msg.text("密码输入不正确");
            pwd_msg.attr("class","error1");
            return false;
        }
        if(!pwd_msg.hasClass("hide")){
            pwd_msg.text("");
            pwd_msg.attr("class","hide");
        }
        return true;
    }
    $("#personRegForm").submit(
        function validateForm(){
            if(!userValidator()||!pwdValidator()){
               return false;
            }
            return true;
        }
    );

});