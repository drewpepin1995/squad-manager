import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Table } from 'antd';

const scheduleColumns = [

    {
        title: 'Date',
        dataIndex: 'date'

    },
    {
        title: 'Time',
        dataIndex: 'time'

    },
    {
        title: 'Opponent',
        dataIndex: 'opponent'
    },
    {
        title: 'Action',
        dataIndex: 'action'
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
            action: <a>Delete</a>

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
                            { collection: "roster" }
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
                            { collection: "schedule" }
                        ]
                    }

                ],
                storeAs: 'schedule',
            }
        ];
    }),
)(ScheduleTable);