import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
import navicon from '../images/icons8-menu-50.png'
import closeicon from '../images/icons8-close-50.png'
import logo from '../images/main-yellow.png'
import { Link } from 'react-router-dom'




function Navbar() {
  return (
<>
<div className="navbar">
   <div className="logo"><img src={logo} alt="" /></div>
    <div>
       <ul className='navbar-content'>
     
       <li  className='nav-item'><Link to="/">Home</Link></li>
       <li  className='nav-item'><Link to="/hostel">Hostel</Link></li>
       <li  className='nav-item'><Link to="/list">List</Link></li>
       <a href="image_location.zip" download>List Your Building</a>
       <li  className='nav-item'><a href="/#form">Join our waitlist</a></li>
       </ul>
    </div>
    <div className='whatsapp'>
        <a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
    </div>
    <div className="navicon">
   <button id='openbtn' onClick={openNav}> <img src={navicon} alt="" /></button>
   <button id='closebtn' onClick={closeNav}> <img src={closeicon} alt="" /></button>
  </div>
  </div>
   
  <div id="mySidenav" className="sidenav">
<ul className='navbar-content-mobile'>
<li className='nav-item-mobile'><a href="/">Home</a></li>
<hr />
<li className='nav-item-mobile'><a href="/hostel">Hostel</a></li>
<hr />
<li className='nav-item-mobile'><a href="/list">List Your Properties</a></li>
<hr />
<li className='nav-item-mobile'><a href="/#form">Join out waitlist</a></li>
<hr />
</ul>
<div className='whatsapp'>
<a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
</div>
</div>
</>
  

  )
}
function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("openbtn").style.display= 'none';
  document.getElementById("closebtn").style.display = "block";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("openbtn").style.display= 'block';
  document.getElementById("closebtn").style.display = "none";
}

export default Navbar
//    

