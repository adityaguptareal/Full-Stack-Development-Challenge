import React from 'react'
import '../index.css'

function Navbar(props) {
  return (
    <div>
      <nav className='flex justify-around p-5 text-white bg-slate-700 mb-4'  style={{backgroundColor:props.color}}>
        <div className="logo text-2xl font-bold">
            MAxProHub
        </div>
        <ul className='flex list-none gap-5 text-[18px] font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Services</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
