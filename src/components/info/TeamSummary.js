import React from 'react';


const TeamSummary =({team}) => {

        return (

                <div className="card z-depth-0 project-summary">
                    <div className='card-content grey-text text-darken-3'>
                        <span className="card-title">{team.team}</span>
                        <p className="grey-test">{team.date}</p>
                        <p className="grey-test">{team.time}</p>
                    </div>
                </div>
            
        );
    }
export default TeamSummary;