import React from "react";

export default function PropertyCard() {
  const data = [
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    {
      image1:
        "https://housing-images.n7net.in/4f2250e8/989ceec03172bdbb7790df4c1ad62f21/v0/fs/shubh_nirvana-viman_nagar-pune-shubh_developer.jpeg",
      ownername: "Shubh Developer",
      location: "Viman Nagar, Pune",
      price: "₹2.22 Cr - 3.96 Cr",
      BHks: "3, 4, 4.5 BHK Apartments",
      image2: "",
    },
    // Add more objects as needed
  ];
return (
  <div className="w-full p-15 h-[380px] overflow-y-auto mt-10">
    {/* Mapping the cards */}
    {data.map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row mb-6 bg-gradient-to-br h-[350px] from-[#eee0ff] to-[#ffd3ca] rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/3 p-6 space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src={item.image1}
              alt="Developer"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800">
                {item.ownername}
              </h3>
              <a href="#" className="text-sm text-blue-700 underline">
                View Projects
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900">Shubh Nirvana</h2>
            <p className="text-sm text-gray-600">{item.location}</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-black">{item.price}</p>
            <p className="text-sm text-gray-700">{item.BHks}</p>
          </div>

          <button className="mt-3 px-6 py-2 bg-rose-700 text-white rounded-lg hover:bg-purple-700 transition">
            Contact
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3">
          <img
            src={item.image1}
            alt="Property"
            className="w-full h-full object-cover rounded-tr-2xl md:rounded-r-2xl"
          />
        </div>
      </div>
    ))}
  </div>
)}