import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GallerySelect from './components/GallerySelect/GallerySelect';
import MyTour from './components/MyTour/MyTour';
import Exhibits from './components/Exhibits/Exhibits';
import FinalTour from './components/FinalTour/FinalTour';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
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
        </Router>

      </div>
    );
  }
}

export default App;
