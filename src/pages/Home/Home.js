import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

const Home = () => {
  const quizes = useLoaderData();
  return (
    <div>
      Home {quizes.length}
      {quizes.data.map((quiz) => (
        <Card key={quiz.id} info={quiz} />
      ))}
    </div>
  );
};

export default Home;
