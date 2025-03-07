// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq3TZ8FAZSygxC2wL_xyMll4lt5Wxh_Nw",
  authDomain: "quizceeras.firebaseapp.com",
  projectId: "quizceeras",
  storageBucket: "quizceeras.appspot.com", 
  messagingSenderId: "833167173733",
  appId: "1:833167173733:web:0b7162683a1047bae37e8c",
  measurementId: "G-QYF7L5LEPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Analytics (Optional)
const analytics = getAnalytics(app);

export { app, auth, provider, signInWithPopup };
