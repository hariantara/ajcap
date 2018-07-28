import React, { Component } from 'react';

import Home from './Pages/Home'

import { Provider } from 'react-redux'
import store from './Redux/Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home/>
        </div>
      </Provider>
    );
  }
}

export default App;
