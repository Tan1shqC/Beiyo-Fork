import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
function Hero() {
  return (
  <div id='hero'>
    <div className="main" id='main'>
   <div className="hero-main">
   <h1>Offering Your Perfect</h1>
    <h1>Accommodation Services</h1>
    <p>Discover top-quality hostels and properties for your next adventure. </p>
   </div>
 
   <a href="#featurecontent2"> <button className='explore'>Explore</button> </a>
  </div>
  <div className="feature">
    <div className="feature-content1" id='featurecontent1'>
        <div className="contentdiv">
            <h1>Easy Booking Process </h1>
            <p>Book your accommodation hassle-free with our user-friendly platform. </p>
        </div>
        <div className="imgdiv">
            
        </div>
    
    </div>
    <div className="feature-content2" id='featurecontent2'>
        <h1>Join easily without dealing <br /> with unnecessary forms</h1>
        <div className='whatsapp'>
        <a className='whatsapplink' href="https://wa.me/918305523140"><img src={whatsapp} alt="" />Chat with us</a>
    </div>
    </div>
    <div className="feature-content1">
            <div className="imgdiv1">
            
            </div>
            <div className="contentdiv">
            <h1>List Your Properties </h1>
            <p>Earn passive income by listing your property with us.</p>
        </div>
    </div>
    <div className="feature-content3">
        <h1>Experience Communal Living</h1>
        <div className="paradiv">
        <p>Looking for a unique living experience as a student? Beiyo also offers communal living options where you can live with other students in a shared space. Enjoy the benefits of a supportive community, shared expenses, and a sociable environment. Explore our commune options and find your perfect fit! </p>
        </div>
        <button className='btnjoin'>
            Join Now
        </button>
    </div>
  </div>
  <div className="services">

  </div>
  </div>


    
  )
}

export default Hero