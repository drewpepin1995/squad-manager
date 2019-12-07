const initState = {
    games: [
        {id: 1, team: 'DJ Bloom and Evens DJ', date: '12/15', time: '7:00'},
        {id: 2, team: 'DJ Bloom and Evens DJ', date: '12/22', time: '7:00'},
        {id: 3, team: 'DJ Bloom and Evens DJ', date: '12/29', time: '7:00'},
    ]
};

const upcomingGamesReducer = (state = initState, action) => {
    return state;
}

export default upcomingGamesReducer;