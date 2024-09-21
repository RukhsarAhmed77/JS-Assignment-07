var input = prompt("Enter a palindrome:");

var reversedstr = '';

for (var i = input.length - 1; i >= 0; i--) {
  reversedstr += input[i];
}

if (input === reversedstr) {
    console.log('It is a palindrome');
} else {
    console.log('It is not a palindrome');
}
