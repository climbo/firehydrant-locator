import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fire Hydrant Locator</h1>
        </header>
        <p className="App-intro">
          Fire hydrants nearest to your location
        </p>
        <Container />
      </div>
    );
  }
}

export default App;
