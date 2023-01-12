import React from 'react'
import ritik from '../../Assets/Images/ritik.jpeg'
import '../../Assets/Css/ContactsDisplay/Contact.css'


function Contact() {
  return (
    <div className='contact-container'>
        
        <img className='contact-profile-pic' src={ritik}></img>
        
        <div className='contact-info'>
            <h4>Harmon</h4>
            <p>Heyy What's up</p>
        </div>
        
        <p className='date'>1/11</p>
    </div>
  )
}

export default Contact