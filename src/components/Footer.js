import React from 'react'
import '../css_styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
       <div>
        <h1>Trippy</h1>
        <p>Choose Your Favourite destination</p>
       </div>


       <div>
        <a href='/'>
            <i class="fa-brands fa-square-facebook"></i>
        </a>

        <a href='/'>
            <i class="fa-brands fa-square-instagram"></i>
        </a>

        <a href='/'>
            <i class="fa-brands fa-square-twitter"></i>
        </a>

        <a href='/'>
            <i class="fa-brands fa-square-youtube"></i>
        </a>
       </div>
        </div>

        <div className='bottom'>
            <div>
                <h4>Projects</h4>
                <a href='/'>ChangeLog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Community</h4>
                <a href='/'>ChangeLog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Help</h4>
                <a href='/'>ChangeLog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>

            <div>
                <h4>Others</h4>
                <a href='/'>ChangeLog</a>
                <a href='/'>Status</a>
                <a href='/'>License</a>
                <a href='/'>All Versions</a>
            </div>
        </div>
    </div>
  )
}

export default Footer