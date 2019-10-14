/*
Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.

Refactoring for next time?: Arithmetic Progression. Or also let i = Math.min(...arr) to get rid of the extra declaration and same for i <= Math.max(...arr).
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