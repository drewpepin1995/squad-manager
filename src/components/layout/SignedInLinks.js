import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class SignedInLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li><NavLink to='/'>My Teams</NavLink></li>
                <li><NavLink to='/'>My Dues</NavLink></li>
                <li><NavLink to='/'>My Schedule</NavLink></li>
                <li><NavLink to='/'>Register a Team</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating purple lighten-1">DP</NavLink></li>
            </ul>
        );
    }
}
export default SignedInLinks;