import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
import navicon from '../images/navigation-bar.png'
import logo from '../images/main-yellow.png'
function Navbar() {
  return (
    <div className="navbar">
   <div className="logo"><img src={logo} alt="" /></div>
    <div>
       <ul className='navbar-content'>
     
       <li  className='nav-item'><a href="">Home</a></li>
       <li  className='nav-item'><a href="">Subscribe</a></li>
       <li  className='nav-item'><a href="">Hostel</a></li>
       <li  className='nav-item'><a href="">List</a></li>
     
       </ul>
    </div>
    <div className='whatsapp'>
        <a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
    </div>
    <div className="navicon">
    <img src={navicon} alt="" />
  </div>
 </div>

  )
}

export default Navbar