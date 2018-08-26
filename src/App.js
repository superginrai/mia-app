import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GallerySelect from './components/GallerySelect/GallerySelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to The Rock</h1>
        </header>
      <GallerySelect/>
      </div>
    );
  }
}

export default App;
