import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCvD9ki9U9LOZ320zj7l2OFcPgZY0Ya1jM",
    authDomain: "fir-f037b.firebaseapp.com",
    projectId: "fir-f037b",
    storageBucket: "fir-f037b.appspot.com",
    messagingSenderId: "871189530507",
    appId: "1:871189530507:web:17efaf74cde1cbb535918e",
    measurementId: "G-WSP5G3TCE4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };