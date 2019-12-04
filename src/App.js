import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import './App.css';
import Navbar from './components/Navbar/navbar'
import Home from './components/pages/Home'
import Login from './components/auth/login'
import RegistrationForm from './components/auth/Registration/Registration'
import ProfilePage from './components/auth/ProfilePage';
import Teams from './components/pages/Teams'
import Dues from './components/pages/Dues';
import Schedule from './components/pages/Schedule';


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
              <SecureRoute path='/profile' exact={true} component={ProfilePage} />
              <SecureRoute path='/teams' exact={true} component={Teams} />
              <SecureRoute path='/schedule' exact={true} component={Schedule} />
              <SecureRoute path='/dues' exact={true} component={Dues} />
              <Route path='/login' render={() => <Login baseUrl='https://dev-451795.okta.com' />} />
              <Route path="/register" component={RegistrationForm} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
