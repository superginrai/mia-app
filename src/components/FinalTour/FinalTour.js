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
            <h1>Check out yo tourzzzz</h1>
            <ul>
            {this.props.reduxState.tour.map((tourStop) => <div><h2>{tourStop.name}</h2></div>)}

            </ul>
        </div>
      );
    }
  }

  export default connect(mapReduxStateToProps) (FinalTour);