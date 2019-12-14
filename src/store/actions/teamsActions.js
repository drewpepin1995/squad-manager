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
        const managerId = getState().firebase.auth.uid;
        firestore.collection('/users/' + managerId + '/teams/' + teamId + '/roster/').add({
            playerFirstName, playerLastName, playerDues,
            addedBy: managerId,
            playerId: playerFirstName + playerLastName,
            addedAt: new Date()
        }).then(() => {
            dispatch({ type: 'INSERT_PLAYER', player: { playerFirstName, playerLastName, playerDues } })
        }).catch((err) => {
            dispatch({ type: 'INSERT_PLAYER_ERROR', err })
        })
    }

}

export const insertGame = (game, teamId) => {

    const { time, date, opponent } = game

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const managerId = getState().firebase.auth.uid;
        firestore.collection('/users/' + managerId + '/teams/' + teamId + '/schedule/').add({
            date, opponent, time,
            addedBy: managerId,
            addedAt: new Date()
        }).then(() => {
            dispatch({ type: 'INSERT_GAME', game: { date, opponent } })
        }).catch((err) => {
            dispatch({ type: 'INSERT_GAME_ERROR', err })
        })
    }

}

export const deletePlayer = (playerId, teamId) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const managerId = getState().firebase.auth.uid;
        firestore.collection('/users/' + managerId + '/teams/' + teamId + '/roster/').doc(playerId).delete(

        ).then(() => {
            dispatch({ type: 'DELETE_PLAYER', player: playerId })
        }).catch((err) => {
            dispatch({ type: 'DELETE_PLAYER_ERROR', err })
        })
    }

}

