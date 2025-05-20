import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import PropertyCard from "../components/houses"
const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <PropertyCard/>
            <Footer/>
        </div>
    )
}

export default Home