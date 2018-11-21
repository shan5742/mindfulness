import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDtvQP70JSrLa7sDwv5rikqP0BoRqhPFz0",
  authDomain: "mindfulness-dc4f9.firebaseapp.com",
  databaseURL: "https://mindfulness-dc4f9.firebaseio.com",
  projectId: "mindfulness-dc4f9",
  storageBucket: "mindfulness-dc4f9.appspot.com",
  messagingSenderId: "569033688825"
};

firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
