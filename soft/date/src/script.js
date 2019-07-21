$(function() {
    $(".input-date").datepicker();
});

(function(){

	var excludeList = []; // массив периодов дат которые служать исключениями

	var buttonCalculate = document.getElementById('buttonCalculate');
	var buttonAdd = document.getElementById('buttonAdd');
	var buttonClear = document.getElementById('buttonClear');
	var buttonCalculateClear = document.getElementById('buttonCalculateClear');
	var format = document.getElementById('format');

	/* событие нажатия на кнопку "Рассчитать" */
	buttonCalculate.addEventListener('click', function(){
		var result = document.getElementById('result');
		result.innerHTML = "";

		var startData = document.getElementById('startDate');
		var endData = document.getElementById('endDate');
		var datesArray = getDates(startDate.value, endDate.value);

		excludeList.forEach(function(element) {
  			datesArray = excludeDates(datesArray, element[0], element[1])	
		});

		var resultHTML = "";
		datesArray.forEach(function(element) {
			resultHTML = resultHTML + moment(element).format(format.value)+"<br>";
		});
		result.innerHTML = resultHTML;
	});

	/* событие нажатия на кнопку "Добавить" */
	buttonAdd.addEventListener('click', function(){
		var startData = document.getElementById('addStartDate');
		var endData = document.getElementById('addEndDate');
		excludeList.push([startData.value, endData.value]);

		var list = document.getElementById('excludeList');
		list.innerHTML = "";
		excludeList.forEach(function(element) {
  			list.innerHTML = list.innerHTML + "<br>Исключить период от " + element[0] + " до " + element[1];
		});
	});

	/* событие нажатия на кнопку "Очистить" */
	buttonClear.addEventListener('click', function(){
		excludeList = [];
		var list = document.getElementById('excludeList');
		list.innerHTML = "";
	});

	/* очистить результат прворки */
	buttonCalculateClear.addEventListener('click', function(){
		excludeList = [];
		var list = document.getElementById('excludeList');
		list.innerHTML = "";
		var result = document.getElementById('result');
		result.innerHTML = "";
	});

	/* получить массив дат заданного периода*/
	function getDates(startDate, endDate) 
	{
	    var dateArray = [];
	    var currentDate = moment(startDate);
	    var stopDate = moment(endDate);
	    while (currentDate <= stopDate) {
        	dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
	        currentDate = moment(currentDate).add(1, 'days');
	    }
	    return dateArray;
	}

	/* исключить период из массива дат и получить новый обновленный массив */
	function excludeDates(datesArray, startDate, endDate)
	{
		Array.prototype.exclude = function(list){
        	return this.filter(function(el){return list.indexOf(el)<0;})
		}

		var datesExclude = getDates(startDate, endDate);
		var newDataArray = datesArray.exclude(datesExclude);
		return newDataArray;
	}

}());