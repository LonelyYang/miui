/**
 * Created by Administrator on 2016/7/3 0003.
 */
$(function(){
    $(".reg-box-call").click(function(){
        $(".reg-box-ul").toggle();
    });

    $(".li").click(function(){
        var name = $(this).children("span.li-name").text();
        var code = $(this).children("span.li-code").text();
        $(".box-call-span").text(name+"（"+code+"）");
        $(".reg-box-ul").hide();
    });

    var textOne = $("input:eq(0)");
    var textTwo = $("input:eq(1)")
    $("input[type='submit']").click(function(){
        var valueOne = textOne.val();
        var valueTwo = textTwo.val();
        if(valueOne==null||valueOne==""){
            $(".box-reg-p1").html("请输入手机账号");
        }else if(!/^1[3|4|5|7|8]\d{9}$/.test(valueOne)){
            $(".box-reg-p1").html("手机号码格式错误");
        }else{
            if(valueTwo==null||valueTwo==""){
                $(".box-reg-p2").html("请输入验证码");
            }
        }
        return false;
    })
    textOne.focus(function(){
        $(".box-reg-p1").html("");
    })
    textTwo.focus(function(){
        $(".box-reg-p2").html("");
    })
});