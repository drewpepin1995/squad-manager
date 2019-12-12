import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAWZLTaqRJbG1x3ucCfReWupfLf6A7-yWg",
    authDomain: "squad-master.firebaseapp.com",
    databaseURL: "https://squad-master.firebaseio.com",
    projectId: "squad-master",
    storageBucket: "squad-master.appspot.com",
    messagingSenderId: "57789234759",
    appId: "1:57789234759:web:b38125d77215e1ec76bb62",
    measurementId: "G-N84C4DBL2X"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;