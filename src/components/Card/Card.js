import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ info }) => {
  return (
    <div className="bg-blue-100 drop-shadow-md p-4 rounded flex justify-between items-center gap-8">
      <img src={info.logo} alt="logo" className="w-1/2" />
      <div className="flex-1">
        <p className="text-blue-700 text-xl font-bold">{info.name}</p>
        <p className="text-blue-900 font-semibold">Question: {info.total}</p>
        <Link
          to={`quiz/${info.id}`}
          className="flex justify-between items-center text-white bg-blue-900 p-2 rounded self-auto mt-2"
        >
          Start <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
