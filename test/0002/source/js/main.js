$.fn.MessageBox = function(msg) {
    alert(msg);
};

$(document).ready(function(){
	var menu = $("#Menu");
	var menuA = $("#MenuA");
	var menuB = $("#MenuB");
	var menuC = $("#MenuC");
	var menuD = $("#MenuD");
	var menuE = $("#MenuE");
	var menuF = $("#MenuF");

	var panelA = $("#PanelFilesA");
	var panelB = $("#PanelFilesB");
	var panelC = $("#PanelFilesC");
	var panelD = $("#PanelFilesD");
	var panelE = $("#PanelFilesE");
	var panelF = $("#PanelFilesF");

	var window_form = $("#window");
	window_form.hide();
	var window_title = $("#window_title");
	var window_content = $("#window_content");

	function ResetMenu() {
		window_form.hide("slow");

		menu.removeClass("start-menu");
		$(".start-logo").removeClass("start-logo");
		$(".menu-item").removeClass("start-menu-item");
		$(".menu-item-text").removeClass("start-menu-item-text");
		
		panelA.hide("slow");
		menuA.removeClass("start-menu-item-img-a");
		menuA.removeClass("menu-item-selected");
		panelB.hide("slow");
		menuB.removeClass("start-menu-item-img-b");
		menuB.removeClass("menu-item-selected");
		panelC.hide("slow");
		menuC.removeClass("start-menu-item-img-c");
		menuC.removeClass("menu-item-selected");
		panelD.hide("slow");
		menuD.removeClass("start-menu-item-img-d");
		menuD.removeClass("menu-item-selected");
		panelE.hide("slow");
		menuE.removeClass("start-menu-item-img-e");
		menuE.removeClass("menu-item-selected");
		panelF.hide("slow");
		menuF.removeClass("start-menu-item-img-f");
		menuF.removeClass("menu-item-selected");

		ResetFiles();
	}

	function ResetFiles() {
		$(".file-image-hover").removeClass("file-image-hover");
		$(".file-description-title-hover").removeClass("file-description-title-hover");
		$(".file-description-text-hover").removeClass("file-description-text-hover");
		window_content.html("");
		window_title.html("");
	}

	menuA.click(function(){
		ResetMenu();
		panelA.show("slow");
		menuA.addClass("menu-item-selected");
	});

	menuB.click(function(){
		ResetMenu();
		panelB.show("slow");
		menuB.addClass("menu-item-selected");
	});

	menuC.click(function(){
		ResetMenu();
		panelC.show("slow");
		menuC.addClass("menu-item-selected");
	});

	menuD.click(function(){
		ResetMenu();
		panelD.show("slow");
		menuD.addClass("menu-item-selected");
	});

	menuE.click(function(){
		ResetMenu();
		panelE.show("slow");
		menuE.addClass("menu-item-selected");
	});

	menuF.click(function(){
		window.open("about.html", "_self");
	});

	$.fn.ReadFile = function(filename, title) {
		ResetFiles();
		this.addClass("file-image-hover");
		this.find(".file-description-title").addClass("file-description-title-hover");
		this.find(".file-description-text").addClass("file-description-text-hover");

        $.get('./source/files/' + filename, function(txt){
        	window_title.html(title);
        	window_content.html(txt);
			window_form.show("slow");
        });
    };

    $.fn.DecryptFile = function(filename, title) {
		ResetFiles();
		this.addClass("file-image-hover");
		this.find(".file-description-title").addClass("file-description-title-hover");
		this.find(".file-description-text").addClass("file-description-text-hover");

		let key = prompt('Введите ключ', '')
		
        $.get('./source/files/' + filename, function(txt){
        	let values = txt.split(",");
			let text = "";
			let j = 0;
			for (let i = 0; i < values.length; i++) {
				text = text + String.fromCharCode(values[i] / key.charCodeAt(j));
				j++;
				if (j == key.length) j = 0;
			}
        	window_title.html(title);
        	window_content.html(text);
			window_form.show("slow");
        });
    };

    $.fn.ReadFilePDF = function(filename, title) {
		window.open('./source/files/' + filename, "_blank");
    };

});