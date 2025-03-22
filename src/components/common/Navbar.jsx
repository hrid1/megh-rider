import React, { useState } from "react";
import textLogo from "../../assets/textLogo2.png";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="inset-x-0 top-0 sticky z-50 backdrop-blur-3xl bg-amber-50">
      <nav className="flex items-center justify-between w-full relative container px-4 py-3 mx-auto ">
        {/* logo */}
        <img src={textLogo} alt="logo" className="md:w-36 w-24" />

        {/* nav links */}
        <ul className="items-center gap-5 text-base text-gray-700 md:flex hidden">
          {["home", "map", "about us", "contact", "price"].map((item, index) => (
            <NavLink
              key={index}
              to={item === "home" ? "/" : `/${item.replace(" ", "")}`}
              className="relative before:w-0 hover:before:w-full before:bg-orange-500
              before:h-[2px] before:transition-all before:duration-300 before:absolute before:rounded-full 
              before:bottom-[-2px] hover:text-orange-500 transition-all duration-300 before:left-0 capitalize font-medium"
            >
              {item}
            </NavLink>
          ))}
        </ul>

        {/* action buttons */}
        <div className="items-center gap-3 flex">
          <Link to="/sign-in">
            <button className="py-2 px-4 rounded-full capitalize hover:text-orange-500 transition-all duration-300 flex">
              Sign in
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="py-2 px-4 rounded-lg capitalize bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 flex">
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
          className={`fixed top-0 left-0 h-screen w-full  bg-amber-50  p-5 text-center shadow-lg z-20
          transition-transform duration-300 ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
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

          <ul className="flex flex-col gap-4 text-base text-gray-600">
            {["home", "map", "about us", "contact", "price"].map((item, index) => (
              <NavLink
                key={index}
                to={item === "home" ? "/" : `/${item.replace(" ", "")}`}
                className={({ isActive }) =>
                  `capitalize transition-all duration-300 ${
                    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500"
                  }`
                }
                onClick={() => setMobileSidebarOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </ul>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
