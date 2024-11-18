// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4hUhK1XwmY7UFnfroYHK-13m3d96Rsw",
  authDomain: "career-compass-371c8.firebaseapp.com",
  projectId: "career-compass-371c8",
  storageBucket: "career-compass-371c8.firebasestorage.app",
  messagingSenderId: "517624925489",
  appId: "1:517624925489:web:44b3d92b144da330cc3410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
