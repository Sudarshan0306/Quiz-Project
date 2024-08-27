import React from "react";
import quizComplete from "../assets/quiz-complete.png";

const Summary = () => {
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
    </div>
  );
};

export default Summary;
