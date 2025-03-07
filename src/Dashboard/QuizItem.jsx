import React from "react";
import styles from "./AdminDashboard.module.css";

const QuizItem = ({ name, participants, timeLeft, status }) => {
  return (
    <article className={styles.quizItem}>
      <h3 className={styles.quizName}>{name}</h3>
      <div className={styles.quizDetails}>
        <span className={styles.participantCount}>
          <i className={styles.tiTiUsers} aria-hidden="true" />
          <span>{participants} participants</span>
        </span>
        <span className={styles.timeLeft}>
          <i className={styles.tiTiClock} aria-hidden="true" />
          <span>{timeLeft} left</span>
        </span>
      </div>
      <div>{status}</div>
    </article>
  );
};

export default QuizItem;
