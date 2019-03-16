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
  handleGenerateTree = () => {
    this.props.generateTree(this.state.numberOfNodes);
  }
  handleResetTree = () => {
    this.props.resetTree();
  }
  handleFindParentValue = () => {
    this.props.findParentValue(this.state.findParentOfValue);
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
  

  render(){
    return(
      <div className="form">
        <h2>Control panel:</h2>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <div>Remove a node</div>
          <label>Value:</label>
          <input
            name="nodeValueRemove"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleRemoveNode}
            >Remove Node</button>
        </div>

        <div>
          <div>Find the parent value</div>
          <label>Value:</label>
          <input
            name="findParentOfValue"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleFindParentValue}
            >Find parent value</button>
        </div>

        <div>
          <button
            onClick={this.handleFindMaxValue}
            >Find max value</button>
            <div>Max: {this.state.maxValue}</div>
        </div>

        <div>
          <button
            onClick={this.handleFindMinValue}
            >Find min value</button>
            <div>Min: {this.state.minValue}</div>
        </div>

        <div>
          <div>Contains:</div>
          <label>Value:</label>
          <input
            name="containsValue"
            onChange={this.handleChange}></input>
          <button
            onClick={this.handleContains}
            >check</button>
            <div>Contains? {this.state.contains}</div>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);