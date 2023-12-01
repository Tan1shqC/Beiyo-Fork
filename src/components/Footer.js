import React from 'react'
import logo from '../images/main-yellow.png'
import icon1 from '../images/icons8-facebook-50 (2).png'
import icon2 from '../images/icons8-instagram-50 (2).png'
import icon3 from '../images/icons8-linkedin-50 (2).png'

export default function Footer() {
  return (
    <>
        <div className="footer" id='footer'>
        <div className="footercontent">
        <img className='logofooter' src={logo} alt="" />
      <div className="maincontent">
      <ul className='ourTeam'>
                <li><a href="https://www.linkedin.com/company/beiyo/?viewAsMember=true">About Us</a></li>
                <li><a href="">Our Team</a></li>
                <li><a href="">Partner With Us</a></li>

            </ul>
           
            <ul className='terms'>
                <li><a href="">T&C</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookie Policy</a></li>
            </ul>
      </div>
            <div className="social-media">
               <a href="https://www.linkedin.com/company/beiyo/?viewAsMember=true"> <img src={icon3} alt="" /> </a>
               <a href="https://www.instagram.com/beiyo.official/"> <img src={icon2} alt="" /> </a>
               <a href=""> <img src={icon1} alt="" /> </a>
            </div>
        </div>
        <h3>Copyright © 2023  <br /> All Rights Reserved by Beiyo Pvt Ltd.</h3>
        </div>

    </>
  )
}
