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
    e.preventDefault();
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

      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);