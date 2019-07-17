import firebase from "firebase";
import '@firebase/firestore'
import '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA5Ly0ehcy5_CVBlcTrKI_rW7ND7FjIpXw",
  authDomain: "daigo2-9a0da.firebaseapp.com",
  databaseURL: "https://daigo2-9a0da.firebaseio.com",
  projectId: "daigo2-9a0da",
  storageBucket: "",
  messagingSenderId: "362433399689",
  appId: "1:362433399689:web:d48b018b0dc3de55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const dataBase = firebase.firestore();
const auth = firebase.auth()

export default {
  dataBase, auth
};
