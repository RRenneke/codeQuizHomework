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
