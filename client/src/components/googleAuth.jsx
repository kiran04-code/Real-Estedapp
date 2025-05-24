import React from "react"
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { app } from "../firebase"
import { useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"
import {signinSuccess} from "../redux/userData/userSlice"
const Google = () =>{
 const dispatch = useDispatch()
 const naviagete = useNavigate()
  const  handleGoogleAuth = async () =>{
    try {

      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      const result = await signInWithPopup(auth,provider)
     const res = await fetch("api/google",{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({username:result.user.displayName,email:result.user.email,photo:result.user.photoURL})
      })
     const data = await res.json()
     console.log(data)
     if(data.success){
      naviagete("/")
         dispatch(signinSuccess(data))
     }
    } catch (error) {
      console.log("can not  signout with  google:",error)
    }
  }
    return(
 <div className="mt-6 flex items-center justify-center space-x-3">
          <button
           type="submit" onClick={handleGoogleAuth}
            className="flex items-center justify-center gap-2 border border-rose-700 text-rose-700 font-semibold px-4 py-2 rounded-md hover:bg-rose-700 hover:text-white transition"
          >
            {/* Google icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
              className="w-5 h-5"
              fill="currentColor"
            >
              <path d="M488 261.8c0-17.4-1.6-34-4.6-50.2H249v95.1h134.5c-5.8 31-23.7 57.4-50.7 75.1v62.1h81.8c47.8-44 75.4-109 75.4-182.1zM249 492c66.3 0 121.9-21.9 162.7-59.3l-78.1-59.3c-21.7 14.6-49.3 23.2-84.6 23.2-64.9 0-120-43.7-139.7-102.3H28.2v64.4C68.4 447 152.8 492 249 492zM109.3 295.1c-4.9-14.5-7.7-29.9-7.7-45.7s2.8-31.3 7.7-45.7v-64.4H28.2C10.2 197.8 0 223.8 0 252.6s10.2 54.8 28.2 75.6l81.1-64.4zM249 97.4c35.9 0 68.1 12.3 93.5 36.4l70.1-70.1C366 25.6 309.9 0 249 0 152.8 0 68.4 45 28.2 115.7l81.1 64.4C129 141.1 184.1 97.4 249 97.4z" />
            </svg>
            Login with Google
          </button>
        </div>
    )
}

export default Google
