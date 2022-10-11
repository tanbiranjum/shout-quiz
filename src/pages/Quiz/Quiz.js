import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizCard from "../../components/QuizCard/QuizCard";

const Quiz = () => {
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const quizes = useLoaderData();
  return (
    <div>
      <div className="bg-blue-700 text-white p-4 text-lg rounded">
        <p>Right Answer: {rightCount}</p>
        <p>Wrong Answer: {wrongCount}</p>
      </div>
      {quizes.data.questions.map((quiz, index) => (
        <QuizCard
          key={quiz.id}
          info={quiz}
          index={index}
          wrongCount={wrongCount}
          setWrongCount={setWrongCount}
          rightCount={rightCount}
          setRightCount={setRightCount}
        />
      ))}
    </div>
  );
};

export default Quiz;
