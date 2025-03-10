"use client";
import React, { useState } from "react";
import styles from "./InputDesign.module.css";
import QuizHeader from "./QuizHeader";
import QuizTabs from "./QuizTabs";
import QuizForm from "./QuizForm";
import QuestionsSection from "./QuestionsSection";
import PreviewPanel from "./PreviewPanel";
import QuizFooter from "./QuizFooter";

function InputDesign() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState({
    title: "",
    description: "",
    timeLimit: { hours: "", minutes: "" },
    category: "",
    rounds: "1",
    questions: [
      {
        id: 1,
        text: "",
        type: "Multiple Choice",
        options: [
          { id: 1, text: "", isCorrect: false },
          { id: 2, text: "", isCorrect: false },
        ],
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setQuizData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTimeChange = (field, value) => {
    setQuizData((prev) => ({
      ...prev,
      timeLimit: {
        ...prev.timeLimit,
        [field]: value,
      },
    }));
  };

  const handleQuestionChange = (questionId, field, value) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) =>
        q.id === questionId ? { ...q, [field]: value } : q
      ),
    }));
  };

  const handleOptionChange = (questionId, optionId, field, value) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              options: q.options.map((opt) =>
                opt.id === optionId ? { ...opt, [field]: value } : opt
              ),
            }
          : q
      ),
    }));
  };

  const addQuestion = () => {
    const newQuestionId =
      quizData.questions.length > 0
        ? Math.max(...quizData.questions.map((q) => q.id)) + 1
        : 1;

    setQuizData((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          id: newQuestionId,
          text: "",
          type: "Multiple Choice",
          options: [
            { id: 1, text: "", isCorrect: false },
            { id: 2, text: "", isCorrect: false },
          ],
        },
      ],
    }));
  };

  const removeQuestion = (questionId) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.filter((q) => q.id !== questionId),
    }));
  };

  const addOption = (questionId) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => {
        if (q.id === questionId) {
          const newOptionId =
            q.options.length > 0
              ? Math.max(...q.options.map((opt) => opt.id)) + 1
              : 1;

          return {
            ...q,
            options: [
              ...q.options,
              { id: newOptionId, text: "", isCorrect: false },
            ],
          };
        }
        return q;
      }),
    }));
  };

  const removeOption = (questionId, optionId) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.filter((opt) => opt.id !== optionId),
          };
        }
        return q;
      }),
    }));
  };

  const setCorrectOption = (questionId, optionId) => {
    setQuizData((prev) => ({
      ...prev,
      questions: prev.questions.map((q) => {
        if (q.id === questionId) {
          return {
            ...q,
            options: q.options.map((opt) => ({
              ...opt,
              isCorrect: opt.id === optionId,
            })),
          };
        }
        return q;
      }),
    }));
  };

  const handleSaveDraft = () => {
    // In a real application, this would save to a database or localStorage
    localStorage.setItem("quizDraft", JSON.stringify(quizData));
    alert("Quiz draft saved successfully!");
  };

  const handlePublishQuiz = () => {
    // Validate required fields
    if (!quizData.title.trim()) {
      alert("Please enter a quiz title");
      return;
    }

    if (!quizData.description.trim()) {
      alert("Please enter a quiz description");
      return;
    }

    if (quizData.questions.length === 0) {
      alert("Please add at least one question");
      return;
    }

    // Check if all questions have text and at least one option
    const invalidQuestions = quizData.questions.filter(
      (q) =>
        !q.text.trim() ||
        q.options.length < 2 ||
        !q.options.some((opt) => opt.isCorrect)
    );

    if (invalidQuestions.length > 0) {
      alert(
        "Please complete all questions with text, at least two options, and mark a correct answer"
      );
      return;
    }

    // In a real application, this would publish to a database
    alert("Quiz published successfully!");
    // Redirect to dashboard or quiz list page
    // window.location.href = '/dashboard';
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=REM:wght@400;500;700&family=Righteous&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <QuizHeader
          onSaveDraft={handleSaveDraft}
          onPublishQuiz={handlePublishQuiz}
        />
        <hr className={styles.divider} />
        <QuizTabs currentStep={currentStep} />

        <section className={styles.mainContent}>
          {currentStep === 1 && (
            <QuizForm
              quizData={quizData}
              onInputChange={handleInputChange}
              onTimeChange={handleTimeChange}
            />
          )}

          {currentStep === 2 && (
            <QuestionsSection
              questions={quizData.questions}
              onQuestionChange={handleQuestionChange}
              onOptionChange={handleOptionChange}
              onAddQuestion={addQuestion}
              onRemoveQuestion={removeQuestion}
              onAddOption={addOption}
              onRemoveOption={removeOption}
              onSetCorrectOption={setCorrectOption}
            />
          )}

          {currentStep === 3 && <PreviewPanel quizData={quizData} />}
        </section>

        <QuizFooter
          currentStep={currentStep}
          onBack={handleBack}
          onNext={handleNext}
          onSaveDraft={handleSaveDraft}
        />
      </main>
    </>
  );
}

export default InputDesign;
