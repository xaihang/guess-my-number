'use strict';

//.... Notes and re-usable text ....//

//What is DOM manipulation? 
//      Document Object Model: a connection point between HTML doc and JS 
//      to manipulate the DOM remember to use string capsule the value 
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

//.... global variables ....//

//secretNumber needs to be global, so set it outside of the .check button/addEventListener
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; 

// each time if guessing number is wrong - the score will decrease by 1
// declare it with let because it will change throughout each play
// keep this as a global variable
let score = 20; 

//-------------------------------------------//
//----------THE GAMING ENVIRONMENT-----------//
//-------------------------------------------//

//.... input box, check! button and score..../

//handling click on the 'check!' button: by using addEventListener() method
document.querySelector('.check').addEventListener('click', function() {
    // log the number entered in the square, will ONLY be call once 'check!' button is 'click'
    // console.log(document.querySelector('.guess').value); 
   const guess = Number(document.querySelector('.guess').value);
   // log the guess and also the data type
    console.log(guess, typeof guess);

    //when there is no guess and 'check!' button is clicked:
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No Number!'; 

        // when player wins:
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';

    //when player wins the game - change the background color - to do that we need to manipulate the style in CSS 
    document.querySelector('body').style.backgroundColor = '#60b347'; 
        //increase the width:
    document.querySelector('.number').style.width = '30rem';

        // when guess is too high:
    } else if(guess > secretNumber) {

        // when the player score is 1 or less it will dispute the following conditions:
        if (score > 1) {
            document.querySelector('.message').textContent = '⤴️ Too High!';
            // when the guess is too high, it will auto decrement from starting score value
            score--;
            // then it will log it on the DOM with the decrement score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ YOU LOST THE GAME!';
            document.querySelector('.score').textContent = 0;
        }
       
        // when guess is too low: 
    } else if (guess < secretNumber) {

        // when the player score is 1 or less it will dispute the following conditions:
        if (score > 1) {
            document.querySelector('.message').textContent = '⤵️ Too Low!';
            // when the guess is too low, it will auto decrement from starting score value
            score--;
            // then it will log it on the DOM with the decrement score
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '❌ YOU LOST THE GAME!';
            document.querySelector('.score').textContent = 0;
        }
    }
});


//.... again! button ....//



//.... highscore  ....//