import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
   <div className="text-slate-200 min-h-screen ">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
   </div>
  )
}

export default Layout