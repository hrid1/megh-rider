import React from "react";
import PriceCard from "../../components/common/Card";

const ChargeSection = () => {
  const data = [
    {
      name: "inside dhaka",
      image: "https://i.ibb.co.com/YB2wcZpZ/inside-Dhaka.jpg",
      delivery_timeline: "24 Hours",
      base_price: 70,
      base_weight: "0.5 KG",
      additional_price_per_half_kg: 10,
      cod_charge: "NO",
    },
    {
      name: "dhaka sub area",
      image: "https://i.ibb.co.com/wNZfgdYM/sub-area.jpg",
      delivery_timeline: "48 Hours",
      base_price: 100,
      base_weight: "0.5 KG",
      additional_price_per_half_kg: 10,
      cod_charge: "1%",
    },
    {
      name: "outside dhaka",
      image: "https://i.ibb.co.com/rGXGsBRD/e670mvaljinc1.webp",
      delivery_timeline: "3 to 5 Days",
      base_price: 120,
      base_weight: "0.5 KG",
      additional_price_per_half_kg: 10,
      cod_charge: "1%",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">Charges</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-4 mx-auto px-12 container">
        {data.map((item) => (
          <PriceCard item={item}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default ChargeSection;
