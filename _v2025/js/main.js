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
			$('#bunner').show();
		}
		if(scrolled > $("header").height()){
			$(".background__fullscreen").hide();
			$("#background").css({
				"background-image" : "url('./img/background2.jpg')"
			});
			$(".menu").css({
				"background-color" : "rgba(30, 69, 140, 0.6)"
			});
			$('#bunner').hide();
		}

		// SECTION
		var headerHeight = $("header").height() / 4;
		var iconsHeight = $(".section-white-icons").height();
		var sectionWhite = $(".section-white").height();
		if(scrolled > headerHeight){
			$("#browser").animate({left:0}, 500);
			$("#browser-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite)){
			$("#system").animate({left:0}, 500);
			$("#system-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite * 2)){
			$("#autotests").animate({left:0}, 500);
			$("#autotests-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite * 3)){
			$("#system-tiles").animate({opacity:1}, 1000);
		}
		if(scrolled > (headerHeight + iconsHeight + sectionWhite * 3)){
			$("#video-review").animate({left:0}, 500);
			$("#video-review-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite * 4.5)){
			$("#documentation").animate({left:0}, 500);
			$("#documentation-image").animate({left:0}, 500);
		}
		if(scrolled > (headerHeight + sectionWhite * 5.5)){
			$("#ai").animate({left:0}, 500);
			$("#ai-image").animate({left:0}, 500);
		}


		// MENU
		if(scrolled <= 50){
			$(".menu").css({
				"background-color" : "rgba(0, 0, 0, 0)"
			});
		}
		if(scrolled > 50){
			$(".menu").css({
				"background-color" : "rgba(45, 67, 113, 0.8)"
			});
		}
	});


});