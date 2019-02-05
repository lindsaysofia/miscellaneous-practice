// Implement Quick Sort O(nlogn)
// Assume our pivot is the first element of the array
// Original Implementation
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivot = array[0];
    let smaller = [];
    let equal = [pivot];
    let larger = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            smaller.push(array[i]);
        } else if (array[i] === pivot) {
            equal.push(array[i]);
        } else {
            larger.push(array[i]);
        }
    }
    return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}

// Alternative Implementation
function swap(array, index1, index2) {
  if (index1 !== index2) {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
  }
}

function quickSort(array) {
  if (array.length <= 1) {
      return array;
  } 
  let pivotValue = array[0];
  let pivotIndex = 0;
  let storeIndex = pivotIndex + 1;
  for (let i = pivotIndex + 1; i < array.length; i++) {
      if (array[i] < pivotValue) {
          swap(array, i, storeIndex);
          storeIndex++;
      }
  }
  swap(array, storeIndex - 1, pivotIndex);
  let smaller = array.slice(0, storeIndex - 1);
  let larger = array.slice(storeIndex);
  return [...quickSort(smaller), pivotValue, ...quickSort(larger)];
}

console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));