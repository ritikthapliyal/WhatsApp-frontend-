import {images} from '../../Features/DB'
import { useDispatch,useSelector } from 'react-redux'
import { showChat } from '../../Features/uiSlice'
import '../../Assets/Css/ContactsDisplay/Contact.css'
import { setOpenedArchiveMenuForId,setShowArchiveMenu,setShowContactInfoOverlay} from '../../Features/uiSlice'


function Contact({data,selectedId,archiveMenu,clearInput}) {

  const dispatch = useDispatch()
  const {archived,showContactInfoOverlay} = useSelector((state) => state.uiState)
  const lastConversation = data.chat[ data.chat.length - 1]
  const {date,message} = lastConversation[ lastConversation.length - 1]

  const onClickHandler = (e) =>{
      
      dispatch(showChat(data.id))
      if(showContactInfoOverlay){
            dispatch(setShowContactInfoOverlay(false))
      }
      clearInput()
    }

  const onRightClickHandler = (e) =>{
    
    e.preventDefault()  
    dispatch(setOpenedArchiveMenuForId(data.id))

    archived.includes(data.id) ? dispatch(setShowArchiveMenu(1)) : dispatch(setShowArchiveMenu(0)) 
    
    const {clientX,clientY} = e;

    archiveMenu.current.style.left = `${clientX}px`
    archiveMenu.current.style.top = `${clientY}px`

    archiveMenu.current.classList.add('visible')

    }

  document.querySelector('body').addEventListener("click", (e) => {
    if (e.target.offsetParent !== archiveMenu.current) {
      archiveMenu.current.classList.remove("visible");
    }})

  return (
    <div onClick={onClickHandler} onContextMenu={onRightClickHandler} className='contact-container' style={{ backgroundColor : `${ selectedId === data.id ? '#d8d5d5d1' : ''}` }}>
        
        <img className='contact-profile-pic' alt="dp" src={images[data.img]}></img>
        
        <div className='contact-info'>
            <h4>{data.name}</h4>
            <p> 
                { 
                  message.length > 15 ?
                  message.substring(0,15) + "..." : 
                  message
                }
            </p>
        </div>
        
        <p className='date'>
            {
              `${date[0]}/${date[1]}`
            }
        </p>
    </div>
  )
}

export default Contact