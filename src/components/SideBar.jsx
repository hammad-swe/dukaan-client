import React from 'react'

function SideBar() {
  return (
<>
{/* clothing(T-shirts, suits, blazer, jackets) website which has a sidebar for categories */}
<div className="w-64 h-screen bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-6">Categories</h2>
    <ul className="space-y-4">
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">T-Shirts</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Suits</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Blazers</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Jackets</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Jeans</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Accessories</li>
        <li className="text-gray-700 hover:text-blue-500 cursor-pointer">Footwear</li>
        </ul>
    
</div>
</>
  )
}

export default SideBar