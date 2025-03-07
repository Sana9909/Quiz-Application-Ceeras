"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginContainer.module.css";
import { auth, provider, signInWithPopup } from "../../firebaseconfig";
import RoleToggle from "./RoleToggle";
import GoogleSignInButton from "./GoogleSignInButton";
import LoginDisclaimer from "./LoginDisclaimer";

function LoginContainer() {
  const [selectedRole, setSelectedRole] = React.useState("admin");
  const navigate = useNavigate(); // Hook to navigate

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(`Signed in as ${result.user.displayName}`);
      navigate("/profile"); // Navigate to profile page after successful login
    } catch (error) {
      console.error("Google sign-in failed:", error.message);
    }
  };

  return (
    <main className={styles.loginContainer}>
      <section className={styles.loginCard}>
        <h1 className={styles.welcomeText}>Welcome Back</h1>

        <RoleToggle selectedRole={selectedRole} onRoleChange={handleRoleChange} />

        <GoogleSignInButton onClick={handleGoogleSignIn} />

        <LoginDisclaimer />
      </section>
    </main>
  );
}

export default LoginContainer;
