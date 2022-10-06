var showTime = document.getElementById("time-left");
var startQuiz = document.getElementById("start-btn");
var timeLeft = 100;
var quizInfo = document.getElementById("quiz-info");

// in JSON syntax
var questions = [{
    question: "Arrays in JavaScript can be used to store _______.",
    options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"], answer: "All of the above"
}, {
    question: "Commonly used data types do NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
}, {
    question: "A tool used during development and debugging for printing content to the debugger is:",
    options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
}, {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    options: ["Commas", "Parenthesis", "Quotes", "Curly brackets"],
    answer: "Parenthesis"
}, {
    question: "The condition in an if/else statement is enclosed with ______.",
    options: ["Curly brackets", "Quotes", "Parenthesis", "Square brackets"],
    answer: "Parenthesis"
}];

// starts quiz timer
function startTimer() {     
    document.getElementById("quiz-info").style.display = "none";
    document.getElementById("start-btn").style.display = "none";
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            showTime.textContent = "Time: " + timeLeft;
            timeLeft--;
        } else {
            showTime.textContent = "You're out of time!";
            clearInterval(timeInterval);
        }
    }, 1000);
};
startQuiz.addEventListener("click", startTimer);

startQuiz = function() {
    questionCounter = 0;
    score = 0;
    takingAnswers = true;
    currentScore.innerText = score;
    remainingQuestions > 0;
    nextQuestion();
};

// presents first question
function nextQuestion(){
    if (remainingQuestions.length === 0) {
        displayScore();
        returns;
    }
    var currentQuestion = JSON.parse(questions);
    
    

    // modify one of the attributes to say right or wrong
    

    // append all elements to something on the page

    // for all the buttons, add event listener
    answer.addEventListener("click")
    // WHEN I answer a question
    // if answered correctly        
    // show as correct    
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    timeLeft -=10;
    document.getElementById("time-left").innerHTML = timeLeft
    
    // show as incorrect
    console.log("incorrect")
    // after the answer, 
    // THEN I am presented with another question
    // need a function call to present the question

    // if no other questions,
    // go to highscore screen

};

// user's current quiz score
// var counter = document.querySelector(".time-Left");
// var score = localStorage.setItem("time-Left");
// var questionCounter = document.getElementById("question-holder row")


// // increases user's score if correct, or adds time if incorrect
// for(var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     }
//         else {
//             alert("Wrong!");
//         }
// }

var initials = document.getElementById("initials");

var saveButton = document.getElementById("save");

// saves user's quiz score
function saveScore() {
    var myScore = {
        initials: initials.value,
        score: score.value
    };
    // storing score and converting number to string
    localStorage.setItem("myScore", JSON.stringify(saveScore));
};

// retrieves user's final quiz score
function renderLastScore() {
    var lastScore = JSON.parse(localStorage.getItem("timeLeft"));
    // checking if data is returned or else exit function
    if (lastScore !== null) {
        document.getElementById("saved-initials").innerHTML = lastScore.initials;
        document.getElementById("saved-score").innerHTML = lastScore.score;
    } else {
        return;
    }
};

saveButton.addEventListener("click", function(event) {
event.preventDefault();
saveScore();
renderLastScore();
});

// saves user initials locally
localStorage.setItem("initials", initials);
localStorage.setItem("score", timeLeft);

function init() {
    renderLastScore();
};
init();

function showHighScores() {

}