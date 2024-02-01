var currentProblem;
var timeleft = 10;
var interval;

var updateTimeLeft = function (amount) {
    timeleft += amount;
    $('#time-left').text(timeleft);
}
var createRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

var createProblem = function () {
    var problem = {};
    var numOne = createRandomInt(10);
    var numTwo = createRandomInt(10);
    problem.answer = numOne + numTwo;
    problem.equation = String(numOne) + " + " + String(numTwo);


    return problem;
}

var renderNewProblem = function () {
    currentProblem = createProblem();
    $('#problem').text(currentProblem.equation);
}

var checkAnswer = function (userInput, answer) {
    if (userInput === answer) {
        renderNewProblem();
        $('#user-input').val('');
        updateTimeLeft(+1);
    }
}

var startGame = function () {
    if (!interval) {
        if (timeleft === 0) {
            updateTimeLeft(10);
        }
            interval = setInterval(function () {
            updateTimeLeft(-1);
            if(timeleft === 0) {
                clearInterval(interval);
                interval = undefined;
            }
            console.log(timeleft);
         }, 1000);
    }
}

$(document).ready(function () {
    

    $('#user-input').on('keyup', function () {
        startGame();
        checkAnswer(Number($(this).val()), currentProblem.answer);
    })

    renderNewProblem();

    
})
