import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <h3>Dieuf Dieul Couture</h3>
        </div>
        <div className='footer-social'>
          <a href='#'>
            <FaFacebookF />
          </a>
          <a href='#'>
            <FaTwitter />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
          <a href='#'>
            <FaYoutube />
          </a>
        </div>
        <div className='footer-links'>
          <a href='#'>Home</a>
          <a href='#'>Shop</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>© 2023 Dieuf Dieul Couture. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
