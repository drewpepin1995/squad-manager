export const createTeam = (team) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_TEAM', team })
    }
}