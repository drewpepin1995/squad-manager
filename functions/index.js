const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)


exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello!");
});

const createNotification =(notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => {
        console.log('notification added', doc)
    })
})



exports.teamCreated = functions.firestore
    .document('users/{userId}/teams/{teamId}')
    .onCreate(doc => {


        const team = doc.data();
        const notification = {
            content: 'Added a new Team',
            user: `${team.managerFirstName} ${team.managerLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
    })


exports.userJoined = functions.auth.user()
    .onCreate(user =>{

        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {


            const newUser = doc.data();
            const notification = {
                content: 'Joined SquadMaster',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotification(notification);
        })

})



