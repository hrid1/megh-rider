import React, { useState } from "react";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import textLogo from "../../assets/IconLogo.svg";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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
    console.log("Form Data Submitted:", formData, rememberMe);
  };

  // handle show password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // console.log(showPassword);
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
              placeholder="Email address / Username"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />
          </div>
          {/* password input with icon */}
          <div className="w-full md:w-[80%] relative">
            <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
            <input
              type={showPassword ? `text` : `password`}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
            />

            <p
              onClick={handleShowPassword}
              className=" absolute top-4 right-1.5 text-xl cursor-pointer"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[80%] flex items-center justify-between">
          <label className="flex gap-2">
            <input
              className="w-4"
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <Link className="text-right text-gray-600 block">
            Forgot Password ?
          </Link>
        </div>
        {/* bottom animation */}
        <button className="bg-orange-400 text-white px-4 py-2 rounded text-font-semibold hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:scale-105 transition duration-300 w-full md:w-[80%]">
          Login
        </button>

        <p>
          Don't have an account{" "}
          <Link className="text-orange-600 font-medium" to="/register">
            Register
          </Link>{" "}
          Here
        </p>
      </form>
    </div>
  );
};

export default SignIn;
