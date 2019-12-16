import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'
import { connect } from 'react-redux';



const Navbar = (props) => {
  const { auth, profile } = props 

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return (
    <nav id='nav' className="nav-wrapper">
      <div className="container">
        <Link to='/' className='brand-logo'><img id='logo' className='responsive-img hide-on-med-and-down'src={'images/logo.png'}/></Link>
        { auth.isLoaded && links }
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile

  }
}

export default connect(mapStateToProps)(Navbar);