import React from 'react'
import whatsapp from '../images/WhatsApp.svg'
import broom from '../images/broom.png'
import water from '../images/water.png'
import wifi from '../images/wifi.png'
import lanundary from '../images/washing-machine.png'
import emergency from '../images/24-hour-service.png'
import community from '../images/group-users.png'
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
  <section>
        <h2>Features</h2>
        <div className="bigdiv">
            <div className=" events ">
              <div className="featureimg">
                <img src={broom} alt="" />
              </div>
                <h2 className="content ">Cleaning Services</h2>
                <p>We're committed to ensuring cleanliness not just in individual rooms but throughout the entire hostel
                    building.</p>
            </div>
            <div className=" events ">
            <div className="featureimg">
                <img src={water} alt="" />
              </div>
                <h2 className="content ">RO Water</h2>
                <p>Get pure water whenever you need it! We have R.O. water available 24/7,just for you.</p>
            </div>
            <div className=" events">
            <div className="featureimg">
                <img src={wifi} alt="" />
              </div>
                <h2 className="content ">Wifi</h2>
                <p>"Elevate your space effortlessly – our expert cleaning services redefine cleanliness on your terms."</p>
            </div>
            <div className=" events">
            <div className="featureimg">
                <img src={lanundary} alt="" />
              </div>
                <h2 className="content ">Doorstep Laundary</h2>
                <p>"Carefree cleanliness at your doorstep – 24/7 laundry services, just a call away!"</p>
            </div>
            <div className=" events">
            <div className="featureimg">
                <img src={emergency} alt="" />
              </div>
                <h2 className="content ">Emergency Services</h2>
                <p>"Your safety first: 24/7 emergency response at your service."</p>
            </div>
            <div className=" events">
            <div className="featureimg">
                <img src={community} alt="" />
              </div>
                <h2 className="content ">Community</h2>
                <p>"Unleash community spirit with our vibrant events – connecting hearts, one event at a time."</p>
            </div>
        </div>
    </section>
   <div className="communemain">
   <div className="commune">

</div>
   </div>
  </div>


    
  )
}

export default Hero