import React, { Component } from 'react';
import Teams from '../info/Teams'
import { connect } from 'react-redux';
import Results from './Results';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';



class Dashboard extends Component {
    render() {
        const { teams, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />


        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className="col s12 m6">
                        <h5 id='dashboardHeader'>My Teams</h5>
                        <Teams teams={teams} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                    <h5 id='dashboardHeader'>Game Results</h5>
                        <Results />
                    </div>
                </div>
            </div>


        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        teams: state.firestore.ordered.teams,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'teams' }
    ])
)(Dashboard);