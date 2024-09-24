
//Assignment 07

var userInput = prompt("Enter a palindrome:");

var reversedStr = userInput.split('').reverse().join('');

if (userInput === reversedStr) {
    console.log('It is a palindrome');
} else {
    console.log('It is not a palindrome');
}