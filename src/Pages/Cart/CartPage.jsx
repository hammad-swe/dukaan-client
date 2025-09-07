import React from 'react'

function CartPage() {
  return (
    <>
        {/* cart page for clothing website */}
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Items</h2>
            {/* Cart items will be displayed here */}
            <p className="text-gray-600">Your cart is currently empty.</p>
            </div>
            <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Total: $0.00</h2>
            <button className="bg-[#299fff] text-white px-4 py-2 rounded-lg hover:bg-[#1284e1] transition duration-300">
                Proceed to Checkout
            </button>
            
        </div>
    </>
  )
}

export default CartPage