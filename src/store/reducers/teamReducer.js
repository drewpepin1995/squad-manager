const initState = {
    teams: [
        { id: 1, team: 'DJ Bloom and Evens DJ', date: '12/15', time: '7:00' },
        { id: 2, team: 'DJ Bloom and Evens DJ', date: '12/22', time: '7:00' },
        { id: 3, team: 'DJ Bloom and Evens DJ', date: '12/29', time: '7:00' },
    ]
};

const teamsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TEAM':
            console.log('created team', action.team)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("Error creating project", action.err)
            return state;
        case 'INSERT_PLAYER':
            console.log("Player Added", action.player)
            return state;
        case 'INSERT_PLAYER_ERROR':
            console.log("Error adding player", action.err)
            return state;
        case 'INSERT_GAME':
            console.log("Game Added", action.game)
            return state;
        case 'INSERT_GAME_ERROR':
            console.log("Error adding game", action.err)
            return state;
    }
    return state;
}

export default teamsReducer;