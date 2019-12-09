import { NavLink } from 'react-router-dom';
import React, { Profiler } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
        return (
            <ul className='right'>
                <li><NavLink to='/teams'>My Teams</NavLink></li>
                <li><NavLink to='/dues'>My Dues</NavLink></li>
                <li><NavLink to='/schedule'>My Schedule</NavLink></li>
                <li><NavLink to='/registerteam'>Register a Team</NavLink></li>
                <li><a href="#" onClick={props.signOut}>Log Out</a></li>
                <li><NavLink to='/' className="btn btn-floating purple lighten-1">{props.profile.initials}</NavLink></li>
            </ul>
        );
    }
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);