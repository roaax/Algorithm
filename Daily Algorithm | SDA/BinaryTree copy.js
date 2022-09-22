class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  isEmpty() {
      return this.root === null;
  }

  insert(newVal, node = this.root) {
      // code here
      if (this.isEmpty()) {
          this.root = new Node(newVal);
          return this;
      }
      //if (newVal <= node.data) {
      if (newVal > node.data) {
          //right (& if empty)
          if (node.right === null) {
              node.right = new Node(newVal);
              return this;
          }
          return this.insert(newVal, node.right);
      } else {
          //left (& if empty)            
          if (node.left === null) {
              node.left = new Node(newVal);
              return this;
          }
          return this.insert(newVal, node.left);
      }
  }

}


var tree = new BinarySearchTree();
console.log("Is it empty?");
console.log(tree.isEmpty());
tree.insert(3);
tree.insert(10);
console.log("Is it empty? (after insert)");
console.log(tree.isEmpty());
console.log(tree);