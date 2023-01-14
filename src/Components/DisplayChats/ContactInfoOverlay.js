import React from 'react'
import {useDispatch} from 'react-redux'
import {images} from '../../Features/DB'
import '../../Assets/Css/DisplayChats/ContactInfoOverlay.css'
import {setShowContactInfoOverlay} from '../../Features/uiSlice'

function ContactInfoOverlay({data}){

    const dispatch = useDispatch()

    const onClickHandler = () =>{
        dispatch(setShowContactInfoOverlay(false))        
    }

    return (
        <div className='contactInfoOverlay'>

            <button onClick={onClickHandler} className='contactInfo-btns' style={{alignSelf: 'flex-end'}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.6} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <img className='contact-profile-pic' alt="dp" src={images[data.img]} style={{alignSelf: 'center'}}></img>

            <div className='contactInfo-name-n-msg' style={{alignSelf: 'center'}}>
                <p>Name:</p>
                <h1 style={{paddingLeft: '1rem',marginBottom: '1rem'}}>{data.name}</h1>
            </div>

            <div className='contactInfo-name-n-msg' style={{alignSelf: 'center'}}>
                <p>Phone Number:</p>
                <p style={{paddingLeft: '1rem',color:'black',marginBottom: '1rem'}}>(+91) {data.number}</p>
            </div>

            <div className='contactInfo-name-n-msg' style={{alignSelf: 'center'}}>
                <p>About:</p>
                <p style={{paddingLeft: '1rem',color:'black',marginBottom: '1rem'}}>{data.about}</p>
            </div>

        </div>
    )
}

export default ContactInfoOverlay
