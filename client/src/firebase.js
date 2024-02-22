// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-22e7e.firebaseapp.com",
  projectId: "real-estate-22e7e",
  storageBucket: "real-estate-22e7e.appspot.com",
  messagingSenderId: "591298352368",
  appId: "1:591298352368:web:d81622e816a182fa425e35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);