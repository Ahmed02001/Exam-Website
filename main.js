const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const questionText = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("curent-Question");
const totalQuestionSpan = document.getElementById("total-Question");
const ScoreSpan = document.getElementById("score");
const answerContainer = document.getElementById("answer-container");
const progressBar = document.getElementById("progress");
const resultScreen = document.getElementById("result-screen");
const resultMessage = document.getElementById("result-message");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "London", correct: false },
//       { text: "Berlin", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Madrid", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//       { text: "Venus", correct: false },
//       { text: "Mars", correct: true },
//       { text: "Jupiter", correct: false },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     answers: [
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Arctic Ocean", correct: false },
//       { text: "Pacific Ocean", correct: true },
//     ],
//   },
//   {
//     question: "Which of these is NOT a programming language?",
//     answers: [
//       { text: "Java", correct: false },
//       { text: "Python", correct: false },
//       { text: "Banana", correct: true },
//       { text: "JavaScript", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     answers: [
//       { text: "Go", correct: false },
//       { text: "Gd", correct: false },
//       { text: "Au", correct: true },
//       { text: "Ag", correct: false },
//     ],
//   },
// ];

// cssQuestions
const quizQuestions = [
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    question: "Which HTML tag is used to apply CSS?",
    answers: [
      { text: "<css>", correct: false },
      { text: "<script>", correct: false },
      { text: "<style>", correct: true },
      { text: "<link>", correct: false },
    ],
  },
  {
    question: "Which CSS property changes text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "foreground", correct: false },
    ],
  },
  {
    question: "Which selector selects all elements?",
    answers: [
      { text: "#", correct: false },
      { text: ".", correct: false },
      { text: "*", correct: true },
      { text: "all", correct: false },
    ],
  },
  {
    question: "Which property is used to change font size?",
    answers: [
      { text: "font-style", correct: false },
      { text: "text-size", correct: false },
      { text: "font-size", correct: true },
      { text: "size", correct: false },
    ],
  },
  {
    question: "Which CSS property controls spacing between lines?",
    answers: [
      { text: "letter-spacing", correct: false },
      { text: "line-height", correct: true },
      { text: "text-spacing", correct: false },
      { text: "word-spacing", correct: false },
    ],
  },
  {
    question: "Which unit is relative to parent element?",
    answers: [
      { text: "px", correct: false },
      { text: "cm", correct: false },
      { text: "em", correct: true },
      { text: "pt", correct: false },
    ],
  },
  {
    question: "How do you make text bold in CSS?",
    answers: [
      { text: "font-weight: bold", correct: true },
      { text: "font-style: bold", correct: false },
      { text: "text-bold: true", correct: false },
      { text: "weight: bold", correct: false },
    ],
  },
  {
    question: "Which property adds shadow to text?",
    answers: [
      { text: "text-shadow", correct: true },
      { text: "box-shadow", correct: false },
      { text: "font-shadow", correct: false },
      { text: "shadow", correct: false },
    ],
  },
  {
    question: "Which property changes background color?",
    answers: [
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "background-style", correct: false },
    ],
  },
  {
    question: "Which CSS position removes element from normal flow?",
    answers: [
      { text: "relative", correct: false },
      { text: "absolute", correct: true },
      { text: "static", correct: false },
      { text: "inherit", correct: false },
    ],
  },
  {
    question: "Which property is used to hide overflow content?",
    answers: [
      { text: "display", correct: false },
      { text: "overflow", correct: true },
      { text: "visibility", correct: false },
      { text: "hidden", correct: false },
    ],
  },
  {
    question: "Which value makes an element invisible but keeps space?",
    answers: [
      { text: "display: none", correct: false },
      { text: "opacity: 0", correct: false },
      { text: "visibility: hidden", correct: true },
      { text: "hidden", correct: false },
    ],
  },
  {
    question: "Which property controls element stacking order?",
    answers: [
      { text: "z-index", correct: true },
      { text: "stack-order", correct: false },
      { text: "layer", correct: false },
      { text: "position", correct: false },
    ],
  },
  {
    question: "Which selector targets an element with id 'box'?",
    answers: [
      { text: ".box", correct: false },
      { text: "#box", correct: true },
      { text: "box", correct: false },
      { text: "*box", correct: false },
    ],
  },
  {
    question: "Which property is used to make rounded corners?",
    answers: [
      { text: "corner-radius", correct: false },
      { text: "border-round", correct: false },
      { text: "border-radius", correct: true },
      { text: "radius", correct: false },
    ],
  },
  {
    question: "Which display value places elements in a row by default?",
    answers: [
      { text: "block", correct: false },
      { text: "inline-block", correct: false },
      { text: "inline", correct: true },
      { text: "flex", correct: false },
    ],
  },
  {
    question: "Which CSS module is used for layouts?",
    answers: [
      { text: "Grid", correct: false },
      { text: "Flexbox", correct: false },
      { text: "Both Grid and Flexbox", correct: true },
      { text: "Position", correct: false },
    ],
  },
  {
    question: "Which property aligns items horizontally in flexbox?",
    answers: [
      { text: "align-items", correct: false },
      { text: "justify-content", correct: true },
      { text: "flex-align", correct: false },
      { text: "content-align", correct: false },
    ],
  },
  {
    question: "Which pseudo-class applies on mouse hover?",
    answers: [
      { text: ":active", correct: false },
      { text: ":focus", correct: false },
      { text: ":hover", correct: true },
      { text: ":visited", correct: false },
    ],
  },
  {
    question: "Which CSS property controls transparency?",
    answers: [
      { text: "visibility", correct: false },
      { text: "opacity", correct: true },
      { text: "filter", correct: false },
      { text: "alpha", correct: false },
    ],
  },
  {
    question: "Which property is used to change cursor style?",
    answers: [
      { text: "mouse", correct: false },
      { text: "pointer", correct: false },
      { text: "cursor", correct: true },
      { text: "hover", correct: false },
    ],
  },
  {
    question: "Which CSS value makes element flexible?",
    answers: [
      { text: "display: block", correct: false },
      { text: "display: inline", correct: false },
      { text: "display: flex", correct: true },
      { text: "display: table", correct: false },
    ],
  },
  {
    question: "Which CSS property sets space outside the border?",
    answers: [
      { text: "padding", correct: false },
      { text: "margin", correct: true },
      { text: "spacing", correct: false },
      { text: "border-space", correct: false },
    ],
  },
  {
    question: "Which property changes list bullet style?",
    answers: [
      { text: "list-style-type", correct: true },
      { text: "bullet-style", correct: false },
      { text: "list-type", correct: false },
      { text: "marker", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;

maxScoreSpan.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  ScoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestions();
}

function showQuestions() {
  answerDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  questionText.textContent = currentQuestion.question;
  console.log(questionText.textContent);
  console.log(currentQuestion.question);

  const progressPresent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPresent + "%";

  answerContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectedAns);

    answerContainer.appendChild(button);
  });
}

function selectedAns(event) {
  if (answerDisabled) return;

  answerDisabled = true;

  const selectedButton = event.target;

  const isCorrect = selectedButton.dataset.correct === "true";
  Array.from(answerContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button == selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    ScoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestions();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const presentage = (score / quizQuestions.length) * 100;

  if (presentage === 100) {
    resultMessage.textContent = "Prefect! You're Genius!";
  } else if (presentage >= 80) {
    resultMessage.textContent = "Greet Job! You Know Your Stuff!";
  } else if (presentage >= 60) {
    resultMessage.textContent = "Good Effort! Keep Learning!";
  } else if (presentage >= 40) {
    resultMessage.textContent = "NOt Bad! Try Again To Improve!";
  } else {
    resultMessage.textContent = "Keep Studying! You'll Get Butter!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
