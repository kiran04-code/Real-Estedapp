import React from "react";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 rounded-tl-[120px] rounded-tr-[120px] bg-rose-700  " >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Find Properties for Sale</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-sm">
          <div>
            <ul className="space-y-2">
              <li>Flats in Mumbai</li>
              <li>Flats in Bengaluru</li>
              <li>Flats in Hyderabad</li>
              <li>Flats in Pune</li>
              <li>Flats in Chennai</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Flats in Delhi</li>
              <li>Flats in Gurgaon</li>
              <li>Flats in Noida</li>
              <li>Flats in Kolkata</li>
              <li>Flats in Ahmedabad</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Flats in Thane</li>
              <li>Flats in Navi Mumbai</li>
              <li>Flats in Faridabad</li>
              <li>Flats in Ghaziabad</li>
              <li>Flats in Coimbatore</li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>Properties in India</li>
              <li>Agricultural Lands in India</li>
              <li>Plots in India</li>
              <li>Flats in India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-xs opacity-80">
          © 2025 TrustNest.com | All rights reserved.
        </div>
      </div>
    </footer>
  );
}
