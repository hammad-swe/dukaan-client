import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const images = [
    'https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg',
  'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
  'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
   // Remove or comment out if you want only 3 images
];


function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);
  return (
    <>
    <section className="overflow-y-scroll scroll-snap-y-mandatory h-70vh">
        <div className="relative w-full h-screen flex items-center overflow-hidden">
<div
        className={`flex h-full transition-transform duration-700 ease-in-out opacity-80`}
        style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${currentIndex * (100 / totalSlides)}%)` }}
      >
        {images.map((src, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 
        ">
                <div className="w-full  text-center ">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#f5f5f5]">
                        Welcome to Our Store
                    </h1>
                    <p className="text-lg mb-6 text-[#f5f5f5] max-w-xl mx-auto">
                        Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!
                        </p>
                        <Link to="/categories">
                    <button 
                    className="bg-[#299fff] text-white px-6 py-3 rounded-lg hover:bg-[#1284e1] transition duration-300">
                        Shop Now
                    </button>
                    </Link>
                    </div>
                </div>
        </div>
        </section>
        {/* categories section */}
        <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Example Category Card */}
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                    <img 
                    src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
                    alt="Casual Tshirts"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Casual Tshirts</h3>
                    <p className="text-gray-600">Comfortable and stylish t-shirts for everyday wear.</p>
                    </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                    <img 
                    src="https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg"
                    alt="Fashion"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Suits</h3>
                    <p className="text-gray-600">Elegant and tailored suits for formal occasions.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                    <img 
                    src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
                    alt="Fashion"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Jackets</h3>
                    <p className="text-gray-600">Stylish jackets for all occasions.</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
                    <img 
                    src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
                    alt="Fashion"
                    className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">Blazers</h3>
                    <p className="text-gray-600">Elegant and tailored blazers for formal occasions.</p>
                </div>
                
                
            </div>
            <div className="mt-12 justify-center flex">
                <Link to="/categories">
                    <button className="bg-[#299fff] text-white px-6 py-3 rounded-lg hover:bg-[#1284e1] transition duration-300">
                        View All Categories
                    </button>
                </Link>
            </div>
        </div>

    </section>

    {/* sale section */}
    <section className="py-12 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Limited Time Sale!</h2>
            <p className="text-lg text-gray-700 mb-8">Hurry up! Grab your favorite products at unbeatable prices. Offer valid while stocks last.</p>
            <Link to="/shop">
                <button className="bg-[#00bf63] text-white px-6 py-3 rounded-lg hover:bg-[#1284e1] transition duration-300">
                    Shop Now
                    </button>
            </Link>
            </div>
    </section>

    </>
  )
}

export default Hero