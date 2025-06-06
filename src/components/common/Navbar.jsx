import React, { useState, useEffect } from "react";
import textLogo from "../../assets/logo/meghswar-logo.svg";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white opacity-95 shadow-xl top-0 sticky"
          : "bg-amber-50"
      }`}
    >
      <nav className="flex items-center justify-between w-full relative container px-6 py-4 mx-auto">
        {/* Logo */}
        <Link to="/">
          <img src={textLogo} alt="logo" className="md:w-68 w-40" />
        </Link>

        {/* Nav Links */}
        <ul className="items-center gap-5 text-base text-gray-700 md:flex hidden">
          {["home", "map", "about us", "contact", "price"].map(
            (item, index) => (
              <NavLink
                key={index}
                to={item === "home" ? "/" : `/${item.replace(" ", "")}`}
                className={({ isActive }) =>
                  `relative capitalize font-medium transition-all duration-300 ${
                    isActive
                      ? "text-orange-500 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:bottom-[-2px] after:left-0"
                      : "hover:text-orange-500 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-orange-500 after:bottom-[-2px] after:left-0 hover:after:w-full after:transition-all after:duration-300"
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </ul>

        {/* Action Buttons */}
        <div className="items-center gap-3 flex">
          <Link to="/login">
            <button className="py-2 px-4 rounded-full capitalize hover:text-orange-500 transition-all duration-300 flex font-medium cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="py-2 px-4 rounded-lg capitalize bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 flex font-medium cursor-pointer">
              Sign up
            </button>
          </Link>

          <CiMenuFries
            className="text-2xl text-gray-700 cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div>

        {/* Mobile Sidebar & Backdrop */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        <aside
          className={`fixed top-0 left-0 h-screen w-full bg-amber-50 p-5 text-center shadow-lg z-20
          transition-transform duration-300 ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-700 text-2xl"
            onClick={() => setMobileSidebarOpen(false)}
          >
            ✕
          </button>

          <div className="relative mt-6">
            <input
              className="py-2 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-orange-500"
              placeholder="Search..."
              aria-label="Search"
            />
            <IoIosSearch className="absolute top-[10px] left-3 text-gray-500 text-lg" />
          </div>

          <ul className="flex flex-col gap-4 text-base text-gray-600 mt-6">
            {["home", "map", "about us", "contact", "price"].map(
              (item, index) => (
                <NavLink
                  key={index}
                  to={item === "home" ? "/" : `/${item.replace(" ", "")}`}
                  className={({ isActive }) =>
                    `capitalize font-medium transition-all duration-300 ${
                      isActive
                        ? "text-orange-500 underline underline-offset-4"
                        : "hover:text-orange-500"
                    }`
                  }
                  onClick={() => setMobileSidebarOpen(false)}
                >
                  {item}
                </NavLink>
              )
            )}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;