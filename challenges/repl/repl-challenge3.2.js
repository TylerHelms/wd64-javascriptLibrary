let floor = 1;
let ceiling = 10;
let tries = 3;
let chosenNum = 0;
let answer = Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
let message = 'Guess a number between ' + floor + ' and ' + ceiling + ':';

while (tries > 0) {
    chosenNum = prompt(message, chosenNum);
    if (chosenNum === null) {
        alert('The game has ended');
        break;
    } else if (isFinite(chosenNum) && chosenNum !== '') {
        chosenNum = + chosenNum;
        if (chosenNum < floor) {
            alert('Your cannot guess lower than ' + floor + '.');
        }
        else if (chosenNum > ceiling) {
            alert('You cannot guess higher than ' + ceiling + '.');
        }
        else if (chosenNum > answer) {
            alert('Your guess is too high.');
        }
        else if (chosenNum < answer) {
            alert('Your guess is too low');
        }
        else {
            alert('Nice, you guessed correctly!');
            break;
        }
    }
    else {
        alert('You have to at least guess a number');
    }
    
    tries = tries - 1;
}

if (tries === 0) {
    alert('You ran out of tries.  The number was ' + answer + '.');
}
