import React from 'react';



const ProjectDetails = (props) => {
        const id = props.match.params.id;

        return (
            <div className='container section game-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>Game Title - {id}</span>
                        <p>loremsdfasdfasfasfd</p>
                    </div>
                    <div className="card-action grey-lighten-4 grey-text">
                        <div>Date : </div>
                        <div>Time : </div>
                        <div>Location : </div>
                    </div>
                </div>
            </div>
        );
    }


export default ProjectDetails;