import React from "react";
import logo1 from "../../assets/company/6_YARDS_STORY-removebg-preview.png";
import logo2 from "../../assets/company/Ceremonial_Attire-removebg-preview.png";
import logo3 from "../../assets/company/SAFE_HAVEN_by_Nicoshia_SHBN-removebg-preview.png";
import logo4 from "../../assets/company/Smartynerdy-removebg-preview.png";
import logo5 from "../../assets/company/Kitty_s_Collection-removebg-preview.png";
import logo6 from "../../assets/company/Eeha-removebg-preview.png";
import logo7 from "../../assets/company/Wardrobe-removebg-preview-removebg-preview.png";
import logo8 from "../../assets/company/Shampurna-_সম্পূর্ণা_-removebg-preview.png";
import logo9 from "../../assets/company/Gothiya-removebg-preview.png";
import logo10 from "../../assets/company/Lopa_Jewelleries-removebg-preview.png";
const CompanySection = () => {
  return (
    <div>
      <section className="p-6 dark:bg-white dark:text-gray-800">
        <div className="container p-4 mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Trusted by </h2>
        </div>
        <div className="container grid grid-cols-5 justify-center mx-auto dark:text-gray-600">
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo1} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo2} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo3} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo4} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo5} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo6} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo7} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo8} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 18" src={logo9} alt="" />
          </div>
          <div className="flex justify-center  p-4 align-middle ">
            <img className="w-32 h- 20" src={logo10} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanySection;
