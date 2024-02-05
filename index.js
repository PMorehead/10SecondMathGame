var currentProblem;
var timeleft = 10;
var score = 0;
var highScore = 0;
var interval;

var updateScore = function (amount) {
    score += amount;
    $('#score').text(score);
    if (score > highScore) {
        highScore = score;
        $('#high-score').text(highScore);
    }
}

var updateTimeLeft = function (amount) {
    timeleft += amount;
    $('#time-left').text(timeleft);
}
var createRandomInt = function (max) {
    return Math.floor(Math.random() * max) + 1;
}

var createProblem = function () {
    var problem = {};
    var numOne = createRandomInt($('#range').val());
    var numTwo = createRandomInt($('#range').val());
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
        updateScore(+1);
    }
}

var startGame = function () {
    if (!interval) {
        if (timeleft === 0) {
            updateTimeLeft(10);
            updateScore(-score);
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

    $('#range').on('keyup', function () {
        renderNewProblem();
    })

    renderNewProblem();
})
