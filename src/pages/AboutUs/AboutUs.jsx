import React from "react";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import dak from "../../assets/dak_v.png";
import { FaBullseye, FaGlobe } from "react-icons/fa";

import team from "../../assets/team.jpg";
const AboutUs = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          <p className="text-gray-600 mt-2">
            We provide fast, safe, and reliable courier services, offering
            tailored solutions for businesses and individuals.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <img
              src={team}
              alt="About Us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right - Text Content */}
          <div className="md:w-1/2 space-y-4 text-gray-700">
            <p>
              Welcome to Meghswar Courier, where we have built a strong
              reputation for delivering reliable courier services to online
              traders in Dhaka city since 2015. As a government-registered
              service business in Bangladesh, we pride ourselves on ensuring
              that each parcel reaches its destination on time, every time.
            </p>
            <p>
              Our mission is simple: to provide fast, reliable, and safe
              delivery services that meet the unique needs of our clients. With
              our custom-built online platform, we offer complete transparency,
              allowing you to track your parcel from drop-off to cash
              collection, ensuring a seamless experience for both you and your
              customers.
            </p>

            {/* Button */}
            <Link to="/">
              <button className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* section */}

      <div className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto bg-amber-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold">Our Mission & Vision</h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-start mt-6">
            {/* Mission Section */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3">
                <FaBullseye className="text-orange-400 text-3xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>

              <p className="text-gray-600 mt-2">
                Our mission is to deliver fast, dependable, and secure courier
                services that seamlessly connect businesses and individuals. We
                are committed to ensuring on-time deliveries, providing
                outstanding customer support, and implementing innovative
                solutions to simplify logistics.
              </p>
            </div>

            {/* Vision Section */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3">
                <FaGlobe className="text-orange-400 text-3xl" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600 mt-2">
                Our vision is to establish ourselves as the most reliable and
                forward-thinking courier service, expanding our reach globally
                without compromising on efficiency. We are dedicated to
                transforming the logistics industry through advanced technology
                and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
