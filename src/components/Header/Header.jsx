import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../src/assets/logo/logo.png' 

function Header() {
  return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center  lg:order-2">
                            <Link
                                to="#"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
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
                            </Link>
                            <Link
                                to="#"
                                className="text-white bg-[#00bf63] hover:bg-[#299fff] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign Up/Login
                            </Link>
                        </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? 'text-[#299fff]':'text-[#333333]'}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1284e1] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                           
                            <li>
                                <NavLink
                                to={"categories"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? 'text-[#299fff]':'text-[#333333]'}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1284e1] lg:p-0`
                                    }
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to={"/shop"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? 'text-[#299fff]':'text-[#00bf63]'}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1284e1] lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to={""}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? 'text-[#299fff]':'text-[#333333]'}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1284e1] lg:p-0`
                                    }
                                >
                                    Flash Sale
                                </NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            {/* mobile menu */}
            <div className="bg-white shadow-md lg:hidden">
                <div className="px-4 py-3 flex justify-between items-center">
                    <div></div>
                    <div className="flex items-center">
                       <ul className="flex space-x-4">

                            <li>
                                <NavLink
                                    to={""}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 
                                        ${isActive ? 'text-[#299fff]':'text-[#333333]'}
                                         border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#1284e1] lg:p-0`
                                    }
                                >
                                    Categories
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* mobile menu end */}
            
        </header>
    );
}

export default Header