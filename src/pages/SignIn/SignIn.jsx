import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import textLogo from "../../assets/IconLogo.svg";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-[300px]  sm:max-w-xl mx-auto bg-gray-50 shadow-2xl border border-gray-200 rounded p-4 flex flex-col items-center justify-center gap-4 my-6 sm:my-12 "
      >
        {/* logo part */}
        <div className="flex flex-col items-center justify-center ">
          <img src={textLogo} alt="" className="w-24 h-20" />
          <p className="font-bold text-2xl">Merchant Login</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full ">
          {/* email input with icon */}
          <div className="w-full md:w-[80%] relative">
            <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>
          {/* password input with icon */}
          <div className="w-full md:w-[80%] relative">
            <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>
        </div>
        <div className="w-full md:w-[80%]">
          <Link className="text-right text-gray-600 block">
            Forgot Password ?
          </Link>
        </div>
        {/* bottom animation */}
        <button
          
          className="bg-orange-400 text-white px-4 py-2 rounded text-font-semibold hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:scale-105 transition duration-300 w-full md:w-[80%]"
        >
          Login
        </button>

        <p>
          Don't have an account{" "}
          <Link className="text-orange-600 font-medium" to="/sign-up">
            Register
          </Link>{" "}
          Here
        </p>
      </form>
    </div>
  );
};

export default SignIn;
