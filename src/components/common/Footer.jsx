import React from "react";
import textLogo from "../../assets/textLogo2.png";
import appstore from "../../assets/store/appstore2.png";
import playstore from "../../assets/store/playstore.png";

// react icons
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-orange-50 shadow-md rounded-xl w-full p-3.5 sm:p-4 sm:pt-6">
      <div className="flex justify-between gap-[20px] flex-col sm:flex-row flex-wrap max-w-[1480px] mx-auto">
        <div className="w-full sm:w-[25%] ">
          <img src={textLogo} alt="logo" className="w-[150px] mb-[10px]" />
          <div
            className="flex flex-col gap-[10px] text-[#f1763b]
"
          >
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] cursor-pointer">
                <IoLocationOutline className="text-[2rem]" />
                {
                  "Address : HQ- 601, Road - 09, Adabor, Mohammadpur, Dhaka 1207"
                }
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineEmail className="text-[1.2rem]" />
                info@meghswarcourier.com
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer">
                <MdOutlineLocalPhone className="text-[1.2rem]" />
                +8809601010002
              </a>
            </span>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-gray-800 mb-2">
            Earn
          </h3>
          <div className="flex text-black flex-col gap-[10px] font-medium text-sm">
            <Link
              to="/register"
              className="text-[0.9rem] text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Become a Marchant
            </Link>

            <Link
              to="/contact"
              className="text-[0.9rem] text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Become Delivery Man
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[1.2rem] font-semibold text-gray-800 mb-2">
            Company
          </h3>
          <div className="flex text-black flex-col gap-[10px] font-medium text-sm">
            <Link
              to="/aboutus"
              className="text-[0.9rem] text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-[0.9rem] text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              className="text-[0.9rem] text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.2rem] font-semibold text-gray-800 mb-2">
            Our Social Media
          </h3>
          <div className="flex text-black  gap-[18px]">
            <Link
              to={"/"}
              className="text-xl text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.facebook.com/MeghSwarCourier/ "}
              className="text-xl text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              <FaFacebook />
            </Link>
            <Link
              to={"/"}
              className="text-xl text-gray-500 hover:text-[#f1763b]
 cursor-pointer transition-all duration-200"
            >
              <FaXTwitter />
            </Link>
          </div>

          {/* store icon with link */}
          <div className="flex flex-col mt-6">
            <Link to="/">
              {" "}
              <img className="w-24" src={playstore} alt="" />
            </Link>
            <Link to="/">
              {" "}
              <img className="w-24" src={appstore} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-sm w-full text-center text-gray-600">
        © {new Date().getFullYear()} Copyrights by Meghswar Courier. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
