import React from "react";
import Marquee from "react-fast-marquee";
import { FaUser } from "react-icons/fa";
import { SiComma } from "react-icons/si";

const reviews = [
  {
    quote:
      "It's been a pleasure to work with REDX as a trustworthy stakeholder for logistic requirements. During this adventurous journey, we found them sound, professional & extremely co-operative.",
    name: "Abdullah Al Monayem",
    designation: "Earthmoving Solution Ltd.",
    category: "Enterprises",
    icon: "🗨️",
  },
  {
    quote:
      "Excellent service! The team was highly responsive and ensured smooth delivery. Would definitely recommend them for reliable logistics.",
    name: "Sarah Ahmed",
    designation: "Global Tech Solutions",
    category: "Technology",
    icon: "💬",
  },
  {
    quote:
      "We’ve partnered with REDX for years, and their efficiency has always been top-notch. A trustworthy partner in the logistics industry.",
    name: "Michael Johnson",
    designation: "MJ Trading Co.",
    category: "Retail",
    icon: "🗣️",
  },
  {
    quote:
      "The professionalism and dedication of REDX have helped streamline our supply chain. Their service is commendable.",
    name: "Ravi Kumar",
    designation: "Kumar Textiles",
    category: "Manufacturing",
    icon: "💭",
  },
  {
    quote:
      "REDX has set a high standard in logistics. Their timely service and customer-centric approach make them a preferred partner.",
    name: "Emily White",
    designation: "White & Co.",
    category: "E-commerce",
    icon: "🗨️",
  },
];

const ReviewSection = () => {
  return (
    <div className="py-8 shadow relative mx-auto max-w-[1480px] ">
      <h2 className="text-center font-bold text-2xl md:text-3xl my-4">
        Our Happy Customers
      </h2>
      {/* Left Blur Effect */}
      <div className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-white to-transparent z-10"></div>

      <Marquee pauseOnHover speed={50}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg p-5 mx-4 w-96 flex flex-col m-4"
          >
            <div className="flex">
              <SiComma />
              <SiComma />
            </div>
            <p className="text-gray-700 italic mt-2">"{review.quote}"</p>
            <div className="flex items-center mt-4 gap-2.5">
              <div className="border p-1.5 rounded-full">
                <FaUser className="text-2xl" />
              </div>
              <div>
                <div className="text-black font-semibold">{review.name}</div>
                <p className="text-gray-500 text-sm">{review.designation}</p>
              </div>
            </div>

            <span className="bg-orange-50 text-gray-700 px-2 py-1 text-xs rounded mt-2 inline-block">
              {review.category}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Right Blur Effect */}
      <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
};

export default ReviewSection;
