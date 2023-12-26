import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';

// import LocomotiveScroll from 'locomotive-scroll';


import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import whatsapp from './images/WhatsApp.svg';


import Subscribe from './components/Subscribe';
import ListProperty from './components/ListProperty';
import Hostel from './components/Hostel'


function App() {
  // useEffect(() => {
  //   // Initialize Locomotive Scroll
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('#app-container'),
  //     smooth: true,
  //   });

  //   // Clean up on component unmount
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
  
    <Router>
    
    <div id="app-container" data-scroll-container>
       
          <Navbar />
          <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/subscribe" element={<Subscribe/>} />
          <Route path="/hostel" element={<Hostel />}/>
          <Route path="/list" element={<ListProperty />}/>
        </Routes>
         {/* <Hero /> */}
         <Footer />
   </div>   
  
    </Router>

  )
  }


export default App;