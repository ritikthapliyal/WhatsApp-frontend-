import React from 'react'
import Contact from './Contact'
import '../../Assets/Css/ContactsDisplay/ContactsDisplay.css'

function ContactsDisplay() {
  return (
    <div className='cd-container'>
        <h2>Chats</h2>
        <div className='search-chats'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.6} stroke="currentColor" className="w-6 h-6 search-svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input className='search-input' placeholder='Search or start a new chat'></input>
        </div>
        <div className='contacts'>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
          <Contact/>
        </div>
    </div>
  )
}

export default ContactsDisplay