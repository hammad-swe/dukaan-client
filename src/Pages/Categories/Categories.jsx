import React from 'react'
import Card from '../../components/Card'
import SideBar from '../../components/SideBar'

function Categories() {
  return (
    <>
    <main className="flex">
    {/* sidebar */}
   <aside className="w-64 bg-gray-200  sticky top-0 h-full scroll-fixed ">
    <SideBar/>

    </aside>
    {/* main content */}
    <section className="flex-1 p-2 w-full bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* dropdown */}
    <div className="mb-4">
    <select id="category" className="w-full p-2 border border-gray-300 rounded">
    <option value="">Collection</option>
    <option value="">Latest</option>
    <option value="">Winter</option>
    <option value="">Summer</option>
    <option value=""></option>
    </select>
    </div>
    <div className="mb-4">
    <select id="category" className="w-full p-2 border border-gray-300 rounded">
    <option value="">Size</option>
    <option value="">Size-XL</option>
    <option value="">Size-L</option>
    <option value="">Size-M</option>
    <option value="">Size-S</option>
    </select>
    </div>
    <div className="mb-4">
    <select id="category" className="w-full p-2 border border-gray-300 rounded">
    <option value="">Stock</option>
    <option value="">In Stock</option>
    <option value="">Out of Stock</option>
    <option value="">Preorder</option>
    <option value="">Backorder</option>
    </select>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Product Card */}
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

        </div>
    </section>

    </main>
   </>
  )
}

export default Categories
