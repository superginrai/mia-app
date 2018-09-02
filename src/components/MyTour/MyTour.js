import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker'

class MyTour extends Component {
  state = {
    date: new Date(),
    time: '10:00',
  }

  onChangeDate = date => this.setState({ date })
  onChangeTime = time => this.setState({ time })

  //Sends chosen time in sate to redux and advances user to exhibits page
  chooseTime = () => {
    const action = {
      type: 'ADD_A_TIME',
      payload: this.state.time,
    };
    this.props.dispatch(action);
    this.props.history.push('/exhibits');
  }

  render() {
    return (
      <div>
        <h1>Coming to MIA with your class? </h1>
        <h3> Plan your visit and stay on schedule by creating a tour that includes your time, exhibits, and galleries that you want to see.</h3>
        <h3>Create your tour below.</h3>
        <DatePicker
          onChange={this.onChangeDate}
          value={this.state.date}
        />
        <TimePicker
          onChange={this.onChangeTime}
          value={this.state.time}
        />
        <br />
        <button onClick={this.chooseTime}>NEXT</button>
      </div>
    );
  }
}

export default connect()(MyTour)