import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { Table } from 'antd';
import InsertPlayer from '../../components/auth/InsertPlayer';
import InsertGame from '../../components/auth/InsertGame';

const rosterColumns = [
    {
        title: 'Name',
        dataIndex: 'name'

    },
    {
        title: 'Dues',
        dataIndex: 'dues'
    }
];
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
    }
];

const rosterData = [
    {
        dues: '',
        name: '',
    }
];

const scheduleData = [
    {
        date: '',
        time: '',
        opponent: ''
    }
];


const TeamDetails = (props) => {
    console.log(props)
    const { team, loading } = props;
    if (loading || !team) {
        return <Spin />
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
                        <Table columns={rosterColumns} dataSource={rosterData} />
                        <InsertPlayer />
                    </div>
                    <div className='col s12 m7'>
                        <h5 className='center'>Schedule</h5>
                        <Table columns={scheduleColumns} dataSource={scheduleData} />
                        <InsertGame />
                    </div>
                </div>
        </div>
    );
}



const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const teams = state.firestore.data.teams;
    let team;

    if (teams) {
        team = teams[id];
    }

    return {
        loading: state.firestore.status.requesting.teams,
        team,
        auth: state.firebase.auth
    }
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
                    { collection: "teams"}
            ],
                storeAs: 'teams',
            }
        ];
    }),
)(TeamDetails);
