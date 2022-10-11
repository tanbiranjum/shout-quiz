import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="drop-shadow-md">
      <div className="container sm:flex sm:justify-between text-center sm:text-left py-6">
        <Link to="/">
          <h1 className="text-blue-700 font-extrabold text-4xl italic">
            Shout!
          </h1>
        </Link>
        <div className="text-xl flex gap-4 text-blue-700 font-semibold justify-center sm:justify-end">
          <NavLink to="/" className="hover:underline bg-blue-700 text-white px-4 py-2 rounded">
            Home
          </NavLink>
          <NavLink to="/stats" className="hover:underline bg-blue-700 text-white px-4 py-2 rounded">
            Stats
          </NavLink>
          <NavLink to="/blog" className="hover:underline bg-blue-700 text-white px-4 py-2 rounded">
            Blog
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Nav;
