import React from 'react';


const TeamSummary =({team}) => {

        return (

                <div className="card z-depth-0 project-summary" id="card">
                    <div className='card-content grey-text text-darken-3'>
                        <span className="orange-text card-title center">{team.name}</span>
                        <hr></hr>
                        <p className="grey-text center">Team Manager : {team.managerFirstName}  {team.managerLastName}</p>
                        <p className="grey-text center">Sport : {team.sport}</p>
                    </div>
                </div>
            
        );
    }
export default TeamSummary;