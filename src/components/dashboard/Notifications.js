import React from 'react';
import moment from 'moment';




const Results = (props) => {
  const {notifications} = props;
  return (
      <div className="section container">
          <div className="card z-depth-0 project-summary" id="card">
              <div className='card-content'>
                <ul className='notifications'>
                  { notifications && notifications.map(item => {
                    return (
                      <li id='notiList' key={item.id}>
                        <span className="orange-text">{item.user} </span>
                        <span>{item.content}</span>
                        <div className='grey-text'>
                          {moment(item.time.toDate()).fromNow()}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
          </div>
      </div>
    
  );
}

export default Results;