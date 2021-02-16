import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDX0hTpwp-NNhNWTJjGdwYuH3DvnJG02Mo",
    authDomain: "linkedin-clone-4a118.firebaseapp.com",
    projectId: "linkedin-clone-4a118",
    storageBucket: "linkedin-clone-4a118.appspot.com",
    messagingSenderId: "604685095321",
    appId: "1:604685095321:web:16b83b40ed1580d1f0c308"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };