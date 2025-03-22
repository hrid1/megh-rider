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
            As a Web Development Services, We are Committed to Building Custom
            Web Solutions that Drive Business Success.
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
              At our web development agency, we specialize in crafting bespoke
              online solutions tailored to elevate businesses toward their
              digital objectives. Committed to continuous evolution, we remain
              abreast of cutting-edge web technologies and trends, ensuring a
              constant delivery of unparalleled excellence.
            </p>
            <p>
              Our ethos is rooted in equipping clients with the essential tools
              for triumph in the digital realm. We firmly believe in furnishing
              every business with a digital presence that authentically embodies
              their brand essence and effectively resonates with their target
              demographic.
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
              <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Our mission is to provide fast, reliable, and secure courier
              services that connect people and businesses seamlessly. We are
              committed to ensuring timely deliveries, exceptional customer
              support, and innovative solutions to make logistics hassle-free.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3">
              <FaGlobe className="text-orange-400 text-3xl" />
              <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 mt-2">
              Our vision is to become the most trusted and innovative courier
              service, expanding our network globally while maintaining
              efficiency and affordability. We strive to revolutionize
              logistics with cutting-edge technology and eco-friendly solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
