import { useState } from 'react'
import {Routes} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Hero from './Pages/Hero/Hero.jsx'
import Header from './components/Layout/Header.jsx'
import Footer from './components/Layout/Footer.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
