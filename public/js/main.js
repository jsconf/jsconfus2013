var TRIGGER = 1369746000000; // set to May 28th to include opening events
var SECOND = 1000;
var MINUTE = 60000;
var HOUR = 3600000;
var DAY = 86400000;
var updateTimer;
function setTime() {
	var now = +(new Date());
	if (now >= TRIGGER) {
		$("#days").html("JSCONF");
		$("#daystep").html("FUCK YEA");
		if (updateTimer)
			clearInterval(updateTimer);
		return false;
	} else {
		var diff = TRIGGER - now;
		var days = parseInt(diff / DAY, 10);
		diff = diff - (days*DAY);
		var hours = parseInt(diff /HOUR, 10);
		diff = diff - (hours*HOUR);
		var minutes = parseInt(diff / MINUTE, 10);;
		diff = diff - (minutes*MINUTE);
		var seconds = parseInt(diff / SECOND, 10);;
		$("#days span").html(days);
		$("#hours").html(hours);
		$("#minutes").html(minutes);
		$("#seconds").html(seconds);
		return true;
	}
}


function setWeather() {
	$("#high span").html("80");
	$("#low span").html("75");
	$("#weather").html("")
}


$(function () {
	if (setTime())
		setInterval(setTime, 1000);

	setWeather();
});