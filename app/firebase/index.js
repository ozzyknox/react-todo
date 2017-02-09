import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA3-JPK6x_vQ8GxPlpdDFwy7yxEYC8KSag",
        authDomain: "ozzy-todo-app.firebaseapp.com",
        databaseURL: "https://ozzy-todo-app.firebaseio.com",
        storageBucket: "ozzy-todo-app.appspot.com",
        messagingSenderId: "205783536422"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;