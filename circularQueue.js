class CircularQueue {
    constructor(size) {
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
      while (size > 0) {
         this.queue.push(null);
         size--;
      }
    }
 
    print() {
      return this.queue;
    }
 
    // returns item if enqueued successfully or null.
    enqueue(item) {
        if (this.queue[this.write] === null) {
            this.queue[this.write] = item;
            this.write = (this.write === this.max ? 0 : this.write + 1);
            return item;
        }
        return null;
    }
 
    // returns item if dequeued successfully or null.
    dequeue() {
        if (this.queue[this.read] !== null) {
            let item = this.queue[this.read];
            this.queue[this.read] = null;
            this.read = (this.read === this.max ? 0 : this.read + 1);
            return item;
        }
        return null;
    }
}