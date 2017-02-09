import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA3-JPK6x_vQ8GxPlpdDFwy7yxEYC8KSag",
    authDomain: "ozzy-todo-app.firebaseapp.com",
    databaseURL: "https://ozzy-todo-app.firebaseio.com",
    storageBucket: "ozzy-todo-app.appspot.com",
    messagingSenderId: "205783536422"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0' 
    },
    isRunning: true,
    user: {
        name: 'Ozzy',
        age: 42
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('Todo added', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Buy groceries'});
todosRef.push({text: 'Go for a jog'});

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', (snapshot) => {
//     console.log('child_added', snapshot.key, snapshot.val());
// });

// notesRef.on('child_changed', (snapshot) => {
//     console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//     console.log('child_removed', snapshot.key, snapshot.val());
// });

// var newNoteRef = notesRef.push({
//     text: 'Walk the dog!'
// });
// console.log('Note id', newNoteRef.key);