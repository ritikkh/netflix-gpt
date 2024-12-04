// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArdquMASVAXe7Cz7qFV4eZsOwHNnDmB6Y",
  authDomain: "netflixgpt1401.firebaseapp.com",
  projectId: "netflixgpt1401",
  storageBucket: "netflixgpt1401.firebasestorage.app",
  messagingSenderId: "760848200727",
  appId: "1:760848200727:web:c61e6347422f0c5b39d852",
  measurementId: "G-ZS30YEX617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();