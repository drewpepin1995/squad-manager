import React, { Component } from 'react';
import Teams from '../info/Teams'
import { connect } from 'react-redux';
import Results from './Results';



class Dashboard extends Component {
    render() {
        const { teams } = this.props;

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
    return {
        teams: state.team.teams
    }
}
export default connect(mapStateToProps)(Dashboard);