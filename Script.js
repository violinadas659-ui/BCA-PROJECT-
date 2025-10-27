const quiz = document.getElementById("quiz");
const results = document.getElementById("results");
const submitBtn = document.getElementById("submit");

const questions = [
  { question: "What does HTML stand for?", answers: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"], correct: 0 },
  { question: "Which language is used for styling web pages?", answers: ["HTML", "CSS", "Python"], correct: 1 },
  { question: "Which language is used for web apps?", answers: ["PHP", "Python", "JavaScript"], correct: 2 }
];

function buildQuiz() {
  quiz.innerHTML = questions.map((q, i) => `
    <div>
      <p>${i + 1}. ${q.question}</p>
      ${q.answers.map((a, j) =>
        `<label><input type="radio" name="q${i}" value="${j}"> ${a}</label><br>`
      ).join('')}
    </div>
  `).join('');
}

function showResults() {
  let score = 0;
  questions.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && parseInt(answer.value) === q.correct) score++;
  });
  results.innerHTML = `You scored ${score} out of ${questions.length}`;
}

buildQuiz();
submitBtn.addEventListener("click", showResults);
