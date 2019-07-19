(function(){

	var button = document.getElementById('buttonCalculate');

	/* событие нажатия на кнопку "Рассчитать" */
	button.addEventListener('click', function(){
		var startData = document.getElementById('startDate');
		var endData = document.getElementById('endDate');
		var datesArray = getDates(startDate.value, endDate.value);
		
		//console.log(dates);

		datesArray = excludeDates(datesArray, '2019-01-15', '2019-01-20')

		var result = document.getElementById('result');
		datesArray.forEach(function(element) {
  			result.innerHTML = result.innerHTML + element+"<br>";
		});
		
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