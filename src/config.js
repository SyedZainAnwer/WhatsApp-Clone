import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZr3U8bRcRGabJv5_vVnsFUbVoQJO7AiI",
  authDomain: "whats-app-clone-6c7c2.firebaseapp.com",
  projectId: "whats-app-clone-6c7c2",
  storageBucket: "whats-app-clone-6c7c2.appspot.com",
  messagingSenderId: "1008898597094",
  appId: "1:1008898597094:web:63b64512455a72a1271b27",
  measurementId: "G-DRP4K9J292",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;