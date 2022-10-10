import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Main = () => {
  return (
    <div className="px-24">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
