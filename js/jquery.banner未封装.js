$(function(){

	//全局变量
	var i=0;

	//初始化.img	
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);
	var size=$(".banner .img li").length;//获取img的数量

	//初始化.num
	var $num=$("<ul class='num'></ul>");
	$(".banner").append($num);
	for(var j=0;j<size-1;j++){
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");

	//初始化.btn
	$(".banner").append("<div class='btn btn_l'>&lt;</div><div class='btn btn_r'>&gt;</div>");
	

	//鼠标划入圆点事件
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-index*520},500);
		$(this).addClass("on").siblings().removeClass("on");
	});


	//左按钮事件
	$(".banner .btn_l").click(moveR);
	//右按钮事件
	$(".banner .btn_r").click(moveL);

	//自动轮播
	var t=setInterval(moveL,2000);

	//鼠标移入banner事件
	$(".banner").hover(function(){
		clearInterval(t);		
	},function(){
		t=setInterval(moveL,2000);
	});

	//向左移动函数
	function moveL(){
		i++;
		if(i==size){
			$(".banner .img").css({left:0});
			i=1;
		}
		$(".banner .img").stop().animate({left:-i*520},500);
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
		}else{
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
		}
		
	}

	//向右移动函数
	function moveR(){
		i--;
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*520});
			i=size-2;
		}
		$(".banner .img").stop().animate({left:-i*520},500);
		$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
	}

})