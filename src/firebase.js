import firebase from "firebase";

const firebaseConfig = {

  
  apiKey: "AIzaSyAeS8DlANWm-iWi40u-9iM50084OXiNHhs",
  authDomain: "clone-1ff2d.firebaseapp.com",
  databaseURL: "https://clone-1ff2d-default-rtdb.firebaseio.com/",
  projectId: "clone-1ff2d",
  storageBucket: "clone-1ff2d.appspot.com",
  messagingSenderId: "12389972648",
  appId: "1:12389972648:web:44daa17832c392c506609d",
  measurementId: "G-1Q8D0J75RB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
