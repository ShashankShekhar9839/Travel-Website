import React from 'react'
import '../css_styles/destination.css';

const DesinationData = (props) => {
  return (
    <div>
           <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
            </div>

            <div className='image'>
                <img alt='img' src={props.img1}></img>
                <img alt='img' src={props.img2}></img>
            </div>
        </div>

    </div>
  )
}

export default DesinationData;