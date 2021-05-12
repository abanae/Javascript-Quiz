//Value of Questions    
let questions = [{
    title: `Inside the HTML document, where do you place your JavaScript code?`,
    choices: ["inside script element", "inside head element", "inside footer element", "inside link element"],
    answer: "inside script element"
},
{
    title: "What operator is used to assign a value to a declared variable?",
    choices: ["Question mark (?)", "Colon (:)", "Equal sign (=)", "Double-equal (==)"],
    answer: "Equal sign (=)"
},
{
    title: "What are the six primitive data types in JavaScript?",
    choices: ["string, number, boolean, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined", "sentence, float, data, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined"],
    answer: "string, number, boolean, bigInt, symbol, undefined"
},
{
    title: "How do we declare a conditional statement in JavaScript?",
    choices: ["for loop", "boolean", "unshift", "if...else"],
    answer: "if...else"
},
{
    title: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    choices: ["2", "0", "1", "3"],
    answer: "1"
}
]

// Function for timer & score
let score = 0;
let currentQuestion = -1;
let timeLeft = 0;
let timer;

function start() {

    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}

//Function to End Game 
function endGame() {
    clearInterval(timer);

    let quizContent = `
<h1>GAME OVER!</h1>
<h3>Score of ` + score + ` /100!</h3>
<h3>You got ` + score / 20 + ` questions correct!</h3>
<label for="name" id="nameLabel">Initials:</label>
<input type="text" id="name" placeholder="First Last"> 
<button onclick="setScore()">Get score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}


function getScore() {
    let quizContent = `
<h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
<h1>` + localStorage.getItem("highscore") + `</h1><br> 

<button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>

`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//Function Clear Score
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

//Function Reset 
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    let quizContent = 
`<h1>JavaScript Quiz</h1>
<h3>Click to play!</h3>
<button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//Functions for Results
function wrongAnswer() {
    timeLeft -= 10;
    next();
}

function rightAnswer() {
    score += 20;
    next();
}

