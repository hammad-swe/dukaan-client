import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png';

function Footer() {
  return (
    <>
    
        <footer className="bg-white text-gray-800  mt-8 py-2  sticky bottom-0">
        
          <div className=" text-center  bg-white ">
                <p >&copy; {new Date().getFullYear()} 
                <img src={logo} alt="Your Company Logo" className="inline-block h-8 mr-2" />
                . All rights reserved.</p>
            </div>  
        </footer>
        
    </>
  )
}

export default Footer