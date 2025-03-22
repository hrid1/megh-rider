import { useState } from "react";

export default function Price() {
  const [from, setFrom] = useState("Dhaka City");
  const [to, setTo] = useState("Dhaka City");
  const [category, setCategory] = useState("Regular");
  const [serviceType, setServiceType] = useState("Regular");
  const [weight, setWeight] = useState(0.15);
  const [price, setPrice] = useState(50); // Default price

  // Dummy price list (From -> To -> Price)
  const priceList = {
    "Dhaka City": { "Dhaka City": 50, Chattogram: 100, Khulna: 120 },
    Chattogram: { "Dhaka City": 100, Chattogram: 60, Khulna: 140 },
    Khulna: { "Dhaka City": 120, Chattogram: 140, Khulna: 70 },
  };

  // Update price when selection changes
  const updatePrice = () => {
    const newPrice = priceList[from]?.[to] || 50; // Default to 50 if not found
    setPrice(newPrice);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Price Calculator</h2>
      <p className="text-gray-500 text-center">
        Calculate Your Delivery Charge
      </p>

      {/* From Location */}
      <label className="block mt-4 text-gray-700">From</label>
      <select
        className="w-full border p-2 rounded-md"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
          updatePrice();
        }}
      >
        <option>Dhaka City</option>
        <option>Chattogram</option>
        <option>Khulna</option>
      </select>

      {/* Destination */}
      <label className="block mt-4 text-gray-700">Destination</label>
      <select
        className="w-full border p-2 rounded-md"
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
          updatePrice();
        }}
      >
        <option>Dhaka City</option>
        <option>Chattogram</option>
        <option>Khulna</option>
      </select>

      {/* Category */}
      <label className="block mt-4 text-gray-700">Category</label>
      <input
        className="w-full border p-2 rounded-md"
        value={category}
        readOnly
      />

      {/* Service Type */}
      <label className="block mt-4 text-gray-700">Service Type</label>
      <input
        className="w-full border p-2 rounded-md"
        value={serviceType}
        readOnly
      />

      {/* Weight */}
      <label className="block mt-4 text-gray-700">Weight (KG)</label>
      <input className="w-full border p-2 rounded-md" value={weight} readOnly />

      {/* Price Output */}
      <div className="mt-6 p-4 bg-gray-100 text-center font-bold text-lg rounded-md">
        {price} TK
      </div>
    </div>
  );
}
