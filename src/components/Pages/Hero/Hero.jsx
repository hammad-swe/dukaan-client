import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const images = [
    'https://images.pexels.com/photos/6766385/pexels-photo-6766385.jpeg',
  'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg',
  ,
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
                        <Link>
                    <button 
                    to="/shop"
                    className="bg-[#299fff] text-white px-6 py-3 rounded-lg hover:bg-[#1284e1] transition duration-300">
                        Shop Now
                    </button>
                    </Link>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Hero