// Implement Selection Sort O(n**2)
function selectionSort(array) {
    function swap(index1, index2) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    for (let i = 0; i < array.length - 1; i++) {
        let min = array[i];
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        swap(i, minIndex);
    }
    return array;
}

console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));