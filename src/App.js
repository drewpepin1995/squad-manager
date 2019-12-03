import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/pages/Home'
import MyTeams from './components/pages/MyTeams'
import Login from './components/auth/login'


function onAuthRequired({history}) {
  history.push('/login')
}


class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-451795.okta.com/oauth2/default'
          clientId='0oa22zwon2owJoQUk357'
          redirectUri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
          pkce={true}>
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path='/' exact={true} component={Home} />
              <SecureRoute path='/myteams' exact={true} component={MyTeams} />
              <Route path='/login' render={() => <Login baseUrl='https://dev-451795.okta.com' />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
