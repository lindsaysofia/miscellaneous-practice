/*
Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsiusrepresenting a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
function convertToF(celsius) {
  let fahrenheit = (9/5) * celsius + 32;
  return fahrenheit;
}

/*
Reverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/
function reverseString(str) {
  return str.split('').reverse().join('');
}

/*
Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
function factorialize(num) {
  let factorial = 1
  while (num > 1) {
    factorial *= num;
    num--;
  }
  return factorial;
}

/*
Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(word => word.length));
}

/*
Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
  // You can do this!
  return arr.map(subArray => Math.max(...subArray));
}

/*
Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith()method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substring(str.length - target.length) === target;
}

/*
Repeat a String Repeat a String

Repeat a given string str(first argument) for numtimes (second argument). Return an empty string if numis not a positive number.
*/
function repeatStringNumTimes(str, num) {
  // repeat after me
  let repeatedString = '';
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}

/*
Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ...ending.
*/
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    let strArray = str.split('');
    strArray.splice(num, str.length - num, '...');
    return strArray.join('');
  }
  return str;
}

/*
Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.
*/
function findElement(arr, func) {
  let elementsThatPass = arr.filter(element => func(element));
  return elementsThatPass.length > 0 ? elementsThatPass[0] : undefined;
}

/*
Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  return bool === true || bool === false;
}

/*
Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

/*
Slice and Splice

You are given two arrays and an index.

Use the array methods sliceand spliceto copy each element of the first array into the second array, in order.

Begin inserting elements at index nof the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr2Copy = arr2.slice();
  arr2Copy.splice(n, 0, ...arr1);
  return arr2Copy;
}

/*
Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(element => Boolean(element) === true);
}

/*
Where do I Belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5)should return 1because it is greater than 1(index 0), but less than 2(index 1).

Likewise, getIndexToIns([20,3,5], 19)should return 2because once the array has been sorted it will look like [3,5,20]and 19is less than 20(index 2) and greater than 5(index 1).
*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort((a, b) => a - b);
  let arrindex;
  for(arrindex = 0; arrindex < arr.length; arrindex++) {
    if (arr[arrindex] >= num) {
      return arrindex;
    }
  }
  return arrindex;
}

/*
Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"]should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/
function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();
  for (let secondStrIndex = 0; secondStrIndex < secondStr.length; secondStrIndex++) {
    if (!firstStr.includes(secondStr[secondStrIndex])) {
      return false;
    }
  }
  return true;
}