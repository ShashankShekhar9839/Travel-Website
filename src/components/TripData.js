import React from 'react'
import '../css_styles/trip.css';

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt="img" src={props.image}/>
        </div>

        <div >
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default TripData;