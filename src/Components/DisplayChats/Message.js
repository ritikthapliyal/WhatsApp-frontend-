import React from 'react'
import '../../Assets/Css/DisplayChats/Message.css'

function Message({message,time,name}){

    return (
        <div className='message-container' style={{ justifyContent : `${ name === "me" ? 'end' : 'start'}`}}>
            <div className='message-and-time' style={{ backgroundColor : `${ name === "me" ? '#d7fad1' : 'white'}`}}>
                <p className = 'message'>{message}</p>
                <p className='time'>{time}</p>
            </div>
        </div>
    )
}

export default Message