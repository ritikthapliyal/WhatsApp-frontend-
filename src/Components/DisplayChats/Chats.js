import Chat from './Chat'
import { useSelector} from 'react-redux'
import React, { useEffect, useRef} from 'react'
import '../../Assets/Css/DisplayChats/Chats.css'

function Chats({chats}) {

    const scroll = useRef()
    const data = useSelector((state) => state.uiState.data)
    const id = useSelector((state) => state.uiState.selectedId)

    useEffect(()=>{
        scroll.current.scrollTop = scroll.current.scrollHeight - scroll.current.clientHeight;
    },[id,data])


    return (
    <div className='chats' ref={scroll}>
        {
            chats.map((chatData)=>{
                return (<Chat chatData={chatData} />)
            })
        }
    </div>
  )
}

export default Chats