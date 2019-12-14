import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Skeleton } from 'antd';
import { connect } from 'react-redux';



function SignedInRoute({ auth, component: Component, ...rest}) {

    const history = useHistory();
    const { isLoaded, uid } = auth;

    if (isLoaded && !uid) {
        history.push('/signin')
    };

  return <Route render={() => (isLoaded && uid ? <Component /> : <Skeleton />)} {...rest} />;
}


const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.firebase.auth,
        ...ownProps
    }
}

export default connect(mapStateToProps)(SignedInRoute);
