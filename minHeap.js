let MinHeap = function() {
    this.heap = [null];
    
    this.swap = function(index1, index2) {
      let tempIndex1 = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = tempIndex1;
    };
  
    this.insert = function(element) {
      this.heap.push(element);
      let elementIndex = this.heap.length - 1;
      let parentIndex = Math.floor(elementIndex / 2);
      while (element < this.heap[parentIndex]) {
        this.swap(elementIndex, parentIndex);
        elementIndex = parentIndex;
        parentIndex = Math.floor(elementIndex / 2);
      }
    };

    this.remove = function() {
        if (this.heap.length === 1) {
          return;
        }

        // Move the last element in the heap into the root position
        this.swap(1, this.heap.length - 1);

        let min = this.heap.splice(this.heap.length - 1, 1);
        let parentIndex = 1;
        let parent = this.heap[parentIndex];
        let leftChildIndex = 2 * parentIndex;
        let leftChild = this.heap[leftChildIndex];
        let rightChildIndex = 2 * parentIndex + 1;
        let rightChild = this.heap[rightChildIndex];
        while (parent > leftChild || parent > rightChild) {
          if (rightChild === undefined || leftChild < rightChild) {
            this.swap(parentIndex, leftChildIndex);
            parentIndex = leftChildIndex;
          } else {
            this.swap(parentIndex, rightChildIndex);
            parentIndex = rightChildIndex;
          }
          parent = this.heap[parentIndex];
          leftChildIndex = 2 * parentIndex;
          leftChild = this.heap[leftChildIndex];
          rightChildIndex = 2 * parentIndex + 1;
          rightChild = this.heap[rightChildIndex]; 
        }
        return min[0];
    };
  
    this.print = function() {
      return this.heap;
    };

    this.sort = function() {
      let sortedArray = [];
      let copyMinHeap = this.heap.slice();
      while (this.heap.length > 1) {
        sortedArray.push(this.remove());
      }
      this.heap = copyMinHeap;
      return sortedArray;
    };
};

let myMinHeap = new MinHeap();
myMinHeap.insert(6);
myMinHeap.insert(22);
myMinHeap.insert(30);
myMinHeap.insert(37);
myMinHeap.insert(63);
myMinHeap.insert(48);
myMinHeap.insert(42);
myMinHeap.insert(76);
console.log(myMinHeap.sort());