import React from 'react'
import './team.css';

export const TeamDetails = () => (
    <div>
        <h2>Team Details</h2>
        <p>Schedule: </p>
        <div class="teamBorder border border-dark">FirstName LastName{/* {schedule} */}</div>
        <p>Roster: </p>
        <div class="teamBorder border border-dark">FirstName LastName{/* {roster} */}</div>
        <p>Results: </p>
        <div class="teamBorder border border-dark">FirstName LastName{/* {results} */}</div>
    </div>
)
export default TeamDetails;