import React, { useEffect } from 'react';
import './App.css';
import LocomotiveScroll from 'locomotive-scroll';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import whatsapp from './images/WhatsApp.svg';

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#app-container'),
      smooth: true,
    });

    // Clean up on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
       
      <Navbar />
      <div id="mySidenav" className="sidenav">
        <ul className='navbar-content-mobile'>
          <li className='nav-item-mobile'><a href="">Home</a></li>
          <li className='nav-item-mobile'><a href="">Subscribe</a></li>
          <li className='nav-item-mobile'><a href="">Hostel</a></li>
          <li className='nav-item-mobile'><a href="">List</a></li>
        </ul>
        <div className='whatsapp'>
          <a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
        </div>
      </div>
      <div id="app-container" data-scroll-container>
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App;
