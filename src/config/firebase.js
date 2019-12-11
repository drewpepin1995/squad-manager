import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyC4umx0e3608m4Bvk5-kqqVIPrK1EZeEGs",
    authDomain: "react-hooks-firebase-e6935.firebaseapp.com",
    databaseURL: "https://react-hooks-firebase-e6935.firebaseio.com",
    projectId: "react-hooks-firebase-e6935",
    storageBucket: "react-hooks-firebase-e6935.appspot.com",
    messagingSenderId: "1012878146301",
    appId: "1:1012878146301:web:d193278c8f762c4ad3dc94",
    measurementId: "G-LG8V29ME6E"
  };

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
};

const firebase = new Firebase();

export default firebase;