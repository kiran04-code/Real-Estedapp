import React from "react";

export default function PropertyCard() {
  return (
    <div className="max-w-6xl mx-auto p-5">
         <h1 className="text-2xl font-bold" >
          Popular Owner Properties
        </h1>
        <div className="h-[4px] w-[105px] bg-rose-700 mt-2 rounded-xl"> </div>
        <p className="pb-1">Explore top living options with us</p>
      <div className="flex flex-col md:flex-row bg-gradient-to-br from-[#eee0ff] to-[#ffd3ca] rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-6 space-y-3">
        
          <div className="flex items-center space-x-3">
            <img
              src="https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg" // Replace with actual image
              alt="Developer"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">Shubh Developer</h3>
              <a href="#" className="text-sm text-blue-700 underline">View Projects</a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Shubh Nirvana</h2>
            <p className="text-sm text-gray-600">Viman Nagar, Pune</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-black">₹2.22 Cr - 3.96 Cr</p>
            <p className="text-sm text-gray-700">3, 4, 4.5 BHK Apartments</p>
          </div>

          <button className="mt-3 px-6 py-2 bg-rose-700 text-white rounded-lg hover:bg-purple-700 transition">
            Contact
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3">
          <img
            src="https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg" // Replace with actual image
            alt="Property"
            className="w-full h-full object-cover rounded-tr-2xl md:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
}
