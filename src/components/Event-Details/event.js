import React from 'react'
import './event.css';

export const EventDetails = () => (
    <div>
        <h2>My Event Details</h2>
        <p>Team: </p>
        <p>Date: </p>
        <p>Time: </p>
        <p>Location: </p>

        {/* <a link>Check In</a>*/}

        <p>Checked In Players : </p>
        <div class="eventBorder border border-dark">FirstName LastName{/* {players} */}</div>

    </div>
)
export default EventDetails;