import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import About from './pages/About'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/About' element ={<About/>}/>
      <Route path='/' element ={<Home/>}/>
      <Route path='/signin' element ={<Signin/>}/>
      <Route path='/signup' element ={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
