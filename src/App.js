import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from './components/Schedule/schedule.js';

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
      </div>
    );
  }
}

export default App;
