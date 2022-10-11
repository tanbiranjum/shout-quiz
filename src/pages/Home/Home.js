import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const Home = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-4 gap-6">
        {quizes.data.map((quiz) => (
          <Card key={quiz.id} info={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
