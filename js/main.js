$(document).ready(function(){

	$('#title').animate({opacity:1}, 2000);
	$('#logo').animate({opacity:1}, 2000);
	$('#info').animate({opacity:1}, 2000);
	$('.logo-rotate').toggleClass('logo-rotate-back');

	$("#video").css({
		"height" : $(window).height() + $('.menu').height() + 50
	});
	$( window ).resize(function() {
  		$("#video").css({
			"height" : $(window).height() + $('.menu').height() + 50
		});
	});

	$(window).scroll(function(){
		var scrolled = $(this).scrollTop();
		$("#header-title-logo").css({
			"transform" : "translate(0%, " + scrolled + "%)"
		});
		
		$("#contacts img").css({
			"transform" : "translate(0%, -" + scrolled / 10.5 + "%)"
		});

		if($(this).scrollTop() <= $("header").height()){
			$(".background__fullscreen").show();
			$("#background").css({
				"background-image" : "url('./img/background1.jpg')"
			});
		}
		if($(this).scrollTop() > $("header").height()){
			$(".background__fullscreen").hide();
			$("#background").css({
				"background-image" : "url('./img/background2.jpg')"
			});
		}

		var headerHeight = $("header").height() / 4;
		var iconsHeight = $(".section-white-icons").height();
		var sectionWhite = $(".section-white").height();

		if($(this).scrollTop() > headerHeight){
			$("#about").animate({left:0}, 500);
			$("#about-image").animate({left:0}, 500);
		}
		if($(this).scrollTop() > (headerHeight + sectionWhite)){
			$("#services").animate({left:0}, 500);
			$("#services-image").animate({left:0}, 500);
		}
		if($(this).scrollTop() > (headerHeight + sectionWhite * 2)){
			$("#technology").animate({left:0}, 500);
			$("#technology-image").animate({left:0}, 500);
		}
		if($(this).scrollTop() > (headerHeight + iconsHeight + sectionWhite * 3)){
			$("#download").animate({left:0}, 500);
			$("#download-image").animate({left:0}, 500);
		}
	});


});