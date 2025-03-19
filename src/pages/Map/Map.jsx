import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoSearch } from "react-icons/io5";

const position = [23.8103, 90.4125]; // Dhaka coordinates

const Map = () => {
  return (
    <div className="w-10/12 mx-auto p-4">
      <div className="w-full md:w-96 mx-auto relative my-6">
        <input
          type="text"
          placeholder="Search..."
          className="border bg-transparent border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md"
        />

        <span className="bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group">
          <IoSearch className="text-[1.3rem]  group-hover:text-gray-200" />
        </span>
      </div>

      <div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
          className="z-10 "
        >
          {/* OpenStreetMap Layer */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker for Dhaka */}
          <Marker position={position}>
            <Popup>Dhaka, Bangladesh</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
