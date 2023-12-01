import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
import navicon from '../images/icons8-menu-50.png'
import closeicon from '../images/icons8-close-50.png'
import logo from '../images/main-yellow.png'
function Navbar() {
  return (
<>
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
   <button id='openbtn' onClick={openNav}> <img src={navicon} alt="" /></button>
   <button id='closebtn' onClick={closeNav}> <img src={closeicon} alt="" /></button>
  </div>
  </div>

 
</>
 

  )
}
function openNav() {
  document.getElementById("mySidenav").style.display = "flex";
  document.getElementById("hero").style.display ="none";
  document.getElementById("closebtn").style.display = "block";
  document.getElementById("openbtn").style.display = "none";
  document.getElementById("footer").style.display="none";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none"; 
  document.getElementById("hero").style.display = "block";
  document.getElementById("openbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
  document.getElementById("footer").style.display="block";
}
export default Navbar