import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutImg from '../assets/images/3.jpg'
import Footer from '../components/Footer';
import Trip from '../components/Trip';

const Service = () => {
  return (
    <div><Navbar/>
       <Hero
               cName="hero-about"
               heroImg={AboutImg}
               title="Service"
               btnClass="hide"
       />
       <Trip/>
       <Footer/>
        </div>
  )
}

export default Service;