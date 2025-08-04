import React, { useState } from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className='navbar'>
        <div className="container">
          <div className="menu-icon" onClick={toggleSidebar}>
          <i className='bxr  bx-menu'></i> 
          </div>

          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>

          <nav className='navbar-list'>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#app">Our App</a></li>
              <li><a href="#contact">Contacts</a></li>
            </ul>
          </nav>

          <div className="register">
            <li><Link to={"/login"}>Log in</Link></li>
            <li><Link id='sign' to={"/sign"}>Sign up</Link></li>
          </div>
        </div>
      </div>

      <Sidebar isOpen={isOpen} closeSidebar={() => setIsOpen(false)} />
    </>
  )
}

export default Navbar
