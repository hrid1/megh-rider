import React from "react";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import dak from "../../assets/dak_v.png";
import team from "../../assets/team.jpg"
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

      <section className="flex flex-col md:flex-row items-center justify-around gap-6 my-6 bg-amber-50 py-10">
        {/* right */}
      <div>
      <div className="flex items-center gap-3 mb-4">
          <PiSealCheckFill className="text-3xl" />

          <div>
            <h4 className="font-semibold text-orange-400">Licensed</h4>
            <p>A licensed courier services of GPO</p>
          </div>
        </div>
        <img className="w-20" src={dak} alt="" />
      </div>

        {/* left */}

        <div>
            <h3>Our Partner</h3>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
