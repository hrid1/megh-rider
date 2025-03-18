import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <h2 className="text">Footer</h2>
    </div>
  );
};

export default MainLayout;
