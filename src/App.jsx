import { useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'

function App() {

  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options />
      </div>
      <div>
        <Feedback />
      </div>
    </>
  )
}

export default App
