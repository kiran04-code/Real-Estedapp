// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-ested-e9558.firebaseapp.com",
  projectId: "real-ested-e9558",
  storageBucket: "real-ested-e9558.firebasestorage.app",
  messagingSenderId: "486914750996",
  appId: "1:486914750996:web:49a2574342d0285dbe4501",
  measurementId: "G-VTLJFFY2V1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);