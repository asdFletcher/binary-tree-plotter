import React, { Component } from 'react';

// import './styles/App.css';
import './styles/cartesian.css';

import Cartesian from "./components/cartesian.js";
import Logic from "./components/logic.js";
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <Logic /> */}
        <Cartesian />
      </Provider>
    );
  }
}

export default App;
