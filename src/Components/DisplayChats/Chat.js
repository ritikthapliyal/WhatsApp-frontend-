import React from 'react'
import Message from './Message'
import '../../Assets/Css/DisplayChats/Chat.css'

function Chat({chatData}) {

  const date = chatData[0].date

  return (
    <div className='chat'>
        <div className='date-container'>
          <p>{`${date[0]}/${date[1]}/${date[2]}`}</p>
        </div>
        {
            chatData.map((chat,index) => {
                const {message,time,name} = chat
                return ( <Message key={index} time={time} message={message} name={name}/>)
            })
        }
    </div>
  )
}

export default Chat