"use client";
import React, { useState } from "react";
import styles from "./Container.module.css";

const RoleOption = ({ icon, text, isActive, onClick }) => {
  return (
    <button
      className={
        text === "Admin" ? styles.roleOptionadmin : styles.roleOptionstudent
      }
      onClick={onClick}
      aria-pressed={isActive}
    >
      <span className={styles.roleIcon}>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </span>
      <span className={styles.roleText}>{text}</span>
    </button>
  );
};

function Container() {
  const [selectedRole, setSelectedRole] = useState("Student");

  return (
    <main className={styles.container}>
      <section className={styles.signInBox}>
        <h1 className={styles.heading}>Choose your role to get started.</h1>

        <div
          className={styles.roleSelector}
          role="radiogroup"
          aria-label="Select your role"
        >
          <RoleOption
            icon='<svg id="172:866" style="width: 22px; height: 25px; fill: #4B5563"></svg>'
            text="Admin"
            isActive={selectedRole === "Admin"}
            onClick={() => setSelectedRole("Admin")}
          />
          <RoleOption
            icon='<svg id="172:871" style="width: 22px; height: 25px; fill: #16BC88"></svg>'
            text="Student"
            isActive={selectedRole === "Student"}
            onClick={() => setSelectedRole("Student")}
          />
        </div>

        <button
          className={styles.googleSignin}
          aria-label="Sign in with Google"
        >
          Sign in with Google
        </button>

        <p className={styles.signinInfo}>
          Sign in with your Google account to continue
          <br />
          By signing in, you agree to our{" "}
          <a
            href="#"
            className={styles.termsLink}
            aria-label="View Terms and Privacy Policy"
          >
            Terms & Privacy Policy
          </a>
        </p>

        <p className={styles.loginPrompt}>
          Already have an account?{" "}
          <a
            href="#"
            className={styles.loginLink}
            aria-label="Login to your account"
          >
            Login Here
          </a>
        </p>
      </section>
    </main>
  );
}

export default Container;
