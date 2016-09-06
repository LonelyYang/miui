$(function(){
	var bannerimg=$(".tupian img");
	var anniu=$(".banner-right li");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=bannerimg.length){
				index=0;
			}
		}else if(type=="l"){
			index--;
			if(index<=-1){
				index=bannerimg.length-1;
			}
		}
		bannerimg.hide();
		bannerimg.eq(index).fadeIn();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"});
		anniu.eq(index).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
	}
	var t=setInterval(function(){
		demo("r");
	},2000);

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			demo("r");
		},2000);
	})

	$(".bannerbtnleft").click(function(){
		demo("l");
	})
	$(".bannerbtnright").click(function(){
		demo("r");
	})
	anniu.hover(function(){
		var now=$(this).index();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"})
        $(this).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
        bannerimg.hide();
        bannerimg.eq(now).fadeIn();
        index=now;
	},function(){

	})

	/*菜单*/
	$(".yiji").hover(function(){
		$(".erji").stop();
		$(this).find(".erji").show();
	},function(){
		$(".erji").stop();
		$(this).find(".erji").hide();
	})

	/*banner-left*/
	$(".yis").hover(function(){
		$(this).find(".ers").show();
	},function(){
		$(this).find(".ers").hide();
	})

	/*danpingbox轮播*/
	var widht = $(".danpingbox").width();
	var lastli = $(".danpingbox .danping-box").first().clone();
	$(".danpingbox .danping").append(lastli);
	var size = $(".danpingbox .danping-box").size();

	var timmer = setInterval(moveRight,5000);

	$(".danping").hover(function () {
		clearInterval(timmer);
	}, function () {
		timmer = setInterval(moveRight,5000);
	});

	var i = 0;
	$(".mingxing .left").click(moveRight)

	$(".mingxing .right").click(moveLeft)

	function moveRight() {
		i++;
		if(i==size){
			$(".mingxing .danping").css({left:0});
			i=1;
		}
		$(".mingxing .danping").stop().animate({left:-i*widht},300);

	}

	function moveLeft() {
		i--;
		if(i==-1){
			$(".mingxing .danping").css({left:-(size-1)*widht});
			i=size-2;
		}
		$(".mingxing .danping").stop().animate({left:-i*widht},300);
	}

	/*js-box无序列表标签页效果*/
	$(".dapei-rightbox").eq(0).show().siblings().not(".dapei-leftbox").hide();
	$(".js-box li").mouseover(function(){
		$(this).addClass("rem").siblings().removeClass("rem");
		var index = $(this).index();
		$(this).parents(".box-hd").next().children().eq(index+1).show().siblings().not(".dapei-leftbox").hide();
	})

	//weini-box轮播
	var wid = $(".weini-ul").width();
	$(".weini-box-div").css({
		width:wid*3
	})
	var last = $(".weini-box .weini-ul").first().clone();
	$(".weini-box .weini-box-div").append(last);
	var sizeTwo = $(".weini-box .weini-ul").size();

	var timme = setInterval(movRight,5000);
	$(".weini-box-div").hover(function () {
		clearInterval(timme);
	}, function () {
		timme = setInterval(movRight,5000);
	})
	var j = 0;
	$(".weini-hd .left").click(movRight)

	$(".weini-hd .right").click(movLeft)

	function movRight() {
		j++;
		if(j==sizeTwo){
			$(".weini-box .weini-box-div").css({left:0});
			j=1;
		}
		$(".weini-box .weini-box-div").stop().animate({left:-j*wid},300);

	}

	function movLeft() {
		j--;
		if(j==-1){
			$(".weini-box .weini-box-div").css({left:-(sizeTwo-1)*wid});
			j=sizeTwo-2;
		}
		$(".weini-box .weini-box-div").stop().animate({left:-j*wid},300);
	}



	/*tushu轮播*/
	var widhtnr = $(".tushu-lunbo").width();
	var lastlinr = $(".nr:eq(0) .tushu-lunbo").first().clone();
	$(".nr:eq(0) .nli").append(lastlinr);
	var sizenr = $(".nr:eq(0) .tushu-lunbo").size();


	$(".ts-dibu:eq(0) .ts-dibu1").click(function(){
		$(this).addClass("ts-dibu1-click").siblings().removeClass("ts-dibu1-click");
		var indexnr = $(this).index();
		$(".nr:eq(0) .nli").stop().animate({left:-indexnr*widhtnr},300);
	});

	var timmernr = setInterval(moveRightnr,3000);

	$(".nr").hover(function () {
		clearInterval(timmernr);
	}, function () {
		timmernr = setInterval(moveRightnr,3000);
	});

	var lef = $(".nr:eq(0) .left");
	var rig = $(".nr:eq(0) .right")
	$(".nr:eq(0)").hover(function(){
		lef.fadeIn(500);
		rig.fadeIn(500);
	},function(){
		lef.fadeOut(500);
		rig.fadeOut(500);
	})

	var inr = 0;
	$(".nr .right").click(moveRightnr);

	$(".nr .left").click(moveLeftnr);

	function moveRightnr() {
		inr++;
		if(inr==sizenr){
			$(".nr .nli:eq(0)").css({left:0});
			inr=1;
		}
		$(".nr .nli:eq(0)").stop().animate({left:-inr*widhtnr},300);
		clic();
	}
	function moveLeftnr() {
		inr--;
		if(inr==-1){
			$(".nr .nli:eq(0)").css({left:-(sizenr-1)*widhtnr});
			inr=sizenr-2;
		}
		$(".nr .nli:eq(0)").stop().animate({left:-inr*widhtnr},300);
		clic();
	}
	function clic(){
		if(inr==sizenr-1){
			$(".ts-dibu:eq(0) .ts-dibu1").eq(0).addClass("ts-dibu1-click").siblings().removeClass("ts-dibu1-click");
		}else{
			$(".ts-dibu:eq(0) .ts-dibu1").eq(inr).addClass("ts-dibu1-click").siblings().removeClass("ts-dibu1-click");
		}
	}
})