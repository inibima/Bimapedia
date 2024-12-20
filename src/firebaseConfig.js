import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFNhxgljCabE3VFv8uyBL_FsrA6M5P3rA",
  authDomain: "bima-f5a50.firebaseapp.com",
  projectId: "bima-f5a50",
  storageBucket: "bima-f5a50.firebasestorage.app",
  messagingSenderId: "325594940307",
  appId: "1:325594940307:web:faedcdfcb6adf065021e66",
  measurementId: "G-WD2LT1R7G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };