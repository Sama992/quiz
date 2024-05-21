
let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionContainer = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButton = document.getElementById('answer-buttons');
let result = document.getElementById('result');
let shuffledQuestions, currentQuestionIndex;
let correctCount = 0;



const questions = [
    {
        question: 'What is 2+2?',
        answers: [
            { option:'4', correct: true},
            { option:'22', correct: false}
        ]
    },
    {
        question: 'What is 5+2?',
        answers: [
            { option:'6', correct: false},
            { option:'7', correct: true}
        ]
    },
    {
        question: 'What is 6*2?',
        answers: [
            { option:'12', correct: true},
            { option:'62', correct: false}
        ]
    },
    {
        question: 'What is 7+2?',
        answers: [
            { option:'9', correct: true},
            { option:'14', correct: false}
        ]
    }
]



startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})


function startQuiz() {
    
    result.classList.add('hide');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random()-0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {
    resetDisplay();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {
    
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        
        button.innerText = answer.option;
        
        
            button.dataset.correct = answer.correct;
        
             
        
        
        button.addEventListener('click', selectAnswer, {once: 'true'});
        
        answerButton.appendChild(button);
        
    });
    

}


function resetDisplay() {
    nextButton.classList.add('hide');
    answerButton.classList.remove('hide');
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e) {
    
    let selectedButton = e.target;
    
    let correct = selectedButton.dataset.correct;
    
    answerButton.classList.add('hide');
    if (correct == "true") {
        alert("Correct answer");
        correctCount++;
    } else {
        alert("Wrong answer");
    }
    
    if (shuffledQuestions.length > currentQuestionIndex+1) {
        nextButton.classList.remove('hide');
        
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        endScreen();
    }

    
}



function endScreen() {
    
    result.innerText = `No. of correct answers = ${correctCount}`;
    result.classList.remove('hide');
}
