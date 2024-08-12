import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("Aditya")
  const AlertFunction=()=>{
    alert("I am Clicked")
  }
 const MouseHover=()=>{
  alert("Mouse Hover Wroking")
 }
 const inputChange=(e)=>{
 setInputValue(e.target.value)
 }
  return (
    <>
      <button onClick={AlertFunction}>Click Me</button>
      <div className="boxed" onMouseOver={MouseHover}>
        Hello Adity
      </div>
      <input type="text" value={inputValue} onChange={inputChange} />
    </>
  )
}

export default App
