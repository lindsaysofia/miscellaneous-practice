/*
getting/setting takes O(1) time for a good hash functions. O(n) for bad hash
function (many collisions).
*/
let called = 0;

let hash = (string) => {
    called++;
    let hash = 0;
    for (let i = 0; i < string.length; i++) { hash += string.charCodeAt(i); }
    return hash;
};

let HashTable = function() {
    this.collection = {};

    this.add = function(key, value) {
        let hashValue = hash(key);
        if (!this.collection.hasOwnProperty(hashValue)) {
            this.collection[hashValue] = {};
        }
        this.collection[hashValue][key] = value;
    };

    this.remove = function(key) {
        let hashValue = hash(key);
        if (this.collection.hasOwnProperty(hashValue)) {
            delete this.collection[hashValue][key];
        }
    };

    this.lookup = function(key) {
        let hashValue = hash(key);
        if (this.collection.hasOwnProperty(hashValue)) {
            let returnValue = this.collection[hashValue][key];
            if (returnValue === undefined) {
                return null;
            }
            return returnValue;
        }
        return null;
    };
};