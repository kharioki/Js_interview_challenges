//! CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// e.g. reverseString('hello') === 'olleh'

function reverseString(str) {
  // solution 1 => contert string into an array of characters, reverse array then convert to string
  //   return str
  //     .split('')
  //     .reverse()
  //     .join('');

  // solution 2 => using for loop with decreasing array
  //   let revString = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     revString = revString + str[i];
  //   }
  //   return revString;

  // solution 3 => using for loop with increasing array
  //   let revString = '';
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     revString = str[i] + revString;
  //   }
  //   return revString;

  // solution 4 => using for-of loop
  //   let revString = '';
  //   for (let char of str) {
  //     revString = char + revString;
  //   }
  //   return revString;

  // solution 5 => using forEach
  //   let revString = '';
  //   str.split('').forEach(char => revString = char + revString);
  //   return revString;

  // solution 6 => using array reduce
  return str.split('').reduce((acc, char) => char + acc, '');
}

//! CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome
// e.g isPalindrome('racecar') === true, isPalindrome('hello') === false

function isPalindrome(str) {}

//! CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// e.g reverseInt(521) === 125

function reverseInt(int) {}

//! CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// e.g. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {}

//! CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// e.g. maxCharacter('javascript') == 'a'

function maxCharacter(str) {}

//! CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {}

// Call Function
const output = reverseString('kharioki');

console.log(output);
