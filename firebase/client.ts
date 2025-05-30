import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVdp_wMzbrw1E6OZNauj2xrC3ozYZ1rnw",
  authDomain: "prepwise-f3488.firebaseapp.com",
  projectId: "prepwise-f3488",
  storageBucket: "prepwise-f3488.appspot.com", // fixed typo: .app -> .appspot.com
  messagingSenderId: "1095724961974",
  appId: "1:1095724961974:web:2baa7d3d37c3ae05f7d617",
  measurementId: "G-G6BE4HZQ6Y",
};

// Initialize Firebase
export const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
