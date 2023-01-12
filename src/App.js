import './Assets/Css/App.css'
import DisplayChats from './Components/DisplayChats/DisplayChats'
import ContactsDisplay from './Components/ContactsDisplay/ContactsDisplay'
import SettingsAndOptions from './Components/SettingsAndOptions/SettingsAndOptions';


function App() {
  return (
    <div className="whatsapp-container">
        <SettingsAndOptions/>
        <ContactsDisplay/>
        <DisplayChats/>
    </div>
  );
}

export default App;
