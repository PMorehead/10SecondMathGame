var currentProblem;

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
    }
}



$(document).ready(function () {
    

    $('#user-input').on('keyup', function () {
        checkAnswer(Number($(this).val()), currentProblem.answer);
    })

    renderNewProblem();
})
