import React from 'react';
import * as actions from "../store/actions.js";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleNumbers: () => dispatch(actions.toggleNumbers()),
  });
};

const mapStateToProps = (state) => {
  return({
    state: state,
  })
}

class Form extends React.Component{

  state = {
    nodeCount: 0,
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
  handleGenerateTree = () => {
    this.props.generateTree(this.state.numberOfNodes);
  }
  handleResetTree = () => {
    this.props.resetTree();
  }
  handleFindParentValue = () => {
    let num = this.props.findParentValue(this.state.findParentOfValue);
    this.setState({parentValue: num});
  }
  handleFindMaxValue = () => {
    this.setState({maxValue: this.props.findMaxValue()});
  }
  handleFindMinValue = () => {
    this.setState({minValue: this.props.findMinValue()});
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
  

  render(){
    return(
      <div className="form">
        <h2>Control panel:</h2>

        <section>
          <div>Generate random tree</div>
          <label>Number of nodes:</label>
          <input
            name="numberOfNodes"
            onChange={this.handleChange}
            ></input>
          <button
            onClick={this.handleGenerateTree}
            >Generate</button>
          <button
            onClick={this.handleResetTree}
            >Reset</button>
        </section>

        <section>
          <div>Add a node</div>
          <label>Value:</label>
          <input
            name="nodeValueInsert"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleAddNode}
            >Add Node</button>
          <button
            onClick={this.handleAddRandomNode}
            >Add Random Node</button>
        </section>

        <section>
          <div>Remove a node</div>
          <label>Value:</label>
          <input
            name="nodeValueRemove"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleRemoveNode}
            >Remove Node</button>
          <button
            onClick={this.handleRemoveRoot}
            >Remove Root</button>
        </section>

        <section>
          <div>Find the parent value</div>
          <label>Value:</label>
          <input
            name="findParentOfValue"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleFindParentValue}
            >Find parent value</button>
            <div>Parent value: {this.state.parentValue}</div>
        </section>

        <section>
          <button
            onClick={this.handleFindMaxValue}
            >Find max value</button>
            <div>Max: {this.state.maxValue}</div>
        </section>

        <section>
          <button
            onClick={this.handleFindMinValue}
            >Find min value</button>
            <div>Min: {this.state.minValue}</div>
        </section>

        <section>
          <div>Contains:</div>
          <label>Value:</label>
          <input
            name="containsValue"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleContains}
            >check</button>
            <div>Contains? {this.state.contains}</div>
        </section>

        <section>
          <div>Print:</div>
          <button
            onClick={this.handlePrintPreOrder}
            >Pre order</button>
            <div>Pre order: {this.state.printPreOrderString}</div>
          <button
            onClick={this.handlePrintInOrder}
            >In order</button>
            <div>In order: {this.state.printInOrderString}</div>
          <button
            onClick={this.handlePrintPostOrder}
            >Post order</button>
            <div>Post order: {this.state.printPostOrderString}</div>
        </section>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);