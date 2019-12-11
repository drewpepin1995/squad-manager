import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './schedule.css';

class Schedule extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <h2>My Schedule</h2>
                <div id="schedule">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}
export default Schedule;