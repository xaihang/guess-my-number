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

//game logics:
//      if the guess is correct (=== secret number)
//       or guess is too hight to secret number
//       or guess is too low to secret number

//Secret number needs to be global, so set it outside of the .check button/addEventListener
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number; 


//handling click on the 'check!' button: by using addEventListener() method
document.querySelector('.check').addEventListener('click', function() {
    // log the number we enter in the square, will ONLY be call once 'check!' button is 'click'
    // console.log(document.querySelector('.guess').value); 
   const guess = Number(document.querySelector('.guess').value);
   // log the guess and also the data type
    console.log(guess, typeof guess);

    //if there is no guess and 'check!' button is clicked:
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!'; 
    }
});

