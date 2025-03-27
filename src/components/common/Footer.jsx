import React from "react";
import textLogo from "../../assets/textLogo2.png";

// react icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-50 shadow-md rounded-xl w-full p-6 sm:p-9">
      <div className="flex justify-between gap-[30px] flex-col sm:flex-row flex-wrap max-w-[1480px] mx-auto">
        <div className="w-full sm:w-[25%] ">
          <img src={textLogo} alt="logo" className="w-[150px] mb-[20px]" />
          <div
            className="flex flex-col gap-[20px] text-[#f1763b]
"
          >
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                <IoLocationOutline className="text-[1.2rem]" />
                Kulaura, Moulvibazar, Sylhet
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineEmail className="text-[1.1rem]" />
                zenuilibrary@gmail.com
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineLocalPhone className="text-[1.1rem]" />
                +8801305282768
              </a>
            </span>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Services
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <Link
              to="/map"
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Map
            </Link>
            <Link
              to="/contact"
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Contact
            </Link>
            <Link
              to="/aboutus"
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/price"
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Pricing
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Company
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Service
            </p>
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Features
            </p>

            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Blog
            </p>
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Contact Us
            </p>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-[#424242] mb-2">
            Our Social Media
          </h3>
          <div className="flex text-black flex-col gap-[10px]">
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Instagram
            </p>
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Facebook
            </p>
            <p
              className="text-[0.9rem] text-[#424242] hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Twitter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
