import Chats from './Chats'
import SendMessage from './SendMessage'
import { Fragment } from 'react'
import { useSelector} from 'react-redux'
import ContactInfo from './ContactInfo'
import whatsappp from '../../Assets/Images/whatsappp.png'
import ContactInfoOverlay from './ContactInfoOverlay'
import '../../Assets/Css/DisplayChats/DisplayChats.css'

function DisplayChats() {

  const {data,showContactInfoOverlay} = useSelector((state) => state.uiState)
  const id = useSelector((state) => state.uiState.selectedId)


  return (
    <div className='dc-container'>
      {
        id < 0 
                ? 
                    <div className='initial-window'>
                      <img src={whatsappp} alt='whatsapp'></img>
                      <p className='whatsapp-header'>WhatsApp for windows</p>
                      <p className='whatsapp-para'>Send and receive messages without keeping your phone online.</p>
                      <p className='whatsapp-para'>Use WhatsApp on up to 4 linked devices and 1 phone at the same time</p>
                    </div> 
                : 
                    showContactInfoOverlay  ?
                                               <ContactInfoOverlay data={data[id]} />
                                            :  
                                              <Fragment>
                                                <ContactInfo data={data[id]}/>
                                                <Chats chats={data[id].chat}/>
                                                <SendMessage/>
                                              </Fragment>
      }
    </div>
  )
}

export default DisplayChats