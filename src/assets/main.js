const answer = document.getElementById('answer');
const attempt = document.getElementById('attempt');
const results = document.getElementById('results');
const code = document.getElementById('code');
const guessing = document.getElementById('guessing-div');
const replay = document.getElementById('replay-div');

function guess()
{
    let input = document.getElementById('user-guess');

    //add functionality to guess function here

    if (answer.value === '' || answer.value === '') {
        setHiddenFields();
    }

    if (!validateInput(input.value)) {
        return false;
    }

    attempt.value++;

    if (getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
        return;
    }

    if (attempt.value >= 10) {
        setMessage('You Lose! :(');
        showAnswer(false);
        showReplay();
        return;
    }

    setMessage('Incorrect, try again.');
}

//implement new functions here

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setHiddenFields()
{
    let randomAnswer = randomIntFromInterval(0, 9999);

    randomAnswer = randomAnswer.toString();

    while (randomAnswer.length < 4) {
        randomAnswer = '0' + randomAnswer;
    }

    answer.value = randomAnswer;
    attempt.value = 0;
}

function setMessage(message)
{
    // TODO Build 8 - where is label?
    //label.innerHTML = message;
}

function validateInput(guess)
{
    if (guess.length === 4) {
        return true;
    }

    setMessage('Guesses must be exactly 4 characters long.');

    return false;
}

function getResults(input)
{
    let output = '';
    let icon = 'remove';
    let correctCount = 0;

    output += `<div class="row"><span class="col-md-6">${input}</span><div class="col-md-6">`;

    // correct position - <span class="glyphicon glyphicon-ok"></span>
    // included, wrong position - <span class="glyphicon glyphicon-transfer"></span>
    // not in answer - <span class="glyphicon glyphicon-remove"></span>

    for (let i = 0, x = input.length; i < x; i++) {
        icon = 'remove';

        if (input[i] === answer.value[i]) {
            icon = 'ok';
            correctCount++;
        } else {
            if (answer.value.indexOf(input[i]) > -1) {
                icon = 'transfer';
            }
        }

        output += `<span class="glyphicon glyphicon-${icon}"></span>`;
    }

    output += '</div></div>';

    results.innerHTML = output;

    return correctCount === answer.length;
}

function showAnswer(winner)
{
    code.innerHTML = answer.value;

    if (winner) {
        code.classList.add('success');
        return;
    }

    code.classList.add('failure');
}

function showReplay()
{
    guessing.style.display = 'none';
    replay.style.display = 'block';
}