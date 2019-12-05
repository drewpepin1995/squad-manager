import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-sm navbar-dark bg-dark mb-4">
            <div className="container p-3">
              <Link className="navbar-brand" to="/">
                Squad Manager
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/players">
                      Players
                    </Link>
                  </li>
                  <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/teams">
                      My Teams
                    </Link>
                  </li>
                  <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/schedule">
                      Schedule
                    </Link>
                    <li className="nav-item" id='nav-list'>
                    <Link className="nav-link" to="/dues">
                      Dues
                    </Link>
                  </li>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
      }
    }

export default Navbar;