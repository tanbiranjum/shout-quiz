import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="drop-shadow-md">
      <div className="container flex justify-between py-6">
        <h1 className="text-blue-700 font-extrabold text-4xl">Shout!</h1>
        <div className="text-xl flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stats">Stats</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
