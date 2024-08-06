import React from 'react'
import './Navbar.css'

function Navbar(props) {
  return (
    <div>
      <nav> 
        <div className="logo">{props.BrandName}</div>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Testimonials</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
