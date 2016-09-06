/**
 * Created by Administrator on 2016/7/3 0003.
 */
$(function(){
    $(".login-box-ewm img").click(function(){
        $(".login-one").hide();
        $(".login-two").show();
    })
    $(".two-false").click(function(){
        $(".login-one").show();
        $(".login-two").hide();
    })

    //登录框提示
    var text = $("input[type='text']");
    var word = $("input[type='password']")
    $("input[type='submit']").click(function(){
        var valueOne = text.val();
        var valueTwo = word.val();
        if(valueOne==null||valueOne==""){
            $(".box-login-p").html("请输入账号");
        }else{
            if(valueTwo==null||valueTwo==""){
                $(".box-login-p").html("请输入密码");
            }
        }
        return false;
    })
    text.focus(function(){
        $(".box-login-p").html("");
    })
    word.focus(function(){
        $(".box-login-p").html("");
    })

})