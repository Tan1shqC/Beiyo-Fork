import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
import navicon from '../images/navigation-bar.png'
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
   <button id='closebtn' onClick={closeNav}>Close</button>
  </div>
  </div>
  <div id="mySidenav" className="sidenav">

        <ul className='navbar-content-mobile'>
     
     <li  className='nav-item-mobile'><a href="">Home</a></li>
     <li  className='nav-item-mobile'><a href="">Subscribe</a></li>
     <li  className='nav-item-mobile'><a href="">Hostel</a></li>
     <li  className='nav-item-mobile'><a href="">List</a></li>
   
     </ul>
     <div className='whatsapp'>
        <a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
    </div>
      </div>
 
</>
 

  )
}
function openNav() {
  document.getElementById("mySidenav").style.display = "flex";
  document.getElementById("main").style.paddingTop ="0";
  document.getElementById("closebtn").style.display = "block";
  document.getElementById("openbtn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none"; 
  document.getElementById("main").style.paddingTop = "30vh";
  document.getElementById("openbtn").style.display = "block";
  document.getElementById("closebtn").style.display = "none";
}
export default Navbar