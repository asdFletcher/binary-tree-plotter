import Node from "./avl-tree-node.js";

class AVLTree {
  constructor(){
    this.root = null;
  }


  insert(value){

    if (!this.isNumericInput()){ return undefined; }
    value = parseInt(value);

    let newNode = new Node(value);

    if(this.treeIsEmpty()){ this.root = newNode; }

    function _go(node){
      if(value === node.value) { return undefined; } // value already in tree
      if(!node.right && value > node.value ){ 
        node.right = newNode;
        return newNode;
      }
      if(!node.left && value < node.value ){
        node.left = newNode;
        return newNode;
      }
      
      if(value > node.value){
        return _go(node.right);
      }
      return _go(node.left);
    }

    return _go(this.root);
  }

  treeIsEmpty(){
    if(!this.root) { return true; }
    return false;
  }

  isNumericInput(value){
    let numericalValue = parseInt(value);
    if ( typeof numericalValue === 'number' ) { return true; }
    return false;
  }
  // insert
  // delete
  // contains
  // findMin
  // findMax
  // print
}

export default AVLTree;