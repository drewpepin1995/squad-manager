import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
class Home extends Component {
    state = { authenticated: null };
    
  

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
    this.props.auth.login('/');
  }

  logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ? (
        <div>
            <p className="lead">You have entered members portal, <Link to='/profile'> click here</Link></p>
            <button className="button.btn.btn-light.btn-lg" onClick={this.logout}>Logout</button>
        </div>
    ) : (
        <div>
            <p className="lead">If you are a member, please login ...</p>
            <button className="button.btn.btn-light.btn-lg" onClick={this.login}>login</button>
        </div>
    )

    return (
      <div className="jombotron">
          <h1 className="display-4">Members Portal</h1>
          {mainContent}

      </div>
    );
  }
});
