export const createTeam = (team) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('teams').add({
            ...team,
            managerFirstName: 'Drew',
            managerLastName: 'Pepin',
            managerId: '1',
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TEAM', team })
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}