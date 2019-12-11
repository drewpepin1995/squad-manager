import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/Schedule/schedule.js';
import EventDetails from './components/Event-Details/event.js';
import TeamDetails from './components/Team-Details/team.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  render() {
    return (
      <div className="App">

        <div className="row justify-content-center">
          <div className="col-12">
            <Schedule />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <EventDetails />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <TeamDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
