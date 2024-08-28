import React from "react";
import quizComplete from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  return (
    <div id="summary">
      <img src={quizComplete} alt="Trophy icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">Answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={answer}>
              <h3> {index + 1} </h3>
              <p className="question"> {QUESTIONS[index].text} </p>
              <p className={cssClass}> {answer ?? "Skipped"} </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
