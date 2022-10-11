import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="drop-shadow-md">
      <div className="container flex justify-between py-6">
        <Link to="/">
          <h1 className="text-blue-700 font-extrabold text-4xl">Shout!</h1>
        </Link>
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
