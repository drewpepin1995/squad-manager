import React from 'react';
import TeamSummary from './TeamSummary';
import { Link } from 'react-router-dom';


const Teams = ({ teams }) => {

    return (
        <div className="team-list section">
             {teams && teams.map(team => {
                return (
                    <Link to={'/team/' + team.id}>
                    <TeamSummary team={team} key={team.id} />
                    </Link>
                )
            })
            }
        </div>
    );
}
export default Teams;