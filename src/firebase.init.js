// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZpB2JC9NJ9tJb5QKdRXoSuidUVOTfM8k",
  authDomain: "email-password-auth-f5b7c.firebaseapp.com",
  projectId: "email-password-auth-f5b7c",
  storageBucket: "email-password-auth-f5b7c.appspot.com",
  messagingSenderId: "690143092791",
  appId: "1:690143092791:web:189535c7126c8eccfbdfb2",
  measurementId: "G-JE7KRSFQJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;