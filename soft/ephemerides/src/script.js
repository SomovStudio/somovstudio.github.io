(function(){

	var ephemeridesList = []; // массив загруженных эфемерид

	var fileEphemerides = document.getElementById('fileEphemerides');
	var titleEphemerides = document.getElementById('titleEphemerides');
	var tableEphemerides = document.getElementById('tableEphemerides');

	fileEphemerides.addEventListener('change', function(event){
		var file = event.target.files[0];
  		var reader = new FileReader();
  		reader.onload = function(e) {
			var text = e.target.result;
			readEphemerides(text);
  		};
		reader.readAsText(file);
	});

	function readEphemerides(text)
	{
		ephemeridesList = [];
		titleEphemerides.innerHTML = "Подождите пожалуйста идет загрузка...";

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
   		titleEphemerides.innerHTML = "Таблица загруженных эфемерид:";

   		showEphemerides();
	}

	function showEphemerides()
	{
		console.log(ephemeridesList);
		var table = '<table><thead><tr><td>Дата</td><td>Солнце</td><td>Венера</td><td>Марс</td><td>Юпитер</td><td>Сатурн</td><td>Плутон</td></tr></thead>';
		table = table + "<tbody>";
		ephemeridesList.forEach(function(element) {
  			table = table + "<tr>";
  			table = table + "<td>"+element[0]+"</td>";
  			table = table + "<td>"+element[1]+"</td>";
  			table = table + "<td>"+element[2]+"</td>";
  			table = table + "<td>"+element[3]+"</td>";
  			table = table + "<td>"+element[4]+"</td>";
  			table = table + "<td>"+element[5]+"</td>";
  			table = table + "<td>"+element[6]+"</td>";
  			table = table + "</tr>";
		});
		table = table + "</tbody></table>";
		tableEphemerides.innerHTML = table;
	}

}());