import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Footer from './components/footer/footer'
import Login from './components/pages/login/Login'
import Signup from './components/pages/signup/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()

  const hideFooter = location.pathname === "/login" || location.pathname === "/sign"

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  )
}

export default App
