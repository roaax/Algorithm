class Node {
  /**
   * Constructs a new instance of a BST node.
   * @param {number} data The integer to store in the node.
   */
  constructor(data) {
    this.data = data;
    /**
     * These properties are how this node is connected to other nodes to form
     * the tree. Similar to .next in a SinglyLinkedList except a BST node can
     * be connected to two other nodes. To start, new nodes will not be
     * connected to any other nodes, these properties will be set after
     * the new node is instantiated.
     */
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
*/


class BinarySearchTree {
  constructor() {
    /**
     * Just like the head of a linked list, this is the start of our tree which
     * branches downward from here.
     */
    this.root = null;
    this.counter=0; //Sara use it to get the size of the tree
  }

  /**
   * Determines if this tree is empty.
   * @return {boolean} Indicates if this tree is empty.
   */
  isEmpty() {
    if (this.root == null) {
      return true
    } else {
      return false
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @return {BinarySearchTree} This tree.
   */



  insert(newVal, node = this.root) {
    if(this.isEmpty()){
      this.root=new Node(newVal)
      this.counter++;
      return this;
    }
    if (newVal > node.data) {
      if (node.right === null) {
        node.right = new Node(newVal);
        this.counter++;
        return this;
      }
      return this.insert(newVal, node.right);
    } else {
      if (node.left === null) {
        node.left = new Node(newVal);
        this.counter++;
        return this;
      }
      return this.insert(newVal, node.left);
    }
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @return {BinarySearchTree} This tree.
   */

  insertRecursive(newVal, current = this.root) {
    if(this.root== null){
      this.root=new Node(newVal)
      return this
    }
    if(newVal <=current.data){
      if(current.left == null){
        current.left = new Node(newVal)
        return this
      }else{
        this.insertRecursive(newVal, current = current.left)
      }
    }
    else{
      if(current.right == null){
        current.right = new Node(newVal)
        return this
      }else{
        this.insertRecursive(newVal, current = current.right)
      }
    }
  }

  Min() {
    if (this.root === null) {
      return null;
    }
    let Min = this.root;

    while (Min.left !== null) {
      Min = Min.left;
    }
    return Min.data;
  }

  Max() {
    if (this.root === null) {
      return null;
    }
    let Max = this.root;

    while (Max.right !== null) {
      Max = Max.right;
    }
    return Max.data;
   }

  // Esraa's Code
  // MaxRecursive( node = this.root){
  //   if(node.right === null){
  //     return node.data;
  //   }
  //   else{
  //     return this.Max(node.right);
  //   }
  // }


  contains(val){
    if (this.isEmpty()) {
      return null
    }
    var current = this.root;
    var run = true;
    while (run) {
      if (!current){
        return false;
      }
       else if (val === current.data){
        return true
      }
      else if (val <= current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }
  size(node = this.root) {
    if (node==null) {
      return 0;
    } else {
      return this.size(node.left) + 1 + this.size(node.right);
    }
  }
  //Sara's Code | first we add counter = 0 in the constructor and make it counter++ in insert function
  sizes(){
    return this.counter;
  }


  height(node = this.root)
  {
    if (node == null)
      return null;
    else
    {
      let leftHeight = this.height(node.left);
      let rightHeight= this.height(node.right);

      if (leftHeight > rightHeight)
        return (leftHeight + 1);
      else
        return (rightHeight + 1);
    }
  }
}



var tree = new BinarySearchTree()


tree.insert(2)
tree.insert(4)
// tree.insert(1)
// tree.insert(0)
// tree.insert(5)
// tree.insertRecursive(3)
// tree.insertRecursive(1)
// tree.insertRecursive(4)
// tree.insertRecursive(0)
console.log(tree.isEmpty())
console.log(tree)
console.log("The Min Value is:")
console.log(tree.Min())
console.log("The Max Value is:")
console.log(tree.Max())
console.log("Is the tree contain -> :"+tree.contains(2))
console.log("Size of the tree is :"+tree.size())
console.log("Sara's Code | Size of the tree is :"+tree.sizes())
console.log(tree.hight())
