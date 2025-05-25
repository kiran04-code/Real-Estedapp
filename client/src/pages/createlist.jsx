import React, { use, useState } from "react";

const ListingForm = () => {
    const [from, setfrom] = useState({})
     const [images, setImages] = useState([]);
    const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 6) {
      alert("You can only upload up to 6 images.");
      return;
    }
    setImages(selectedFiles);
  };

 
    const handleChange = (e) => {
        setfrom({ ...from, [e.t]: e.terget.value })
        console.log(from)
    }
    return (
        <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg border border-rose-600">
            <h2 className="text-3xl font-bold text-rose-700 mb-6 text-center">Create Listing</h2>
            <form className="space-y-4">
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="name" placeholder="Name" onClick={handleChange} required />
                <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" name="decription" placeholder="Description" />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="address" placeholder="Address" required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="priceregular" placeholder="Regular Price" required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="priceDiscounded" placeholder="Discounted Price" required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="bathroom" placeholder="Bathrooms" required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="badroom" placeholder="Bedrooms" required />

                <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-rose-700">
                        <input type="checkbox" name="parking" />
                        Parking
                    </label>
                    <label className="flex items-center gap-2 text-rose-700">
                        <input type="checkbox" name="furnish" />
                        Furnished
                    </label>
                </div>

                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="offer" placeholder="Offer" required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="type" placeholder="Type (e.g., apartment)" required />

                   <div className="flex">
                    <input
                    onChange={handleImageChange}
                    className="block w-full text-sm text-rose-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200"
                    type="file"
                    accept="image/*"
                    multiple
                    required
                />
                <button  type="button" className="p-1 border-black-50 border-2 rounded-2xl bg-rose-700 text-white">upload</button>
            </div>
                <button type="submit" className="w-full py-2 px-4 bg-rose-700 text-white font-semibold rounded hover:bg-rose-800 transition duration-300">
                    Submit Listing
                </button>
            </form>
        </div>
    );
};

export default ListingForm;
