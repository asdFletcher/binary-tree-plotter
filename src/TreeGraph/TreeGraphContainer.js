import React, { Component } from 'react';

import './styles/reset.scss';
import './styles/treegraph.scss';

import TreeGraph from "./components/TreeGraph.js";
import Graph from "./components/Graph.js";
import { Provider } from 'react-redux';
import store from "./store";

class TreeGraphContainer extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="treegraph-container">
        <TreeGraph />
        <div className="graph">
          <Graph />
        </div>
        
      </div>
      </Provider>
    );
  }
}

export default TreeGraphContainer;
