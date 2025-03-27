export default function ParcelTracking() {
  return (
    <div className="flex items-center justify-center min-h-[20vh] px-4 my-6 md:my-12">
      <div className="w-full max-w-2xl bg-white p-4 shadow-lg rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base font-medium mb-2 sm:text-center text-left">
          Track your parcel to get detailed updates
        </p>

        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden ">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="w-full p-3 text-gray-600 outline-none "
          />

          {/* Button */}
          <button className="bg-orange-400 text-white px-4 w-40 py-3 md:font-medium hover:bg-orange-500 transition cursor-pointer">
            Track Parcel
          </button>
        </div>
      </div>
    </div>
  );
}
