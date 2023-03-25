import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKmu3kEt-yfT57ndpZRy80DIBAJF6n_ig",
  authDomain: "virtual-classroom-f2c16.firebaseapp.com",
  projectId: "virtual-classroom-f2c16",
  storageBucket: "virtual-classroom-f2c16.appspot.com",
  messagingSenderId: "822871659287",
  appId: "1:822871659287:web:60b48b0b387afe9b205d52"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
