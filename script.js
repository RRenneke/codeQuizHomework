//create a time variable using CSS selector
var timeElement = document.querySelector(".time");

//create variable with number of seconds user has to start
var secondsRemaining = 10;

function setTime() {
  //put before increment starts to show user they start with 60 seconds
  timeElement.textContent = "You have " + secondsRemaining + " seconds remaining.";  
  //setup variable that will show incremented seconds
  var timerInterval = setInterval(function() { 
  //secondsRemaining-- will take one second off at a time
  secondsRemaining--;
  //Content to show user
    timeElement.textContent = "You have " + secondsRemaining + " seconds remaining.";  
//this will stop the timer from running if it reaches 0 and alert the user
    if(secondsRemaining === 0) {
      clearInterval(timerInterval);
      alert("Sorry! Time is up")
    }
//1,000 is milliseconds, 1 equals one second
  }, 1000);
}
//call the function
setTime();