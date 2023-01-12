import React from 'react'
import Options from './Options'
import Settings from './Settings'
import '../../Assets/Css/SettingsAndOptions/SettingsAndOptions.css'

function SettingsAndOptions() {
  return (
    <div className='sao-container'>
      <Options/>
      <Settings/>
    </div>
  )
}

export default SettingsAndOptions