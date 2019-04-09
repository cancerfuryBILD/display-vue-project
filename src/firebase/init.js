import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBAwZxSYFTP1lD4de1dCsqTs7CqJEOky0w",
    authDomain: "display-13976.firebaseapp.com",
    databaseURL: "https://display-13976.firebaseio.com",
    projectId: "display-13976",
    storageBucket: "display-13976.appspot.com",
    messagingSenderId: "790894376048"
  };
firebase.initializeApp(config);
export default firebase.firestore()