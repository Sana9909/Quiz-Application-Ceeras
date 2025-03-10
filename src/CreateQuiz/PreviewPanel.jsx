import React from "react";
import styles from "./InputDesign.module.css";

const PreviewPanel = ({ quizData }) => {
  // Display sample data if no real data is available
  const title = quizData.title || "Sample Quiz Title";
  const description =
    quizData.description ||
    "This is a sample quiz description to show how the content will appear to students.";

  // Get the first question with options for preview
  const previewQuestion =
    quizData.questions.length > 0
      ? quizData.questions[0]
      : {
          text: "What is the capital of France?",
          options: [
            { id: 1, text: "Paris", isCorrect: true },
            { id: 2, text: "London", isCorrect: false },
          ],
        };

  return (
    <aside className={styles.previewPanel} aria-labelledby="preview-heading">
      <h2 id="preview-heading" className={styles.previewHeader}>
        Preview
      </h2>
      <div className={styles.previewContent}>
        <h3 className={styles.previewTitle}>{title}</h3>
        <p className={styles.previewDescription}>{description}</p>

        <div className={styles.previewQuestion}>
          <h4 className={styles.questionText}>{previewQuestion.text}</h4>
          <div
            className={styles.previewOptions}
            role="radiogroup"
            aria-labelledby="preview-options-heading"
          >
            <span id="preview-options-heading" className="sr-only">
              Answer options
            </span>
            {previewQuestion.options.map((option, index) => (
              <div key={index} className={styles.previewOption}>
                <input
                  type="radio"
                  name="preview-q1"
                  id={`preview-option-${index}`}
                  disabled
                />
                <label htmlFor={`preview-option-${index}`}>{option.text}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default PreviewPanel;
