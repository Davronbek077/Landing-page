import React from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, closeSidebar }) => {
  const handleClick = () => {
    closeSidebar()
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <span className="close-btn" onClick={closeSidebar}>
          <i className='bx bx-x'></i>
        </span>
      </div>
      <ul className="sidebar-links">
        <li><a href="/" onClick={handleClick}>Home</a></li>
        <li><a href="#about" onClick={handleClick}>About Us</a></li>
        <li><a href="#app" onClick={handleClick}>Our App</a></li>
        <li><a href="#contact" onClick={handleClick}>Contacts</a></li>
        <li><a href="/login" onClick={handleClick}>Log in</a></li>
        <li><a href="/sign" onClick={handleClick}>Sign up</a></li>
      </ul>
    </div>
  )
}

export default Sidebar
