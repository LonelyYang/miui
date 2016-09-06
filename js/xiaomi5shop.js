/**
 * Created by Administrator on 2016/7/4 0004.
 */
$(function(){
    $(".top-fixed-div div").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$("body").offset().top},1000);
    });

    document.onscroll = function(e){
        if(document.body.scrollTop>=955){
            $(".top-fixed").slideDown(300);
        }else{
            $(".top-fixed").slideUp(300);
        }
    };

    $(".mi5-para-ul").hide();
    $(".mi5-para .parament-text").click(function(){
        $(".mi5-para .mi5-para-ul").slideToggle(300);
    });



    /*产品类型选择*/
    var ulLi = $(".top-div-content li");
    var colorLi = $(".top-color-content li");
    ulLi.click(function(){
        $(this).addClass("top-border").siblings().removeClass("top-border");
        var ind = $(this).index();
        var textOne = $(this).text();
        $(".mi5-min-text").eq(ind).show().siblings(".mi5-min-text").hide();
        $(".text-bot-min").text(textOne);
        colorLi.click(function(){
            var textTwo = $(this).text();
            $(this).addClass("top-border").siblings().removeClass("top-border");
            $(".text-bot-min").text(textOne+" "+textTwo);
            $(".top-text-bot a").css({
                backgroundColor:"#ff6700",
                color:"#fff"
            }).text("立即购买");
        });
    });



    /*mi5 lunbo*/
    var miDiv = $(".mi5-lunbo a");
    var miNum = $(".mi5-num div");
    miDiv.first().show().siblings().hide();
    miNum.first().addClass("lunbo-cir");
    $(".lunbo-circle").click(function(){
        $(this).addClass("lunbo-cir").siblings().removeClass("lunbo-cir");
        var index = $(this).index();
        $(".mi5-lunbo a").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    });
    var i = 0;
    function aa(type){
        i++;
        if(type=="r"){
            if(i>=miDiv.length){
                i=0;
            }
        }else if(type=="l"){
            if(i<=-1){
                i=miDiv.length-1;
            }
        }
        miNum.eq(i).addClass("lunbo-cir").siblings().removeClass("lunbo-cir");
        miDiv.eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
    }

    $(".mi5-left").click(function(){
        aa("l");
    })
    $(".mi5-right").click(function(){
        aa("r");
    })
});