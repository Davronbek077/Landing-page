import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
      <h2>Log in</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log in</button>
        <p>Don't have an account? <Link to="/sign">Sign up</Link></p>
      </form>
      </div>
    </div>
  )
}

export default Login
