import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Bg from "../../assets/bg.jpg";

const Home = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover mt-4"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-white font-extrabold p-10 md:p-20 md:leading-normal xl:leading-snug">
          Improve Your <br />
          Code Skill
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 pb-8">
        {quizes.data.map((quiz) => (
          <Card key={quiz.id} info={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
