import React from 'react';


const UpcomingGamesSummary =({game}) => {

        return (

                <div className="card z-depth-0 project-summary">
                    <div className='card-content grey-text text-darken-3'>
                        <span className="card-title">{game.team}</span>
                        <p className="grey-test">{game.date}</p>
                        <p className="grey-test">{game.time}</p>
                    </div>
                </div>
            
        );
    }
export default UpcomingGamesSummary;