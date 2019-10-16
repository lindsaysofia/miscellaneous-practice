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