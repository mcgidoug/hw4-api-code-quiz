// targeting start button and timer
let startButton = document.getElementById("startButton");
let timer = document.getElementById("timer");
// containers for quiz, question, answers
let quizContainer = document.getElementById("#quiz");
let question = document.querySelector("#question");
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");
let choice4 = document.querySelector("#choice4");
// score container
let scoreContainer = document.getElementById("#score");
let score = 0;
// current question counter
let currentQuestion = 0;

// questions, choices, answers
const myQuestions = [
  {
    question: "What color is grass?",
    choice1: "green",
    choice2: "blue",
    choice3: "red",
    choice4: "magenta",
    answer: "green",
  },
  {
    question: "What is 2 + 2?",
    choice1: "45",
    choice2: "4",
    choice3: "2",
    choice4: "0",
    answer: "4",
  },
  {
    question: "How many legs does a dog have?",
    choice1: "76",
    choice2: "1",
    choice3: "4",
    choice4: "7",
    answer: "4",
  },
  {
    question: "How do you spell 'computer'?",
    choice1: "cos",
    choice2: "ocputrer",
    choice3: "contpero",
    choice4: "computer",
    answer: "computer",
  },
];
// pairing start button with begin
startButton.addEventListener("click", beginQuiz);
// function to begin timer and quiz
function beginQuiz() {
  timerStart();
  showQuestion();
}
// timer function
function timerStart() {
  let startTime = 60;
  let timeInterval;
  timeInterval = setInterval(function () {
    if (startTime >= 1) {
      startTime--;
      timer.textContent = startTime + " Seconds left";
    } else {
      clearInterval(timeInterval);
      timer.textContent = "Time's up!";
    }
  }, 1000);
}

// dynamically changes states of questions and choices
function showQuestion() {
  question.innerText = myQuestions[currentQuestion].question;
  choice1.innerText = myQuestions[currentQuestion].choice1;
  choice2.innerText = myQuestions[currentQuestion].choice2;
  choice3.innerText = myQuestions[currentQuestion].choice3;
  choice4.innerText = myQuestions[currentQuestion].choice4;
}

// quizContainer.addEventListener("click", function(event)) {

// }
