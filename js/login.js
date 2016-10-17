/**
 * Created by Administrator on 2016/1/10.
 */
$().ready(function(){
    $("#username").focus(function(){
        elemFocus("username_msg","4-20位字符，支持英文、数字及'-'、'_'组合");
    }).blur(userValidator);
    $("#password").focus(function(){
        elemFocus("pwd_msg","6-20位字符，可使用字母、数字的组合");
    }).blur(pwdValidator);

    function elemFocus(eleId,text){
        var ele_msg=$("#"+eleId);
        ele_msg.text(text);
        ele_msg.attr("class","focus");
    }

    function userValidator(){
        var value=$("#username").val();
        var username_msg=$("#username_msg");
        if(value==""||value==null){
            username_msg.text("用户名不能为空");
            username_msg.attr("class","error");
            return false;
        }else if(value.length<4||value.length>20){
            username_msg.text("用户名的长度不正确");
            username_msg.attr("class","error");
            return false;
        }else if(!/^[a-zA-Z0-9-_]{4,20}$/.test(value)){
            username_msg.text("用户名输入不正确");
            username_msg.attr("class","error");
            return false;
        }
        if(!username_msg.hasClass("hide")){
            username_msg.text("");
            username_msg.attr("class","hide");
        }
        return true;
    }

    function pwdValidator(){
        var value = $("#password").val();
        var pwd_msg = $("#pwd_msg");
        if(value==""||value==null){
            pwd_msg.text("密码不能为空");
            pwd_msg.attr("class","error");
            return false;
        }else if(value.length<6||value.length>20){
            pwd_msg.text("密码的长度不正确");
            pwd_msg.attr("class","error");
            return false;
        }else if(!/^[a-zA-Z0-9]{6,20}$/.test(value)){
            pwd_msg.text("密码输入不正确");
            pwd_msg.attr("class","error");
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

    $("#btn").click(function(){
        var result=[];
        for(var i=0;i<4;i++){
            var num=parseInt(Math.random()*10);
            var str=parseInt(Math.random()*25);
            var num1=Math.random();
            var str1=String.fromCharCode(65+str);
            var str2=String.fromCharCode(97+str);
            if(num1<0.4){
                result.push(num);
            }else if(num1<0.7){
                result.push(str1);
            }else{
                result.push(str2)
            }
        }
        $("#btn").text(result.join(""));
    });
    /*$("#btn").click(function(){
        $("#btn").text(""+parseInt(Math.random()*10)+String.fromCharCode(65+parseInt(Math.random()*25))+
                      (parseInt(Math.random()*10)+String.fromCharCode(97+(Math.random()*25))
        ));

    })*/
});
