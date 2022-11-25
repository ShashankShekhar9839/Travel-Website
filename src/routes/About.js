import React from 'react'
import '../css_styles/hero.css';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import AboutImg from '../assets/images/night.jpg'
const About = () => {
  return (
    <div>
        <Navbar/>
        <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </div>
  )
}

export default About