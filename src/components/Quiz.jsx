import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question" className="">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            let cssClass = "";
            const isSelected = userAnswers[userAnswers.length - 1] === answer;

            if (answerState === "answered" && isSelected) {
              cssClass = "selected";
            }
            if (
              answerState === "correct" ||
              (answerState === "wrong" && isSelected)
            ) {
              cssClass = answerState;
            }

            return (
              <li className="answer" key={answer}>
                <button
                  className={cssClass}
                  onClick={() => handleSelectAnswer(answer)}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
