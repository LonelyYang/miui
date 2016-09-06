/**
 * Created by Administrator on 2016/7/4 0004.
 */

$(function(){
    //页面初始滑动
    $('html,body').animate({scrollTop:205},200);

    /******菜单*******/
    $(".yiji").hover(function(){
        $(".erji").stop();
        $(this).find(".erji").show();
    },function(){
        $(".erji").stop();
        $(this).find(".erji").hide();
    })

    /************************/
    //右部导航切换
    var winHeight = $(window).height();
    $(".tu-height").css({
        height:winHeight,
        width:"auto"
    });
    var luYuan = $(".right-ul li .yuan");
    document.onscroll = function(e){
        if(document.body.scrollTop >=205){
            $(".xm-top-position").slideDown(300);
            luYuan.eq(0).addClass("yuan-box").parent().siblings().children().removeClass("yuan-box");
            for(var i=0;i<=8;i++){
                if(document.body.scrollTop >=205+winHeight*i){
                    luYuan.eq(i).addClass("yuan-box").parent().siblings().children().removeClass("yuan-box");
                }
            }
        }else{
            $(".xm-top-position").slideUp(300);
        }

    };
    /*************************/
    /*jq scrollify滚动插件*/

    var timer;
    $(window).resize(function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
            $(".tu-height").css({"height":$(window).height()});
        },40);
    });

    $.scrollify({
        section:".xm-node"
    });

    /*$(".tu-height").click(function(e) {
        e.preventDefault();
        $.scrollify("move",$(this).attr("href"));
    });*/


    /************************/
    //右部导航点击切换
    $(".right-ul li").click(function(){
        $(this).children(".yuan").addClass("yuan-box").parent().siblings().children().removeClass("yuan-box");
        var index= $(this).index();
        $('html,body').animate({scrollTop:205+winHeight*index},200);
    });



    //手机喜好选择切换
    $(".xm-biaozhui .img1").show().siblings("img").hide();
    $(".xm-gaopei .img2").show().siblings("img").hide();
    $(".xm-zunxiang .img3").show().siblings("img").hide();
    $(".liColor1").children().click(function(){
        $(this).parents("ul").siblings(".x5-div").children(".img1").show().siblings("img").hide();
        $(this).parent().addClass("box-border").siblings().removeClass("box-border");
    });
    $(".liColor2").children().click(function(){
        $(this).parents("ul").siblings(".x5-div").children(".img2").show().siblings("img").hide();
        $(this).parent().addClass("box-border").siblings().removeClass("box-border");
    });
    $(".liColor3").children().click(function(){
        $(this).parents("ul").siblings(".x5-div").children(".img3").show().siblings("img").hide();
        $(this).parent().addClass("box-border").siblings().removeClass("box-border");
    });
    $(".liColor4").children().click(function(){
        $(this).parents("ul").siblings(".x5-div").children(".img4").show().siblings("img").hide();
        $(this).parent().addClass("box-border").siblings().removeClass("box-border");
    });







});