import React from "react";
import Lottie from "lottie-react";
import rider from "../../assets/lottie/rider.json";
import { FaHome, FaUserTie } from "react-icons/fa";
import { IoBicycleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section class="min-h-[460px] flex items-center justify-center bg-orange-50 py-6 md:px-12 px-2">
      <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div class="md:w-1/3 text-center md:text-left space-y-5">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            We <span class="text-orange-400 underline">Guarantee</span>
            <br /> Fast and Secure Parcel Delivery
          </h1>
          <p class="text-gray-600 text-lg">
            Simple Tracking, Quick Payments, and No Hassles.
          </p>

          <Link to="/register">
            <button class="bg-orange-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-500 transition font-semibold">
              Become a Merchant
            </button>
          </Link>
        </div>

        <div class="md:w-2/3 mt-10 md:mt-0 flex flex-col md:flex-row items-center justify-around">
          <div className="w-1/2">
            <Lottie className="" animationData={rider}></Lottie>
          </div>

          {/* <!-- Stats Section --> */}
          <div class="mt-6 space-y-4 flex flex-col justify-center items-start">
            <div class="flex justify-center items-center gap-3.5">
              <div className="p-1 border border-gray-300 bg-white rounded">
                <FaUserTie className="text-3xl text-orange-500" />
              </div>
              <div className="">
                <h2 className="text-2xl md:text-3xl font-bold text-left">
                  <CountUp start={1} end={100} />+
                </h2>
                <p className="text-gray-600 font-semibold">
                  Registered Merchant
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center gap-3.5">
              <div className="p-1 border border-gray-300 bg-white rounded">
                <IoBicycleSharp className="text-3xl text-orange-500" />
              </div>
              <div className="">
                <h2 className="text-2xl md:text-3xl font-bold text-left">
                <CountUp start={1} end={65} />+
                </h2>
                <p className="text-gray-600 font-semibold">Delivery Man</p>
              </div>
            </div>
            <div class="flex justify-center items-center gap-3.5">
              <div className="p-1 border border-gray-300 bg-white rounded">
                <FaHome className="text-3xl text-orange-500" />
              </div>
              <div className="">
                <h2 className="text-2xl md:text-3xl font-bold text-left">
                <CountUp start={1} end={47} />+
                </h2>
                <p className="text-gray-600 font-semibold">Delivery Point</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
