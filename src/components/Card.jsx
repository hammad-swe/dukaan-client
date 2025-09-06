import React from 'react'

function Card({ image, title, price }) {
  return (
<div>
    <img
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                    alt="Product 1"
                    className="w-60 h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Stylish Jacket</h3>
                    <p className="text-gray-600 mb-4">$79.99</p>
                    <button className="bg-[#299fff] text-white px-4 py-2 rounded-lg hover:bg-[#1284e1] transition duration-300">
                        Add to Cart
                    </button>
</div>
  )
}

export default Card