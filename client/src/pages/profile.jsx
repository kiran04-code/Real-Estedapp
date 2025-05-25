import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { data, useNavigate } from "react-router-dom";
import {signinSuccess,signinStart,deleteStart,deleteFail,deleteSuccess,signoutFail,signoutStart,signoutSuccess} from "../redux/userData/userSlice"


const Profile = () => {
  const { currentUser,Loading } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const naviagete =useNavigate()
  const [form, setForm] = useState({
  });
  const [errors, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault(); // prevent default form submission
    try {
        dispatch(signinStart())
      const res = await fetch(`/api/update/${currentUser.validUser._id}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      setError(data);
      if(data.sucess){
        naviagete("/Profile")
     dispatch(signinSuccess(data))    
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  const handledelete =  async() =>{
  try {
    const res = await fetch(`api/delete/${currentUser.validUser._id}`,{
      method:"DELETE",
    })
    const data = await res.json()
        setError(data)
        dispatch(deleteSuccess())
  } catch (error) {
    setError(error)
    dispatch(deleteFail())
  }

  }
  const handlesignout = async()=>{
    dispatch(signoutStart())
    const res = await fetch("api/signout")
    const data = await res.json()
    console.log(data)
    dispatch(signoutSuccess())
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <form
        onSubmit={handleUpdate}
        className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl mb-10"
      >
        <h2 className="text-3xl font-semibold text-red-700 mb-6 text-center">
          My Profile
        </h2>

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={currentUser.validUser.photo || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-red-700"
          />
          <p className="mt-2 text-sm text-gray-500">Profile Picture</p>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              defaultValue={currentUser.validUser.username}
              value={form.username}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={currentUser.validUser.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />
          </div>
        </div>

        {/* Error message */}
        {errors && errors.message && (
          <p className="text-green-600 mt-3">{errors.message}</p>
        )}

        {/* Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          <button
            type="submit"
            className="bg-red-700 text-white py-2 rounded-lg hover:bg-red-800 transition"
          >
            {
                Loading ? "Updating...":"update"
            }
          </button>
          <button
          onClick={handlesignout}
            type="button"
            className="bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition"
          >
            {
              Loading ? "SignOut....":"SignOut"
            }
          </button>
          <button
          onClick={handledelete}
            type="button"
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete Account
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
          <a href="/listing">  CreateList</a>
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Profile;
