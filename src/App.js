import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/navbar'
import Dashboard from './components/dashboard/Dashboard'
import TeamDetails from './components/info/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RegisterTeam from './components/info/RegisterTeam'
import SignedInRoute from './components/routes/SignedInRoute'
>>>>>>> e5cda842222def9bfd616f2f98828aeb4b083464
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/Schedule/schedule.js';
import EventDetails from './components/Event-Details/event.js';
import TeamDetails from './components/Team-Details/team.js';

<<<<<<< HEAD
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
=======





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <SignedInRoute exact path='/' component={Dashboard} />
            <SignedInRoute path='/team/:id' component={TeamDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/registerteam' component={RegisterTeam} />
          </Switch>
      </div>
      </BrowserRouter>
>>>>>>> e5cda842222def9bfd616f2f98828aeb4b083464
    );
  }
}

export default App;
