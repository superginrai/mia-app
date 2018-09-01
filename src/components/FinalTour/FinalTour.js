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
            <ul>
            {this.props.reduxState.tour.map((tourStop) => <h2>{tourStop.name}</h2>)}

            </ul>
        </div>
      );
    }
  }

  export default connect(mapReduxStateToProps) (FinalTour);