import React, { useState } from "react";
import contactUs from "../../assets/contact_us2.jpg";
import { FaHouse, FaPhone } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can add form submission logic here (API call, etc.)
  };
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 py-4 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800">
            Fast Support for Fast Deliveries
          </h2>
          <p className="text-gray-600 mt-4">
            Reach out, and we’ll get back to you in no time!
          </p>
        </div>
      </div>
      <section className="py-2 dark:bg-gray-800-100 dark:text-gray-900 mt-4">
        <div className="flex flex-col items-center justify-center py-6 bg-white">
          <h2 className="text-orange-500 text-3xl font-semibold mb-6">
            Contact Us
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full max-w-6xl">
            {/* Left Side Illustration and Info */}
            <div className="flex flex-col items-center text-gray-600 space-y-4 w-full lg:w-1/2 text-sm md:text-lg  p-4">
              <img
                src={contactUs}
                alt="Illustration"
                className="w-full max-w-md"
              />
              <div className="">
                <p className="flex md:items-center gap-2">
                  <FaHouse />
                  <span>
                    HQ- 601, Road - 09, Adabor, Mohammadpur, Dhaka 1207
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FaMailBulk /> <span>info@meghswarcourier.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone /> <span>+8809601010002</span>
                </p>
              </div>
            </div>

            {/* Right Side Contact Form */}
            <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Send Us A Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-orange-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-orange-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-orange-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full border border-orange-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
