import Node from './binary-search-tree-node.js';

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);
    
    if(!this.root){ this.root = newNode; }
    
    function _go(node){
      if(newNode.value > node.value){
        if(node.right) {
          _go(node.right);
        } else {
          node.right = newNode;
        }
      }
      if(newNode.value < node.value){
        if(node.left) {
          _go(node.left);
        } else {
          node.left = newNode;
        }
      }
    }

    _go(this.root);
  }

  // insert
  // delete
  // contains
  // find max
  // find min
  // print (in order, pre order, post order)
}

export default BinarySearchTree;