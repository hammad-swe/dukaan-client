import { useState } from 'react'
import {Routes} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import Hero from './components/Pages/Hero/Hero.jsx'
import Header from './components/Header/Header.jsx'

import './App.css'

function App() {
  

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
