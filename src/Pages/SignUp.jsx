import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png';

function SignUp() {
  return (
   <div className='relative min-h-screen flex flex-row '>
    <div className=" w-full  justify-center items-center h-screen hidden md:flex">
        <img src={logo} alt="login side image" 
        className=" h-50" />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#00bf63] w-full text-white">
        <h1 className="text-3xl font-bold text-white">Wellcome To Dukaan</h1>
        <form className="flex flex-col space-y-4 mt-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded text-white"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p className="text-sm">
            Already have an account? <a href="/login" className="text-blue-500">Login</a>
          </p>
        </div>
      </div>
    
    </div>
  )
}

export default SignUp