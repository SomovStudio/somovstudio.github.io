$(document).ready(function(){

	$('#bunner').animate({opacity:1}, 2000);
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

		// HEADER
		$("#header-title-logo").css({
			"transform" : "translate(0%, " + scrolled + "%)"
		});		
		$("#contacts img").css({
			"transform" : "translate(0%, -" + scrolled / 10.5 + "%)"
		});

		if(scrolled <= $("header").height()){
			$(".background__fullscreen").show();
			$("#background").css({
				"background-image" : "url('./img/background1.jpg')"
			});
			$(".menu").css({
				"background-color" : "rgba(30, 69, 140, 0)"
			});
		}
		if(scrolled > $("header").height()){
			$(".background__fullscreen").hide();
			$("#background").css({
				"background-image" : "url('./img/background2.jpg')"
			});
			$(".menu").css({
				"background-color" : "rgba(30, 69, 140, 0.6)"
			});
		}

		// SECTION
		var headerHeight = $("header").height() / 4;
		var iconsHeight = $(".section-white-icons").height();
		var sectionWhite = $(".section-white").height();
		if(scrolled > headerHeight){
			$("#about").animate({left:0}, 500);
			$("#about-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite)){
			$("#developments").animate({left:0}, 500);
			$("#developments-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite * 2)){
			$("#technology").animate({left:0}, 500);
			$("#technology-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + iconsHeight + sectionWhite * 3)){
			$("#video-review").animate({left:0}, 500);
			$("#video-review-image").animate({left:0}, 500);
		}

		// MENU
		if(scrolled <= 50){
			$(".menu").css({
				//"background-color" : "rgba(30, 69, 140, 0)"
				"background-color" : "rgba(0, 0, 0, 0)"
			});
		}
		if(scrolled > 50){
			$(".menu").css({
				//"background-color" : "rgba(30, 69, 140, 0.6)"
				"background-color" : "rgba(45, 67, 113, 0.8)"
			});
		}
	});


});