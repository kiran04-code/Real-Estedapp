import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <nav className="bg-rose-700 text-white p-4 rounded-bl-[120px] rounded-br-[120px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Website name */}
        <div className="text-3xl font-bold text-white mb-4 md:mb-0">
          TrustNest.<span className="text-xl">com</span>
        </div>

        {/* Updated Search bar */}
        <div className="w-full md:w-1/2 flex items-center mb-4 md:mb-0">
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Search for houses, cities, or agents..."
              className="w-full px-4 py-2 text-lg text-black bg-white focus:outline-none"
              style={{
                borderRadius: "25px",
                border: "none",
              }}
            />
            <button
              className="  px-6 py-3 font-semibold text-white hover:bg-white transition duration-300"
              style={{
                backgroundColor: "#9D95AF",
                borderRadius: "25px",
                border: "none",
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <div className="flex space-x-6 text-lg">
          <a href="/" className="text-black px-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: "white" }}>
            Home
          </a>
          <a href="/about" className="text-black px-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: "white" }}>
            About
          </a>
          {
            currentUser ? <a href="/Profile"><img className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 shadow-sm"src={currentUser.validUser.photo}/></a>:
                <a href="/signin" className="text-black px-3 rounded-xl flex items-center justify-center" style={{ backgroundColor: "white" }}>
            Sign In
          </a>
          }
         
        </div>
      </div>
    </nav>
  );
}
