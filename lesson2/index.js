<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge,chrome">
      <title>Пример обратного отсчета события</title>
  </head>

   <body>

<h1 class="countdown-title">Таймер</h1>
<div id="clockdiv">
	      <div>
			<span class="years"></span>
			<div class="smalltext">Годы</div>
		  </div>
		  <div>
			<span class="months"></span>
			<div class="smalltext">Месяцы</div>
		  </div>
		  <div>
			<span class="days"></span>
			<div class="smalltext">Дни</div>
		  </div>
		  <div>
			<span class="hours"></span>
			<div class="smalltext">Часы</div>
		  </div>
		  <div>
			<span class="minutes"></span>
			<div class="smalltext">Минуты</div>
		  </div>
		  <div>
			<span class="seconds"></span>
			<div class="smalltext">Секунды</div>
		  </div>
	  </div>
<!-- 
https://denis-creative.com/jstimer/
https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
-->
 <script>
 	function getTimeRemaining(endtime) {
	"use strict";
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor( (t/(1000*60*60*24*7)));
  var months = Math.floor (t/(1000*60*60*24*7*4)); 
  var years = Math.floor (t/(1000*60*60*24*7*4*12));
  return {
    'total': t,
    'years': years,
    'months': months,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
		"use strict";
  var clock = document.getElementById(id);
  var yearsSpan = clock.querySelector('.years');
  var monthsSpan = clock.querySelector('.months');
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);
    
    yearsSpan.innerHTML = t.years;
    monthsSpan.innerHTML = t.months;
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = 'Jan 01 2024 10:00:00 GMT-0600';
initializeClock('clockdiv', deadline);
 </script>
</body>

 
</html>
