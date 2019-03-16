import Node from './binary-search-tree-node.js';

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value){

    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    let newNode = new Node(value);
    
    if(this.treeIsEmpty()) { 
      this.root = newNode;
      return;
    }

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

  remove(value){

    // check for empty tree
    if(this.treeIsEmpty()) { return; }
    
    // check that the number is numeric
    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    let parentNode = this.findParent(value);
    let deletedNode;

    if(!parentNode) { return; }

    if( value < parentNode.value ) {
      deletedNode = parentNode.left;
      parentNode.left = this._removeRootFromTree(parentNode.left);
    } else {
      deletedNode = parentNode.right;
      parentNode.right = this._removeRootFromTree(parentNode.right);
    }
    return deletedNode;    
  }

  _removeRootFromTree(node){

    if (!node.left && !node.right) { return null; }
    if (!node.left) { return node.right; } 
    if (!node.right) { return node.left; }
    
    const replacementDirection = this._pickASide();
    let newRoot = node[replacementDirection];

    if (replacementDirection === "left"){
      const maxNodeOfLeftTree = this.findMaxNode(node.left);
      maxNodeOfLeftTree.right = node.right;
    }
    
    if (replacementDirection === "right"){
      const minNodeOfRightTree = this.findMinNode(node.right);
      minNodeOfRightTree.left = node.left;
    }
    
    return newRoot;
  }

  findMax(){
    let node = this.findMaxNode(this.root);
    return node && node.value;
  }
  
  findMin(){
    let node = this.findMinNode(this.root);
    return node && node.value;
  }

  contains(value){
    if (this.treeIsEmpty()) { return false; }
    if (!this.isNumericInput(value)) { return false; }

    value = parseInt(value);

    function _go(node){
      if (!node) { return false; }
      if (node.value === value) { return true; }
      if (value > node.value) { return _go(node.right); }
      
      return _go(node.left);
    }

    return _go(this.root);
  }

  isNumericInput(value){
    let numericalValue = parseInt(value);
    if ( typeof numericalValue === 'number' ) { return true; }
    return false;
  }

  _pickASide(node){
    let roll = Math.random();
    if (roll > 0.5){
      return "left";
    } else {
      return "right";
    }
  }

  findParent(value){
    function _go(node){
      
      if (!node) { return undefined; }

      if (node.left && node.left.value === value){ return node; }
      if (node.right && node.right.value === value){ return node; }
      
      if (value > node.value){
        return _go(node.right);
      }
      
      return _go(node.left);
    }

    return _go(this.root);
  }

  findMaxNode(node){
    if (!node) { return undefined; }
    
    let current = node;

    while (current.right){
      current = current.right;
    }

    return current;
  }

  findMinNode(node){
    if (!node) { return undefined; }
    
    let current = node;

    while (current.left){
      current = current.left;
    }

    return current;
  }

  treeIsEmpty(){
    if(!this.root) { return true; }

    return false;
  }

  // print (in order, pre order, post order)
}

export default BinarySearchTree;