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