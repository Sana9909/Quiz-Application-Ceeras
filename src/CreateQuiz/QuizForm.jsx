import React from "react";
import styles from "./InputDesign.module.css";

const QuizForm = ({ quizData, onInputChange, onTimeChange }) => {
  const categories = [
    "General Knowledge",
    "Science",
    "History",
    "Geography",
    "Entertainment",
    "Sports",
    "Technology",
    "Art & Literature",
  ];

  return (
    <form className={styles.quizForm}>
      <div className={styles.formGroup}>
        <label htmlFor="quiz-title" className={styles.label}>
          Quiz Title
        </label>
        <input
          id="quiz-title"
          type="text"
          placeholder="Enter the quiz title"
          className={styles.input}
          value={quizData.title}
          onChange={(e) => onInputChange("title", e.target.value)}
          aria-required="true"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quiz-description" className={styles.label}>
          Description
        </label>
        <textarea
          id="quiz-description"
          placeholder="Enter the quiz description"
          className={styles.textarea}
          value={quizData.description}
          onChange={(e) => onInputChange("description", e.target.value)}
          aria-required="true"
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGrouptimeLimit}>
          <label className={styles.label}>Time Limit</label>
          <div className={styles.timeInputs}>
            <input
              type="number"
              id="time-hours"
              placeholder="Hours"
              className={styles.input2}
              value={quizData.timeLimit.hours}
              onChange={(e) => onTimeChange("hours", e.target.value)}
              min="0"
              max="24"
              aria-label="Time limit hours"
            />
            <input
              type="number"
              id="time-minutes"
              placeholder="Minutes"
              className={styles.input3}
              value={quizData.timeLimit.minutes}
              onChange={(e) => onTimeChange("minutes", e.target.value)}
              min="0"
              max="59"
              aria-label="Time limit minutes"
            />
          </div>
        </div>

        <div className={styles.formGroupcategory}>
          <label htmlFor="quiz-category" className={styles.label}>
            Category
          </label>
          <select
            id="quiz-category"
            className={styles.select}
            value={quizData.category}
            onChange={(e) => onInputChange("category", e.target.value)}
            aria-required="true"
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGrouprounds}>
          <label htmlFor="quiz-rounds" className={styles.label}>
            Number of Rounds
          </label>
          <input
            id="quiz-rounds"
            type="number"
            className={styles.input}
            value={quizData.rounds}
            onChange={(e) => onInputChange("rounds", e.target.value)}
            min="1"
            max="10"
            aria-required="true"
          />
        </div>
      </div>
    </form>
  );
};

export default QuizForm;
