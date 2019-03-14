import React from 'react';
import * as actions from "../store/actions.js";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return ({
    updateNodeCount: (payload) => dispatch(actions.updateNodeCount(payload)),
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
    this.setState({nodeCount: e.target.value});
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateNodeCount(this.state.nodeCount);
  }
  handleToggleNumbers = (e) => {
    e.preventDefault();
    this.props.toggleNumbers();
  }

  render(){
    return(
      <div className="form">
        <h2>Number of Nodes: {this.props.state.nodeCount}</h2>
        <label>Number of Nodes:</label>
        <input
          onChange={this.handleChange}></input>
        <button
          onClick={this.handleSubmit}
          >Generate new graph</button>
        <button
          onClick={this.handleToggleNumbers}
          >Toggle Numbers</button>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form);