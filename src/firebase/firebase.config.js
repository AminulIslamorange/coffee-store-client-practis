// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyYfvCh0sOqIUdCKhj9PKWdO60uM6s1MY",
  authDomain: "coffee-stote-client.firebaseapp.com",
  projectId: "coffee-stote-client",
  storageBucket: "coffee-stote-client.appspot.com",
  messagingSenderId: "184825595652",
  appId: "1:184825595652:web:7b3fcd24160d77fc6df251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;