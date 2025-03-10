import React from "react";
import styles from "./AdminDashboard.module.css";

const UserRequestRow = ({ userName, userEmail, requestType, date }) => {
  return (
    <div className={styles.tableRow}>
      <div className={styles.userCell}>
        <div className={styles.userName}>{userName}</div>
        <div className={styles.userEmail}>{userEmail}</div>
      </div>
      <div>{requestType}</div>
      <div></div>
      <div>{date}</div>
      <div className={styles.actionsCell}>
        <button className={styles.acceptBtn}>Accept</button>
        <button className={styles.rejectBtn}>Reject</button>
      </div>
    </div>
  );
};

export default UserRequestRow;
