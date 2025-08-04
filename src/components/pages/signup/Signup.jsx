import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="auth-wrapper2">
      <div className="auth-container">
      <h2>Sign up</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign up</button>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Signup
