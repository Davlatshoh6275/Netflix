// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA6F9TMc6nHo9GNg8v88dDNuJyuzPj-R6o",
  authDomain: "netflix-clone-d30e3.firebaseapp.com",
  projectId: "netflix-clone-d30e3",
  storageBucket: "netflix-clone-d30e3.appspot.com",
  messagingSenderId: "720417844773",
  appId: "1:720417844773:web:acdd66c72412652f0799cc",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
