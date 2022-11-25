import '../css_styles/contactform.css';
import React from 'react'

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send a message to us!</h1>
        <form>
        <input placeholder='Enter Your Name'></input>
        <input placeholder='Email'></input>
         <input placeholder='Subject'></input>
         <textarea placeholder='Message' rows={4}></textarea>
         <button>Message</button>
        </form>
    </div>
  )
}

export default ContactForm;