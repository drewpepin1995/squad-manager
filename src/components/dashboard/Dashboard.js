import React, { Component } from 'react';
import Teams from '../info/Teams'
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';



class Dashboard extends Component {
    render() {
        const { teams, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className="col s12 m6">
                        <h5 id='dashboardHeader'>My Teams</h5>
                        <p id='dashboardSubHeader'>(Click Team Card to see Team Details)</p>
                        <Teams teams={teams} />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <h5 id='dashboardHeader'>Notifications</h5>
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.firestore.ordered.teams,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        return [
            {
                collection: "users",
                doc: props.auth.uid,
                subcollections: [
                    {
                        collection: "teams",
                        doc: props.teamId,
                    }
                ],
                storeAs: 'teams',
                orderBy: ['createdAt', 'desc']
            },
            { collection: 'notifications', limit: 3, storeAs: 'notifications', orderBy: ['time', 'desc']}
        ];
    })
)(Dashboard);