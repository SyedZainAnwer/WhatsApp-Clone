// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZr3U8bRcRGabJv5_vVnsFUbVoQJO7AiI",
  authDomain: "whats-app-clone-6c7c2.firebaseapp.com",
  projectId: "whats-app-clone-6c7c2",
  storageBucket: "whats-app-clone-6c7c2.appspot.com",
  messagingSenderId: "1008898597094",
  appId: "1:1008898597094:web:63b64512455a72a1271b27",
  measurementId: "G-DRP4K9J292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);