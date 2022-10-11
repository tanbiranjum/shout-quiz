import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../../components/QuizCard/QuizCard";

const Quiz = () => {
  const [rightCount, setRightCount] = useState();
  const [wrongCount, setWrongCount] = useState();
  
  const quizes = useLoaderData();
  return (
    <div>
      {quizes.data.questions.map((quiz) => (
        <QuizCard key={quiz.id} info={quiz} />
      ))}
    </div>
  );
};

export default Quiz;
