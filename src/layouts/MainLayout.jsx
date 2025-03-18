import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto min-h-[calc(100vh-344px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
