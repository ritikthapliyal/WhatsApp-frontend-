import Contact from './Contact'
import ArchiveMenu from './ArchiveMenu'
import { useSelector} from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import logo from '../../Assets/Images/whatsapp.png'
import '../../Assets/Css/ContactsDisplay/ContactsDisplay.css'

function ContactsDisplay() {

  const archiveMenu = useRef()
  const id = useSelector((state) => state.uiState.selectedId)
  const {showContacts,showArchive,data,archived} = useSelector((state) => state.uiState)
  
  const [searchInput,setSearchInput] = useState('')
  const [arr,setArr] = useState([])
  

  const filterContacts = () =>{

          if(showContacts){
            
            return Object.entries(data).filter((thisArr)=>{
                const id = thisArr[0]
                return !archived.includes(Number(id))
              })
          }
          else{

            return Object.entries(data).filter((thisArr)=>{
                const id = thisArr[0]
                return archived.includes(Number(id))
              })
          }
  }

  useEffect(()=>setArr(filterContacts),[data,archived,showContacts,showArchive])

  const clearInput = () => {
      setSearchInput('')
      setArr(filterContacts)
  }

  const inputHandler = (e) => {

    const val = e.target.value
    setSearchInput(val)

    if(val !== ''){

      const newArr = arr.filter((contact) => {
          
          const name = contact[1].name
          const str = name.substring(0,val.length)
          return str.toLowerCase() === val.toLowerCase()
      
        })
      setArr(newArr)
    }
    else{
      setArr(filterContacts)
    }
  }

  return (
    <div className='cd-container'>
        
        <div className='logo-container'>
            <img className='logo' src={logo} alt="whats-app-logo"></img>
            <p>WhatsApp</p>
        </div>
        
        {showContacts && <p style={{fontWeight: '450',fontSize: '1.4rem',paddingBottom:'0.4rem'}}>Chats</p>}
        {showArchive && <p style={{fontWeight: '450',fontSize: '1.4rem',paddingBottom:'0.4rem'}}>Archives</p>}


        <div className='search-chats'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.6} stroke="currentColor" className="w-6 h-6 search-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {showContacts && <input className='search-input' onChange={inputHandler} placeholder='Search or start a new chat' value={searchInput}></input>}
            {showArchive && <input className='search-input' onChange={inputHandler} placeholder='Search in Archives' value={searchInput}></input>}
        </div>
        
        <div className='contacts'>
            {
              arr.map((contact) => {
                  const contactData = contact[1]
                  return <Contact key={contactData.id} data={contactData} selectedId={id} clearInput={clearInput} archiveMenu={archiveMenu}/>
              })
            }  
        </div>

        <ArchiveMenu archiveMenu={archiveMenu}/>
    </div>
  )
}

export default ContactsDisplay