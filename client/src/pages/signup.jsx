import React, { useState } from "react";
const Signup2 = () => {
  const [form, setForm] = useState({});
  const [Loading ,setLoading] = useState(false)
  const [error ,seterror] = useState({})
 
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

        <div className="mt-6 flex items-center justify-center space-x-3">
          <button
            className="flex items-center justify-center gap-2 border border-rose-700 text-rose-700 font-semibold px-4 py-2 rounded-md hover:bg-rose-700 hover:text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5" fill="currentColor">
              <path d="M488 261.8c0-17.4-1.6-34-4.6-50.2H249v95.1h134.5c-5.8 31-23.7 57.4-50.7 75.1v62.1h81.8c47.8-44 75.4-109 75.4-182.1zM249 492c66.3 0 121.9-21.9 162.7-59.3l-78.1-59.3c-21.7 14.6-49.3 23.2-84.6 23.2-64.9 0-120-43.7-139.7-102.3H28.2v64.4C68.4 447 152.8 492 249 492zM109.3 295.1c-4.9-14.5-7.7-29.9-7.7-45.7s2.8-31.3 7.7-45.7v-64.4H28.2C10.2 197.8 0 223.8 0 252.6s10.2 54.8 28.2 75.6l81.1-64.4zM249 97.4c35.9 0 68.1 12.3 93.5 36.4l70.1-70.1C366 25.6 309.9 0 249 0 152.8 0 68.4 45 28.2 115.7l81.1 64.4C129 141.1 184.1 97.4 249 97.4z" />
            </svg>
            Signup with Google
          </button>
        </div>
       
      </div>
    </div>
  );
};
export default Signup2