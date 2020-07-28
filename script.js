const startButton = document.getElementById("startBtn")
const nextButton = document.getElementById("nextBtn")
const questionContainerElement = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById ("answerButtons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random()- .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}


function setNextQuestion(){
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
 questionElement.innerText=question.question
 question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
 })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1)
    nextButton.classList.remove("hide")
    else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove ("wrong")
}

const questions = [
      {
        question:"What does 3M stand for?",
        answers: 
            [
            {text: "Minnesota Minning & Manufacturing", correct: true},
            {text: "Money Market Manager", correct: false},
            {text: "Mickey Mouse's Mansion", correct: false},
            {text: "Mars Man Mission", correct: false}
            ]
        },
        {
            question:"What is 10 - 5?",
            answers: 
                [
                {text: "0", correct: false},
                {text: "7", correct: false},
                {text: "5", correct: true},
                {text: "90", correct: false}
                ]
            },
            {
                question:"Which is not a lipid?",
                answers: 
                    [
                    {text: "HDL", correct: false},
                    {text: "LDL", correct: false},
                    {text: "Trygliceride", correct: true},
                    {text: "FDL", correct: false}
                    ]
                },
                {
                    question:"What does a dog say?",
                    answers: 
                        [
                        {text: "Meow", correct: false},
                        {text: "Howdy", correct: false},
                        {text: "Woof", correct: true},
                        {text: "Shhh", correct: false}
                        ]
                    },
                    {
                        question:"What state is most North?",
                        answers: 
                            [
                            {text: "Florida", correct: false},
                            {text: "Texas", correct: false},
                            {text: "South Dakota", correct: true},
                            {text: "North Carolina", correct: false}
                            ]
                        }
    ]