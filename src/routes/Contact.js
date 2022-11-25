import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutImg from '../assets/images/2.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
        <Navbar/>
     <Hero
                    cName="hero-about"
                    heroImg={AboutImg}
                    title="Contact"
                    btnClass="hide"
     />
     <ContactForm/>
     <Footer/>
        </div>
  )
}

export default Contact