// elements not stored in one memory location (spread all over memory)

function LinkedList() { 
    let length = 0; 
    let head = null; 

    let Node = function(element) {
        this.element = element; 
        this.next = null; 
    }; 

    this.head = function() {
        return head;
    };

    this.size = function() {
        return length;
    };

    this.add = function(element) {
        // If our LL is empty, make the element our new head
        let newNode = new Node(element);
        if (head === null) {
            head = newNode;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    };

    this.remove = function(element) {
        // If LL is empty, we don't want to do anything
        if (head === null) {
            return null;
        }
        let currentNode = head;
        let previousNode;
        while (currentNode) {
            if (currentNode.element === element) {
                if (currentNode === head) {
                    head = currentNode.next;
                } else {
                    previousNode.next = currentNode.next;
                }
                length--;
                return element;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.indexOf = function(element) {
        if (head === null) {
            return -1;
        }
        let currentIndex = 0;
        let currentNode = head;
        while (currentNode) {
            if (currentNode.element === element) {
                return currentIndex;
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
        return -1;
    };

    this.elementAt = function(index) {
        if (head === null) {
            return undefined;
        }
        let currentIndex = 0;
        let currentNode = head;
        while (currentNode) {
            if (currentIndex === index) {
                return currentNode.element;
            }
            currentIndex++;
            currentNode = currentNode.next;
        }
        return undefined;
    };

    this.removeAt = function(index) {
        // return null if index is negative or greater than/equal to our length
        if (index < 0 || index >= length) {
            return null;
        }
        let currentIndex = 0;
        let currentNode = head;
        let previousNode;
        while (currentNode) {
            if (currentIndex === index) {
                if (index === 0) {
                    head = head.next;
                } else {
                    previousNode.next = currentNode.next;
                }
                length--;
                return currentNode.element;
            }
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return null;
    };

    this.addAt = function(index, element) {
        if (index < 0 || index >= length) {
            return false;
        }
        let node = new Node(element);
        let currentIndex = 0;
        let currentNode = head;
        let previousNode;
        while (currentNode) {
            if (currentIndex === index) {
                if (index === 0) {
                    head = node;
                } else {
                    previousNode.next = node;
                }
                node.next = currentNode;
                length++;
                return true;
            }
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return false;
    }; 
}