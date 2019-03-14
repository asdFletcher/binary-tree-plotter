import BinarySearchTree from "../binary-search-tree/binary-search-tree.js";
import Node from "../binary-search-tree/binary-search-tree-node.js";
import { connect } from 'react-redux';
import * as actions from '../store/actions.js';

const mapDispatchToProps = (dispatch) => {
  return ({
    updateD3Data: (payload) => dispatch(actions.updateD3Data(payload)),
  });
}
const mapStateToProps = (state) => {
  return({
    nodeCount: state.nodeCount,
  });
};

const Logic = (props) => {

  let myTree = generateTree(props.nodeCount);

  let treeCopy = copyTree(myTree);

  props.updateD3Data(treeCopy);

  return null;
}

const generateTree = (numberOfNodes) => {
  let tree = new BinarySearchTree();

  let values = generateUniqueNumbers(numberOfNodes)

  for(let i = 0; i < values.length; i++){
    tree.insert(values[i])
  }

  return tree;
}

const generateUniqueNumbers = (count) => {
  let result = [];

  while(result.length < count){
    let num = Math.floor(Math.random()*100);
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
      return new CopyNode(node.value);
    }

    let left = {};
    let right = {};

    if( node.left ){ left = _go(node.left); }
    if( node.right ){ right = _go(node.right); }

    let result = new CopyNode(node.value);
    result.children = [left, right];
    return result;
  }

  let data = {};
  
  if(tree.root) { data = _go(tree.root); }

  return data;
}

class CopyNode{
  constructor(value){
    this.value = value;
    this.children = undefined;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logic);
