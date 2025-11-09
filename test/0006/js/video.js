$(document).ready(function(){

	$(window).scroll(function(){
		var scrolled = $(this).scrollTop();

		if(scrolled <= 50){
			$("header").css({
				//"background-color" : "rgba(0, 0, 0, 0)"
				//"background" : "none"
				"box-shadow" : "none"
			});
		}
		if(scrolled > 50){
			$("header").css({
				//"background-color" : "rgba(45, 67, 113, 0.8)"
				//"background" : "linear-gradient(135deg, #3498db, #2c3e50)"
				"box-shadow" : "0 2px 10px rgba(0, 0, 0, 0.5)"
			});
		}
	});
});