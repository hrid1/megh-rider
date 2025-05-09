const features = [
  {
    title: "Daily pickup, no limits",
    description:
      "Meghswar Courier gives you the opportunity of unlimited pickup.",
    icon: "📦",
  },
  {
    title: "Cash on Delivery",
    description:
      "At Meghswar Courier we will collect the cash on behalf of you.",
    icon: "💰",
  },
  {
    title: "Faster Payment Service",
    description:
      "We provide multiple payment methods such as cash, Bank or Mobile Banking.",
    icon: "⚡",
  },
  {
    title: "Online Management",
    description:
      "You can get all the information you need in your own user dashboard.",
    icon: "💻",
  },
  {
    title: "Real-Time Tracking",
    description:
      "Meghswar Courier provides a unique tracking code for your every consignment.",
    icon: "📍",
  },
  {
    title: "24/7 Customer Service",
    description:
      "Our Call Center Executives are always ready 24/7 to help you with your problems.",
    icon: "☎️",
  },
];

const FeatureSection = () => {
  return (
    <section className="my-8 md:my-12">
      <h2 className="text-center font-bold text-2xl md:text-4xl my-6">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-6 place-items-center md:w-5/6 mx-auto">
        {features.map((feature, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="bg-orange-50/60 shadow-xl rounded-xl p-6 text-center "
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
