// Implement Bubble Sort O(n**2)
function bubbleSort(array) {
  let indexLast = array.length - 1;
  let swapped = false;

  function swap(index1, index2) {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
  }

  do {
      swapped = false;
      for (let i = 0; i < indexLast; i++) {
          if (array[i] > array[i + 1]) {
              swap(i, i + 1);
              swapped = true;
          }
      }
      indexLast -= 1;

  } while(swapped);
  
  return array;
}

console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));