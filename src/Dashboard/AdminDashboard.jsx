"use client";
import React from "react";
import styles from "./AdminDashboard.module.css";
import StatCard from "./StatCard";
import QuizItem from "./QuizItem";
import UserRequestRow from "./UserRequestRow";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=REM:wght@400;700&family=Righteous&family=Roboto:wght@400;500&display=swap"
      />
      <main className={styles.adminDashboard}>
        <header className={styles.topBar}>
          <div className={styles.notificationIcon}>
            <i className={styles.tiTiBell} aria-hidden="true" />
          </div>
          <div className={styles.adminName}>John Admin</div>
        </header>

        <section
          className={styles.statsContainer}
          aria-labelledby="stats-heading"
        >
          {/* <span id="stats-heading" className="sr-only">
            Dashboard Statistics
          </span> */}
          <StatCard
            label="Total Users"
            value="2, 543"
            changePercentage="12"
            isPositive={true}
          />
          <StatCard
            label="Active Quizzes"
            value="186"
            changePercentage="8"
            isPositive={true}
          />
          <StatCard
            label="Completed Quizzes"
            value="1,429"
            changePercentage="24"
            isPositive={true}
          />
          <StatCard
            label="Pending Requests"
            value="42"
            changePercentage="5"
            isPositive={false}
          />
        </section>

        <section className={styles.actionButtons}>
          <button className={styles.createQuiz} onClick={() => navigate("/createquiz")}>Create New Quiz</button>
          <button className={styles.manageUsers} onClick={() => navigate("/manageuser")}>
            <i className={styles.tiTiUsers} aria-hidden="true" />
            <span>Manage Users</span>
          </button>
          <button className={styles.viewQuizzes} onClick={() => navigate("/managequiz")}>
            <i className={styles.tiTiList} aria-hidden="true" />
            <span>View All Quizzes</span>
          </button>
        </section>

        <div className={styles.mainContent}>
          <section
            className={styles.competitionRates}
            aria-labelledby="competition-rates-heading"
          >
            <h2 id="competition-rates-heading" className={styles.sectionHeader}>
              Quiz Competition Rates
            </h2>
            <div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64c472f8f81003ba291af120d4b5e56fefc3de41"
                alt="Competition rates chart"
                className={styles.chartImage}
              />
            </div>
          </section>

          <section
            className={styles.liveQuizzes}
            aria-labelledby="live-quizzes-heading"
          >
            <div className={styles.sectionHeader2}>
              <h2 id="live-quizzes-heading" className={styles.sectionTitle}>
                Live Quizzes
              </h2>
              <div>4 active now</div>
            </div>
            <div className={styles.quizList}>
              <QuizItem
                name="Mathematics 101"
                participants="24"
                timeLeft="15 mins"
                status="Active"
              />
              <QuizItem
                name="History Quiz"
                participants="18"
                timeLeft="30 mins"
                status="Active"
              />
            </div>
          </section>
        </div>

        <section
          className={styles.userRequests}
          aria-labelledby="user-requests-heading"
        >
          <h2 id="user-requests-heading" className={styles.sectionHeader3}>
            Recent User Requests
          </h2>
          <div
            className={styles.requestsTable}
            role="table"
            aria-label="User Requests"
          >
            <div className={styles.tableHeader} role="row">
              <div role="columnheader">User</div>
              <div role="columnheader">Request Type</div>
              <div role="columnheader">Status</div>
              <div role="columnheader">Date</div>
              <div role="columnheader">Actions</div>
            </div>
            <UserRequestRow
              userName="Sarah Johnson"
              userEmail="sarah@example.com"
              requestType="Access Request"
              date="2 hours ago"
            />
            <UserRequestRow
              userName="Michael Chen"
              userEmail="michael@example.com"
              requestType="Quiz Creation"
              date="5 hours ago"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
