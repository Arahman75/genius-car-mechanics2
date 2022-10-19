// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk1VEERqAIWKPa1vboTI0mnKoptw49U5U",
  authDomain: "genius-car-mechanics2-22b32.firebaseapp.com",
  projectId: "genius-car-mechanics2-22b32",
  storageBucket: "genius-car-mechanics2-22b32.appspot.com",
  messagingSenderId: "1014136267132",
  appId: "1:1014136267132:web:00140a64a9d8a2890e84f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;