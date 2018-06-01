import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './board/board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          The game of <code>Life</code>...
        </p>
        <div id="game-container"></div>
        <Board />
      </div>
    );
  }
}

export default App;
