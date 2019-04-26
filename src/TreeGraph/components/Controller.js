import React from 'react';
import Form from "./Form.js";

import { connect } from 'react-redux';
import * as actions from '../store/actions.js';

import { copyTree, generateUniqueNumbers } from "../util/util.js";

// import BinarySearchTree from "../datastructures/binary-search-tree/binary-search-tree.js";
// import AVLTree from "../datastructures/avl-tree/avl-tree.js";
const AVLTree = require("data-structures-and-algorithms").AVLTree;
const BinarySearchTree = require("data-structures-and-algorithms").BST;
const SplayTree = require("data-structures-and-algorithms").SplayTree;

const mapDispatchToProps = (dispatch) => {
  return ({
    updateD3Data: (payload) => dispatch(actions.updateD3Data(payload)),
  });
}
const mapStateToProps = (store) => {
  return({
    nodeCount: store.nodeCount,
  });
};

class Controller extends React.Component {

  constructor(props){
    super(props);
    // this.tree = new BinarySearchTree();
    this.tree = new AVLTree();
  }
  
  componentDidMount(){
    // this.tree = generateSpecificTree();
    this.handleGenerateTree("AVLTree", 10);
    this.copyAndUpdateD3Data();
  }

  copyAndUpdateD3Data = () => {
    let treeCopyForD3 = copyTree(this.tree);
    this.props.updateD3Data(treeCopyForD3);
  }

  addNode = (val) => {
    this.tree.insert(val);
    this.copyAndUpdateD3Data();
  }
  addRandomNode = () => {
    let num = this.calcRandom();
    this.tree.insert(num);
    this.copyAndUpdateD3Data();
  }

  removeNode = (value) => {
    this.tree.remove(value);
    this.copyAndUpdateD3Data();
  }
  removeRoot = (value) => {
    this.tree.remove(this.tree.root && this.tree.root.value);
    this.copyAndUpdateD3Data();
  }

  handleGenerateTree = (type, numberOfNodes) => {
    numberOfNodes = parseInt(numberOfNodes);
    this.tree = generateTree(type, numberOfNodes);
    this.copyAndUpdateD3Data();
  }
  
  calcRandom = () => {
    let num = Math.floor(Math.random()*100);
    return num;
  }

  findMax = () => {
    let num = this.tree.findMax();
    return num;
  }
  
  findMin = () => {
    let num = this.tree.findMin();
    return num;
  }

  contains = (value) => {
    let result = this.tree.contains(value);
    this.copyAndUpdateD3Data();
    return result;
  }

  printPreOrder = () => {
    let result = this.tree.printPreOrder();
    return result;
  }
  printInOrder = () => {
    let result = this.tree.printInOrder();
    return result;
  }
  printPostOrder = () => {
    let result = this.tree.printPostOrder();
    return result;
  }

  render(){
    return (
      <>
        <Form 
            addNode={this.addNode}
            addRandomNode={this.addRandomNode}
            generateTree={this.handleGenerateTree}
            resetTree={() => this.handleGenerateTree(0)}
            removeNode={this.removeNode}
            findMax={this.findMax}
            findMin={this.findMin}
            contains={this.contains}
            removeRoot={this.removeRoot}
            printPreOrder={this.printPreOrder}
            printInOrder={this.printInOrder}
            printPostOrder={this.printPostOrder}
          />
      </>
    );
  }
}

const generateSpecificTree = (values) => {
  let tree = new SplayTree();

  values = [66, 91, 21, 89, 39, 18, 54, 76, 66, 32]
  for(let i = 0; i < values.length; i++){
    tree.insert(values[i])
  }

  return tree;
}

const stressTestDelete = (tree) => {
  for(let i = 0; i < 1000; i++){
    let insertOrder = [];
    let removeOder = [];

    const values = [];
    for(let i = 0; i < 40; i++){
      let num = Math.floor(Math.random() * 10 * 10);
      values.push(num);
    }

    for(let i = 0; i < values.length; i++){
      let insertValue = values[i];
      if(!tree.contains(insertValue)){
        tree.insert(insertValue);
        insertOrder.push(insertValue);
      }
    }

    for(let i = 0; i < values.length * 30; i++){
      let index = Math.floor(values.length * Math.random());
      let removeValue = values[index];
      if(tree.contains(removeValue)){
        removeOder.push(removeValue);
        tree.remove(removeValue);
        if(tree.containsDuplicates() || tree.containsHeightErrors()){
          console.log(`insertOrder: `, insertOrder);
          console.log(`removeOder: `, removeOder);
          console.log(`🚀🚀🚀🚀🚀 errors detected 🚀🚀🚀🚀🚀🚀`);
        }
      }
    }
  }
}

const generateTree = (type, numberOfNodes) => {
  let tree;
  switch(type){
    case "AVLTree": {
      tree = new AVLTree();
      break;
    }
    case "BinarySearchTree": {
      tree = new BinarySearchTree();
      break;
    }
    case "SplayTree": {
      tree = new SplayTree();
      break;
    }
    default:{
      tree = new AVLTree();
    }
  }
  let values = generateUniqueNumbers(numberOfNodes)

  for(let i = 0; i < values.length; i++){
    tree.insert(values[i])
  }


  return tree;
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
