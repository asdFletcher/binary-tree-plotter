import React, { Component } from 'react';

import './styles/reset.css';
import './styles/base.css';

// import Cartesian from "./components/cartesian.js";
import TreeGraphContainer from './TreeGraph/TreeGraphContainer.js';

class App extends Component {

  render() {
    return (
      <>
        <TreeGraphContainer />
      </>
    );
  }
}

export default App;
