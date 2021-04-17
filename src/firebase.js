import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDun6dJL3kpWBa8j-rwWbKEKJZgkttWQR0",
    authDomain: "ecommerce-204b1.firebaseapp.com",
    projectId: "ecommerce-204b1",
    storageBucket: "ecommerce-204b1.appspot.com",
    messagingSenderId: "731104844887",
    appId: "1:731104844887:web:5a2e30d96529b1217e9712",
    measurementId: "G-DZ63G0RSM5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();
export const googleauthprovider=new firebase.auth.GoogleAuthProvider();