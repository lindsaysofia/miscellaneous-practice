// Implement Insetion Sort O(n**2)
function insertionSort(array) {
  function swap(index1, index2) {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
  }

  for (let i = 1; i < array.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
          while (array[i] < array[j]) {
              swap(i, j);
              // Need i to decrement if we swap ; j already decrements automatically because of the loop
              i--;
          } 
      }
  }
  return array;
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));