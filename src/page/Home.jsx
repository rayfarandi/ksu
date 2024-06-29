/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Header from "../components/Header";
import Hero from "../components/Hero"
import About from "../components/About";
import Properties from "../components/Properties";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = ()=> {
    return(
        <>
        <div className="w-full min-h-screen overflow-x-hidden relative">
            <Header/>
            <Hero />
            <About id="about" />
            <Properties/>
            <About id="konsul"/>
            <Banner/>
            <Footer />
        </div>
        </>
    )
}

export default Home