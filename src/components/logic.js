import React from 'react';
import Form from "./form.js";
import Graph from "./graph.js";

// import BinarySearchTree from "../binary-search-tree/binary-search-tree.js";
import AVLTree from "../avl-tree/avl-tree.js";

import { connect } from 'react-redux';
import * as actions from '../store/actions.js';

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

class Logic extends React.Component {

  constructor(props){
    super(props);
    // this.tree = new BinarySearchTree();
    this.tree = new AVLTree();
  }
  
  componentDidMount(){
    // this.tree = generateTree(this.props.nodeCount);
    // let values = [71, 35, 87, 27, 61, 84, 96, 16, 30, 53, 70, 97, 8, 24, 28, 32, 39, 56];
    // let values = [9, 5, 30, 3, 7, 20, 32, 2, 4, 6, 8, 10, 22, 34, 21];
    // let values = [9, 5, 30, 3, 7, 20, 32, 2, 4, 6, 8, 10, 22, 34];
    // let values = [71, 35, 87, 27, 61, 84, 96, 16, 30, 53, 70, 97, 8, 24, 28, 32, 39, 56];
    let values = [61, 35, 71, 27, 53, 70, 96, 16, 30, 39, 56, 87, 97, 8, 24, 28, 32];

    this.tree = generateSpecificTree(values);
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
    console.log(`this.tree: `, this.tree);
    this.tree.remove(value);
    this.copyAndUpdateD3Data();
  }
  removeRoot = (value) => {
    this.tree.remove(this.tree.root.value);
    this.copyAndUpdateD3Data();
  }

  handleGenerateTree = async (numberOfNodes) => {
    numberOfNodes = parseInt(numberOfNodes);
    this.tree = await generateTree(numberOfNodes);
    this.copyAndUpdateD3Data();
  }
  
  calcRandom = () => {
    let num = Math.floor(Math.random()*100);
    return num;
  }

  findParentValue = (value) => {
    let num = this.tree.findParentValue(value);
    return num;
  }

  findMaxValue = () => {
    let num = this.tree.findMaxValue();
    return num;
  }
  
  findMinValue = () => {
    let num = this.tree.findMinValue();
    return num;
  }

  contains = (value) => {
    let result = this.tree.contains(value);
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
          findParentValue={this.findParentValue}
          findMaxValue={this.findMaxValue}
          findMinValue={this.findMinValue}
          contains={this.contains}
          removeRoot={this.removeRoot}
          printPreOrder={this.printPreOrder}
          printInOrder={this.printInOrder}
          printPostOrder={this.printPostOrder}
        />
        <Graph />
      </>
    );
  }
}

const generateSpecificTree = (values) => {
  let tree = new AVLTree();

  //~~~
  // let insertOrder = [82, 92, 56, 40, 44, 76, 47, 63, 74, 10, 38, 48, 87, 66, 70, 25, 71, 8, 7, 53, 95, 6, 60, 31, 46];
  // let removeOrder = [71, 66, 76, 25, 70];
  
  // let insertOrder = [54, 84, 32, 68, 88, 23, 58, 62, 28, 99, 6, 72, 75, 94, 69, 89, 43, 80, 40, 90, 42, 45, 53, 48, 93];
  // let removeOrder = [88, 48, 84, 43, 68, 80, 6, 90, 32, 40, 93, 28, 94, 23, 99, 75, 69, 23, 28]
  
  // let insertOrder = [52, 69, 25, 9, 19, 93, 91, 95, 30, 48, 38, 49, 21, 2, 83, 81, 94, 16, 80, 82, 53, 45, 76, 4, 42, 41, 37, 12, 43, 58, 97, 60, 98, 90, 66, 18];
  // let removeOrder = [12, 58, 52, 81, 38, 66, 82, 18, 2, 83, 37, 94, 21, 16, 98, 93, 25, 42, 9, 4, 19, 30]

  //~~~

  // values = [20, 10, 30, 5, 15, 25, 35, 2, 8, 13, 17, 40, 1];
  // values = [30, 16, 40, 8, 22, 35, 50, 4, 12, 18, 25, 33, 37, 60, 0, 6, 10, 14, 19, 32, 9, 11];
  // for(let i = 0; i < values.length; i++){
  //   console.log(`inserting 🐤: `, values[i]);
  //   tree.insert(values[i])
  // }


  // let insertOrder = [52, 69, 25, 9, 19, 93, 91, 95, 30, 48, 38, 49, 21, 2, 83, 81, 94, 16, 80, 82, 53, 45, 76, 4, 42, 41, 37, 12, 43, 58, 97, 60, 98, 90, 66, 18];
  // let removeOrder = [12, 58, 52, 81, 38, 66, 82, 18, 2, 83, 37, 94, 21, 16, 98, 93, 25, 42, 9, 4, 19, 30]
  // let insertOrder = [52, 30, 81, 19, 42, 69, 91, 9, 25, 41, 48, 58, 80, 83, 94, 2, 16, 21, 37, 45, 49, 53, 60, 76, 82, 90, 93, 97, 17, 44];
  
  // let insertOrder = [65, 13, 81, 7, 59, 74, 89, 2, 12, 38, 64, 69, 78, 85, 92, 3, 10, 30, 3, 61, 66, 72, 80, 82, 86, 91, 98, 37, 40];
  let insertOrder = [65, 13, 81, 7, 59, 74, 89, 2, 12, 38, 64, 69, 78, 85, 92, 3, 10, 30, 3, 61, 66, 72, 80, 82, 86, 91, 98, 37, 40];
  

  for(let i = 0; i < insertOrder.length; i++){
    console.log(`inserting 🐤: `, insertOrder[i]);
    tree.insert(insertOrder[i])
  }
  // let preRemoveOrder = [12,58,52,81, 38, 66, 82, 18, 2, 83];
  // for(let i = 0; i < preRemoveOrder.length; i++){
  //   tree.remove(preRemoveOrder[i]);
  // }

  // for(let i = 0; i < values2.length; i++){
  //   console.log(`removing: 🐤`, values2[i]);
  //   tree.remove(values2[i]);
  // }

  //~~~

  // values = [];
  // for(let i = 0; i < 40; i++){
  //   let num = Math.floor(Math.random() * 10 * 10);
  //   values.push(num);
  // }

  // for(let i = 0; i < values.length; i++){
  //   console.log(`inserting 🐤: `, values[i]);
  //   tree.insert(values[i])
  // }

  // for(let i = 0; i < values.length * 30; i++){
  //   let index = Math.floor(values.length * Math.random());
  //   if(tree.contains(values[index])){
  //     console.log(`removing: 🐤`, values[index]);
  //     tree.remove(values[index]);
  //   }
  // }



  return tree;
}

const generateTree = (numberOfNodes) => {
  let tree = new AVLTree();
  // let tree = new BinarySearchTree();

  let values = generateUniqueNumbers(numberOfNodes)

  for(let i = 0; i < values.length; i++){
    tree.insert(values[i])
  }

  return tree;
}

const generateUniqueNumbers = (count) => {
  let result = [];

  let defaultMaxValue = 100;
  if (count > defaultMaxValue) {
    defaultMaxValue = count * 2;
  }
  while(result.length < count){
    let num = Math.floor(Math.random()*defaultMaxValue);
    if(!result.includes(num)){
      result.push(num);
    }
  }

  return result;
}

const copyTree = (tree) => {

  const _go = (node) => {
    // base case
    if (!node.left && !node.right){
      return {...node};
    }

    let left = {};
    let right = {};

    if( node.left ){ left = _go(node.left); }
    if( node.right ){ right = _go(node.right); }

    let result = {
      ...node,
      children: [left, right]
    }
    return result;
  }

  let data = {};
  
  if(tree.root) { data = _go(tree.root); }

  return data;
}

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
