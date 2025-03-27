import { useState } from "react";
import districtList from "../../constants/districtList";

export default function Price() {
  const [from, setFrom] = useState("Dhaka City");
  const [to, setTo] = useState("Dhaka City");
  const [category, setCategory] = useState("Regular");
  const [serviceType, setServiceType] = useState("Regular Day");
  const [weight, setWeight] = useState(0.5);
  const [price, setPrice] = useState(70);
  const [errorMessage, setErrorMessage] = useState("");

  // Determine the price category
  const getPriceCategory = (from, to) => {
    if (from === "Dhaka City" && to === "Dhaka City") return "sameCity";
    if (from === "Dhaka City" && to === "Dhaka Sub-Urban") return "subCity";
    return "othersCity";
  };

  // Price slabs per category
  const priceSlabs = {
    sameCity: 70, // Base price for Same City (Regular Day)
    subCity: 100,
    othersCity: 120,
  };

  // Function to calculate price
  const calculatePrice = () => {
    if (serviceType === "Same Day" && to !== "Dhaka City") {
      setErrorMessage("Same-day service is available only in Dhaka City!");
      setPrice(null);
      return;
    }

    setErrorMessage("");

    const category = getPriceCategory(from, to);
    let basePrice = priceSlabs[category];

    // Increase base price for Same Day in Same City
    if (serviceType === "Same Day" && category === "sameCity") {
      basePrice = 100;
    }

    const weightFactor = Math.ceil(weight / 0.5) - 1; // Each 0.5kg increases price
    const newPrice = basePrice + weightFactor * 10;

    setPrice(newPrice);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center">Price Calculator</h2>
      <p className="text-gray-500 text-center">Calculate Your Delivery Charge</p>

      {/* From Location */}
      <label className="block mt-4 text-gray-700">From</label>
      <select
        className="w-full border p-2 rounded-md"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      >
        <option value="Dhaka City">Dhaka City</option>
      </select>

      {/* Destination */}
      <label className="block mt-4 text-gray-700">Destination</label>
      <select
        className="w-full border p-2 rounded-md"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      >
        <option value="Dhaka City">Dhaka City</option>
        <option value="Dhaka Sub-Urban">Dhaka Sub-Urban</option>
        {districtList.map((city, idx) => (
          <option key={idx} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Category */}
      <label className="block mt-4 text-gray-700">Category</label>
      <select
        className="w-full border p-2 rounded-md"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Regular">Regular</option>
        <option value="Document">Document</option>
        <option value="Book">Book</option>
      </select>

      {/* Service Type */}
      <label className="block mt-4 text-gray-700">Service Type</label>
      <select
        className="w-full border p-2 rounded-md"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
      >
        <option value="Regular Day">Regular Day</option>
        <option value="Same Day">Same Day</option>
      </select>

      {/* Weight */}
      <label className="block mt-4 text-gray-700">Weight (KG)</label>
      <input
        type="number"
        step="0.1"
        className="w-full border p-2 rounded-md"
        value={weight}
        onChange={(e) => {
          const value = e.target.value;
          setWeight(value === "" ? "" : parseFloat(value));
        }}
      />

      {/* Calculate Button */}
      <button
        onClick={calculatePrice}
        className="mt-6 w-full bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 transition cursor-pointer"
      >
        Calculate Price
      </button>

      {/* Error Message */}
      {errorMessage && (
        <div className="mt-4 p-3 bg-gray-200 text-red-600 font-semibold text-center rounded-md">
          {errorMessage}
        </div>
      )}

      {/* Price Output */}
      {price !== null && (
        <div className="mt-6 p-4 bg-gray-100 text-center font-bold text-lg rounded-md">
          {price} TK
        </div>
      )}
    </div>
  );
}
