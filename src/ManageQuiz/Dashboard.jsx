"use client";
import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardHeader from "./DashboardHeader";
import StatCard from "./StatCard";
import QuizSection from "./QuizSection";
import ActivityTable from "./ActivityTable";

function Dashboard() {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const displayName = localStorage.getItem("displayName") || "User"; // Retrieve displayName from local storage

  // Mock data for stats
  const statsData = [
    {
      id: 1,
      icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="check-icon"> <path d="M44 22.16V24C43.9975 28.3128 42.601 32.5093 40.0187 35.9636C37.4363 39.4179 33.8066 41.9449 29.6707 43.1678C25.5349 44.3906 21.1145 44.2438 17.0689 42.7491C13.0234 41.2545 9.56931 38.4922 7.22192 34.8741C4.87453 31.256 3.75958 26.9761 4.04335 22.6726C4.32712 18.3691 5.99441 14.2726 8.79656 10.9941C11.5987 7.71561 15.3856 5.43074 19.5924 4.48026C23.7992 3.52979 28.2005 3.96465 32.14 5.71997M44 7.99997L24 28.02L18 22.02" stroke="#16BC88" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
      label: "Completed Quizzes",
      value: "24",
    },
    {
      id: 2,
      icon: '<svg width="48" height="48" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="star-icon"> <path d="M26.4023 1.6675C25.6185 0.186962 23.8767 0.0998726 23.8767 0.0998726C22.222 0.186962 21.3511 1.6675 21.3511 1.6675L15.7773 13.1634L3.23636 15.0794C1.58165 15.3406 1.05911 16.9083 1.05911 16.9083C0.536565 18.563 1.75583 19.7822 1.75583 19.7822L10.8132 28.7525L8.63594 41.4676C8.46176 43.1224 9.76811 44.1674 9.76811 44.1674C11.1616 45.1254 12.7292 44.3416 12.7292 44.3416L23.8767 38.4195L35.1113 44.3416C36.5919 45.1254 37.9853 44.1674 37.9853 44.1674C39.3787 43.1224 39.1175 41.4676 39.1175 41.4676L37.0273 28.7525L46.0847 19.7822C47.2168 18.563 46.7814 16.9083 46.7814 16.9083C46.1718 15.3406 44.517 15.0794 44.517 15.0794L31.9761 13.1634L26.4023 1.6675Z" fill="#FACC15"></path> </svg>',
      label: "Average Score",
      value: "85%",
    },
    {
      id: 3,
      icon: '<svg width="48" height="48" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg" class="streak-icon"> <path d="M12.1518 16.3823L12.1473 16.3845L12.1406 16.3889L12.1518 16.3823ZM34.2719 15.968C34.1173 15.8194 33.9457 15.6893 33.7608 15.5804C33.4989 15.4267 33.2082 15.3282 32.9066 15.2909C32.605 15.2537 32.2989 15.2785 32.0073 15.3638C31.7158 15.4492 31.4448 15.5932 31.2113 15.787C30.9778 15.9809 30.7866 16.2204 30.6496 16.4908C29.8843 17.9947 28.8285 19.3332 27.5429 20.4294C27.7401 19.3252 27.8397 18.206 27.8407 17.0845C27.845 13.6735 26.9424 10.3222 25.2248 7.37197C23.5072 4.42174 21.0361 1.97786 18.0629 0.289181C17.7353 0.103615 17.3657 0.00414648 16.9889 0.000126863C16.6121 -0.00389276 16.2404 0.0876684 15.9089 0.266203C15.5773 0.444737 15.2968 0.704381 15.0936 1.02073C14.8904 1.33707 14.7712 1.69972 14.7473 2.0746C14.6229 4.17478 14.0721 6.22793 13.1282 8.10967C12.1843 9.99141 10.8671 11.6626 9.25618 13.0219L8.74507 13.4361C7.05976 14.5664 5.56806 15.9599 4.32727 17.563C2.39898 19.9844 1.06323 22.8204 0.425954 25.846C-0.211323 28.8716 -0.132592 32.0036 0.655903 34.9936C1.4444 37.9836 2.92096 40.7493 4.96849 43.0714C7.01602 45.3936 9.57818 47.2082 12.4518 48.3713C12.7891 48.5082 13.1551 48.5603 13.5174 48.5231C13.8798 48.4859 14.2274 48.3604 14.5296 48.1578C14.8319 47.9552 15.0795 47.6816 15.2508 47.3611C15.4221 47.0407 15.5117 46.6832 15.5118 46.3201C15.5099 46.0855 15.4725 45.8524 15.4007 45.629C14.9035 43.7661 14.7603 41.827 14.9784 39.9117C17.0817 43.8648 20.4575 46.998 24.5629 48.8077C25.0638 49.0309 25.63 49.0609 26.1518 48.8919C29.3951 47.8482 32.3169 45.9953 34.6394 43.5091C36.962 41.0229 38.6084 37.986 39.422 34.687C40.2356 31.388 40.1896 27.9364 39.2882 24.6602C38.3868 21.3839 36.66 18.3918 34.2719 15.968ZM25.594 44.3907C23.6569 43.4123 21.948 42.0384 20.5785 40.3584C19.209 38.6784 18.2096 36.7299 17.6451 34.6396C17.4725 33.9356 17.339 33.2228 17.2451 32.5042C17.1819 32.0466 16.9767 31.6202 16.6584 31.2845C16.34 30.9489 15.9243 30.7209 15.4696 30.6324C15.3297 30.6053 15.1876 30.5919 15.0451 30.5925C14.6547 30.5921 14.271 30.6943 13.9328 30.8887C13.5945 31.0832 13.3137 31.363 13.1184 31.7001C11.275 34.8705 10.3481 38.4879 10.4406 42.1512C8.81875 40.8945 7.46323 39.3295 6.45265 37.5467C5.44207 35.764 4.79652 33.799 4.55343 31.7657C4.31035 29.7325 4.47456 27.6713 5.03654 25.7017C5.59852 23.7322 6.5471 21.8934 7.82729 20.292C8.79933 19.0335 9.97195 17.9424 11.2984 17.0623C11.3565 17.0252 11.4121 16.9845 11.4651 16.9405C11.4651 16.9405 12.1229 16.3978 12.1451 16.3867C15.3122 13.7175 17.565 10.1299 18.5896 6.1239C21.0105 8.35537 22.6246 11.3212 23.1811 14.5609C23.7377 17.8006 23.2055 21.1328 21.6674 24.0401C21.4638 24.4281 21.3802 24.8676 21.4271 25.303C21.474 25.7384 21.6493 26.1502 21.9308 26.4863C22.2124 26.8224 22.5876 27.0678 23.009 27.1915C23.4304 27.3152 23.8791 27.3116 24.2985 27.1812C27.7023 26.1171 30.6975 24.039 32.8807 21.2268C34.1934 23.159 35.0517 25.3615 35.3916 27.6703C35.7315 29.9791 35.5442 32.3345 34.8438 34.5612C34.1434 36.7878 32.9478 38.8281 31.3463 40.53C29.7447 42.232 27.7785 43.5516 25.594 44.3907Z" fill="url(#paint0_linear_144_1836)"></path> <defs> <linearGradient id="paint0_linear_144_1836" x1="20" y1="0" x2="20" y2="49" gradientUnits="userSpaceOnUse"> <stop stop-color="#B01010"></stop> <stop offset="1" stop-color="#E58911"></stop> </linearGradient> </defs> </svg>',
      label: "Current Streak",
      value: "5 days",
    },
  ];

  // Handle navigation
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    // In a real application, this would navigate to the appropriate page
    console.log(`Navigating to ${navItem}`);
  };

  return (
    <main className={styles.dashboard}>
      <DashboardHeader
        activeNav={activeNav}
        onNavClick={handleNavClick}
        userName={displayName}
      />

      <section className={styles.statsContainer} aria-label="User Statistics">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </section>

      <QuizSection />

      <ActivityTable />
    </main>
  );
}

export default Dashboard;
