import React, { Component } from 'react';

import './styles/reset.scss';
import './styles/base.scss';

import TreeGraphContainer from './TreeGraph/components/TreeGraphContainer.js';
import Cartesian from './CartesianGraph/components/Cartesian.js';

class App extends Component {

  render() {
    return (
      <>
        <TreeGraphContainer />
        <Cartesian />
      </>
    );
  }
}

export default App;
