import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../../components/QuizCard/QuizCard";

const Quiz = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <h1>Quiz</h1>
      {console.log(quizes)}
      {quizes.data.questions.map((quiz) => (
        <QuizCard key={quiz.id} info={quiz}/>
      ))}
    </div>
  );
};

export default Quiz;
