let displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
    
    this.remove = function(value) {
        if (this.root === null) {
            return null;
        }

        // sets the currentNode and previousNode or null;
        function findValue(value) {
            while (currentNode.value !== value) {
                previousNode = currentNode;
                currentNode = (currentNode.value < value ? currentNode.right : currentNode.left);
                if (currentNode === null) {
                    return null;
                }
            }
        }
        
        let currentNode = this.root;
        let previousNode;
        findValue(value);
        // rename currentNode to targetNode for better readability.
        let targetNode = currentNode;
        let numberOfChildren = (targetNode.left !== null ? 1 : 0) + (targetNode.right !== null ? 1 : 0);

        if (targetNode === null) {
          return null;
        }
        
        // case 1: target has no children
        if (numberOfChildren === 0) {
            if (targetNode === this.root) {
                this.root = null;
            } else if (previousNode.left === targetNode) {
                previousNode.left = null;
            }  else {
                previousNode.right = null;
            }
        }

        // case 2: target had one child;
        if (numberOfChildren === 1) {
          if (targetNode === this.root) {
            this.root = targetNode.left || targetNode.right;
          } else if (previousNode.left === targetNode) {
              previousNode.left = targetNode.left || targetNode.right;
          }  else {
              previousNode.right = targetNode.left || targetNode.right;
          }
        }

        // case 3: target has three children.
        if (numberOfChildren === 2) {}
    };
}

let eight = new Node(8);
let three = new Node(3);
let one = new Node(1);
let six = new Node(6);
let four = new Node(4);
let seven = new Node(7);
let ten = new Node(10);
let fourteen = new Node(14);
let thirteen = new Node(13);
eight.left = three;
eight.right = ten;
three.left = one;
three.right = six;
six.left = four;
six.right = seven;
ten.right = fourteen;
fourteen.left = thirteen;
let myBST = new BinarySearchTree();
myBST.root = eight;

console.log(myBST.remove(13));