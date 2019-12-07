import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class SignedInLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li><NavLink to='/teams'>My Teams</NavLink></li>
                <li><NavLink to='/dues'>My Dues</NavLink></li>
                <li><NavLink to='/schedule'>My Schedule</NavLink></li>
                <li><NavLink to='/registerteam'>Register a Team</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating purple lighten-1">DP</NavLink></li>
            </ul>
        );
    }
}
export default SignedInLinks;