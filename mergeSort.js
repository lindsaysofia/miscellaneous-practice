// Implement Merge Sort O(nlogn);
function merge(array1, array2) {
  if (array2.length === 0) {
      return array1;
  }
  if (array1.length === 0) {
      return array2;
  }
  if (array1[0] < array2[0]) {
      return [array1[0], ...merge(array1.slice(1), array2)];
  }
  return [array2[0], ...merge(array1, array2.slice(1))];
}

function mergeSort(array) {
  if (array.length <= 1) {
      return array;
  }
  let mid = Math.floor(array.length / 2);
  let sortFirstArray = mergeSort(array.slice(0, mid));
  let sortSecondArray = mergeSort(array.slice(mid));
  return merge(sortFirstArray, sortSecondArray);
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));