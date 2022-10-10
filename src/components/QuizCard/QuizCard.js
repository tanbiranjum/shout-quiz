import React from "react";

const QuizCard = ({ info }) => {
  return <div className="bg-slate-100">
    {info.question}
  </div>;
};

export default QuizCard;
