'use strict';

//What is DOM manipulation? 
//      Document Object Model: a connection point between HTML doc and JS 

//logging message to the console to see: 
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

//handling click on the 'check!' button: