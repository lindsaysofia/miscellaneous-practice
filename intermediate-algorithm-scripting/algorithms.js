/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Keep in mind next time?: Arithmetic Progression. Or also let i = Math.min(...arr) to get rid of the extra declaration and same for i <= Math.max(...arr).
*/
function sumAll(arr) {
  let start = Math.min(...arr);
  let end = Math.max(...arr);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

Keep in mind next time?: filter both arrays and then concat the filtered arrays.
*/
function diffArray(arr1, arr2) {
  let newArr = [];
  // Same, same; but different.
  arr1.forEach(element => {
    if (!arr2.includes(element)) {
      newArr.push(element);
    }
  });
  arr2.forEach(element => {
    if (!arr1.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the argumentsobject.

Keep in mind next time: instead of setting arguments to an array (args), can just use spread operator i.e. funtion destroyer(arr, ...args)
*/
function destroyer(arr) {
  // Remove all the values
  let args = Array.from(arguments).splice(1);
  return arr.filter(element => !args.includes(element));
}

/*
Wherefore art thou

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

Keep in mind next time: Use filter/Every or Map!
*/
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach(collectionObj => {
    let add = true;
    for (let property in source) {
      if (!(collectionObj.hasOwnProperty(property) && collectionObj[property] === source[property])) {
        add = false;
      }
    }
    if (add) {
      arr.push(collectionObj);
    }
  });
  // Only change code above this line
  return arr;
}

/*
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Keep in mind next time: First find spaces \s and underscores, then replace them with dashes. Can also write a regex to do the following: [a-z][A-Z] => [a-z] [A-Z]. Example:thisIs => this Is.
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let wordRegex = /(^[a-z]+)|([A-Z][a-z]+)|([a-z]+)/g;
  return str.match(wordRegex).join('-').toLowerCase();
}

/*
Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.

Keep in mind next time: Only need to check consonants, because if no consonants then just add 'way' to original string. Can also use str.replace.
*/
function translatePigLatin(str) {
  let vowelRegex = /[aeiou]+\w+/;
  let consonantRegex = /^[^aeiou]+/;
  let vowels = str.match(vowelRegex) || [];
  let consonant = str.match(consonantRegex) || [];
  let suffix = (consonant.length > 0) ? ['ay'] : ['way'];
  return vowels.concat(consonant).concat(suffix).join('');
}

/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/
function myReplace(str, before, after) {
  after = (before[0] === before[0].toUpperCase()) ? after[0].toUpperCase() + after.substring(1) : after;
  return str.replace(before, after);
}

/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Keep in mind next time: Maybe use switch? 
*/
function pairElement(str) {
  let dnaPairs = {
    A: ['A', 'T'],
    T: ['T', 'A'],
    C: ['C', 'G'],
    G: ['G', 'C'],
  }
  return str.split('').map(dnaCharacter => dnaPairs[dnaCharacter]);
}

/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
function fearNotLetter(str) {
  let startCharCode = str.charCodeAt(0);
  let endCharCode = str.charCodeAt(str.length - 1);
  let sum = ((startCharCode + endCharCode) * (endCharCode - startCharCode + 1)) / 2;
  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    sum -= str.charCodeAt(strIndex);
  }
  return (sum === 0) ? undefined : String.fromCharCode(sum);
} 

/*
Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]

Keep in mind next time: use set?
*/
function uniteUnique(...args) {
  let firstArr = args[0].slice();
  for (let argsIndex = 1; argsIndex < args.length; argsIndex++) {
     let nextArr = args[argsIndex].filter(element => !firstArr.includes(element));
     firstArr = firstArr.concat(nextArr);
  }
  return firstArr;
}

/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.

Keep in mind next time: A possible regex was: /([&<>\"'])/g
*/
function convertHTML(str) {
  // &colon;&rpar;
  const htmlEntities = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": 'apos',
  };
  let charRegex = /&|<|>|"|'/g;
  return str.replace(charRegex, match =>`&${htmlEntities[match]};`);
}

/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

Keep in mind next time: 
- instead of keeping temp, can do: prev = curr - prev since curr = curr + prev
- can get all fibs in an array, then filter and reduce
*/
function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let temp;
  let sum = 0;
  while (curr <= num) {
    if (curr % 2 === 1) {
      sum += curr;
    }
    temp = curr;
    curr += prev;
    prev = temp;
  }
  return sum;
}

/*
Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

sumPrimes(10) should return 17.
*/
function sumPrimes(num) {
  let sum = 0;
  while (num > 1) {
    if (isPrime(num)) {
      sum += num;
    }
    num--;
  }
  return sum;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/*
Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

smallestCommons([23, 18]) should return 6056820.

Keep in mind next time:
- Sort the array
- Take the biggest element, see if it is a multiple of the rest
- If yes, done. If not, check the next nultiple of the biggest element
- Basically keep checking multiples of the biggest number and see if they are multiples of the other numbers.
*/
function smallestCommons(arr) {
  let beginRange = Math.min(...arr);
  let endRange = Math.max(...arr);
  let smallesCommonMultiple = beginRange;
  for (let i = Math.min(endRange, beginRange + 1); i <= endRange; i++) {
    smallesCommonMultiple = lcm(smallesCommonMultiple, i);
  }
  return smallesCommonMultiple;
}

function lcm(a, b) {
  let aPrimeFactors = getPrimeFactors(a);
  let bPrimeFactors = getPrimeFactors(b);
  let leastCommonMultiple = 1;
  for (let aPrime in aPrimeFactors) {
    let aPrimeFactorExponent = aPrimeFactors[aPrime]
    let bPrimeFactorExponent = bPrimeFactors[aPrime] || 0;
    leastCommonMultiple *= aPrime ** Math.max(aPrimeFactorExponent, bPrimeFactorExponent);
    delete bPrimeFactors[aPrime];
  }
  for (let bPrime in bPrimeFactors) {
    let bPrimeFactorExponent = bPrimeFactors[bPrime]
    let aPrimeFactorExponent = aPrimeFactors[bPrime] || 0;
    leastCommonMultiple *= bPrime ** Math.max(bPrimeFactorExponent, aPrimeFactorExponent);
  }
  return leastCommonMultiple;
}

function getPrimeFactors(num) {
  let primeFactors = {};
  for (let i = 2; i <= num; i++) {
    if (isPrime(i) && (num % i === 0)) {
      if (!(String(i) in primeFactors)) {
        primeFactors[String(i)] = 0;
      }
      primeFactors[String(i)] += 1;
      num /= i;
      i -= 1;
    }
  }
  return primeFactors;
}

/*
Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4]

Keep in mind next time: Use findIndex to find the 1st index of the truthy element
*/
function dropElements(arr, func) {
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    if (func(arr[arrIndex])) {
      return arr.slice(arrIndex);
    }
  }
  return [];
}

/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]

Keep in mind next time: 
- return arr.flat(Infinity) -> Was my first solution and it passed the tests but I wanted to try another way;
- Also, concat returns a new array, doesn't alter the OG array lololol 
- One solution was to turn the array into a string and then get rid of the nesting. Interesting
*/
// function steamrollArray(arr) {
//   return arr.flat(Infinity);
// }

function steamrollArray(arr) {
  let flatArray = [];
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    let arrElement = arr[arrIndex];
    if (Array.isArray(arrElement)) {
      flatArray = flatArray.concat(steamrollArray(arrElement));
    } else {
      flatArray = flatArray.concat(arrElement);
    }

  }
  return flatArray;
}

/*
Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return "Aren't bonfires fun!?"

Got some help from https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript

Keep in mind next time: parseInt first converts to decimal, then we get the char code.
*/

function binaryAgent(str) {
  let binaryStrings = str.split(' ');
  let characterStrings = binaryStrings.map(binaryStr => String.fromCharCode(parseInt(binaryStr, 2)));
  return characterStrings.join('');
}

/*
Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
*/
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(object => object[pre]);
}

/*
Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether(2)([3]) should return undefined.
*/
function addTogether(...args) {
  if (typeof(args[0]) === 'number') {
    if (args.length === 2) {
      return (typeof(args[1]) === 'number') ? args[0] + args[1] : undefined;
    }
    return num => (typeof(num) === 'number') ? args[0] + num : undefined;
  }
  return undefined;
}

/*
Make a Person

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];

  this.getFullName = function() {
    return `${firstName} ${lastName}`;
  };
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.setFirstName = function(newFirstName) {
    firstName = newFirstName; 
  }
  this.setLastName = function(newLastName) {
    lastName = newLastName;
  }
  this.setFullName = function(newFirstAndLast) {
    firstName = newFirstAndLast.split(' ')[0];
  lastName = newFirstAndLast.split(' ')[1];
  }
};
*/

/*
Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].
*/
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(element => {
    let {name, avgAlt} = element;
    let orbitalPeriod = Math.round((2 * Math.PI) * Math.sqrt(((earthRadius + avgAlt)**3) / GM));
    return {"name": name, orbitalPeriod};
  });
}

