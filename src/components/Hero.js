import React, { useState } from 'react';
import axios from 'axios';
import broom from '../images/broom.png'
import water from '../images/water.png'
import wifi from '../images/wifi.png'
import lanundary from '../images/washing-machine.png'
import emergency from '../images/24-hour-service.png'
import community from '../images/group-users.png'
import plus from '../images/plus-solid.svg'
import minus from '../images/minus-solid.svg'



function Hero() {
  // use effect

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occupancy: '',
    agreeToTerms: false, 
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    occupancy: '',
    agreeToTerms: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? !prevFormData[name] : value,
    }));
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
 
    
    if (!formData.agreeToTerms) {
      alert('You must agree to the terms and conditions');
    }
    try {
      await axios.post('http://localhost:5000/submit-form', formData);
      console.log('Form submitted successfully');
      // Optionally, you can reset the form here
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };



  return (
    <div id='hero'>
      <div className="main" id='main'>
        <div className="hero-main">
          <h1>Offering Your Perfect</h1>
          <h1>Accommodation Services</h1>
          <p>Discover top-quality hostels and properties for your next adventure. </p>
        </div>

        <a href="/hostel"> <button className='explore'>Explore</button> </a>
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

      <div className="form" id='form'>

          <div className="formtextsection">
            <h1>Join Our Waitlist</h1>
            <form onSubmit={handleSubmit}>
              <div className="formdiv">
                <h3>Name:<span>*</span></h3>
                <input className='name' type="text" name="name" onChange={handleChange} required />
              </div>
              <div className="formdiv">
                <h3>Email:<span>*</span></h3>
                <input type="email" name="email" onChange={handleChange} required />
              </div>
              <div className="formdiv">
                <h3>Phone:<span>*</span></h3>
                <input type="number" name="phone" onChange={handleChange} required />
              </div>
              <div className="formdiv">
                <h3>Message:</h3>
                <textarea name="message" id="" cols="30" rows="5" onChange={handleChange}></textarea>
              </div>
              <div className="formdiv">
                <h3>Occupancy:<span>*</span></h3>
                <select name="occupancy" onChange={handleChange} value={formData.occupancy} required>
                  <option value="">Select Occupancy</option>
                  <option value="double">Double</option>
                  <option value="Triple">Triple</option>
                </select>
              </div>
             <div className="formdivChecked">
             <input className='checked' type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange}   />
             <p>I agree to terms & conditions</p>
             </div>
              <button type="submit">Submit</button>
            </form>
          </div>
      </div>
      <h2 className='faqheading'>FAQS</h2>
      <div className="faq">

        <div className="faqmain">
          <hr />
          <div className="questions question1">
            <div className="questiondiv">
              <p>What is Beiyo?</p>
              <button onClick={answer1} className='plus plus1'><img src={plus} alt="" className="plusimg" /></button>
              <button onClick={question1} className="minus minus1"><img src={minus} alt="" className="minusimg" /></button>
            </div>
            <div className="answerdiv">
            Beiyo is a startup specializing in hostel accommodation. We partner with PG and hostel owners to renovate rooms and enhance facilities, offering a modern and comfortable living experience.
            </div>
          </div>
          <hr />
          <div className="questions question2">
            <div className="questiondiv">
              <p>How does Beiyo work with PG and hostel owners?</p>
              <button onClick={answer2} className='plus plus2'><img src={plus} alt="" className="plusimg" /></button>
              <button onClick={question2} className="minus minus2"><img src={minus} alt="" className="minusimg" /></button>
            </div>
            <div className="answerdiv">
            We collaborate closely with PG and hostel owners, renovating and upgrading living spaces to improve overall quality. This strategic partnership ensures a positive and modern living experience for residents.
            </div>
          </div>
          <hr />
          <div className="questions question3">
            <div className="questiondiv">
              <p>What makes Beiyo different?</p>
              <button onClick={answer3} className='plus plus3'><img src={plus} alt="" className="plusimg" /></button>
              <button onClick={question3} className="minus minus3"><img src={minus} alt="" className="minusimg" /></button>
            </div>
            <div className="answerdiv">
            Our resident-centric approach, commitment to innovation, and strategic collaborations set us apart. We prioritize the well-being of residents, ensuring accommodations meet expectations and provide a contemporary living experience.
            </div>
          </div>
          <hr />
          <div className="questions question4">
            <div className="questiondiv">
              <p> How does Beiyo contribute to a positive community atmosphere?</p>
              <button onClick={answer4} className='plus plus4'><img src={plus} alt="" className="plusimg" /></button>
              <button onClick={question4} className="minus minus4"><img src={minus} alt="" className="minusimg" /></button>
            </div>
            <div className="answerdiv">
            By fostering a resident-centric environment and enhancing facilities, Beiyo creates a positive and supportive community atmosphere within hostels, contributing to a comfortable and enjoyable living experience.
            </div>
          </div>
          <hr />
          <div className="questions question5">
            <div className="questiondiv">
              <p> How can I get Beiyo's services for my hostel or PG?</p>
              <button onClick={answer5} className='plus plus5'><img src={plus} alt="" className="plusimg" /></button>
              <button onClick={question5} className="minus minus5"><img src={minus} alt="" className="minusimg" /></button>
            </div>
            <div className="answerdiv">
            Contact us through our website to discuss collaboration opportunities. We'll be happy to explore how Beiyo can enhance your accommodation offerings.
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  )
}
function question1() {
  document.querySelector(".question1").style.height = "8vh";
  document.querySelector(".minus1").style.display = "none";
  document.querySelector(".plus1").style.display = "block";
}
function answer1() {
  document.querySelector(".question1").style.height = "100%";
  document.querySelector(".plus1").style.display = "none";
  document.querySelector(".minus1").style.display = "block";
  question2();
  question3();
  question4();
  question5();
}
function question2() {
  document.querySelector(".question2").style.height = "8vh";
  document.querySelector(".minus2").style.display = "none";
  document.querySelector(".plus2").style.display = "block";
}
function answer2() {
  document.querySelector(".question2").style.height = "100%";
  document.querySelector(".plus2").style.display = "none";
  document.querySelector(".minus2").style.display = "block";
  question1();
  question3();
  question4();
  question5();
}
function question3() {
  document.querySelector(".question3").style.height = "8vh";
  document.querySelector(".minus3").style.display = "none";
  document.querySelector(".plus3").style.display = "block";
}
function answer3() {
  document.querySelector(".question3").style.height = "100%";
  document.querySelector(".plus3").style.display = "none";
  document.querySelector(".minus3").style.display = "block";
  question2();
  question1();
  question4();
  question5();
}
function question4() {
  document.querySelector(".question4").style.height = "8vh";
  document.querySelector(".minus4").style.display = "none";
  document.querySelector(".plus4").style.display = "block";
}
function answer4() {
  document.querySelector(".question4").style.height = "100%";
  document.querySelector(".plus4").style.display = "none";
  document.querySelector(".minus4").style.display = "block";
  question2();
  question3();
  question1();
  question5();
}
function question5() {
  document.querySelector(".question5").style.height = "8vh";
  document.querySelector(".minus5").style.display = "none";
  document.querySelector(".plus5").style.display = "block";

}
function answer5() {
  document.querySelector(".question5").style.height = "100%";
  document.querySelector(".plus5").style.display = "none";
  document.querySelector(".minus5").style.display = "block";
  question2();
  question3();
  question4();
  question1();
}


export default Hero