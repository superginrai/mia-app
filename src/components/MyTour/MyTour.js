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
  
    render() {
      return (
        <div>
            <h1>Coming to MIA with your class?  Plan your visit and stay on schedule by creating a tour that includes your time, exhibits, and galleries that you want to see.

Create your tour below.</h1>
          <DatePicker
            onChange={this.onChangeDate}
            value={this.state.date}
            />
            <TimePicker
          onChange={this.onChange}
          value={this.state.time}
            />
        </div>
      );
    }
  }

  export default myTour