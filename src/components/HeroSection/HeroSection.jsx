import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#fff] rounded-md relative">
      {/* header */}
      <header className="flex lg:flex-row flex-col items-center gap-12 lg:gap-0 justify-between px-8 mt-10">
        <div className="w-full lg:w-[45%]">
          <p>Hi there!</p>
          <h1 className="text-[40px] sm:text-[60px] font-semibold leading-[45px] sm:leading-[70px]">
            <span className="text-[#DC0155]">Luxe</span> is here to be your
            assistance
          </h1>
          <p className="mt-2 text-[1rem]">
            I am here ready to help you in making creative digital products
          </p>
        </div>

        <div className="w-full lg:w-[55%]">
          <img
            src="https://i.ibb.co/syHFhNy/image.png"
            alt="image"
            className=""
          />
        </div>
      </header>

    
      {/* right blur shadow */}
      <div className="w-[100px] h-[100px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
    </div>
  );
};

export default HeroSection;
