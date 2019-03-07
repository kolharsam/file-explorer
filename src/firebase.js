import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyATHI-KgW50VqW6Gv0P_NLg4AA93U3sYbU",
    authDomain: "smallcase-assignment.firebaseapp.com",
    databaseURL: "https://smallcase-assignment.firebaseio.com",
    projectId: "smallcase-assignment",
    storageBucket: "smallcase-assignment.appspot.com",
    messagingSenderId: "91320278823"
};

firebase.initializeApp(config);

export default firebase;