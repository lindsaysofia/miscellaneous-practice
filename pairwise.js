/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at indice 0 rather than the 1 at indice 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.
*/
// Original implementation
function pairwise(arr, arg) {
    // true if number is part of a pair- we don't want to use it again
    let alreadyInPair = arr.map(element => false);
    let indicesSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (!alreadyInPair[i] && !alreadyInPair[j] && arr[i] + arr[j] === arg) {
                indicesSum += i + j;
                alreadyInPair[i] = true;
                alreadyInPair[j] = true;
            }
        }
    }
    return indicesSum;
}

// Alternative implementation
function pairwise(arr, arg) {
  return arr.reduce((acc, curr, index, array) => {
      for (let i = index + 1; i < array.length; i++) {
          if (curr + array[i] === arg) {
              acc += index + i;
              array[index] = NaN;
              array[i] = NaN;
              break;
          }
      }
      return acc;
  }, 0);
}

// should return 11
console.log(pairwise([1,4,2,3,0,5], 7)); 