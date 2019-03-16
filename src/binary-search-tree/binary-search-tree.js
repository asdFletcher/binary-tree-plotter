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

    if(this.treeIsEmpty()) { return undefined; }

    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    if(this.root.value === value){
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

  _findParent(value){

    if(this.treeIsEmpty()) { return undefined; }

    let found = undefined;
    function _go(node){
      if(node.right) {
        if(node.right.value === value){
          found = node;
          return;
        } else {
          _go(node.right);
        }
      }
      if(found){ return found; }

      if(node.left) {
        if(node.left.value === value){
          found = node;
          return;
        } else {
          _go(node.left);
        }
      }
    }
    _go(this.root)
    return found;
  }

  findMax(){
    if(this.treeIsEmpty()) { return undefined; }

    let current = this.root;
    while(current.right){
      current = current.right;
    }

    return current.value;
  }

  findMin(){
    if(this.treeIsEmpty()) { return undefined; }

    let current = this.root;
    while(current.left){
      current = current.left;
    }

    return current.value;
  }

  findParentValue(value){
    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    let parentNode = this._findParent(value);
    if(parentNode){
      return parentNode.value;
    }
    return undefined;
  }

  contains(value){
    if(this.treeIsEmpty()) { return undefined; }

    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    let found = false;
    function _go(node){
      if(node.value === value){ found = true}
      if(node.right){
        _go(node.right);
      }
      if(found){ return }
      if(node.left){
        _go(node.left);
      }
    }

    _go(this.root);

    return found;
  }

  treeIsEmpty(){
    if(!this.root) { return true; }

    return false;
  }

  // print (in order, pre order, post order)
}

export default BinarySearchTree;