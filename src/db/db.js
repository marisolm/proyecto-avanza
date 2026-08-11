import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRfk5U03SoyOmLPWadKel55UgJY8tuEvQ",
  authDomain: "avanza-bbb04.firebaseapp.com",
  projectId: "avanza-bbb04",
  storageBucket: "avanza-bbb04.firebasestorage.app",
  messagingSenderId: "715473872040",
  appId: "1:715473872040:web:690b05d721239da7f50e9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db; 
