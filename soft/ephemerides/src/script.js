(function(){

	var ephemeridesList = []; // массив загруженных эфемерид

	var fileEphemerides = document.getElementById('fileEphemerides');

	fileEphemerides.addEventListener('change', function(event){
		var file = event.target.files[0];
  		var reader = new FileReader();
  		reader.onload = function(e) {
			console.log(e.target.result)
  		};
		reader.readAsText(file);
	});
}());