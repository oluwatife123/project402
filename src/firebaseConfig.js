// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBznjoWvEM2Gtf7vrEP4qKcq2WZ3UN1HFo",
  authDomain: "e-commerce-management-pr-2aea7.firebaseapp.com",
  projectId: "e-commerce-management-pr-2aea7",
  storageBucket: "e-commerce-management-pr-2aea7.appspot.com",
  messagingSenderId: "997854207724",
  appId: "1:997854207724:web:223781018730ad6c80cfc9",
  measurementId: "G-TSFKG1N3PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export auth so you can use it in other files
export { auth };
