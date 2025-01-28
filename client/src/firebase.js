// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d52e9.firebaseapp.com",
  projectId: "mern-auth-d52e9",
  storageBucket: "mern-auth-d52e9.firebasestorage.app",
  messagingSenderId: "804678665204",
  appId: "1:804678665204:web:6294c15ac595ad4739efa1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);