import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker'

class MyTour extends Component {
  state = {
    date: new Date(),
    startTime: '10:00',
    endTime: '11:00',
  }

  onChangeDate = date => this.setState({ date })
  onChangeStartTime = startTime => this.setState({ startTime })
  onChangeEndTime = endTime => this.setState({ endTime })
  //Sends chosen time in sate to redux and advances user to exhibits page
  chooseStartTime = () => {
    const action = {
      type: 'ADD_A_STARTTIME',
      payload: this.state.startTime,
    };
    this.props.dispatch(action);
    this.props.history.push('/exhibits');
  }

  chooseEndTime = () => {
    const action = {
      type: 'ADD_A_ENDTIME',
      payload: this.state.endTime,
    };
    this.props.dispatch(action);
    this.props.history.push('/exhibits');
  }

  chooseDate = () => {
    const action = {
      type: 'ADD_A_DATE',
      payload: this.state.date,
    };
    this.props.dispatch(action);
    this.props.history.push('/exhibits');
  }

  onClick = () => {
    this.chooseStartTime();
    this.chooseEndTime();
    this.chooseDate();
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
          onChange={this.onChangeStartTime}
          value={this.state.startTime}
        />
        <TimePicker
          onChange={this.onChangeEndTime}
          value={this.state.endTime}
        />
        <br />
        <button onClick={this.onClick}>NEXT</button>
      </div>
    );
  }
}

export default connect()(MyTour)