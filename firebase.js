import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvtIGhFxmCDCjQOqienW9EpCDHARs-iTQ",
  authDomain: "facebook-messeger-cln.firebaseapp.com",
  databaseURL: "https://facebook-messeger-cln.firebaseio.com",
  projectId: "facebook-messeger-cln",
  storageBucket: "facebook-messeger-cln.appspot.com",
  messagingSenderId: "139046982634",
  appId: "1:139046982634:web:40f62660c08250e7909893",
  measurementId: "G-KRWZ6Q6DTJ"  
});

const db = firebaseApp.firestore();

export default db;
