import React from "react";
import { Link } from "react-router-dom";

const Card = ({ info }) => {
  return (
    <div>
      <p>{info.name}</p>
      <img src={info.logo} alt="logo" />
      <Link>Start</Link>
    </div>
  );
};

export default Card;
