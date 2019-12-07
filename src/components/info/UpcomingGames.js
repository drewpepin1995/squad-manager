import React from 'react';
import UpcomingGamesSummary from './UpcomingGamesSummary';


const UpcomingGames = ({ games }) => {

    return (
        <div className="team-list section">
             {games && games.map(game => {
                return (
                    <UpcomingGamesSummary game={game} key={game.id} />
                )
            })
            }
        </div>
    );
}
export default UpcomingGames;