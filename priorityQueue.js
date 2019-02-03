function PriorityQueue () {
    this.collection = [];

    this.printCollection = function() {
      console.log(this.collection);
    };

    this.enqueue = function(item) {
        for (let i = 0; i < this.collection.length; i++) {
            let priority = this.collection[i][1];
            if (priority > item[1]) {
                this.collection.splice(i, 0, item);
                return this.collection.length;
            }
        }
        return this.collection.push(item);
    };

    this.dequeue = function() {
        let item = this.collection.shift();
        return item[0];
    };

    this.size = function() {
        return this.collection.length;
    };

    this.front = function() {
        return this.collection[0][0];
    };

    this.isEmpty = function() {
        return this.collection.length === 0;
    };
}