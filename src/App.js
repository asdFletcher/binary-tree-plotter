import React, { Component } from 'react';
import './styles/App.css';

import Form from "./components/form.js";
import Graph from "./components/graph.js";
import Logic from "./components/logic.js";
import { Provider } from 'react-redux';
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Form />
        <Logic />
        <Graph />
      </Provider>
    );
  }
}

export default App;
