// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN_uOu62BOdQDAW_GgYslvezpB6gb18gs",
  authDomain: "carefinder-b47c8.firebaseapp.com",
  projectId: "carefinder-b47c8",
  storageBucket: "carefinder-b47c8.appspot.com",
  messagingSenderId: "234260773894",
  appId: "1:234260773894:web:c1ade34071f063be441787",
  measurementId: "G-GT4HFHNWYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export  const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);