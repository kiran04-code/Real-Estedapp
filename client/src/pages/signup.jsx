import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Google from "../components/googleAuth"
const Signup2 = () => {
  const [form, setForm] = useState({});
  const [Loading ,setLoading] = useState(false)
  const [error ,seterror] = useState({})
  const navigate = useNavigate()
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
  
      if(data.success == false){
        setLoading(false)
        seterror(data.message)
        return 
      }
      console.log(data);
      setLoading(false)
      navigate("/signin")
      seterror(null)
    } catch (err) {
     setLoading(false)
     seterror(error.message)
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-300 px-4">
      <div className="bg-white shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-rose-700 mb-6 text-center">Sign Up</h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block mb-1 font-semibold text-rose-700">Name</label>
            <input
              type="text"
              id="name"
              name="username"
               value={form.username}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-semibold text-rose-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
                    value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-semibold text-rose-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-rose-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-700"
            />
          </div>

          <button
            type="submit" disabled={Loading}
            className="w-full bg-rose-700 text-white font-semibold py-2 rounded-md hover:bg-rose-800 transition"
          >
            {
              Loading? "Loding....":" Sign In"
             }
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-rose-700 font-semibold hover:underline">
             Sign In
            </a>
          </p>
        </div>

       <Google/>
    
        {
          error && <span className="text-red-800">{error.message}</span>
        }
     
      </div>
    </div>
  );
};
export default Signup2