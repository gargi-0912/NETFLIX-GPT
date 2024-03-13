// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXy5ms19E8R-L1L5Y1R_rpSXGs2OWxpUg",
  authDomain: "netflix-gpt-ad49e.firebaseapp.com",
  projectId: "netflix-gpt-ad49e",
  storageBucket: "netflix-gpt-ad49e.appspot.com",
  messagingSenderId: "920661351721",
  appId: "1:920661351721:web:a723d5eacec2e61a59eb38",
  measurementId: "G-JPLNB7DVPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();