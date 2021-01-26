import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

     const firebaseConfig = {
          apiKey: "AIzaSyBvAAyk0XIXRVZ1Fy36j8s74a4us9pdNRc",
          authDomain: "repositorio-mailings.firebaseapp.com",
          projectId: "repositorio-mailings",
          storageBucket: "repositorio-mailings.appspot.com",
          messagingSenderId: "739268225727",
          appId: "1:739268225727:web:b39a2d26317bd5970db40a"
     };
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()
const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, storage }