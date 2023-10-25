import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./FirebaseConfig";



let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];



// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const dbFirestore = getFirestore();




