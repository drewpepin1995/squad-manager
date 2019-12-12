export const createTeam = (team) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const managerId = getState().firebase.auth.uid;
        firestore.collection('/users/' + managerId + '/teams/').add({
            ...team,
            managerFirstName: profile.firstName,
            managerLastName: profile.lastName,
            managerId: managerId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_TEAM', team })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })

    }
}

export const insertPlayer = (player, teamId) => {

    const { playerFirstName, playerLastName, playerDues } = player
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const managerId = getState().firebase.auth.uid;
            firestore.collection('/users/' + managerId + '/teams/' + teamId + '/roster/').add({
                playerFirstName, playerLastName, playerDues,
                addedBy: managerId,
                addedAt: new Date()
            }).then(() => {
                dispatch({ type: 'INSERT_PLAYER', player: {playerFirstName, playerLastName, playerDues} })
            }).catch((err) => {
                dispatch({ type: 'INSERT_PLAYER_ERROR', err })
            })
    }

}

export const insertGame = (team) => {


    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const managerId = getState().firebase.auth.uid;
        const teamId = '4br95DPvY7laN4TCk891'
            firestore.collection('/users/' + managerId + '/teams/' + teamId + '/schedule/').add({
                ...team,
                addedBy: managerId,
                addedAt: new Date()
            }).then(() => {
                dispatch({ type: 'INSERT_GAME', team })
            }).catch((err) => {
                dispatch({ type: 'INSERT_GAME_ERROR', err })
            })
    }

}


