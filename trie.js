let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
      this.end = true;
    };
    this.isEnd = function() {
      return this.end;
    };
};

let Trie = function() {
    this.root = new Node();

    this.add = function(word) {
        let wordCharactersArray = word.split('');
        let currentNode = this.root;
        wordCharactersArray.forEach((character) => {
            if (!currentNode.keys.has(character)) {
                currentNode.keys.set(character, new Node());
            }
            currentNode = currentNode.keys.get(character);
        });
        currentNode.setEnd();
    };

    this.print = function() {
        let word = [];
        let wordsArray = [];

        function explore(node, index) {
            for (let [key, value] of node.keys.entries()) {
                word.splice(index);
                word.push(key);
                if (value.isEnd()) {
                    wordsArray.push(word.join(''));
                }
                explore(value, index + 1);
            }
        }

        explore(this.root, 0);
        return wordsArray;
    };

    this.isWord = function(word) {
        let currentNode = this.root;
        let wordCharactersArray = word.split('');

        for (let i = 0; i < word.length; i++) {
            let character = wordCharactersArray[i];
            if (currentNode.keys.has(character)) {
                currentNode = currentNode.keys.get(character);
            } else {
                return false;
            }  
        }
        // Check if the word we are looking for is actually a word.
        return currentNode.isEnd();
    };
};

let newTrie = new Trie();
newTrie.add('caan');
newTrie.add('cap');
newTrie.add('sap')
console.log(newTrie.isWord('b'));
console.log(newTrie.print());

