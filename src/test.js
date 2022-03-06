// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChC3gM5Z6JtGFctfl3SVfB-9L3y7jDP0Q",
  authDomain: "chat-for-essence.firebaseapp.com",
  projectId: "chat-for-essence",
  storageBucket: "chat-for-essence.appspot.com",
  messagingSenderId: "626018798700",
  appId: "1:626018798700:web:1b957132189cfc9b435c49",
  measurementId: "G-RJQFT2253S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);