import React from 'react';
import TeamSummary from './TeamSummary';


const Teams = ({ teams }) => {

    return (
        <div className="team-list section">
             {teams && teams.map(team => {
                return (
                    <TeamSummary team={team} key={team.id} />
                )
            })
            }
        </div>
    );
}
export default Teams;