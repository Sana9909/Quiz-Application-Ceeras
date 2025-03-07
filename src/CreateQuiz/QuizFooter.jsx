import React from "react";
import styles from "./InputDesign.module.css";

const QuizFooter = ({ currentStep, onBack, onNext, onSaveDraft }) => {
  return (
    <footer className={styles.footer}>
      <button
        className={styles.back}
        onClick={onBack}
        disabled={currentStep === 1}
        aria-label="Go back to previous step"
      >
        Back
      </button>

      <button
        className={styles.saveDraft}
        onClick={onSaveDraft}
        aria-label="Save quiz as draft"
      >
        Save Draft
      </button>

      <button
        className={styles.next}
        onClick={onNext}
        disabled={currentStep === 3}
        aria-label={
          currentStep === 3 ? "Finish quiz creation" : "Go to next step"
        }
      >
        {currentStep === 3 ? "Finish" : "Next"}
      </button>
    </footer>
  );
};

export default QuizFooter;
