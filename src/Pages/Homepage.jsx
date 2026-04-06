import React from 'react'
import Hero from "../components/Hero";
import Portfolio from '../components/Portfolio';
import Footer from "../components/Footer";
import VideoSection from "../components/VideoSection";
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

const Homepage = () => {
  return (
    <>
      <Hero/>
      <Process/>
      <Portfolio/>
      <VideoSection/>
      <Testimonials/>
      <Partners/>
      

      <Footer/>
\      
    </>
  )
}

export default Homepage
