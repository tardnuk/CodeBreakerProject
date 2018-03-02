let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess()
{
    let input = document.getElementById('user-guess');

    //add functionality to guess function here

    if (answer.value !== '' && answer.value !== '') {
        return;
    }

    setHiddenFields();

    if (!validateInput(input.value)) {
        return false;
    }

    attempt.value++;
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