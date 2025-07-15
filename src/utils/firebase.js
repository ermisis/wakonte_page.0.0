// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF8BerhxeWBvLuwTBh9ZmAUHVELsbpLpM",
  authDomain: "wakonte01.firebaseapp.com",
  databaseURL: "https://wakonte01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wakonte01",
  storageBucket: "wakonte01.appspot.com",
  messagingSenderId: "1019956004377",
  appId: "1:1019956004377:web:b915bb6936162fce36cc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);