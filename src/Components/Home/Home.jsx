import React from 'react'
import '../layout/layout.css'
import Header from '../layout/Header'
import Navbar from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import LocationSection from './LocationSection'
 



export const Home = () => {


    return (
        <>
        <Header />
        <Navbar />
        <LocationSection />
      <Footer />
        </>
    )
}

