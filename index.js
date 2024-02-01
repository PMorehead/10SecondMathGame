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

$(document).ready(function () {
    currentProblem = createProblem();
    $('#problem').text(currentProblem.equation);

    $('#user-input').on('keyup', function () {
        console.log($(this).val());
    })
})
