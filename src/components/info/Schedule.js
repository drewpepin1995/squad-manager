import React from 'react';
import 'antd/dist/antd.css';
import { Calendar, Alert } from 'antd';
import moment from 'moment';

const now = moment();

class Schedule extends React.Component {


  state = {
    value: now,
    selectedValue: now
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Alert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </div>
    );
  }
}

export default Schedule;