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