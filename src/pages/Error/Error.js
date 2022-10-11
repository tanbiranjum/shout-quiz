import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col pt-10">
      <h1 className="text-8xl font-extrabold text-blue-700">Oops!</h1>
      <p className="text-4xl font-bold mt-6 text-blue-900">404 - Page not found</p>
      <Link to="/" className="px-6 py-3 text-white bg-blue-700 rounded-2xl mt-5">
        Return To Home
      </Link>
    </div>
  );
};

export default Error;
