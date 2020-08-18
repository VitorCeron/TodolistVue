import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAIN-72WgR-Y5ShQUyqSeJ8Hgbx-QLz7gY",
    authDomain: "todolist-5d3db.firebaseapp.com",
    databaseURL: "https://todolist-5d3db.firebaseio.com",
    projectId: "todolist-5d3db",
    storageBucket: "todolist-5d3db.appspot.com",
    messagingSenderId: "554948970349",
    appId: "1:554948970349:web:5e12c453f3dcbeb561fc64"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();