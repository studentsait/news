// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5negXyMtW7MLtAHjSVCAsxDh_7f87ruA",
  authDomain: "final-project-6ef1c.firebaseapp.com",
  projectId: "final-project-6ef1c",
  storageBucket: "final-project-6ef1c.firebasestorage.app",
  messagingSenderId: "694868883157",
  appId: "1:694868883157:web:1f80d4fa96ea78e49a945c",
  measurementId: "G-MFS0Q11Y0B"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);