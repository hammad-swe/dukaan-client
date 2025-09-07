import React from 'react'

function Card({ image, title, price }) {
  return (
 <div className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-lg transition duration-300">
                    <img 
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                    alt="Casual Tshirts"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Casual Tshirts</h3>
                    <p className="text-gray-600">Comfortable and stylish t-shirts for everyday wear.</p>
                    </div>
  )
}

export default Card