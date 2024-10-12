const quizData = [
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 2
    },
    {
        question: "Which programming language is known as the 'language of the web'?",
        choices: ["Python", "JavaScript", "Java", "C++"],
        correct: 1
    },
    {
        question: "What is the freezing point of water in Celsius?",
        choices: ["0°C", "100°C", "32°F", "-1°C"],
        correct: 0
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Osmium", "Oganesson", "Oxygenium"],
        correct: 0
    },
    {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        correct: 1
    },
    {
        question: "Which planet is closest to the sun?",
        choices: ["Venus", "Earth", "Mercury", "Mars"],
        correct: 2
    },
    {
        question: "In what year did World War II end?",
        choices: ["1939", "1942", "1945", "1950"],
        correct: 2
    },
    {
        question: "What is the chemical formula for water?",
        choices: ["H2O", "CO2", "O2", "NaCl"],
        correct: 0
    },
    {
        question: "Which country is home to the kangaroo?",
        choices: ["India", "Australia", "South Africa", "Brazil"],
        correct: 1
    },
    {
        question: "Who developed the theory of relativity?",
        choices: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Marie Curie"],
        correct: 2
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        choices: ["Liver", "Brain", "Lungs", "Heart"],
        correct: 3
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
        correct: 2
    },
    {
        question: "Which continent is the Sahara Desert located in?",
        choices: ["Asia", "Africa", "North America", "South America"],
        correct: 1
    },
];


let currentQuestion = 0;
let score = 0;

function loadQuestion(){
    let currentQuestionData = quizData[currentQuestion];

    // Add Question Taitle
    document.getElementById("question").textContent = currentQuestion + 1 + ")"+ currentQuestionData.question

    let choices = document.querySelectorAll(".choice");

    choices.forEach((choice,index) => {
        choice.textContent = currentQuestionData.choices[index]
    });

    document.getElementById("nextButton").style.display = "none"
}




function selectAnswer(index){
    let currentQuestionData = quizData[currentQuestion];
    let choices = document.querySelectorAll(".choice");

    if(index == currentQuestionData.correct)
    {
        score++;
        choices[index].style.backgroundColor =  "#28a745";
    }else{
        choices[index].style.backgroundColor =  "#dc3545";
        choices[currentQuestionData.correct].style.background =  "#28a745";
    }

    choices.forEach((choice) => {
        choice.disabled = true
    });
    document.getElementById("nextButton").style.display = "block"
}

function nextQuestion(){
    currentQuestion++;
}




window.onload = loadQuestion();