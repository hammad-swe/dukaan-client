import React from 'react'
import { useState } from 'react'

function Card({ image, title, price }) {

  return (
 <div className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition duration-300">
 {/* flash sale icon button */}

                    <img 
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                    alt="Casual Tshirts"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <div className='flex justify-between items-center'>
                    <p className="text-gray-600 text-sm">Comfortable and stylish t-shirts for everyday wear.</p>
                     <div className=" text-xs font-bold px-2 py-1 rounded">
              <button className="hover:bg-blue-100 p-2 rounded-full">
                    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="7" cy="21" r="1" />
        <circle cx="17" cy="21" r="1" />
      </svg>
                    </button>      
 </div>
 </div>
                    </div>
  )
}

export default Card