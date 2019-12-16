import React from 'react'
import { List } from 'antd';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const data = [
    
];


const GameDetails = (state, props) => {
    console.log(state)
    console.log(props)
        return (
            <div className='container section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title center'>Check In Page</span>
                        <p className="center">Coming Soon ...</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <List
                            size="small"
                            header={<div className="center">Checked In Players</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                </div>
            </div>
        )
    }

const mapStateToProps = (state, props) => {
    return {
        auth: state.firebase.auth,
        teamId: props.match.params.id,
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
                            { collection: "schedule" }
                        ]
                    }

                ],
                storeAs: 'schedule',
            }
        ];
    }),
)(GameDetails);
