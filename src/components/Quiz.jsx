import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAnswer];
    });
  };

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
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li className="answer" key={answer}>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
