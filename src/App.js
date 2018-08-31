import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GallerySelect from './components/GallerySelect/GallerySelect';
import myTour from './components/myTour/myTour';
import Exhibits from './components/Exhibits/Exhibits';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <Route
        path="/"
        component={myTour} />
        <Route
        path="/exhibits"
        component={Exhibits} />
        <Route
        path="/gallery"
        component={GallerySelect} />
</Router>
      </div>
    );
  }
}

export default App;
