import React from "react";
import styles from "./InputDesign.module.css";
import QuestionCard from "./QuestionCard";

const QuestionsSection = ({
  questions,
  onQuestionChange,
  onOptionChange,
  onAddQuestion,
  onRemoveQuestion,
  onAddOption,
  onRemoveOption,
  onSetCorrectOption,
}) => {
  return (
    <section
      className={styles.questionsSection}
      aria-labelledby="questions-heading"
    >
      <div className={styles.sectionHeader}>
        <h2 id="questions-heading" className={styles.title}>
          Questions
        </h2>
        <button
          className={styles.addQuestion}
          onClick={onAddQuestion}
          aria-label="Add new question"
        >
          Add Question
        </button>
      </div>

      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          questionNumber={index + 1}
          onQuestionChange={(field, value) =>
            onQuestionChange(question.id, field, value)
          }
          onOptionChange={(optionId, field, value) =>
            onOptionChange(question.id, optionId, field, value)
          }
          onRemoveQuestion={() => onRemoveQuestion(question.id)}
          onAddOption={() => onAddOption(question.id)}
          onRemoveOption={(optionId) => onRemoveOption(question.id, optionId)}
          onSetCorrectOption={(optionId) =>
            onSetCorrectOption(question.id, optionId)
          }
        />
      ))}

      {questions.length === 0 && (
        <p className={styles.noQuestions}>
          No questions added yet. Click "Add Question" to get started.
        </p>
      )}
    </section>
  );
};

export default QuestionsSection;
