/* Mostly from: https://www.w3schools.com/howto/howto_css_coming_soon.asp */

// Set the date we're counting down to
var countDownDate = new Date("Dec 11, 2017 23:30").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="counter"
  document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // Write text depending on whether the date has passed
  if (distance >= 0) {
    document.getElementById("sentence").innerHTML = "until Hamilton!";
  } else {
    document.getElementById("sentence").innerHTML = "since Hamilton!";
  }
}, 1000);
