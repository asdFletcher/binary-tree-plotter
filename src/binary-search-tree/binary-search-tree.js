'use strict';

const Node = require('./binary-search-tree-node.js');

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(value){
    let newNode = new Node(value);

    if(!this.root){ this.root = newNode; }

    function _go(node){
      if(this.isLarger(node, newNode)) {
        if(this._hasRight(node)){
          _go(node.right);
        }
        node.right = newNode;
      }
      if(this._isSmaller(node, newNode)) {
        if(this._hasLeft(node)){
          _go(node.left);
        }
        node.left = newNode;
      }
    }
    _go(this.root);
  }

  _isLarger(existingNode, newNode) {
    return newNode.value > existingNode.value;
  }
  _isSmaller(existingNode, newNode) {
    return newNode.value < existingNode.value;
  }
  _isEqual(existingNode, newNode) {
    return newNode.value === existingNode.value;
  }
  _hasLeft(node){
    return node.left;
  }
  _hasRight(node){
    return node.right;
  }

  // insert
  // delete
  // contains
  // find max
  // find min
  // print (in order, pre order, post order)
}

module.exports = BinarySearchTree;