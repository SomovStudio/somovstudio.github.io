(function(){

	var ephemeridesList = []; // массив загруженных эфемерид

	var fileEphemerides = document.getElementById('fileEphemerides');

	fileEphemerides.addEventListener('change', function(event){
		ephemeridesList = [];
		var file = event.target.files[0];
  		var reader = new FileReader();
  		reader.onload = function(e) {
			var text = e.target.result;
			//console.log(text);
			var value = '';
			var valueDate = '';
			var valueSun = '';
			var valueVenus = '';
			var valueMars = '';
			var valueJupiter = '';
			var valueSaturn = '';
			var valuePluto = '';
			for (var i = 0; i < text.length; ++i) {
      			//console.log(text[i] + " | " + text[i].charCodeAt());
      			if(text[i] == '	' || text[i] == ' ' || text[i] == '\n' || text[i].charCodeAt() == 9 || text[i].charCodeAt() == 10 || text[i].charCodeAt() == 13){
      				if(valueDate == '') valueDate = value;
      				else if(valueSun == '') valueSun = value;
      				else if(valueVenus == '') valueVenus = value;
      				else if(valueMars == '') valueMars = value;
      				else if(valueJupiter == '') valueJupiter = value;
      				else if(valueSaturn == '') valueSaturn = value;
      				else if(valuePluto == '') valuePluto = value;
      				if(valueDate != '' && valueSun != '' && valueVenus != '' && valueMars != '' && valueJupiter != '' && valueSaturn != '' && valuePluto != ''){
      					ephemeridesList.push([valueDate, valueSun, valueVenus, valueMars, valueJupiter, valueSaturn, valuePluto]);
      					valueDate = '';	valueSun = '';	valueVenus = ''; valueMars = ''; valueJupiter = '';	valueSaturn = ''; valuePluto = '';
      				}
      				value = '';
      				continue;
      			}
      			value = value + text[i];
       		}
  		};
		reader.readAsText(file);

		console.log(ephemeridesList);
	});


}());