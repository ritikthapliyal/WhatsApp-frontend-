import {data,addMessage} from './DB.js'
import {createSlice} from "@reduxjs/toolkit"


const getTodayDate = () => {
    
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${day}/${month}/${year}`
}

const getTime = ()=>{
    
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, 
                                                    hour: "numeric", 
                                                    minute: "numeric"});

    return time

}

const initialState = {
    data:data,
    archived: [],
    selectedId : -1,
    showContacts: true,
    showArchive: false,
    showProfile: false,
    selectedContactData: {},
    selectedArchiveContactData:{},
    
    
    showArchiveMenu: 0,
    openedArchiveMenuForId : -1,

    showContactInfoOverlay: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState : initialState,
    reducers: {
        

        setShowContactInfoOverlay(state,{payload}){
            state.showContactInfoOverlay = payload
        },
        setShowArchiveMenu(state,{payload}){
            state.showArchiveMenu = payload
        },
        setShowContacts(state){
            state.showArchive = false
            state.showProfile = false
            state.showContacts = true
        },
        setShowArchive(state){
            state.showArchive = true
            state.showProfile = false
            state.showContacts = false
        },
        setShowProfile(state){
            state.showArchive = false
            state.showProfile = true
            state.showContacts = false
        },

        setOpenedArchiveMenuForId(state,{payload}){
            state.openedArchiveMenuForId = payload
        },

        showChat(state,{payload}){
            const id = payload
            state.selectedId = id
            state.selectedContactData = state.data[id]
        },

        archiveChat(state){
            const id = state.openedArchiveMenuForId
            state.archived.push(id)
        },
        unArchiveChat(state){
            const id = state.openedArchiveMenuForId
            state.archived = state.archived.filter((idd)=> Number(idd) !== Number(id))
        },

        sendMessage(state,{payload}){
            
            const allChats = state.selectedContactData.chat
            const chatsOnLastDay = allChats[allChats.length - 1]
            const {date} = chatsOnLastDay[0]
            const [day,month,year] = date

            const lastConversationDate = `${day}/${month}/${year}`
            const todayDate = getTodayDate()
            
            console.log(lastConversationDate,todayDate)

            const messageObj = {   
                name: "me",
                time: getTime(),
                date: todayDate.split('/'),
                message:payload
            }

            if(lastConversationDate !== todayDate){
                const arr = [messageObj]
                state.selectedContactData.chat.push(arr)
            }
            else{
                state.selectedContactData.chat[allChats.length - 1].push(messageObj)
            }

            state.data[state.selectedContactData.id].chat = state.selectedContactData.chat 

            // addMessage(state.selectedId,payload)
        }
    }
})


export const uiReducer = uiSlice.reducer 
export const {showChat, sendMessage,setShowContacts,setShowProfile,setShowArchive, archiveChat,unArchiveChat, setOpenedArchiveMenuForId , setShowArchiveMenu, setShowContactInfoOverlay} = uiSlice.actions