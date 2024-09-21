var input = prompt("Enter a palindrome:");

var reversedStr = '';

for (var i = input.length - 1; i >= 0; i--) {
  reversedStr += input[i];
}

if (input === reversedStr) {
    console.log('It is a palindrome');
} else {
    console.log('It is not a palindrome');
}
