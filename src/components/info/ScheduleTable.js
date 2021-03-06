import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const scheduleColumns = [

    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'

    },
    {
        title: 'Time',
        dataIndex: 'time',
        key: 'time'

    },
    {
        title: 'Opponent',
        dataIndex: 'opponent',
        key: 'opponent'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action'
    }
];




const ScheduleTable = (props) => {
    const { team, loading } = props;
    let rosters = props.roster;
    let schedules = props.schedule;
    if (loading || !team || !rosters || !schedules) {
        return <Skeleton />

    }

    const scheduleData = [];

    schedules.map(game => {
        scheduleData.push({

            date: game.date,
            time: game.time,
            opponent: game.opponent,
            action: <Link to={'/game/' + game.id}>Check In</Link>

        })

    })
    return (
        <Table columns={scheduleColumns} dataSource={scheduleData} />
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
                            { collection: "roster", orderBy: ['playerFirstName', 'asc'] }
                        ]
                    }

                ],
                storeAs: 'roster',
            },
            {
                collection: "users",
                doc: props.auth.uid,
                subcollections: [
                    {
                        collection: "teams",
                        doc: props.teamId,
                        subcollections: [
                            { collection: "schedule", orderBy: ['date', 'asc'] }
                        ]
                    }

                ],
                storeAs: 'schedule',
            }
        ];
    }),
)(ScheduleTable);