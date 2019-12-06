import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class SignedOutLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li><NavLink to='/'>Register</NavLink></li>
                <li><NavLink to='/'>Sign In</NavLink></li>
            </ul>


        );
    }
}

export default SignedOutLinks;