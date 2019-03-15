import Node from './binary-search-tree-node.js';

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  isNumericInput(value){
    let numericalValue = parseInt(value);
    if ( typeof numericalValue === 'number' ) { return true; }
    return false;
  }

  insert(value){

    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

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

  remove(value){
    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    if(this.root && this.root.value === value){
      if(!this.root.left && !this.root.right){
        this.root = null;
      }
    }

    function _go(node){
      if(node.right) {
        if(node.right.value === value){
          if(!node.right.left && !node.right.right){
            node.right = undefined;
          }
        } else {
          _go(node.right);
        }
      } 
      if(node.left) {
        if(node.left.value === value){
          if(!node.left.left && !node.left.right){
            node.left = null;
          }
        } else {
          _go(node.left);
        }
      }
    }
    if(this.root){
      _go(this.root);
    }

  }

  // contains
  // find max
  // find min
  // print (in order, pre order, post order)
}

export default BinarySearchTree;