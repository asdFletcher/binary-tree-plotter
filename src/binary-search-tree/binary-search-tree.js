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

    if(this.treeIsEmpty()) { return; }

    if(!this.isNumericInput(value)) { return; }
    value = parseInt(value);

    //case: root is value, and 1 node tree
    if(this.root.value === value){
      if(!this.root.left && !this.root.right){
        this.root = null;
      }
    }

    let parent = this._findParent(value)

    console.log(`parent found: `, parent);

    if(!parent) { return; }

    let target;
    let targetDirection;
    if( parent.left && parent.left.value === value ) {
      target = parent.left;
      targetDirection = "left";
    }
    if( parent.right && parent.right.value === value ) {
      target = parent.right;
      targetDirection = "right";
    }

    console.log(`targetDirection: `, targetDirection);
    console.log(`target: `, target);

    if( this._hasNoChildren(target) ) {
      parent[targetDirection] = null;
      return;
    }

    if( this._hasTwoChildren(target) ) {

      let replacementDirection = this._pickASide();
      let replacementNode = target[replacementDirection];

      let attachNode;
      if(replacementDirection === "left"){
        // find max of left
        attachNode = this.findMaxSubTree(target.left);
        // take wohle right and attach to .right
        attachNode.right = target.right;
      }
      if(replacementDirection === "right"){
        // find min of right
        attachNode = this.findMinSubTree(target.right);
        // take wohle left and attach to .left
        attachNode.left = target.left;
      }

      console.log(`replacementNode: ` , replacementNode);

      parent[targetDirection] = target[replacementDirection];

      return;
    }

  }

  _pickASide(node){
    let roll = Math.random();
    if (roll > 0.5){
      return "left";
    } else {
      return "right";
    }
  }

  _hasNoChildren(node){
    if(!node.left && !node.right) { return true; }
  }

  _hasTwoChildren(node){
    if(node.left && node.right) { return true; }
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

  findMaxValue(){
    let node = this.findMax();
    return node.value;
  }
  findMinValue(){
    let node = this.findMin();
    return node.value;
  }

  findMaxSubTree(node){
    if(this.treeIsEmpty()) { return undefined; }

    let current = node;
    while(current.right){
      current = current.right;
    }

    return current;
  }
  findMinSubTree(node){
    if(this.treeIsEmpty()) { return undefined; }

    let current = node;
    while(current.left){
      current = current.left;
    }

    return current;
  }

  findMax(){
    if(this.treeIsEmpty()) { return undefined; }

    let current = this.root;
    while(current.right){
      current = current.right;
    }

    return current;
  }

  findMin(){
    if(this.treeIsEmpty()) { return undefined; }

    let current = this.root;
    while(current.left){
      current = current.left;
    }

    return current;
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