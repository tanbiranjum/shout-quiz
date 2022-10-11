import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Bg from "../../assets/bg.jpg";

const Home = () => {
  const quizes = useLoaderData();
  return (
    <div>
      <div className="bg-no-repeat bg-cover mt-4" style={{ backgroundImage: `url(${Bg})` }}>
        <h3 className="text-7xl text-white font-extrabold p-20 leading-snug">
          Improve Your <br />
          Soft Skill
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8">
        {quizes.data.map((quiz) => (
          <Card key={quiz.id} info={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
