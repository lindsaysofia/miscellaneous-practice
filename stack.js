function Stack() { 
    let collection = [];

    this.print = function() {
        console.log(collection);
    };

    this.push = function(element) {
        return collection.push(element);
    };

    this.pop = function() {
        return collection.pop();
    };

    this.peek = function() {
        return collection[collection.length - 1];
    };

    this.isEmpty = function() {
        return collection.length === 0;
    };

    this.clear = function() {
        /*
        If there are references, and you want to clear the references, 
        use collection.length = 0 OR collection.splice(0, collection.length).
        If no references, or want to leave references as they are use the collection = []
        */
       collection = [];
    };
}