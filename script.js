'use strict';

//What is DOM manipulation? 
//      Document Object Model: a connection point between HTML doc and JS 

//logging message to the console to see: 
/*
console.log(document.querySelector('.message').
textContent); 

//correct number message:
document.querySelector('.message').textContent = '🎉 Correct Number!';

//secret number: 
document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10;

//guess number to compute the value; 
document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value);
*/

//secretNumber needs to be global, so set it outside of the .check button/addEventListener
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; 

// each time if guessing number is wrong - the score will decrease by 1
// declare it with let because it will change throughout each play
// keep this as a global variable
let score = 20; 


//handling click on the 'check!' button: by using addEventListener() method
document.querySelector('.check').addEventListener('click', function() {
    // log the number entered in the square, will ONLY be call once 'check!' button is 'click'
    // console.log(document.querySelector('.guess').value); 
   const guess = Number(document.querySelector('.guess').value);
   // log the guess and also the data type
    console.log(guess, typeof guess);

    //if there is no guess and 'check!' button is clicked:
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!'; 

        // if the guess is the same as secretNumber:
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';

        // if the guess is bigger than secretNumber:
    } else if(guess > secretNumber) {
        document.querySelector('.message').textContent = '⤴️ Too High!';
        // if the guess is too high, it will auto decrement from starting score value
        score--;
        // then it will log it on the DOM with the decrement score
        document.querySelector('.score').textContent = score;

        // if guess is lower than than secretNumber:
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '⤵️ Too Low!';
          // if the guess is too high, it will auto decrement from starting score value
        score--;
         // then it will log it on the DOM with the decrement score
        document.querySelector('.score').textContent = score;
    }
});


