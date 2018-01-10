import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyB3aGVNxr9YZvLBnwIsBIC7dFRNILcVk_U",
  authDomain: "todo-ilias-test.firebaseapp.com",
  databaseURL: "https://todo-ilias-test.firebaseio.com",
  projectId: "todo-ilias-test",
  storageBucket: "todo-ilias-test.appspot.com",
  messagingSenderId: "336515825559"
});

export default app;
