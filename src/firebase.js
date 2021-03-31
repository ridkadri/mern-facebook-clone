import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDQE0OANLNQZoxxVc-0fhz_o-cgkFovVlA",
    authDomain: "facebook-mern-4d5e0.firebaseapp.com",
    projectId: "facebook-mern-4d5e0",
    storageBucket: "facebook-mern-4d5e0.appspot.com",
    messagingSenderId: "645602965986",
    appId: "1:645602965986:web:b79bdcb4834e840a1fa1bb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
