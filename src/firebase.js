// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyxqCU-7se01c_L_D97u-Bxx-YQCqUiNg",
  authDomain: "clone-14ca4.firebaseapp.com",
  projectId: "clone-14ca4",
  storageBucket: "clone-14ca4.appspot.com",
  messagingSenderId: "901640340428",
  appId: "1:901640340428:web:cb65ea9ffc99d506e31369",
  measurementId: "G-YEY6R8SGYN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
