import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyCkoO0dzRJvDIiea70fprb2Vrv3ap7Fz_E",
    authDomain: "to-do-827b5.firebaseapp.com",
    projectId: "to-do-827b5",
    storageBucket: "to-do-827b5.appspot.com",
    messagingSenderId: "188403378305",
    appId: "1:188403378305:web:84976cfb923689f3038580",
    measurementId: "G-K003YQPCWL"
};

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig)
}

export{firebase};