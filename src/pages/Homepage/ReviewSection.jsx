import React from "react";
import Marquee from "react-fast-marquee";
import { FaUser } from "react-icons/fa";
import { SiComma } from "react-icons/si";
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

const reviews = [
  {
    quote:
      "Excellent and fast delivery service! We highly recommend them! We have been working with them for 10 plus years. A trusted and reliable courier service agency.",
    name: "Lora Khan",
    designation: "6 YARDS STORY",
    category: "Jewelleries",
    icon: logo1,
  },
  {
    quote:
      "We've been partnering with MeghSwar Courier company since 2020, and their honesty and sincerity have been truly commendable. Their timely payments and exceptional client service have helped us overcome the biggest challenges in our online business—ensuring prompt delivery to our customers and receiving payments on time. Highly recommended for any business seeking reliable courier solutions.",
    name: "Fatema Tuz Zahera",
    designation: "Wardrobe",
    category: "Clothing",
    icon: logo2,
  },
  {
    quote:
      "Thank You so much to Meghswar courier for your kind and very prompt service!! I am really happy and satisfied with your service. Each and every parcel already reached the customer safely. Keep up your good work. Thank you so much!!!",
    name: "Nusrat Jahan Ima",
    designation: "বিবির সিন্দুক - BiBir Shinduk",
    category: "Clothing",
    icon: logo3,
  },
  {
    quote:
      "I must appreciate their service and am highly satisfied with their service and behavior. They are trustworthy and very sincere with their work ☺ Keep it up!",
    name: "Rifat Kabir",
    designation: "Game of Nature",
    category: "Health/beauty",
    icon: logo4,
  },
  {
    quote:
      "Everything on time! I'm happy that I found them. Best ever courier company to work with!",
    name: "Lopa Haque Azam",
    designation: "Lopa Jewelleries",
    category: "Jewellery/watches",
    icon: logo10,
  },
  {
    quote:
      "I have been associated with Meghswar Courier since I started my business. I deliver parcels in Dhaka through them. Except for 2/1 isolated incidents, there has been no significant damage so far. Their delivery is very fast and swift. The delivery men are very sincere. And they clear the transaction on time.",
    name: "Suraiya Sumi",
    designation: "Shampurna- সম্পূর্ণা",
    category: "Clothing",
    icon: logo7,
  },
  {
    quote:
      "I have been using MeghSwar Courier services for the past nine years. Till date, I have not faced any problem except for a few isolated incidents. After working, it is very easy to deliver the goods to the doorstep of the customer. Thank you very much for making the journey hassle-free.",
    name: "Shanaz Shultana",
    designation: "Rongdhonu Creation : রংধনু ক্রিয়েশন",
    category: "Clothing",
    icon: "🗨️",
  },
  {
    quote:
      "I have been using Meghswar's services since 2021. They have never given us less service just because we are a small enterprise. I am grateful for that. The courier persons also try hard to help us and the customers. Best wishes for Meghswar.",
    name: "Antara Jahan",
    designation: "Gothiya গথিয়া",
    category: "Boutique",
    icon: logo9,
  },
  {
    quote:
      "I have been using MeghSwar Courier for the past six years, and their service has been invaluable in growing my business. They have handled my jewelry deliveries with exceptional care, ensuring that every package reaches its customer safely and gets checked by the customer on the spot. They have always managed customer payments responsibly and have consistently transferred the collected funds to me two or three times a week without any issues.",
    name: "Saraban Tahura Nipa",
    designation: "Kitty’s Collection",
    category: "Jewellery/watches",
    icon: logo5,
  },

  {
    quote:
      "For the last 7 years, we (Smartynerdy) have been using Meghswar Courier to deliver products all over Dhaka city. The reason why we prefer Meghswar over other courier services is that its process is easy, payment is regular, and most importantly, we can get an immediate solution in any emergency situation by directly contacting the rider or back office, which is difficult to get so sincerely from any other courier.",
    name: "Istiaque Al Mahmud",
    designation: "Smartynerdy",
    category: "Baby goods",
    icon: logo6,
  },
  {
    quote:
      "Their return management is the best in Dhaka. While many couriers simply return products after a few calls to customers, MeghSwar takes the extra step of keeping the package with them and maintaining communication until delivery is successfully completed. Overall, MeghSwar Courier provides a highly personalized and reliable service, making them my top recommendation for any business looking for a dependable delivery partner.",
    name: "Saraban Tahura Nipa",
    designation: "Kitty’s Collection",
    category: "Jewellery/watches",
    icon: logo5,
  },
  {
    quote:
      "Outstanding prompt service ever. Keep it up 👍 Highly satisfied till now.",
    name: "Nicoshia Chakma",
    designation: "SAFE HAVEN by Nicoshia",
    category: "Clothing",
    icon: logo8,
  },
  {
    quote:
      "We have been using MeghSwar Courier for the last 10 years. It is not a flashy corporate service provider, but I have received 100% service. There are very few complaints from clients, whatever has come has been resolved. Money transactions are very to the point. So if anyone is looking for a service provider or wants to change - you can try them.",
    name: "Moury Najnin",
    designation: "Eeha",
    category: "Clothing",
    icon: "🗨️",
  },
  {
    quote:
      "I met MeghSwar Courier in 2016. I am still with them. The Faiz brother of this company is very good. He is so good that he benefits others more by harming himself. I can say from almost 9 years of experience that he has not cheated anyone even 1 taka till date. And their service is very good. The parcel is not damaged. It is delivered on time + the money is deposited in the bank on time.",
    name: "Sumaya Bristi Samad",
    designation: "AZM Dream House",
    category: "Retail",
    icon: "🗨️",
  },
];

const ReviewSection = () => {
  return (
    <div className="relative mx-auto max-w-[1680px] py-12 px-6 bg-gray-50 rounded-xl shadow-md my-12">
      <h2 className="text-center font-bold text-3xl md:text-4xl text-gray-800 mb-8">
        Our Happy Customers
      </h2>

      {/* Left Blur Effect */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

      <Marquee speed={50} pauseOnHover>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-4 mx-6 w-[350px] flex flex-col  hover:shadow-2xl border border-gray-100"
          >
            <div className="flex text-gray-400 text-2xl">
              <SiComma />
              <SiComma className="-ml-2" />
            </div>
            <p className="text-gray-700 italic mt-3 ">"{review.quote}"</p>
            <div className="flex items-center mt-5 gap-3">
              <div className="border border-gray-300 p-2 w-12 h-12 overflow-hidden rounded-full bg-gray-100">
                {/* <FaUser className="text-2xl text-gray-600" />
                 */}
                <img className="w-full h-full object-cover" src={review.icon} alt="" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-lg">
                  {review.name}
                </div>
                <p className="text-gray-500 text-sm">{review.designation}</p>
              </div>
            </div>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 text-xs rounded-full mt-3 inline-block font-medium">
              {review.category}
            </span>
          </div>
        ))}
      </Marquee>

      {/* Right Blur Effect */}
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default ReviewSection;
