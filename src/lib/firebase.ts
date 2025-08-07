// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "gerald-portfolio-crsb1",
  "appId": "1:178028773105:web:fb1b7ba8fc8f0b2e48f350",
  "storageBucket": "gerald-portfolio-crsb1.firebasestorage.app",
  "apiKey": "AIzaSyC99DlZik6RuzS8fyElv9RXW0E3twzhgqg",
  "authDomain": "gerald-portfolio-crsb1.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "178028773105"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
