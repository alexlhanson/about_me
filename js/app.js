'use strict';

// //welcome message
// alert('Hello and welcome! Let\'s get to know the nitty gritties of Alex');

// //prompt for a username
// var username = prompt('But to begin, what is your name?');
// console.log('What is your name? ; ' + username);
// alert('Hi, nice to meet you ' + username + '. This is a guessing game to get to know Alex');

// //Begin the guessing game
// var language = prompt('Does Alex also speak Spanish');
// language = language.toLowerCase();
// console.log('Does Alex speak Spanish?; ' + language);
// if (language === 'y' || language === 'yes') {
//   alert('Well done! You guessed correctly.');
// }
// else if (language === 'n' || language === 'no') {
//   alert('Actually, I learned to speak it in South America.');
// }
// else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
// };

// //Second question
// var kids = prompt('Does Alex have wonderful little boys?');
// kids = kids.toLowerCase();
// console.log('Does Alex have wonderful little boys?; ' + kids);
// if (kids === 'y' || kids === 'yes') {
//   alert('Well done! They are 3 and 7.');
// }
// else if (kids === 'n' || kids === 'no') {
//   alert('Actually, he has two boys');
// }
// else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
// };

// //third question
// var superPower = prompt('Does Alex have super powers?');
// superPower = superPower.toLowerCase();
// console.log('Does Alex have super powers?; ' + superPower);
// if (superPower === 'y' || superPower === 'yes') {
//   alert('He does, his power is to get to a restaurant right before a big line starts');
// }
// else if (superPower === 'n' || superPower === 'no') {
//   alert('Actually, his power is to get to a restaurant right before a big line starts');
// }
// else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
// };

// //fourth question
// var meatEater = prompt('Does Alex consume animal products?');
// meatEater = meatEater.toLowerCase();
// console.log('Does Alex consume animal products?; ' + meatEater);
// if (meatEater === 'y' || meatEater === 'yes') {
//   alert('Well kinda, he does consume dairy, but he doesn\'t eat meat');
// }
// else if (meatEater === 'n' || meatEater === 'no') {
//   alert('Sorry, he is not that hardcore, he just doesn\'t eat meat');
// }
// else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
// };

// //fifth question
// var lifeSaver = prompt('Has Alex saved the lives of hundreds?');
// lifeSaver = lifeSaver.toLowerCase();
// console.log('Has Alex saved lives?; ' + lifeSaver);
// if (lifeSaver === 'y' || lifeSaver === 'yes') {
//   alert('Wow, you sure think highly of him. Maybe he has touched some hearts, but "saved hundreds of lives" is a tall order.');
// }
// else if (lifeSaver === 'n' || lifeSaver === 'no') {
//   alert('You are clearly a realist.');
// }
// else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
// };

// // create random number for question 6
// var myMin = 1;
// var myMax = 2;
// var randomNum = Math.random();
// var randomNumber = (Math.floor(randomNum * ( myMax - myMin + 1)) + myMin);

// // sixth question prompt for random number and responses
// var numberGuess;
// var guesses = 0;
// while (guesses < 4){
//   numberGuess = prompt('Guess a number between 1 and 20. Hint: keep it to integers');
//   if (numberGuess > randomNumber){
//     alert('Try something a little lower');
//   } else if (numberGuess < randomNumber){
//     alert('Try something a little higher');
//   } guesses++;
//   if (guesses === 4){
//     alert('Sorry, you are out of guesses');
//   }else if (numberGuess == randomNumber){
//     alert('Nice, you guessed correctly');
//     break;
//   }else {
//     alert('Why don\'t you give it another shot. You have ' + (4 - guesses) + ' left');
//   }
// }

//seventh question prompt for array of favorite animal
var favAnimals = ['duck-billed platypus', 'lemur', 'raven', 'hydra', 'dog']


//Thanks for playing message
// alert('Thanks for playing. Hopefully, you have learned a little more about what makes Alex tick');