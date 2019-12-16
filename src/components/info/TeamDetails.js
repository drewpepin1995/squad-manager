import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';
import InsertPlayer from '../../components/auth/InsertPlayer';
import InsertGame from '../../components/auth/InsertGame';
import RosterTable from './RosterTable';
import ScheduleTable from './ScheduleTable';



const TeamDetails = (props) => {
    const { team, loading } = props;
    let rosters = props.roster;
    let schedules = props.schedule;
    if (loading || !team || !rosters || !schedules) {
        return <Skeleton />
    }





    return (
        <div className='container section game-details'>
            <div className='card z-depth-0'>
                <div className='card-content'>
                    <span className='card-title center'>{team.name}</span>
                    <p className="center">Manager : {team.managerFirstName}  {team.managerLastName}</p>
                </div>
                <div className="card-action grey-lighten-4 grey-text">
                </div>
            </div>
            <div className='row'>
                <div className="col s12 m5">
                    <h5 className='center'>Roster</h5>
                    <RosterTable />
                    <InsertPlayer />
                </div>
                <div className='col s12 m7'>
                    <h5 className='center'>Schedule</h5>
                    <ScheduleTable />
                    <InsertGame />
                </div>
            </div>
        </div>
    );
}



const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.firestore.status.requesting.team,
        team: state.firestore.data.team,
        schedule: state.firestore.ordered.schedule,
        roster: state.firestore.ordered.roster,
        auth: state.firebase.auth,
        teamId: ownProps.match.params.id,
    };
}

export default compose(
    withRouter,
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
                storeAs: 'team',
            },
            {
                collection: "users",
                doc: props.auth.uid,
                subcollections: [
                    {
                        collection: "teams",
                        doc: props.teamId,
                        subcollections: [
                            { collection: "roster" }
                        ]
                    }

                ],
                storeAs: 'roster',
                orderBy: ['playerFirstName', 'asc']
            },
            {
                collection: "users",
                doc: props.auth.uid,
                subcollections: [
                    {
                        collection: "teams",
                        doc: props.teamId,
                        subcollections: [
                            { collection: "schedule" }
                        ]
                    }

                ],
                storeAs: 'schedule',
                orderBy: ['date', 'asc']
            }
        ];
    }),
)(TeamDetails);
