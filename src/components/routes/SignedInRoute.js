import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Spin } from 'antd';
import { connect } from 'react-redux';



function SignedInRoute({ auth, component: Component, ...rest}) {

    const history = useHistory();
    const { isLoaded, uid } = auth;

    if (isLoaded && !uid) {
        history.push('/signin')
    };

  return <Route render={() => (isLoaded && uid ? <Component /> : <Spin />)} {...rest} />;
}


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        auth: state.firebase.auth,
        ...ownProps
    }
}

export default connect(mapStateToProps)(SignedInRoute);
