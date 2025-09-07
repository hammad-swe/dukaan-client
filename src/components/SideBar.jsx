import React from 'react'

function SideBar() {
  return (
<>
{/* clothing(T-shirts, suits, blazer, jackets) website which has a sidebar for categories */}
<div className="w-64 bg-white p-6 rounded-lg shadow-md">
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
    <h2 className="text-2xl font-bold mt-8 mb-6">Filters</h2>
    <div className="space-y-4">
        <div>
            <label className="block text-gray-700 mb-2">Price Range</label>
            <input type="range" min="0" max="500" className="w-full" />
        </div>
        <div>
            <label className="block text-gray-700 mb-2">Size</label>
            <select className="w-full border border-gray-300 rounded p-2">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>X-Large</option>
                <option>XX-Large</option>
                <option>XXX-Large</option>
                <option>XXXX-Large</option>
                </select>
                </div>
        <div>
            <label className="block text-gray-700 mb-2">Color</label>
            <select className="w-full border border-gray-300 rounded p-2">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Black</option>
                <option>White</option>
                <option>Yellow</option>
                <option>Pink</option>
            </select>
        </div>

</div>
</div>
</>
  )
}

export default SideBar