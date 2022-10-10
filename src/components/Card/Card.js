import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ info }) => {
  return (
    <div className="bg-slate-100 drop-shadow-md p-4 rounded">
      <img src={info.logo} alt="logo" />
      <p>{info.name}</p>
      <Link to={`quiz/${info.id}`}>
        Start <FaArrowRight />
      </Link>
    </div>
  );
};

export default Card;
