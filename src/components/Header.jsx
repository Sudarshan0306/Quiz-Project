import React from "react";
import QuizImage from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={QuizImage} alt="quiz-logo" />
      <h1>React Quiz!!!</h1>
    </header>
  );
};

export default Header;
