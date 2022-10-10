import React from "react";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const quiz = useLoaderData();
  return (
    <div>
      <h1>Quiz</h1>
      {console.log(quiz)}
    </div>
  );
};

export default Quiz;
