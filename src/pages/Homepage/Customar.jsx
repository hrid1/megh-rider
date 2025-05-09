import React from "react";
import customar from "../../assets/customar.jpg";
import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const Customar = () => {
  return (
    <div>
      <section class="bg-gray-100 ">
        <div class="container mx-auto py-20 px-4 my-6 md:my-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right" class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight capitalize">
                Customer satisfaction is our top priority.
              </h2>
              <p class="mt-4 text-gray-600 text-lg">
                Our courier app offers real-time shipment tracking, efficient
                route optimization, and an easy-to-use interface for scheduling
                and managing deliveries. With reliable support, we ensure a
                smooth and cost-effective shipping experience.
              </p>
              <div class="mt-8">
                <Link
                  to="/register"
                  class="text-orange-500  hover:text-orange-600 font-medium"
                >
                  {/* <button className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                    Become a Merchant
                  </button> */}
                </Link>

                <Link to="/register">
                  <button
                    class="bg-orange-400 text-white px-6 py-3 rounded-lg shadow-lg 
                   hover:bg-orange-50 hover:text-orange-500 transition font-semibold flex justify-center items-center gap-2.5"
                  >
                    Register Now <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" class="mt-12 md:mt-0">
              <img
                src={customar}
                alt="About Us Image"
                class="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customar;
