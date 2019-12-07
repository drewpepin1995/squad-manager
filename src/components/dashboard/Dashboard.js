import React, { Component } from 'react';
import Notifications from './Results'
import UpcomingGames from '../info/UpcomingGames'
import { connect } from 'react-redux';
import Results from './Results';



class Dashboard extends Component {
    render() {

        const { games } = this.props;

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className="col s12 m6">
                        <h5 id='dashboardHeader'>Upcoming Games</h5>
                        <UpcomingGames games={games} />
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
        games: state.upcomingGame.games
    }
}
export default connect(mapStateToProps)(Dashboard);