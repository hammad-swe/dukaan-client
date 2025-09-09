import React from 'react'
import Card from '../../components/Card'
import SideBar from '../../components/SideBar'
import { Link } from 'react-router-dom'

function Categories() {
  // images for cards
const ImageUrl = 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl2 = 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl3 = 'https://images.unsplash.com/photo-1740710370552-a49b5b01f80a?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl4 = 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl5 = 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl6 = 'https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ImageUrl7 = 'https://images.unsplash.com/photo-1664285612706-b32633c95820?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {/* Product Card */}
    <Link to= "/product/1">
    <Card image={ImageUrl}  description="Comfortable and stylish t-shirts for everyday wear." />
    </Link>
    <Link to= "/product/2">
    <Card image={ImageUrl2} description="Stylish suits for formal occasions." />
    </Link>
    <Link to= "/product/3">
    <Card image={ImageUrl3} description="Trendy blazers to elevate your outfit." />
    </Link>
    <Link to= "/product/4">
    <Card image={ImageUrl4} description="Warm jackets for chilly weather." />
    </Link>
    <Link to= "/product/5">
    <Card image={ImageUrl5} description="Casual jeans for everyday wear." />
    </Link>
    <Link to= "/product/6">
    <Card image={ImageUrl6} description="Stylish footwear for all occasions." />
    </Link>
    <Link to= "/product/7">
    <Card image={ImageUrl7} description="Fashionable accessories to complete your look." />
    </Link>

        </div>
    </section>

    </main>
   </>
  )
}

export default Categories
