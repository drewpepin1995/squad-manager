const initState = {
    teams: [
        {id: 1, team: 'DJ Bloom and Evens DJ', date: '12/15', time: '7:00'},
        {id: 2, team: 'DJ Bloom and Evens DJ', date: '12/22', time: '7:00'},
        {id: 3, team: 'DJ Bloom and Evens DJ', date: '12/29', time: '7:00'},
    ]
};

const teamsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TEAM': 
            console.log('created team', action.team)
    }
    return state;
}

export default teamsReducer;