import React, { Component } from 'react';
import './styles/App.css';

import Charter from "./components/charter.js";
import Logic from "./components/logic.js";
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        {/* <Logic /> */}
        <Charter />
      </Provider>
    );
  }
}

export default App;
