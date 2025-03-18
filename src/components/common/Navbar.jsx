import React, { useState } from "react";
import textLogo from "../../assets/textLogo2.png";

// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full relative bg-orange-50  px-[10px] py-[6px] max-w-[1580px] mx-auto">
      {/* logo */}
      <img src={textLogo} alt="logo" className="md:w-36 w-24 " />

      {/* nav links */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <NavLink
          to="/"
          className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize "
        >
          home
        </NavLink>

        <NavLink
          to="/coverage"
          className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
        >
          Coverage
        </NavLink>

        <NavLink
          to="/about"
          className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
        >
          contact
        </NavLink>
      </ul>

      {/* action buttons */}
      <div className="items-center gap-[10px] flex">
        <Link to="/sign-in">
          <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#f1763b] transition-all duration-300 sm:flex hidden">
            Sign in
          </button>
        </Link>
        <Link to="/sign-up">
          <button className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#f1763b] text-white hover:bg-orange-600 transition-all duration-300 sm:flex hidden">
            Sign up
          </button>
        </Link>

        <CiMenuFries
          className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* mobile sidebar */}
      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white p-4 text-center absolute top-[65px] right-0 w-full sm:w-[50%] rounded-md transition-all duration-300`}
      >
        <div className="relative mb-5">
          <input
            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#f1763b]
"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
        </div>
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li
            className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            home
          </li>

          <li
            className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            features
          </li>

          <li
            className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            blogs
          </li>

          <li
            className="before:w-0 hover:before:w-full before:bg-[#f1763b]
 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#f1763b]
 transition-all duration-300 before:left-0 cursor-pointer capitalize"
          >
            shop
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
