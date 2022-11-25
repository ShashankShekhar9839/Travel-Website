import React from 'react'
import '../css_styles/trip.css'
import TripData from './TripData'
import img1 from '../assets/images/5.jpg' 
import img2 from '../assets/images/6.jpg' 
import img3 from '../assets/images/8.jpg' 

const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>

        <div className='tripcard'>
            <TripData
            image={img1}
            heading="Trip in Rajsthan"
            text={"Trip in Rajsthan is amazing. For 2022, the world is a much different place now. We have a war between Russia and the Ukraine, record-setting inflation, greater awareness of climate change, and contentious politics here at home."}
            
            />

<TripData
            image={img2}
            heading="Trip in UttraKhand"
            text={"Trip in Rajsthan is amazing. For 2022, the world is a much different place now. We have a war between Russia and the Ukraine, record-setting inflation, greater awareness of climate change, and contentious politics here at home."}         
            />

<TripData
            image={img3}
            heading="Trip in Varanasi"
            text={"Trip in Rajsthan is amazing. For 2022, the world is a much different place now. We have a war between Russia and the Ukraine, record-setting inflation, greater awareness of climate change, and contentious politics here at home."}       
            />
        </div>
    </div>
  )
}

export default Trip;