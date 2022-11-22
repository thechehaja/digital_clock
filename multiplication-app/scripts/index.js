const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;
questionEl.innerText = `What is ${num1} times ${num2}?`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    if (score < 0) {
      score = 0;
    }
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
