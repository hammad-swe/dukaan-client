import React from 'react'
import logo from '../../../src/assets/logo/logo.png';

function Footer() {
  return (
    <>
   
    <div className=' text-center  sticky bottom-0 bg-white border-t border-gray-200 shadow-inner'>
      <p className='flex items-center justify-center'>&copy; {new Date().getFullYear()} 
      <img 
      src={logo}  
      className="mr-3 h-10"
      alt="Logo" />
      . All rights reserved.</p>
    </div>
    </>
  )
}

export default Footer