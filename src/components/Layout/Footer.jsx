import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.png';

function Footer() {
  return (
    <>
        <footer className="bg-white text-gray-800  mt-8 py-2 sticky bottom-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-3">
            <div className='flex items-center'>
            {/* navbar */}
                <ul className="flex space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
                </ul>
            </div>
            <div className='flex space-x-4 mt-4 md:mt-0'>
            {/* social icon */}
                {/* svg icon */}
                {/* <!-- Facebook --> */}
<svg role="img" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" 
className='w-8 h-8 rounded-2xl'
>
  <title>Facebook</title>
  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z"/>
</svg>

{/* <!-- Instagram --> */}
<svg role="img" viewBox="0 0 24 24" fill="none" stroke="#E4405F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 rounded-2xl'>
  <title>Instagram</title>
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <path d="M16 11.37a4 4 0 1 1-7.999.001 4 4 0 0 1 7.999-.001z"/>
  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
</svg>

{/* <!-- Twitter --> */}
<svg role="img" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 rounded-2xl'>
  <title>Twitter</title>
  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.928 2.206-4.928 4.928 0 .39.045.765.127 1.124-4.094-.205-7.725-2.165-10.158-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.808 2.105-6.115 2.105-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633.962-.695 1.8-1.562 2.46-2.549z"/>
</svg>

{/* <!-- TikTok --> */}
<svg role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 rounded-2xl'>
  <title>TikTok</title>
  <path d="M9.75 3v12.75a3.75 3.75 0 1 0 3.75-3.75V7.5h3a6 6 0 1 1-6-6z" fill="#69C9D0"/>
  <path d="M13.5 21a6 6 0 0 1-6-6v-3h3a3 3 0 1 0 3 3V21z" fill="#EE1D52"/>
</svg>

{/* <!-- YouTube --> */}
<svg role="img" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 rounded-2xl'>
  <title>YouTube</title>
  <path d="M23.498 6.186a2.997 2.997 0 0 0-2.11-2.12C19.67 3.5 12 3.5 12 3.5s-7.67 0-9.388.566a2.997 2.997 0 0 0-2.11 2.12A31.24 31.24 0 0 0 0 12a31.24 31.24 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.11 2.12C4.33 20.5 12 20.5 12 20.5s7.67 0 9.388-.566a2.997 2.997 0 0 0 2.11-2.12A31.24 31.24 0 0 0 24 12a31.24 31.24 0 0 0-.502-5.814zM9.75 15.02V8.98l5.5 3.02-5.5 3.02z"/>
</svg>

            </div>
        </div>
          <div className="container mx-auto text-center  bg-white ">
                <p >&copy; {new Date().getFullYear()} 
                <img src={logo} alt="Your Company Logo" className="inline-block h-8 mr-2" />
                . All rights reserved.</p>
            </div>  
        </footer>
        
    </>
  )
}

export default Footer