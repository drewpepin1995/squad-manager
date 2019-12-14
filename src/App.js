import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/navbar'
import Dashboard from './components/dashboard/Dashboard'
import TeamDetails from './components/info/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RegisterTeam from './components/info/RegisterTeam'
import SignedInRoute from './components/routes/SignedInRoute'
import './App.css';
import GameDetails from './components/info/GameDetails';






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <SignedInRoute exact path='/' component={Dashboard} />
            <SignedInRoute path='/team/:id' component={TeamDetails} />
            <SignedInRoute path='/game/:id' component={GameDetails} />
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
