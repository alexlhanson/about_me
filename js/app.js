'use strict';


//welcome message
alert('Hello and welcome! Let\'s get to know the nitty gritties of Alex');

//prompt for a username
var username = prompt('But to begin, what is your name?');
console.log('What is your name? ; ' + username);
alert('Hi, nice to meet you ' + username + '. This is a guessing game to get to know me');

//Begin the guessing game
var language = prompt('Does Alex also speak Spanish');
language = language.toLowerCase();
console.log('Does Alex Spanish?');
if (language === 'y' || language === 'yes') {
  alert('Well done! You guessed correctly.');
}
else if (language === 'n' || language === 'no') {
  alert('Actually, I learned to speak it in South America.');
}
else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
};

//Second question
var kids = prompt('Does Alex have wonderful little boys?');
kids = kids.toLowerCase();
console.log('Does Alex have wonderful little boys?');
if (kids === 'y' || kids === 'yes') {
  alert('Well done! They are 3 and 7.');
}
else if (kids === 'n' || kids === 'no') {
  alert('Actually, I have two boys');
}
else  {alert('I am not a very smart program, please keep responses to yes/no y/n.');
};

//third question
