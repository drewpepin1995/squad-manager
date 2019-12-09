import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/navbar'
import Dashboard from './components/dashboard/Dashboard'
import TeamDetails from './components/info/TeamDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import RegisterTeam from './components/info/RegisterTeam'
import Schedule from './components/info/Schedule'
import Dues from './components/info/Dues'
import MyTeams from './components/info/MyTeams';
import './App.css';






class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/team/:id' component={TeamDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/registerteam' component={RegisterTeam} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/dues' component={Dues} />
            <Route path='/teams' component={MyTeams} />

          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
