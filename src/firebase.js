// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJFTYxfA528miY6mPsSCW63nZzpREg7-8",
  authDomain: "outsourcing-christmas.firebaseapp.com",
  projectId: "outsourcing-christmas",
  storageBucket: "outsourcing-christmas.appspot.com",
  messagingSenderId: "754267303345",
  appId: "1:754267303345:web:ea15f6f3eab26a2a972190",
  measurementId: "G-VTMM5XDQS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
