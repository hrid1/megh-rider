import React from "react";

const PriceCard = ({ item }) => {
  const {
    name,
    image,
    delivery_timeline,
    base_price,
    base_weight,
    additional_price_per_half_kg,
    cod_charge,
  } = item || {};

  console.log(item);
  return (
    <div className="w-full md:w-[95%] relative rounded-xl overflow-hidden bg-white shadow-2xl p-4 hover:scale-105 transition duration-300">
      <span className="bg-red-500 rounded-sm px-3 py-1.5 text-[0.9rem] text-white absolute top-3 left-3 font-bold">
        {base_price} TK
      </span>
      {/* Product Image */}
      {image && (
        <img alt="product/image" src={image} className="w-full h-64 rounded" />
      )}

      {/* Product Details */}
      <div className="mt-4 p-4">
        <h3 className="text-[1.2rem] font-medium text-orange-600 flex gap-2 capitalize ">
          {name}
        </h3>
      
        <h3 className="text-[1.2rem] font-medium text-gray-800 flex gap-2">
          Delivery Timeline:<p className="text-[1rem] text-gray-600 mt-1">{delivery_timeline}</p>
        </h3>
        

        <h3 className="text-[1rem] font-medium text-gray-800 mt-4">
          Delivery Charge
        </h3>
        <p className="text-[1rem] text-gray-600 mt-1">
          {base_price} Taka up to {base_weight}
        </p>
        <p className="text-[1rem] text-gray-600 mt-1">
          After {base_weight}, {additional_price_per_half_kg} Taka will be added
          per 1 KG
        </p>

        <h3 className="text-[1.2rem] font-medium text-gray-800 mt-4">
          COD Charge
        </h3>
        <p className="text-[1rem] text-gray-600 mt-1">{cod_charge}</p>
      </div>
    </div>
  );
};

export default PriceCard;
