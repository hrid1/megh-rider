import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles

const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="font-poppins">
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
