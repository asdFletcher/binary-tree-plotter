import Node from "./avl-tree-node.js";

class AVLTree {
  constructor(){
    this.root = null;
  }

  insert(value){

    if (!this.isNumericInput()){ return undefined; }
    value = parseInt(value);

    let newNode = new Node(value);

    // console.log(`new node: `, newNode);
    if (this.treeIsEmpty()){ 
      this.root = newNode;
      return newNode;
    }

    let problemNode;

    const _go = (node) => {
      console.log(`~~ ${node.value} ~~`);
      if (value === node.value) { return undefined; } // value already in tree

      // add right node
      if (!node.right && value > node.value ){
        console.log(`🍦 adding right`);
        node.right = newNode;
        this.updateNodeHeight(node);
        return newNode;
      }
      // add left node
      if (!node.left && value < node.value ){
        console.log(`🍕 adding left`);
        node.left = newNode;
        this.updateNodeHeight(node);
        return newNode;
      }
      
      let result;
      // navigate right
      if (value > node.value){
        console.log(`🍡 go right`);
        result = _go(node.right);
      } else if (value < node.value){
        // navigate left
        console.log(`🌝 go left`);
        result = _go(node.left);
      }
      
      // done with recursion
      console.log(`done with recrusion 🍊`);
      this.updateNodeHeight(node);
      if(problemNode){
        console.log(`coming up, problem node: `, problemNode);
        this.handleProblemNode(problemNode, node);
      }
      if(!problemNode && this.isImbalanced(node)){
        problemNode = node;
      }

      return result;
    }
    
    let result = _go(this.root);
    console.log(`Tree this.root: `, this.root);

    console.log(`problemNode: `, problemNode);
    return result;
  }

  handleProblemNode(originalRoot, parentNode){
    console.log(`in inbalanced: `, originalRoot.value);
    let leftHeight = this.getLeftHeight(originalRoot);
    let rightHeight = this.getRightHeight(originalRoot);

    console.log(`leftHeight: `, leftHeight);
    console.log(`rightHeight: `, rightHeight);

    // left imbalance
    if (leftHeight - rightHeight >= 2){
      console.log(`left is greater than right`);
      let leftChild = originalRoot.left;
      let leftChildLeftHeight = this.getLeftHeight(leftChild);
      let leftChildRightHeight = this.getRightHeight(leftChild);
      // console.log(`leftChildLeftHeight: `, leftChildLeftHeight);
      // console.log(`leftChildRightHeight: `, leftChildRightHeight);
      // single left rotation
      if (leftChildLeftHeight > leftChildRightHeight){
        // console.log(`single left rotation!`);
        let newRoot = originalRoot.left;
        parentNode.left = newRoot;
        originalRoot.left = null;
        newRoot.right = originalRoot;
      }
      // double left rotation
      if (leftChildRightHeight > leftChildLeftHeight){
        // console.log(`double rotation!`);
      }

    }
    // right imbalance
    if (rightHeight - leftHeight >= 2){
      console.log(`right is greater than left`);
      let rightChild = originalRoot.right;
      let rightChildLeftHeight = this.getLeftHeight(rightChild);
      let rightChildRightHeight = this.getRightHeight(rightChild);
      // single right rotation
      if (rightChildRightHeight > rightChildLeftHeight){
        let newRoot = originalRoot.right;
        parentNode.right = newRoot;
        originalRoot.right = null;
        newRoot.left = originalRoot;
      }
      // double right rotation
      if (rightChildLeftHeight > rightChildRightHeight){
      }
    }

  }

  getLeftHeight(node){
    if(!node.left){ return -1 }
    return node.left.height;
  }
  getRightHeight(node){
    if(!node.right){ return -1 }
    return node.right.height;
  }

  isImbalanced(node){
    let leftHeight = this.getLeftHeight(node);
    let rightHeight = this.getRightHeight(node);

    if (Math.abs(leftHeight - rightHeight) >= 2){
      return true;
    }
  }

  updateNodeHeight(node){
    // console.log(`setting node height ${node.value}: was: `, node.height);
    if (!node.left){
      node.height = node.right.height + 1;
      // console.log(`setting node height ${node.value}: is now: `, node.height);
      return;
    }
    if (!node.right){
      node.height = node.left.height + 1;
      // console.log(`setting node height ${node.value}: is now: `, node.height);
      return;
    }
    if (node.left && node.right) {
      node.height = Math.max(node.left.height, node.right.height) + 1;
      // console.log(`setting node height ${node.value}: is now: `, node.height);
    }
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