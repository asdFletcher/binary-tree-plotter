import React from 'react';
import * as actions from "../store/actions.js";
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import './../styles/treegraph.scss';

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleNumbers: () => dispatch(actions.toggleNumbers()),
  });
};

const mapStateToProps = (state) => {
  return({
    state: state,
  });
}

class Form extends React.Component{

  state = {
    treeType: "AVLTree",
    numberOfNodes: 10,
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleToggleNumbers = (e) => {
    this.props.toggleNumbers();
  }
  handleAddNode = () => {
    this.props.addNode(this.state.nodeValueInsert);
  }
  handleAddRandomNode = () => {
    this.props.addRandomNode();
  }
  handleRemoveNode = () => {
    this.props.removeNode(this.state.nodeValueRemove);
  }
  handleRemoveRoot = () => {
    this.props.removeRoot();
  }
  setTreeType = (e) => {
    this.setState({treeType: e.target.name});
  }
  handleGenerateTree = () => {
    this.props.generateTree(this.state.treeType, this.state.numberOfNodes);
  }
  handleResetTree = () => {
    this.props.resetTree();
  }
  handleFindMaxValue = () => {
    this.setState({maxValue: this.props.findMax()});
  }
  handleFindMinValue = () => {
    this.setState({minValue: this.props.findMin()});
  }
  handleContains = () => {
    let contains = this.props.contains(this.state.containsValue)
    if( contains ) {
      this.setState({contains: "true"});
    }else {
      this.setState({contains: "false"});
    }
  }
  handlePrintPreOrder = () => {
    let res = this.props.printPreOrder();
    res = res.toString();
    this.setState({printPreOrderString: res});
  }
  handlePrintInOrder = () => {
    let res = this.props.printInOrder();
    res = res.toString();
    this.setState({printInOrderString: res});
  }
  handlePrintPostOrder = () => {
    let res = this.props.printPostOrder();
    res = res.toString();
    this.setState({printPostOrderString: res});
  }

  getStyle = (type) => {
    if(type === this.state.treeType){
      return "info"
    }
    return "outline-info"
  }
  
  render(){
    return(
        <div className="treegraph-form">
          <h2>Control Panel</h2>
          <div className="scrollzone">
            <section>
              <div className="form-title">Select tree type</div>
              <Button
                name="AVLTree"
                onClick={this.setTreeType}
                variant={this.getStyle("AVLTree")}
                >AVL Tree</Button>
              <Button
                name="BinarySearchTree"
                onClick={this.setTreeType}
                variant={this.getStyle("BinarySearchTree")}
                >Binary Search Tree</Button>
              <Button
                name="SplayTree"
                onClick={this.setTreeType}
                variant={this.getStyle("SplayTree")}
                >Splay Tree</Button>
            </section>

            <section>
              <div className="form-title">Generate random tree</div>
              <input
                placeholder="Number of nodes"
                name="numberOfNodes"
                defaultValue="10"
                onChange={this.handleChange}
                ></input>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleGenerateTree}
                >Generate</Button>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleResetTree}
                >Reset</Button>
            </section>

            <section>
              <div className="form-title">Add a node</div>
              <input
                placeholder="Node value"
                name="nodeValueInsert"
                onChange={this.handleChange}></input>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleAddNode}
                >Add Node</Button>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleAddRandomNode}
                >Add Random Node</Button>
            </section>

            <section>
              <div className="form-title">Remove a node</div>
              <input
                placeholder="Node value"
                name="nodeValueRemove"
                onChange={this.handleChange}></input>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleRemoveNode}
                >Remove Node</Button>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleRemoveRoot}
                >Remove Root</Button>
            </section>

            <section>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleFindMaxValue}
                >Find max value</Button>
                <div className="dataOutput">Max: {this.state.maxValue}</div>
                <Button
                variant={this.getStyle("default")}
                onClick={this.handleFindMinValue}
                >Find min value</Button>
                <div className="dataOutput">Min: {this.state.minValue}</div>
            </section>

            <section>
              <div className="form-title">Contains:</div>
              <input
                placeholder="Node value"
                name="containsValue"
                onChange={this.handleChange}></input>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handleContains}
                >check</Button>
                <div className="dataOutput">Contains? {this.state.contains}</div>
            </section>

            <section>
              <div className="form-title">Print:</div>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handlePrintPreOrder}
                >Pre order</Button>
                <div className="dataOutput">Pre order: {this.state.printPreOrderString}</div>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handlePrintInOrder}
                >In order</Button>
                <div className="dataOutput">In order: {this.state.printInOrderString}</div>
              <Button
                variant={this.getStyle("default")}
                onClick={this.handlePrintPostOrder}
                >Post order</Button>
                <div className="dataOutput">Post order: {this.state.printPostOrderString}</div>
            </section>
          
          </div>
        </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);