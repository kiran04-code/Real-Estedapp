import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Google from "../components/googleAuth"
const Signin = () => {
  const navigate = useNavigate();
  const [fromData,setFromData] = useState({})
  const [Loading,setLoading] = useState(false)
  const [errors,setError] = useState(false)
  const  handleChange = (e)=>{
  setFromData({...fromData,[e.target.id]:e.target.value})
  }
  const handleonsubmit = async (e)=>{
    e.preventDefault();
    setLoading(true)
   try {
    const res = await fetch("api/signin",{
      method:"POST",
      headers:{
        "Content-type" :"application/json"
      },
      body:JSON.stringify(fromData)
    }) 
    const data = await res.json()
    console.log(data)
    setLoading(false)
   if (data.success) {
   navigate("/");
    } else {
    setError(data);
   }
   } catch (error) {
   setError(data)
   setLoading(false)
   }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-300 px-4">
      <div className="bg-white  shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-rose-700 mb-6 text-center">
          Sign In
        </h1>
        <form className="space-y-5" onSubmit={handleonsubmit}>
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-rose-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value ={fromData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-rose-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value ={fromData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700"
              placeholder="Enter your password"
            />
          </div>

          <button
            
            type="submit"
            className="w-full bg-rose-700 text-white font-semibold py-2 rounded-md hover:bg-rose-800 transition"
          >
           {
            Loading ? "Loading....":" Sign In"
           }
          </button>
        </form>
       {
                errors && <a href="" className="text-red-600">{errors.error}</a>
       }
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-rose-700 font-semibold hover:underline">
              Signup
            </a>
          </p>
        </div>
       <Google/>
      </div>
    </div>
  );
};

export default Signin;
