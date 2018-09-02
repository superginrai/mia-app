import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class FinalTour extends Component {
    state = {
    }
  
    render() {
      return (
        <div>
            <h1>Your Tour</h1>
            <h2>{this.props.reduxState.time}</h2>
            {this.props.reduxState.tour.map((tourStop) => <h2>{tourStop.name}</h2>)}
        </div>
      );
    }
  }

  export default connect(mapReduxStateToProps) (FinalTour);