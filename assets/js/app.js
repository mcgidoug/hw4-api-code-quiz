// targeting start button and timer
let startButton = document.getElementById("startButton");
let timer = document.getElementById("timer");
// containers for quiz, question, answers
let quizContainer = document.getElementById("quiz");
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
// start time global
let startTime = 60;

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
  // looping through each button and adding event listener
  document.querySelectorAll(".answerButton").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (
        event.currentTarget.innerText === myQuestions[currentQuestion].answer
      ) {
        score++;
      } else {
        startTime -= 10;
      }
      currentQuestion++;
      if (currentQuestion > 3) {
        endQuiz();
      } else {
        showQuestion();
      }
    });
  });
}
// function to end quiz
function endQuiz() {
  let nameInput = document.createElement("input");
  let scoreSubmit = document.createElement("button");
  quizContainer.innerHTML = "";
  nameInput.setAttribute("id", "nameInput");
  scoreSubmit.setAttribute("id", "scoreSubmit");
  scoreSubmit.innerText = "Submit";
  quizContainer.append(nameInput);
  quizContainer.append(scoreSubmit);
  scoreSubmit.addEventListener("click", submitScore);
  document.getElementById("startButton").remove();
  startTime = 0;
}
// function to submit score at end
function submitScore() {
  let scores = [];
  let name = document.getElementById("nameInput").value;
  if (localStorage.getItem("scores")) {
    scores = JSON.parse(localStorage.getItem("scores"));
  }
  scores.push({
    name: name,
    score: score,
  });
  localStorage.setItem("scores", JSON.stringify(scores));
  displayScores(scores);
}
function displayScores(scores) {
  quizContainer.innerHTML = "";
  for (entry of scores) {
    let scoreEntry = document.createElement("p");
    scoreEntry.innerText = `Name: ${entry.name}, Score: ${entry.score}`;
    quizContainer.append(scoreEntry);
  }
}
// timer function
function timerStart() {
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
