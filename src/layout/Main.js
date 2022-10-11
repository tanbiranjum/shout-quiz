import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";

const Main = () => {
  return (
    <div className="px-8 md:px-12 xl:px-24 min-h-screen bg-cyan-50">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
