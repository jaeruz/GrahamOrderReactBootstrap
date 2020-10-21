import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC-euRETFfOYmPVeZ-NeeNzrGJDsbnWJTc",
    authDomain: "graham-3ed55.firebaseapp.com",
    databaseURL: "https://graham-3ed55.firebaseio.com",
    projectId: "graham-3ed55",
    storageBucket: "graham-3ed55.appspot.com",
    messagingSenderId: "593186373221",
    appId: "1:593186373221:web:2c1dc6be8216c5548a508c",
    measurementId: "G-PKLZ2536VE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase