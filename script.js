 //object with questions, choices, and answer. Class actvity 3.33 shows an example.
 //questions from https://jaxenter.com/know-your-javascript-trivia-134924.html
 var quizQuestions = [
    {question : "1.) What is Javascript?",
    choiceA : "A programming language",
    choiceB : "An organic Columbian coffee",
    choiceC : "A means to write a play",
    choiceD: "A childs toy, like a pogo stick",
    correctAnswer : "a"},
    
    {question : "2.) Who created JavaScript?", 
    choiceA : "Microsoft", 
    choiceB : "Netscape",
    choiceC : "Microsystems",
    choiceD: "Apple",
    correctAnswer : "b"},
  
    {question : "3.) Is JavaScript a front-end, back-end, or full-stack programming language?",
    choiceA : "Full Stack Programming",
    choiceB : "Back-end Programming",
    choiceC : "Front-end Programming",
    choiceD: "None, it's for styling",
    correctAnswer : "a"},
  
    {question : "4.) Which of the following is not a reserved word in JavaScript?", 
    choiceA : "default",
    choiceB : "finally",      
    choiceC : "undefined",
    choiceD: "touch",
    correctAnswer: "c"},
  ];

//HTML elements to edit the DOM: the four differnt page layouts
var homePageEl = document.getElementById("homePage");
var questionsPageEl = document.getElementById("questionsPage");
var gameOverPageEl = document.getElementById("gameOverPage");
var scoresPageEl = document.getElementById("scoresPage");

//HTML elements to edit the DOM: buttons
var startBtn = document.getElementById("startBtn");
var aBtn = document.getElementById("a");
var bBtn = document.getElementById("b");
var cBtn = document.getElementById("c");
var dBtn = document.getElementById("d");
var submitBtn = document.getElementById("submitScoreBtn");
var againClearBtns = document.getElementById("againClearBtns");

//HTML elements to edit the DOM: remaining ones
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("answerResult");
var timerEl = document.getElementById("timer");
var userNameEl = document.getElementById("userName");
var scoresTableEl = document.getElementById("highScoreTable");
var highScoreNameEl = document.getElementById("highScoreName");
var highScoreScoreEl = document.getElementById("highScoreScore");


// function that will go through the questions and answers, and display to the page
function generateQuizQuestions(){
    //I don't want the 'game over' page to be display yet
    gameOverPageEl.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    //create a variable for the quesitons and choices array
    var currentQuestion = quizQuestions[currentQuestionIndex];
    //display to the user that question and matching choices for each array index. 
    questionsEl.innerHTML = currentQuestion.question;
    aBtn.innerHTML = currentQuestion.choiceA;
    bBtn.innerHTML = currentQuestion.choiceB;
    cBtn.innerHTML = currentQuestion.choiceC;
    dBtn.innerHTML = currentQuestion.choiceD;
};

//function to start the quiz which will display the questions page and start the timer decrementing
//class example 4.8 provides some timer code
function startQuiz(){
    //display the correct page
    gameOverPageEl.style.display = "block";
    homePageEl.style.display = "none";
    //run the previous function to generate each question in the index
    generateQuizQuestions();

    //time will decrement unless there is not time left which will end the game by running the function that will take the user to the game over page
     //create a variable that is a reference to time, 
    //what set interval takes as an agument is a call back function
    //what the fucntion returns is a reference to the interval
    timerInterval = setInterval(function() {
        timeLeft--;
         //manipute the DOM elemement 
        timerEl.textContent = "Time left: " + timeLeft;
    
        //fucntion will continue so have to give it an end
        if(timeLeft === 0) {
          //take the reference or timeInerval and clear it  
          clearInterval(timerInterval);
          showScore();
        }
        //unit of miliseconds (one thousants of a second)
      }, 1000);
      questionsPageEl.style.display = "block";
}

// Event listener will run when user clicks submit after entering thier name. Tutor help 
submitBtn .addEventListener("click", function highscore(){
    //message for if the users trys to proceed without entering their name
    if(userNameEl.value === "") {
        alert("Please enter your name.");
        return false;
    }else{
        //need variables for putting score local storage for the table
        //use JSON.parse to convert to string
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
        //take off any spaces the user puts when entering thier name
        var currentUser = userNameEl.value.trim();
        //variable to store the user provided name and time left which is now the score
        var currentHighscore = {
            name : currentUser,
            score : timeLeft
        };
        //show the scores table page
        gameOverPageEl.style.display = "none";
        scoresPageEl.style.display = "flex";
        scoresTableEl.style.display = "block";
        againClearBtns.style.display = "flex";
        
        //set the newest score as the current score
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();
    }
});

// function to take the user to the page to enter their intials since the game is over. 
function showScore(){
    questionsPageEl.style.display = "none"
    gameOverPageEl.style.display = "flex";
    clearInterval(timerInterval);
    //Set user name variable to blank since the user needs to enter it
    userNameEl.value = "";
}

//functinon to check the answer. If incorrect, 5 seconds is subtracted from the time. 
//I struggled to display if the answer was correct or incorrect while the user was still on the page so I used alerts. 
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
    //correct answer will alter the user, not mess with the timer, and go to next questions (assuming it's not the last question)
    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        alert("Correct!");
        currentQuestionIndex++;
        generateQuizQuestions();
    //if incorrect, the user will be notified, 5 seconds are subtracted from the timer, and they go to the next question
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        alert("That Is Incorrect. 5 seconds will be subtracted from your time.")
        timeLeft = timeLeft - 5;
        currentQuestionIndex++;
        generateQuizQuestions();
    //if there are no more questions it will bring the user to the page to enter their name
    }else{
        showScore();
    }
}

// function sets name and score to an empty string and gets the list from local storage and displays it to the page. Tutor helped with function
function generateHighscores(){
    highScoreNameEl.innerHTML = "";
    highScoreScoreEl.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highScoreNameEl.appendChild(newNameSpan);
        highScoreScoreEl.appendChild(newScoreSpan);
    }
}

// Show high score page
function showHighScore(){
    homePageEl.style.display = "none"
    gameOverPageEl.style.display = "none";
    scoresPageEl.style.display = "flex";
    scoresTableEl.style.display = "block";
    againClearBtns.style.display = "flex";
    //runs the function to get the values (if there are any in local storage)
    generateHighscores();
}

// function goes back to homepage and resets questions array and timer back to 45 seconds
function backToHome(){
    scoresPageEl.style.display = "none";
    gameOverPageEl.style.display = "none";
    homePageEl.style.display = "flex";
    timeLeft = 45;
    currentQuestionIndex = 0;
}

// function clears local storage
function clearScores(){
    window.localStorage.clear();
    highScoreNameEl.textContent = "";
    highScoreScoreEl.textContent = "";
}

//event listener to start the game when the button is clicked
startBtn.addEventListener("click",startQuiz);