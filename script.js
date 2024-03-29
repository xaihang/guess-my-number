'use strict';

//.... Notes and re-usable text ....//

//What is DOM manipulation? 
//      Document Object Model: a connection point between HTML doc and JS 
//      to manipulate the DOM remember to use string capsule the value 
//Refractory: Keep DRY in mind 
//       condense duplicate codes
//        

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
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// each time if guessing number is wrong - the score will decrease by 1
// declare it with let because it will change throughout each play
// keep this as a global variable
let score = 20; 

//need to store the highscore in a variable 
let highscore = 0;


//created a function that's reusable/repetitive: 
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message; 
}

//-------------------------------------------//
//----------THE GAMING ENVIRONMENT-----------//
//-------------------------------------------//

//.... input box, check! button, score and highscore area..../

//handling click on the 'check!' button: by using addEventListener() method
document.querySelector('.check').addEventListener('click', function() {
    // log the number entered in the square, will ONLY be call once 'check!' button is 'click'
    // console.log(document.querySelector('.guess').value); 
   const guess = Number(document.querySelector('.guess').value);

   // log the guess and also the data type
    console.log(guess, typeof guess);

    //when there is no guess and 'check!' button is clicked:
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔️ No Number!'; 
          //refractor snippet code above:
        displayMessage('⛔️ No Number!');

        // when player wins:
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Number!';
          //refractor snippet code above:
        displayMessage('🎉 Correct Number!');

    //when player wins the game - change the background color - to do that we need to manipulate the style in CSS 
    document.querySelector('body').style.backgroundColor = '#60b347'; 
        //increase the width:
    document.querySelector('.number').style.width = '30rem';

    // check the current score vs highScore, if current score is higher than set it to the new highScore
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

// when guess is wrong or is different from secretNumber:
}  else if (guess !== secretNumber) {
    if (score > 1) {
        // document.querySelector('.message').textContent = 
        // guess > secretNumber ? '⤴️ Too High!' : '⤵️ Too Low!';
         //refractor snippet code above:
        displayMessage(guess > secretNumber ? '⤴️ Too High!' : '⤵️ Too Low!');
        
        // when the guess is too high/low, it will auto decrement from starting score value
        score--;
        // then it will log it on the DOM with the decrement score
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = '❌ YOU LOST THE GAME!';
        //refractor snippet code above:
        displayMessage('❌ YOU LOST THE GAME!');
        document.querySelector('.score').textContent = 0;
    }
}
    
});


//.... again! button ....//

//this setup allow us to play the game 'again!' without having to reload the browser aka restore everything 
// everything will reset - EXCEPT the 'highScore' 
//  select the element with the 'again' class and attach a click event handler:
document.querySelector('.again').addEventListener('click', function() {

    //  restore initial vales of the score and SecretNumber variable:
    score = 20;    
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //  restore the initial conditions of the message, number, score, and guess input field:
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ''; //set to nothing aka empty string '' 

    //  restore the original bg-color #222 and number width of 15rem: 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

