(function(){

	var buttonCalc1 = document.getElementById('buttonCalc1');
	var buttonCalc2 = document.getElementById('buttonCalc2');

	buttonCalc1.addEventListener('click', function(){
		var value = document.getElementById('value');
		var total = document.getElementById('total');
		var balance = document.getElementById('balance');
	
		total.value = parseFloat(value.value)*60;
		balance.value = parseFloat(total.value)-(60*8);
	});

	buttonCalc2.addEventListener('click', function(){
		var minut = document.getElementById('minut');
		var result = document.getElementById('result');
	
		result.value = parseFloat(minut.value)/60;
	});

}());