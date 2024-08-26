import React from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Questions = ({
  questionText,
  answers,
  onSelectAnswer,
  onSkipAnswer,
  selectedAnswer,
  answerState,
}) => {
  return (
    <div id="question" className="">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Questions;
