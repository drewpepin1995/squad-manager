import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/navbar'
import Dashboard from './components/dashboard/Dashboard'
import GameDetails from './components/info/GameDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RegisterTeam from './components/info/RegisterTeam'
import './App.css';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/game/:id' component={GameDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/registerteam' component={RegisterTeam} />
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
