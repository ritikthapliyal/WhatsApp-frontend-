import React from 'react'
import {useDispatch} from 'react-redux'
import {images} from '../../Features/DB'
import '../../Assets/Css/DisplayChats/ContactInfo.css'
import {setShowContactInfoOverlay} from '../../Features/uiSlice'

function ContactInfo({data}){

    const dispatch = useDispatch()
    const onClickHandler = () =>{
        dispatch(setShowContactInfoOverlay(true))        
    }

    return (
        <div onClick={onClickHandler} className='contactInfo-container'>
            <img className='contact-profile-pic' alt="dp" src={images[data.img]}></img>
            <div className='contactInfo-name-n-msg'>
                <h3>{data.name}</h3>
                <p>Click for contact info</p>
            </div>
            <button className='contactInfo-btns'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.6} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
            </button>
            <button className='contactInfo-btns'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.6} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    )
}

export default ContactInfo