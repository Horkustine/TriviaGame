const questions = [
    {
        question: "What player makes the fourth most money annually on the Miami Heat?",
        options: ["Jimmy Butler", "Tyler Herro", "Terry Rozier", "Duncan Robinson"],
        answer: "Terry Rozier"
    },
    {
        question: "What player has the most game winners in Miami Heat history?",
        options: ["Dwyane Wade", "Lebron James", "Jimmy Butler", "Tim Hardaway"],
        answer: "Dwyane Wade"
    },
    {
        question: "In what Conference and Division did the Miami Heat join the league as?",
        options: ["Eastern Conference, Atlantic Division", "Eastern Conference, Southeast Division", "Western Conference, Southwest Division", "Western Conference, Midwest Division"],
        answer: "Western Conference, Midwest Division"
    },
    {
        question: "What franchise does the Miami Heat have the best win% against?",
        options: ["Washington Wizards", "Boston Celtics", "Phoenix Suns", "Detroit Pistons"],
        answer: "Washington Wizards"
    },
    {
        question: "How often does Oliver shower?",
        options: ["Daily", "Only When Forced", "Twice Daily", "Weekly"],
        answer: "Daily"
    },
    {
        question: "Are the Celtics bad?",
        options: ["Superteam Merchants", "Jayson Tabum is Bad", "Heat Better", "Had to Put The Stick in the Box (EE ER)"],
        answer: "Jayson Tabum is Bad"
    },

];

const titleScreen = document.getElementById("title-screen");
const questionContainer = document.getElementById("question-container");
const startBtn = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;

function loadQuestion() {
    titleScreen.style.display = "none";
    questionContainer.style.display = "block";

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.innerText = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        resultElement.innerText = "Correct!";
        setTimeout(() => {
            resultElement.innerText = "";
        }, 1500);
    } else {
        resultElement.innerText = "Incorrect!";
        setTimeout(() => {
            resultElement.innerText = "";
        }, 1500);
        checkAnswer(selectedOption)

    }

    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(() => {
            resultElement.innerText = "Quiz completed!";
            questionContainer.style.display = "none";
        }, 1000);

    }
}

startBtn.addEventListener("click", loadQuestion);
