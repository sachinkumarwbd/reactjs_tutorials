import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  
  // let counter = 12
  const addvalue = ()=>{
    console.log(counter);
    
    if (counter < 50) {
      setCounter(counter + 1);
    }

  }
  const removevalue = ()=>{
    console.log(counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  
  }

  return (
    <>
   <h1>hello world:{counter}</h1>
   <p>counter value:{counter} </p>

   <button
   onClick={addvalue}>increase value </button>
   <br />
   <button
   onClick={removevalue}>decrease value</button>
    </>
  )
}

export default App
