let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess()
{
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setHiddenFields()
{
    answer = randomIntFromInterval(0, 9999);

    answer = answer.toString();

    while (answer.length < 4) {
        answer = '0' + answer;
    }
}

//implement new functions here