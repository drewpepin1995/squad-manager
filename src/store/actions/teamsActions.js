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
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })

    }
}