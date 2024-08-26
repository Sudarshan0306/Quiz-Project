import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Questions from "./Questions.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");
      setUserAnswers((prevAns) => {
        return [...prevAns, selectedAnswer];
      });

      setTimeout(() => {
        if (QUESTIONS[activeQuestionIndex].answers[0] === selectedAnswer) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return (
      <>
        <div id="summary">
          <img src={quizComplete} alt="Trophy icon" />
          <h2>Quiz Completed!</h2>
        </div>
      </>
    );
  }

  return (
    <div id="quiz">
      <Questions
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
      />
    </div>
  );
};

export default Quiz;
