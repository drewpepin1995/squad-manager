import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Skeleton } from 'antd';
import { Table } from 'antd';
import DeletePlayer from '../auth/DeletePlayer'
const rosterColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key:'name'

    },
    {
        title: 'Dues',
        dataIndex: 'dues',
        key:'dues'
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key:'action'
    }
];



const RosterTable = (props) => {
    const { team, loading } = props;
    let rosters = props.roster;
    let schedules = props.schedule;
    if (loading || !team || !rosters || !schedules) {
        return <Skeleton />
    }

    const rosterData = [];

    rosters.map(player => {
        rosterData.push({

            name: player.playerFirstName + ' ' + player.playerLastName,
            dues: player.playerDues + '$',
            action: <DeletePlayer teamId={props.match.params.id} player={player} playerId={player.id}/>

        })

    })
    return (
        <Table columns={rosterColumns} dataSource={rosterData} />
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
                orderBy: ['playerDues', 'desc']
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
                orderBy: ['date', 'desc']
            }
        ];
    }),
)(RosterTable);