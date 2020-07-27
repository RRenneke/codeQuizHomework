var startButton = document.getElementById("startBtn")
var questionContainerElement = document.getElementById ("questionContainer")
var questionElement = document.getElementById("question")
var answerButtonElement = document.getElementById ("answerButtons")

let shuffledQuestion, currentQuestion

startButton.addEventListener("click",startGame)

function startGame(){
    console.log ("Started")
    startButton.classList.add("hide")
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
}

function nextQuestion(){
    showQuestion(shuffledQuestion[currentQuestion])

}

function showQuestion(question){
    questionElement.innerText= questions.question
}

function selectAnswer(){

}

var questions = [
        {
        question:"What is 2+2?",
        answer: 
            [
            {text: "4", correct: true},
            {text: "0", correct: false},
            {text: "7", correct: false},
            {text: "90", correct: false}
            ]
        }
    ]