import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import HomeImg from '../assets/images/12.jpg'
import Destinations from '../components/Destinations';
import Trip from '../components/Trip';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
         <Hero
         cName="hero"
         heroImg={HomeImg}
         title="Your Journey Your Story"
         text="Choose Your Favourite Destination"
         buttonText="Travel Plan"
         url="/"
         btnClass="show"
         />
         <Destinations/>
         <Trip/>
         <Footer/>
    </div>
  )
}

export default Home;