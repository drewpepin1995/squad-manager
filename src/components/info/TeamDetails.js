import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';



const TeamDetails = (props) => {
    const { team, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (team) {
        return (
            <div className='container section game-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{team.name}</span>
                        <p>Manager : {team.managerFirstName} {team.managerLastName}</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                    </div>
                </div>
            </div>
        );
    } else { 
        return (
            <div className="container center">
                <p>Loading Team...</p>
            </div>
        )

    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const teams = state.firestore.data.teams;
    const team = teams ? teams[id] : null;
    return {
        team: team,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'teams' }
    ])
)(TeamDetails);