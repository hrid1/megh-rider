import React from "react";
import { IoSearch } from "react-icons/io5";

const Map = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto p-4 space-y-6">
      {/* Search Input */}
      <div className="w-full md:w-96 mx-auto relative">
        <input
          type="text"
          placeholder="Search location..."
          className="border border-gray-300 py-3 pl-4 pr-16 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
        />
        <span className="bg-orange-500 text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-orange-600 transition duration-200">
          <IoSearch className="text-[1.3rem]" />
        </span>
      </div>

      {/* Google Map Embed */}
      <div className="rounded-2xl shadow-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3109069888537!2d90.35259757511582!3d23.771940578655727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c138df2574c5%3A0x61f6f40776308a7e!2sMeghswar%20courier!5e0!3m2!1sen!2sbd!4v1746796517377!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
