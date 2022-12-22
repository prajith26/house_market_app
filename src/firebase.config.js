// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs9EXktPv7eTPES_Nz5sXQm7zAGICJh9Y",
  authDomain: "house-marketplace-app-927c7.firebaseapp.com",
  projectId: "house-marketplace-app-927c7",
  storageBucket: "house-marketplace-app-927c7.appspot.com",
  messagingSenderId: "1058810411541",
  appId: "1:1058810411541:web:9da67ef7dd580a2f12ac1c",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
