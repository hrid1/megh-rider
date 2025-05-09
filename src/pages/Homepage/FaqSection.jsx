import React, { useState } from "react";

// react icons
import { FaPlus } from "react-icons/fa6";

const FaqSection = () => {
  const accordionData = [
    {
      title: "What is Meghswar Courier?",
      description:
        "Meghswar Courier is the leading e-courier service in Bangladesh. You will get your delivery within 24 hours in Dhaka city and 72 hours across Bangladesh. Our strong team ensures fast deliveries at the most affordable rates.",
    },
    {
      title: "How do I contact you?",
      description:
        "You can call us at +8809601010002 or email us at info@MeghswarCourier.com. You can also connect with us on Facebook.",
    },
    {
      title: "How can a merchant track their parcel delivery?",
      description:
        "Merchants can track their parcel ID and view status updates on our website or through the merchant panel’s parcel activity logs.",
    },
    {
      title: "Want to know about your delivery charges?",
      description:
        "Discover our delivery charges, which are determined by the weight of a 0.5 kg parcel:\n\nInside Dhaka: 70\n\nDhaka Suburban: 100\n\nOutside Dhaka: 120",
    },
    {
      title: "What Is Our Story?",
      description:
        "Welcome to our world. Meghswar Courier has built a strong reputation as a courier service for online traders in Dhaka since 2015. We are a registered ‘Service Business’ organization under the Government of the People's Republic of Bangladesh. Our goal is to deliver products on time and efficiently. Our custom-built online software allows you to monitor every stage, from parcel handover to cash collection, ensuring a seamless experience.",
    },
  ];

  const [isPlusAccording, setIsPlusAccording] = useState(null);

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col max-w-4xl mx-auto my-4 md:my-32 px-2">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-4">FAQ</h2>
      {accordionData?.map((according, index) => (
        <article key={index} className="border border-[#e5eaf2] rounded p-3">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            data-aos="fade-up"
            data-aos-dalay="1500"
            data-aos-duration="1200"
            onClick={() => handleBorderClick(index)}
          >
            <h2 className="text-gray-900 font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaPlus
                className={`text-[1.3rem] text-text transition-all duration-300 ${
                  isPlusAccording === index && "rotate-[45deg] !text-orange-500"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isPlusAccording === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FaqSection;
