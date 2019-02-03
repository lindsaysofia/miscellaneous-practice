function Set() {
    // the variable collection will hold our set
    let collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };

    this.add = function(element) {
        if (this.has(element)) {
            return false;
        }
        collection.push(element);
        return true;
    };

    this.remove = function(element) {
        if (this.has(element)) {
            let index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = function() {
        return collection.length;
    };

    this.union = function(otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach((element) => {
            unionSet.add(element);
        });
        secondSet.forEach((element) => {
            unionSet.add(element);
        });
        return unionSet;
    };

    this.intersection = function(otherSet) {
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach((element) => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    };

    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let firstSet = this.values();
        firstSet.forEach((element) => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet) {
        return this.values().every((element) => otherSet.has(element));
    };
}