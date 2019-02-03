let MaxHeap = function() {
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
      while (parentIndex != 0) {
        if (element > this.heap[parentIndex]) {
          this.swap(elementIndex, parentIndex);
          elementIndex = parentIndex;
          parentIndex = Math.floor(elementIndex / 2);
        } else {
          return;
        }
      }
      
    };

    this.remove = function() {
        if (this.heap.length === 1) {
          return;
        }
        // Move the last element in the heap into the root position
        this.swap(1, this.heap.length - 1);

        let max = this.heap.splice(this.heap.length - 1, 1);
        let parentIndex = 1;
        let parent = this.heap[parentIndex];
        let leftChildIndex = 2 * parentIndex;
        let leftChild = this.heap[leftChildIndex];
        let rightChildIndex = 2 * parentIndex + 1;
        let rightChild = this.heap[rightChildIndex];

        while (parentIndex !== this.heap.length - 1 ||  parent < leftChild || parent < rightChild) {
          if ((rightChild !== undefined && leftChild > rightChild) || rightChild === undefined) {
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
        return max[0];
    };
  
    this.print = function() {
      return this.heap;
    };
  };
  
