import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebaseconfig"; // Ensure correct import path
import styles from "./LoginContainer.module.css";

const GoogleSignInButton = ({ onSignIn }) => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("User signed in:", user);
      onSignIn(user); // Pass user data to parent component
      navigate("/profile"); // Redirect to profile page
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <button
      className={styles.googleButton}
      onClick={handleGoogleSignIn}
      aria-label="Sign in with Google"
    >
      Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
