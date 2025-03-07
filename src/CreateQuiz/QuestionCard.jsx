import React from "react";
import styles from "./InputDesign.module.css";

const QuestionCard = ({
  question,
  questionNumber,
  onQuestionChange,
  onOptionChange,
  onRemoveQuestion,
  onAddOption,
  onRemoveOption,
  onSetCorrectOption,
}) => {
  return (
    <article
      className={styles.questionCard}
      aria-labelledby={`question-${question.id}-heading`}
    >
      <div className={styles.questionInput}>
        <span aria-hidden="true">≡</span> {/* Grip icon representation */}
        <input
          id={`question-${question.id}-heading`}
          type="text"
          placeholder={`Enter question ${questionNumber}`}
          className={styles.input4}
          value={question.text}
          onChange={(e) => onQuestionChange("text", e.target.value)}
          aria-label={`Question ${questionNumber} text`}
        />
        <button
          onClick={onRemoveQuestion}
          aria-label={`Remove question ${questionNumber}`}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 4H3.33333H14"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33334 4V2.66667C5.33334 2.31305 5.47382 1.97391 5.72387 1.72386C5.97392 1.47381 6.31305 1.33334 6.66667 1.33334H9.33334C9.68696 1.33334 10.0261 1.47381 10.2761 1.72386C10.5262 1.97391 10.6667 2.31305 10.6667 2.66667V4M12.6667 4V13.3333C12.6667 13.687 12.5262 14.0261 12.2761 14.2761C12.0261 14.5262 11.687 14.6667 11.3333 14.6667H4.66667C4.31305 14.6667 3.97391 14.5262 3.72386 14.2761C3.47381 14.0261 3.33334 13.687 3.33334 13.3333V4H12.6667Z"
              stroke="#4B5563"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div>
        <input
          type="text"
          value={question.type}
          readOnly
          className={styles.input5}
          aria-label="Question type"
        />
      </div>

      <fieldset>
        <legend className="sr-only">
          Options for question {questionNumber}
        </legend>
        {question.options.map((option, index) => (
          <div key={option.id} className={styles.option}>
            <input
              type="radio"
              name={`q${question.id}`}
              checked={option.isCorrect}
              onChange={() => onSetCorrectOption(option.id)}
              aria-label={`Mark option ${index + 1} as correct answer`}
            />
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              className={styles.input6}
              value={option.text}
              onChange={(e) =>
                onOptionChange(option.id, "text", e.target.value)
              }
              aria-label={`Option ${index + 1} text`}
            />
            <button
              onClick={() => onRemoveOption(option.id)}
              aria-label={`Remove option ${index + 1}`}
              style={{ background: "none", border: "none", cursor: "pointer" }}
              disabled={question.options.length <= 2}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}

        <button
          className={styles.addOption}
          onClick={onAddOption}
          type="button"
          aria-label="Add another option"
        >
          Add Option
        </button>
      </fieldset>
    </article>
  );
};

export default QuestionCard;
