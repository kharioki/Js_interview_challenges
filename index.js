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

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

//! CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  //? SOLUTION 1 - Return a single longest word
  // strip punctuation and create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // return longest word
  // return sorted[0];

  //? SOLUTION 2 - Return an array and include multiple words if they have the same length
  const longestWordArr = sorted.filter(
    word => word.length === sorted[0].length
  );
  // return longestWordArr;
  //? SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  if (longestWordArr.length > 1) {
    return longestWordArr;
  } else {
    return longestWordArr[0];
  }
}

//! CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  //? using while loop
  // const chunkedArr = [];
  // // set index
  // let i = 0;

  // // loop while index is less than array lenngth
  // while (i < arr.length) {
  //   // slice out from the index to the index + the chink length and push on to the chunked array
  //   chunkedArr.push(arr.slice(i, i + len));
  //   // Increment by chunk length
  //   i += len;
  // }
  // return chunked array
  // return chunkedArr;

  //? solution 2
  // init chunked
  const chunkd = [];
  // Loop through arr
  arr.forEach(val => {
    // Get last element
    const last = chunkd[chunkd.length - 1];
    // Checkif last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkd.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkd;
}

//! CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  //? Solution 1 - using reduce
  // return arrays.reduce((a, b) => a.concat(b));

  //? Solution 2 - apply method
  // return [].concat.apply([], arrays);

  //? Solution 3 - using spread operator
  return [].concat(...arrays);
}

//! CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  // using the formatStr helper function, compare both strings
  return formatStr(str1) === formatStr(str2);
}

// Helper function
function formatStr(str) {
  return (
    str
      // remove all characters that are not word characters
      .replace(/[^\w]/g, '')
      // lowercase
      .toLowerCase()
      // extract each character to form an array
      .split('')
      // sort all characters
      .sort()
      // form a string again
      .join('')
  );
}

//! CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // using regex
  let newStr = str
    // lowercase everything
    .toLowerCase()
    // replace characters
    .replace(/[a-z]/gi, char => {
      // if character is 'z' or 'Z' return 'a'
      if (char === 'z' || char === 'Z') {
        return 'a';
      } else {
        // every character has a character code, so we increse it by 1
        return String.fromCharCode(char.charCodeAt() + 1);
      }
    });

  // uppercase the vowels
  newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newStr;
}

//! CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
  //? solution 1 - es5 arguements object and for loop
  // var args = Array.prototype.slice.call(arguments);
  // var total = 0;

  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  // return total;

  //? solution 2 - es6 - ...rest operator and reduce/forEach
  let total = 0;
  // numbers.forEach(num => (total += num));
  // return total;
  // using array reduce
  return numbers.reduce((a, b) => a + b);
}

//! CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes() {}

//! CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy() {}

//! CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight() {}

//! CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters() {}

//! CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums() {}

// Call Function
const output = addAll(2, 5, 6, 7);

console.log(output);
