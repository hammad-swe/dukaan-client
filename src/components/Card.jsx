import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
function Card({ image,description}) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if the item is in the cart (this could be from props or context in a real app)
    // For this example, we'll just initialize it to false
    setIsInCart(false);
  }
, []);


  return (
 <div className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition duration-300">
 {/* flash sale icon button */}

                    <img 
                    src={image}
                    alt="Casual Tshirts"
                    className="w-50 h-50 object-cover mb-4 rounded"
                    />
                    <div className='flex justify-between items-center'>
                    <p className="text-gray-600 text-sm">{description}</p>
                     <div className=" text-xs font-bold px-2 py-1 rounded">
                  <Link to= "/shop">   
              <button className="hover:bg-blue-100 p-2 rounded-full">
            
                <span></span>
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
                    </Link>    
 </div>
 </div>
                    </div>
  )
}

export default Card