import React, {  useState } from "react";
import {useNavigate} from "react-router-dom"
const ListingForm = () => {
    const [from, setFrom] = useState({})
    const navigate = useNavigate()
    const [popup,setpopup] = useState(false)
    const handleChange = (e) => {
        
        setFrom({ ...from, [e.target.name]: e.target.value })
        console.log(from)
    }
    const handleSubmit = async(e)=>{
         e.preventDefault()
        const  res = await fetch("api/listing",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(from)
        })
        const data = await res.json()
        console.log(data)
        if(data.sucess){
            setpopup(true)
            navigate("/listing")
        }
       setpopup(true)
    }
    return (
        <div className="max-w-2xl mx-auto my-10 bg-white p-8 rounded-lg shadow-lg border border-rose-600">
            <h2 className="text-3xl font-bold text-rose-700 mb-6 text-center">Create Listing</h2>
            <form className="space-y-4"  onSubmit={handleSubmit}  encType="multipart/form-data">
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="name" placeholder="Name" onChange={handleChange}  value = {from.name}required />
                <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" name="decription" placeholder="Description" onChange={handleChange}  value = {from.decription} />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="address" placeholder="Address" onChange={handleChange}  value = {from.address} required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="priceregular" placeholder="Regular Price" onChange={handleChange}  value = {from.priceregular} required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="priceDiscounded" placeholder="Discounted Price" onChange={handleChange}  value = {from.priceDiscounded} required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="bathroom" placeholder="Bathrooms" onChange={handleChange}  value = {from.bathroom} required />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="number" name="badroom" placeholder="Bedrooms" onChange={handleChange}  value = {from.badroom} required />
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-rose-700">
                        <input type="checkbox" name="parking" />
                        Parking
                    </label>
                    <label className="flex items-center gap-2 text-rose-700"  >
                        <input type="checkbox" name="furnish"  />
                        Furnished
                    </label>
                </div>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="offer" placeholder="Offer"  onChange={handleChange}  value = {from.offer}  />
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-600" type="text" name="type" placeholder="Type (e.g., apartment)" onChange={handleChange}  value = {from.type}  />
                     <div className="flex">
                    <input
                    className="block w-full text-sm text-rose-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200"
                    type="file"
                    name="ImageUrls"
                     onChange={handleChange}  value = {from.file}
                    accept="image/*"
                    multiple
                    required
                />
            </div>
                <button type="submit" className="w-full py-2 px-4 bg-rose-700 text-white font-semibold rounded hover:bg-rose-800 transition duration-300">
                    Submit Listing
                </button>
            </form>
            {
                popup ?<a href=""> List is Created</a>:<></>
            }
        </div>
    );
};

export default ListingForm;
