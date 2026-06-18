const quiz = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language"
    ],
    answer: 0
},
{
    question: "Which language is used for styling webpages?",
    options: ["Python", "Java", "CSS", "C++"],
    answer: 2
},
{
    question: "Which keyword declares a variable?",
    options: ["echo", "print", "var", "show"],
    answer: 2
},
{
    question: "Which company developed JavaScript?",
    options: ["Google", "Netscape", "Microsoft", "Apple"],
    answer: 1
}
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const options = document.getElementById("options");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    let q = quiz[currentQuestion];

    question.innerText = `${currentQuestion + 1}. ${q.question}`;
    options.innerHTML = "";
    feedback.innerText = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");

        btn.innerText = option;
        btn.classList.add("option-btn");

        btn.onclick = () => checkAnswer(index);

        options.appendChild(btn);
    });
}

function checkAnswer(selected) {
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === quiz[currentQuestion].answer) {
        buttons[selected].classList.add("correct");
        feedback.innerText = "✅ Correct!";
        score++;
    } else {
        buttons[selected].classList.add("wrong");
        buttons[quiz[currentQuestion].answer].classList.add("correct");
        feedback.innerText = "❌ Wrong!";
    }
}

nextBtn.onclick = () => {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        let percentage = (score / quiz.length) * 100;

        document.querySelector(".quiz-container").innerHTML = `
            <h2>Quiz Completed 🎉</h2>
                <h3>Score: ${score}/${quiz.length}</h3>
            <h3>Percentage: ${percentage}%</h3>
        `;
    }
};

loadQuestion();