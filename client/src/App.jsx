import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import About from './pages/About'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup2 from './pages/signup'
import Profile from './pages/profile'
import PrivateRoute from "./components/Privitate"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/About' element ={<About/>}/>
      <Route path='/' element ={<Home/>}/>
      <Route path='/signin' element ={<Signin/>}/>
      <Route path='/signup' element ={<Signup2/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/Profile' element ={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
