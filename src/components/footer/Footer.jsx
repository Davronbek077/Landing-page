import React from 'react'
import footerLogo from "../../assets/footerLogo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-top">
            <div className="footer-img-wrap">
                <img src={footerLogo} alt="" />
                <p>© 2020 Epixelab. All rights reserved.</p>
            </div>

            <ul className='footer-list'>
                <li>Portfolio</li>
                <li>How it Works</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Login</li>
            </ul>
        </div>

        <div className="footer-bottom">
            <p id='bottom-text'>Startup Framework contains components and complex blocks 
                which can easily be integrated into almost any design. </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
