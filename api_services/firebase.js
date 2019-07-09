import firebase from "firebase";
import '@firebase/firestore'
import '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAm67hmZGsJ0BIk4uNFecUkLqp7Pm9IufA",
  authDomain: "daigou-18824.firebaseapp.com",
  databaseURL: "https://daigou-18824.firebaseio.com",
  projectId: "daigou-18824",
  storageBucket: "daigou-18824.appspot.com",
  messagingSenderId: "280418903977",
  appId: "1:280418903977:web:1f266732a0e98ac4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataBase = firebase.firestore();
const auth = firebase.auth()

export default {
  dataBase,auth
};
