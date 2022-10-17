// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2FJ_SAj6XDLehoGtsDqQAh4pylWFnrWA",
  authDomain: "genius-car-mechanics-d9660.firebaseapp.com",
  projectId: "genius-car-mechanics-d9660",
  storageBucket: "genius-car-mechanics-d9660.appspot.com",
  messagingSenderId: "200515534516",
  appId: "1:200515534516:web:3622c669e0ebd01a7961e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;