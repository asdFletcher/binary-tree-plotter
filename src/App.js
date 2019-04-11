import React, { Component } from 'react';

import './styles/reset.css';
import './styles/base.css';

// import Cartesian from "./components/cartesian.js";
import TreeGraphContainer from './TreeGraph/TreeGraphContainer.js';
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <TreeGraphContainer />
        {/* <Cartesian /> */}
      </Provider>
    );
  }
}

export default App;
