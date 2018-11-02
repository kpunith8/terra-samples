import React, { Component } from 'react';
import Login from '../src/components/login/Login';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Welcome to the App</h1>
        <Login />
      </div>
    );
  }
}

export default App;
