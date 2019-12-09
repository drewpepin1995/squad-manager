import React from 'react';


const TeamSummary =({team}) => {

        return (

                <div className="card z-depth-0 project-summary" id="card">
                    <div className='card-content grey-text text-darken-3'>
                        <span className="card-title">{team.name}</span>
                        <p className="grey-test">Team Manager : {team.managerFirstName}  {team.managerLastName}</p>
                        <p className="grey-test">Sport : {team.sport}</p>
                    </div>
                </div>
            
        );
    }
export default TeamSummary;