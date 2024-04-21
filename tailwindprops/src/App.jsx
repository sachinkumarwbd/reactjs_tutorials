import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
 

  return (
    <>

     < Cards name="SACHIN KUMAR" btntext="clickme" />
     <Cards  name="SACHIN KUMAR GOUTAM"  btntext="visitme" />
    </>
  )
}

export default App
