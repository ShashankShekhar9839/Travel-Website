import React from 'react'
import '../css_styles/destination.css'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/5.jpg'
import img4 from '../assets/images/4.jpg'
import DesinationData from './DesinationData'


const Destinations = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot within a time frame</p>

        <DesinationData
        className="first-des"
        heading="KedarNath,Ujjain,Mathura"
        text="Everyone gathers inspirations from different mediums and in different ways. But knowing how to activate those creative juices is an important part of being a creative web designer.

        A well-designed travel website with vivid images, offers, and destination information will activate the travel mode for users who view the website. It will give would-be travelers all the information they need to arrange their travel.
        
        When it comes to travel web design projects, scope can quickly narrow down the resources available. So it becomes difficult to find the right inspiration for travel projects.
        
        Having a few reliable places where you can get travel design inspirations will not only push your creativity but will also be a huge asset to your workflow."
        img1={img1}
        img2={img2}
        
        />



<DesinationData 
         className="first-des-reverse"
        heading="Varanasi, Agra, Lucknow"
        text="Everyone gathers inspirations from different mediums and in different ways. But knowing how to activate those creative juices is an important part of being a creative web designer.

        A well-designed travel website with vivid images, offers, and destination information will activate the travel mode for users who view the website. It will give would-be travelers all the information they need to arrange their travel.
        
        When it comes to travel web design projects, scope can quickly narrow down the resources available. So it becomes difficult to find the right inspiration for travel projects.
        
        Having a few reliable places where you can get travel design inspirations will not only push your creativity but will also be a huge asset to your workflow."
        img1={img3}
        img2={img4}
        
        />

    </div>
  )
}

export default Destinations