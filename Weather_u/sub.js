
function LastUpdateTime(ElemID){
	var now = new Date();
	var year = now.getYear(); // ”N
	var month = now.getMonth() + 1; // ŒŽ
	var day = now.getDate(); // “ú
	var hour = now.getHours(); // Žž
	var min = now.getMinutes(); // •ª
	var sec = now.getSeconds(); // •b

	if(year < 2000) { year += 1900; }
	if(month < 10) { month = "0" + month; }
	if(day < 10) { day = "0" + day; }
	if(hour < 10) { hour = "0" + hour; }
	if(min < 10) { min = "0" + min; }
	if(sec < 10) { sec = "0" + sec; }

	// •\Ž¦
	document.write("<div id='" + ElemID + "'>" + year + '/' + month + '/' + day + " " + hour + ':' + min + ':' + sec +  "</div>");
}

function AutoReload(min){
	setInterval('location.reload(true);',1000*60*min)
}

