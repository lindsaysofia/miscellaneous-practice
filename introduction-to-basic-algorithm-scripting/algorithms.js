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