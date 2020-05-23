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

function isPalindrome(str) {
  // reverse string then compare reversed string and initial string
  const reversedStr = str.split('').reduce((acc, char) => char + acc, '');
  return reversedStr === str;
}

//! CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// e.g reverseInt(521) === 125

function reverseInt(int) {
  // convert integer to string first then reverse
  // to make sure this works even for negative numbers we multiply by Math.sign(int)
  const revString = int
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(revString) * Math.sign(int);
}

//! CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// e.g. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  // solution 1 - using for loop
  // first lowercase string
  //   const strArr = str.toLowerCase().split(' ');

  //   for (let i = 0; i < strArr.length; i++) {
  //     // capitalize every first letter
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   // join the words
  //   return strArr.join(' ');

  // solution 2 - using array map
  //   return str
  //     .toLowerCase()
  //     .split(' ')
  //     .map(word => word[0].toUpperCase() + word.substring(1))
  //     .join(' ');

  // solution 3 - using lowercase
  return str.replace(/\b[a-z]/gi, char => char.toUpperCase());
}

//! CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// e.g. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  const charObj = {};
  let maxNum = 0;
  let maxChar = '';

  str.split('').forEach(char => {
    // loop through the char array
    if (charObj[char]) {
      // if char already exist in charObj, increment
      charObj[char]++;
    } else {
      // else set value as 1
      charObj[char] = 1;
    }
  });

  for (let char in charObj) {
    if (charObj[char] > maxNum) {
      maxNum = charObj[char];
      maxChar = char;
    }
  }

  return maxChar;
}

//! CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {}

// Call Function
const output = maxCharacter('fizzbuzz');

console.log(output);
