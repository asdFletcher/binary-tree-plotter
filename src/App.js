import React, { Component } from 'react';

import './styles/reset.scss';
import './styles/base.scss';

// import Cartesian from "./components/cartesian.js";
import TreeGraphContainer from './TreeGraph/components/TreeGraphContainer.js';

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
