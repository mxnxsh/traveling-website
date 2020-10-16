import React from 'react'
import '../../App.css'
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'
import HeroSection from '../heroSection/HeroSection'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer/>
        </>
    )
}

export default Home
