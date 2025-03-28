import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <div className=" mx-auto min-h-[calc(100vh-344px)]">
        <Outlet></Outlet>
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
