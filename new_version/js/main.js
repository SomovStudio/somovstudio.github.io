$(document).ready(function(){

	$('#title').animate({opacity:1}, 2000);
	$('#logo').animate({opacity:1}, 2000);
	$('#info').animate({opacity:1}, 2000);
	$('.Rotate').toggleClass('RotateBack');

	$(window).scroll(function(){
		var scrolled = $(this).scrollTop();
		$("#headerTitleAndLogo").css({
			"transform" : "translate(0%, " + scrolled + "%)"
		});
		
		$("#contacts img").css({
			"transform" : "translate(0%, -" + scrolled / 10.5 + "%)"
		});

		if($(this).scrollTop() <= $("header").height()){
			$("body").css({
				"background-image" : "url('./img/background1.jpg')"
			});
		}
		if($(this).scrollTop() > $("header").height()){
			$("body").css({
				"background-image" : "url('./img/background2.jpg')"
			});
		}
	});


});