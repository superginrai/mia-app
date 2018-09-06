import React, { Component } from 'react';
//import logo from './logo.svg';
//import '../index.css';
import GallerySelect from '../GallerySelect/GallerySelect';
import MyTour from '../MyTour/MyTour';
import Exhibits from '../Exhibits/Exhibits';
import FinalTour from '../FinalTour/FinalTour';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <header className="App-header">
      <h1 className="App-title">Minneapolis Institute of Art</h1>
    </header>
          <Switch>
            <Redirect exact from="/" to="/mytour" />
            <Route
              path="/mytour"
              component={MyTour} />
            <Route
              path="/exhibits"
              component={Exhibits} />
            <Route
              path="/gallery"
              component={GallerySelect} />
            <Route
              path="/finaltour"
              component={FinalTour} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

