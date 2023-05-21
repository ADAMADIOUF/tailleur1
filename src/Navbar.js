import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <nav className='sticky-nav'>
      {' '}
      {/* Add the "sticky-nav" class */}
      <div className='logo'>
        <Link to={`/`}>
          <img src={logo} alt='' />
        </Link>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to='/' onClick={handleClose}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to='/tenue' onClick={handleClose}>
              Tenues
            </Link>
          </li>
          <li>
            <Link to='/women' onClick={handleClose}>
              Femmes
            </Link>
          </li>
          <li>
            <Link to='/men' onClick={handleClose}>
              Hommes
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleClose}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </nav>
  )
}

export default Navbar
